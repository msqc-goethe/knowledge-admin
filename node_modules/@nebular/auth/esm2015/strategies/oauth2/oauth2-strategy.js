/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthIllegalTokenError } from '../../services/token/token';
import { NbAuthResult } from '../../services/auth-result';
import { NbOAuth2ResponseType, auth2StrategyOptions, NbOAuth2GrantType, NbOAuth2ClientAuthMethod, } from './oauth2-strategy.options';
/**
 * OAuth2 authentication strategy.
 *
 * Strategy settings:
 *
 * ```ts
 * export enum NbOAuth2ResponseType {
 *   CODE = 'code',
 *   TOKEN = 'token',
 * }
 *
 * export enum NbOAuth2GrantType {
 *   AUTHORIZATION_CODE = 'authorization_code',
 *   PASSWORD = 'password',
 *   REFRESH_TOKEN = 'refresh_token',
 * }
 *
 * export class NbOAuth2AuthStrategyOptions {
 *   name: string;
 *   baseEndpoint?: string = '';
 *   clientId: string = '';
 *   clientSecret: string = '';
 *   clientAuthMethod: string = NbOAuth2ClientAuthMethod.NONE;
 *   redirect?: { success?: string; failure?: string } = {
 *     success: '/',
 *     failure: null,
 *   };
 *   defaultErrors?: any[] = ['Something went wrong, please try again.'];
 *   defaultMessages?: any[] = ['You have been successfully authenticated.'];
 *   authorize?: {
 *     endpoint?: string;
 *     redirectUri?: string;
 *     responseType?: string;
 *     requireValidToken: true,
 *     scope?: string;
 *     state?: string;
 *     params?: { [key: string]: string };
 *   } = {
 *     endpoint: 'authorize',
 *     responseType: NbOAuth2ResponseType.CODE,
 *   };
 *   token?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     requireValidToken: true,
 *     redirectUri?: string;
 *     scope?: string;
 *     class: NbAuthTokenClass,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
 *     class: NbAuthOAuth2Token,
 *   };
 *   refresh?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     scope?: string;
 *     requireValidToken: true,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.REFRESH_TOKEN,
 *   };
 * }
 * ```
 *
 */
export class NbOAuth2AuthStrategy extends NbAuthStrategy {
    constructor(http, route, window) {
        super();
        this.http = http;
        this.route = route;
        this.window = window;
        this.redirectResultHandlers = {
            [NbOAuth2ResponseType.CODE]: () => {
                return observableOf(this.route.snapshot.queryParams).pipe(switchMap((params) => {
                    if (params.code) {
                        return this.requestToken(params.code);
                    }
                    return observableOf(new NbAuthResult(false, params, this.getOption('redirect.failure'), this.getOption('defaultErrors'), []));
                }));
            },
            [NbOAuth2ResponseType.TOKEN]: () => {
                const module = 'authorize';
                const requireValidToken = this.getOption(`${module}.requireValidToken`);
                return observableOf(this.route.snapshot.fragment).pipe(map(fragment => this.parseHashAsQueryParams(fragment)), map((params) => {
                    if (!params.error) {
                        return new NbAuthResult(true, params, this.getOption('redirect.success'), [], this.getOption('defaultMessages'), this.createToken(params, requireValidToken));
                    }
                    return new NbAuthResult(false, params, this.getOption('redirect.failure'), this.getOption('defaultErrors'), []);
                }), catchError(err => {
                    const errors = [];
                    if (err instanceof NbAuthIllegalTokenError) {
                        errors.push(err.message);
                    }
                    else {
                        errors.push('Something went wrong.');
                    }
                    return observableOf(new NbAuthResult(false, err, this.getOption('redirect.failure'), errors));
                }));
            },
        };
        this.redirectResults = {
            [NbOAuth2ResponseType.CODE]: () => {
                return observableOf(this.route.snapshot.queryParams).pipe(map((params) => !!(params && (params.code || params.error))));
            },
            [NbOAuth2ResponseType.TOKEN]: () => {
                return observableOf(this.route.snapshot.fragment).pipe(map(fragment => this.parseHashAsQueryParams(fragment)), map((params) => !!(params && (params.access_token || params.error))));
            },
        };
        this.defaultOptions = auth2StrategyOptions;
    }
    static setup(options) {
        return [NbOAuth2AuthStrategy, options];
    }
    get responseType() {
        return this.getOption('authorize.responseType');
    }
    get clientAuthMethod() {
        return this.getOption('clientAuthMethod');
    }
    authenticate(data) {
        if (this.getOption('token.grantType') === NbOAuth2GrantType.PASSWORD) {
            return this.passwordToken(data.email, data.password);
        }
        else {
            return this.isRedirectResult()
                .pipe(switchMap((result) => {
                if (!result) {
                    this.authorizeRedirect();
                    return observableOf(new NbAuthResult(true));
                }
                return this.getAuthorizationResult();
            }));
        }
    }
    getAuthorizationResult() {
        const redirectResultHandler = this.redirectResultHandlers[this.responseType];
        if (redirectResultHandler) {
            return redirectResultHandler.call(this);
        }
        throw new Error(`'${this.responseType}' responseType is not supported,
                      only 'token' and 'code' are supported now`);
    }
    refreshToken(token) {
        const module = 'refresh';
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        let headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildRefreshRequestData(token), { headers: headers })
            .pipe(map((res) => {
            return new NbAuthResult(true, res, this.getOption('redirect.success'), [], this.getOption('defaultMessages'), this.createRefreshedToken(res, token, requireValidToken));
        }), catchError((res) => this.handleResponseError(res)));
    }
    passwordToken(username, password) {
        const module = 'token';
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        let headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildPasswordRequestData(username, password), { headers: headers })
            .pipe(map((res) => {
            return new NbAuthResult(true, res, this.getOption('redirect.success'), [], this.getOption('defaultMessages'), this.createToken(res, requireValidToken));
        }), catchError((res) => this.handleResponseError(res)));
    }
    authorizeRedirect() {
        this.window.location.href = this.buildRedirectUrl();
    }
    isRedirectResult() {
        return this.redirectResults[this.responseType].call(this);
    }
    requestToken(code) {
        const module = 'token';
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        let headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildCodeRequestData(code), { headers: headers })
            .pipe(map((res) => {
            return new NbAuthResult(true, res, this.getOption('redirect.success'), [], this.getOption('defaultMessages'), this.createToken(res, requireValidToken));
        }), catchError((res) => this.handleResponseError(res)));
    }
    buildCodeRequestData(code) {
        const params = {
            grant_type: this.getOption('token.grantType'),
            code: code,
            redirect_uri: this.getOption('token.redirectUri'),
            client_id: this.getOption('clientId'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    }
    buildRefreshRequestData(token) {
        const params = {
            grant_type: this.getOption('refresh.grantType'),
            refresh_token: token.getRefreshToken(),
            scope: this.getOption('refresh.scope'),
            client_id: this.getOption('clientId'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    }
    buildPasswordRequestData(username, password) {
        const params = {
            grant_type: this.getOption('token.grantType'),
            username: username,
            password: password,
            scope: this.getOption('token.scope'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    }
    buildAuthHeader() {
        if (this.clientAuthMethod === NbOAuth2ClientAuthMethod.BASIC) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return new HttpHeaders({
                    'Authorization': 'Basic ' + btoa(this.getOption('clientId') + ':' + this.getOption('clientSecret')),
                });
            }
            else {
                throw Error('For basic client authentication method, please provide both clientId & clientSecret.');
            }
        }
    }
    cleanParams(params) {
        Object.entries(params)
            .forEach(([key, val]) => !val && delete params[key]);
        return params;
    }
    addCredentialsToParams(params) {
        if (this.clientAuthMethod === NbOAuth2ClientAuthMethod.REQUEST_BODY) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return Object.assign(Object.assign({}, params), { client_id: this.getOption('clientId'), client_secret: this.getOption('clientSecret') });
            }
            else {
                throw Error('For request body client authentication method, please provide both clientId & clientSecret.');
            }
        }
        return params;
    }
    handleResponseError(res) {
        let errors = [];
        if (res instanceof HttpErrorResponse) {
            if (res.error.error_description) {
                errors.push(res.error.error_description);
            }
            else {
                errors = this.getOption('defaultErrors');
            }
        }
        else if (res instanceof NbAuthIllegalTokenError) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        ;
        return observableOf(new NbAuthResult(false, res, this.getOption('redirect.failure'), errors, []));
    }
    buildRedirectUrl() {
        const params = Object.assign({ response_type: this.getOption('authorize.responseType'), client_id: this.getOption('clientId'), redirect_uri: this.getOption('authorize.redirectUri'), scope: this.getOption('authorize.scope'), state: this.getOption('authorize.state') }, this.getOption('authorize.params'));
        const endpoint = this.getActionEndpoint('authorize');
        const query = this.urlEncodeParameters(this.cleanParams(params));
        return `${endpoint}?${query}`;
    }
    parseHashAsQueryParams(hash) {
        return hash ? hash.split('&').reduce((acc, part) => {
            const item = part.split('=');
            acc[item[0]] = decodeURIComponent(item[1]);
            return acc;
        }, {}) : {};
    }
    urlEncodeParameters(params) {
        return Object.keys(params).map((k) => {
            return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
        }).join('&');
    }
    createRefreshedToken(res, existingToken, requireValidToken) {
        const refreshedToken = this.createToken(res, requireValidToken);
        if (!refreshedToken.getRefreshToken() && existingToken.getRefreshToken()) {
            refreshedToken.setRefreshToken(existingToken.getRefreshToken());
        }
        return refreshedToken;
    }
    register(data) {
        throw new Error('`register` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    }
    requestPassword(data) {
        throw new Error('`requestPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    }
    resetPassword(data = {}) {
        throw new Error('`resetPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    }
    logout() {
        return observableOf(new NbAuthResult(true));
    }
}
NbOAuth2AuthStrategy.decorators = [
    { type: Injectable }
];
NbOAuth2AuthStrategy.ctorParameters = () => [
    { type: HttpClient },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] }
];
//# sourceMappingURL=oauth2-strategy.js.map