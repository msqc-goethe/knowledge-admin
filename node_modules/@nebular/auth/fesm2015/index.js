import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injectable, InjectionToken, Injector, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NB_WINDOW, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { catchError, delay, filter, map, share, switchMap, takeUntil } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

const socialLinks = [];
const defaultAuthOptions = {
    strategies: [],
    forms: {
        login: {
            redirectDelay: 500,
            strategy: 'email',
            rememberMe: true,
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks, // social links at the bottom of a page
        },
        register: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },
        requestPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        resetPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        logout: {
            redirectDelay: 500,
            strategy: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
    },
};
const NB_AUTH_OPTIONS = new InjectionToken('Nebular Auth Options');
const NB_AUTH_USER_OPTIONS = new InjectionToken('Nebular User Auth Options');
const NB_AUTH_STRATEGIES = new InjectionToken('Nebular Auth Strategies');
const NB_AUTH_TOKENS = new InjectionToken('Nebular Auth Tokens');
const NB_AUTH_INTERCEPTOR_HEADER = new InjectionToken('Nebular Simple Interceptor Header');
const NB_AUTH_TOKEN_INTERCEPTOR_FILTER = new InjectionToken('Nebular Interceptor Filter');

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
                // custom cloning and overwrite for specific objects
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
function isSpecificValue(val) {
    return (val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('cloneSpecificValue: Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    const clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object || {});
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
        else {
            level = undefined;
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function urlBase64Decode(str) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}
function b64decode(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
    str = String(str).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
    }
    for (
    // initialize result and counters
    let bc = 0, bs, buffer, idx = 0; 
    // get next character
    buffer = str.charAt(idx++); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

class NbAuthToken {
    constructor() {
        this.payload = null;
    }
    getName() {
        return this.constructor.NAME;
    }
    getPayload() {
        return this.payload;
    }
}
class NbAuthTokenNotFoundError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class NbAuthIllegalTokenError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class NbAuthEmptyTokenError extends NbAuthIllegalTokenError {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class NbAuthIllegalJWTTokenError extends NbAuthIllegalTokenError {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
function nbAuthCreateToken(tokenClass, token, ownerStrategyName, createdAt) {
    return new tokenClass(token, ownerStrategyName, createdAt);
}
function decodeJwtPayload(payload) {
    if (payload.length === 0) {
        throw new NbAuthEmptyTokenError('Cannot extract from an empty payload.');
    }
    const parts = payload.split('.');
    if (parts.length !== 3) {
        throw new NbAuthIllegalJWTTokenError(`The payload ${payload} is not valid JWT payload and must consist of three parts.`);
    }
    let decoded;
    try {
        decoded = urlBase64Decode(parts[1]);
    }
    catch (e) {
        throw new NbAuthIllegalJWTTokenError(`The payload ${payload} is not valid JWT payload and cannot be parsed.`);
    }
    if (!decoded) {
        throw new NbAuthIllegalJWTTokenError(`The payload ${payload} is not valid JWT payload and cannot be decoded.`);
    }
    return JSON.parse(decoded);
}
/**
 * Wrapper for simple (text) token
 */
class NbAuthSimpleToken extends NbAuthToken {
    constructor(token, ownerStrategyName, createdAt) {
        super();
        this.token = token;
        this.ownerStrategyName = ownerStrategyName;
        this.createdAt = createdAt;
        try {
            this.parsePayload();
        }
        catch (err) {
            if (!(err instanceof NbAuthTokenNotFoundError)) {
                // token is present but has got a problem, including illegal
                throw err;
            }
        }
        this.createdAt = this.prepareCreatedAt(createdAt);
    }
    parsePayload() {
        this.payload = null;
    }
    prepareCreatedAt(date) {
        return date ? date : new Date();
    }
    /**
     * Returns the token's creation date
     * @returns {Date}
     */
    getCreatedAt() {
        return this.createdAt;
    }
    /**
     * Returns the token value
     * @returns string
     */
    getValue() {
        return this.token;
    }
    getOwnerStrategyName() {
        return this.ownerStrategyName;
    }
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    isValid() {
        return !!this.getValue();
    }
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    toString() {
        return !!this.token ? this.token : '';
    }
}
NbAuthSimpleToken.NAME = 'nb:auth:simple:token';
/**
 * Wrapper for JWT token with additional methods.
 */
class NbAuthJWTToken extends NbAuthSimpleToken {
    /**
     * for JWT token, the iat (issued at) field of the token payload contains the creation Date
     */
    prepareCreatedAt(date) {
        const decoded = this.getPayload();
        return decoded && decoded.iat ? new Date(Number(decoded.iat) * 1000) : super.prepareCreatedAt(date);
    }
    /**
     * Returns payload object
     * @returns any
     */
    parsePayload() {
        if (!this.token) {
            throw new NbAuthTokenNotFoundError('Token not found. ');
        }
        this.payload = decodeJwtPayload(this.token);
    }
    /**
     * Returns expiration date
     * @returns Date
     */
    getTokenExpDate() {
        const decoded = this.getPayload();
        if (decoded && !decoded.hasOwnProperty('exp')) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp); // 'cause jwt token are set in seconds
        return date;
    }
    /**
     * Is data expired
     * @returns {boolean}
     */
    isValid() {
        return super.isValid() && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    }
}
NbAuthJWTToken.NAME = 'nb:auth:jwt:token';
const prepareOAuth2Token = (data) => {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        }
        catch (e) { }
    }
    return data;
};
const ɵ0 = prepareOAuth2Token;
/**
 * Wrapper for OAuth2 token whose access_token is a JWT Token
 */
class NbAuthOAuth2Token extends NbAuthSimpleToken {
    constructor(data = {}, ownerStrategyName, createdAt) {
        // we may get it as string when retrieving from a storage
        super(prepareOAuth2Token(data), ownerStrategyName, createdAt);
    }
    /**
     * Returns the token value
     * @returns string
     */
    getValue() {
        return this.token.access_token;
    }
    /**
     * Returns the refresh token
     * @returns string
     */
    getRefreshToken() {
        return this.token.refresh_token;
    }
    /**
     *  put refreshToken in the token payload
      * @param refreshToken
     */
    setRefreshToken(refreshToken) {
        this.token.refresh_token = refreshToken;
    }
    /**
     * Parses token payload
     * @returns any
     */
    parsePayload() {
        if (!this.token) {
            throw new NbAuthTokenNotFoundError('Token not found.');
        }
        else {
            if (!Object.keys(this.token).length) {
                throw new NbAuthEmptyTokenError('Cannot extract payload from an empty token.');
            }
        }
        this.payload = this.token;
    }
    /**
     * Returns the token type
     * @returns string
     */
    getType() {
        return this.token.token_type;
    }
    /**
     * Is data expired
     * @returns {boolean}
     */
    isValid() {
        return super.isValid() && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    }
    /**
     * Returns expiration date
     * @returns Date
     */
    getTokenExpDate() {
        if (!this.token.hasOwnProperty('expires_in')) {
            return null;
        }
        return new Date(this.createdAt.getTime() + Number(this.token.expires_in) * 1000);
    }
    /**
     * Convert to string
     * @returns {string}
     */
    toString() {
        return JSON.stringify(this.token);
    }
}
NbAuthOAuth2Token.NAME = 'nb:auth:oauth2:token';
/**
 * Wrapper for OAuth2 token embedding JWT tokens
 */
class NbAuthOAuth2JWTToken extends NbAuthOAuth2Token {
    parsePayload() {
        super.parsePayload();
        this.parseAccessTokenPayload();
    }
    parseAccessTokenPayload() {
        const accessToken = this.getValue();
        if (!accessToken) {
            throw new NbAuthTokenNotFoundError('access_token key not found.');
        }
        this.accessTokenPayload = decodeJwtPayload(accessToken);
    }
    /**
     * Returns access token payload
     * @returns any
     */
    getAccessTokenPayload() {
        return this.accessTokenPayload;
    }
    /**
     * for Oauth2 JWT token, the iat (issued at) field of the access_token payload
     */
    prepareCreatedAt(date) {
        const payload = this.accessTokenPayload;
        return payload && payload.iat ? new Date(Number(payload.iat) * 1000) : super.prepareCreatedAt(date);
    }
    /**
     * Is token valid
     * @returns {boolean}
     */
    isValid() {
        return this.accessTokenPayload && super.isValid();
    }
    /**
     * Returns expiration date :
     * - exp if set,
     * - super.getExpDate() otherwise
     * @returns Date
     */
    getTokenExpDate() {
        if (this.accessTokenPayload && this.accessTokenPayload.hasOwnProperty('exp')) {
            const date = new Date(0);
            date.setUTCSeconds(this.accessTokenPayload.exp);
            return date;
        }
        else {
            return super.getTokenExpDate();
        }
    }
}
NbAuthOAuth2JWTToken.NAME = 'nb:auth:oauth2:jwt:token';

const NB_AUTH_FALLBACK_TOKEN = new InjectionToken('Nebular Auth Options');
/**
 * Creates a token parcel which could be stored/restored
 */
class NbAuthTokenParceler {
    constructor(fallbackClass, tokenClasses) {
        this.fallbackClass = fallbackClass;
        this.tokenClasses = tokenClasses;
    }
    wrap(token) {
        return JSON.stringify({
            name: token.getName(),
            ownerStrategyName: token.getOwnerStrategyName(),
            createdAt: token.getCreatedAt().getTime(),
            value: token.toString(),
        });
    }
    unwrap(value) {
        let tokenClass = this.fallbackClass;
        let tokenValue = '';
        let tokenOwnerStrategyName = '';
        let tokenCreatedAt = null;
        const tokenPack = this.parseTokenPack(value);
        if (tokenPack) {
            tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
            tokenValue = tokenPack.value;
            tokenOwnerStrategyName = tokenPack.ownerStrategyName;
            tokenCreatedAt = new Date(Number(tokenPack.createdAt));
        }
        return nbAuthCreateToken(tokenClass, tokenValue, tokenOwnerStrategyName, tokenCreatedAt);
    }
    // TODO: this could be moved to a separate token registry
    getClassByName(name) {
        return this.tokenClasses.find((tokenClass) => tokenClass.NAME === name);
    }
    parseTokenPack(value) {
        try {
            return JSON.parse(value);
        }
        catch (e) { }
        return null;
    }
}
NbAuthTokenParceler.decorators = [
    { type: Injectable }
];
NbAuthTokenParceler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_FALLBACK_TOKEN,] }] },
    { type: Array, decorators: [{ type: Inject, args: [NB_AUTH_TOKENS,] }] }
];

class NbTokenStorage {
}
/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
class NbTokenLocalStorage extends NbTokenStorage {
    constructor(parceler) {
        super();
        this.parceler = parceler;
        this.key = 'auth_app_token';
    }
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    get() {
        const raw = localStorage.getItem(this.key);
        return this.parceler.unwrap(raw);
    }
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    set(token) {
        const raw = this.parceler.wrap(token);
        localStorage.setItem(this.key, raw);
    }
    /**
     * Clears token from localStorage
     */
    clear() {
        localStorage.removeItem(this.key);
    }
}
NbTokenLocalStorage.decorators = [
    { type: Injectable }
];
NbTokenLocalStorage.ctorParameters = () => [
    { type: NbAuthTokenParceler }
];

/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
class NbTokenService {
    constructor(tokenStorage) {
        this.tokenStorage = tokenStorage;
        this.token$ = new BehaviorSubject(null);
        this.publishStoredToken();
    }
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    tokenChange() {
        return this.token$
            .pipe(filter(value => !!value), share());
    }
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    set(token) {
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return of(null);
    }
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    get() {
        const token = this.tokenStorage.get();
        return of(token);
    }
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    clear() {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return of(null);
    }
    publishStoredToken() {
        this.token$.next(this.tokenStorage.get());
    }
}
NbTokenService.decorators = [
    { type: Injectable }
];
NbTokenService.ctorParameters = () => [
    { type: NbTokenStorage }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
class NbAuthService {
    constructor(tokenService, strategies) {
        this.tokenService = tokenService;
        this.strategies = strategies;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    getToken() {
        return this.tokenService.get();
    }
    /**
     * Returns true if auth token is present in the token storage
     * @returns {Observable<boolean>}
     */
    isAuthenticated() {
        return this.getToken()
            .pipe(map((token) => token.isValid()));
    }
    /**
     * Returns true if valid auth token is present in the token storage.
     * If not, calls the strategy refreshToken, and returns isAuthenticated() if success, false otherwise
     * @returns {Observable<boolean>}
     */
    isAuthenticatedOrRefresh() {
        return this.getToken()
            .pipe(switchMap(token => {
            if (token.getValue() && !token.isValid()) {
                return this.refreshToken(token.getOwnerStrategyName(), token)
                    .pipe(switchMap(res => {
                    if (res.isSuccess()) {
                        return this.isAuthenticated();
                    }
                    else {
                        return of(false);
                    }
                }));
            }
            else {
                return of(token.isValid());
            }
        }));
    }
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    onTokenChange() {
        return this.tokenService.tokenChange();
    }
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    onAuthenticationChange() {
        return this.onTokenChange()
            .pipe(map((token) => token.isValid()));
    }
    /**
     * Authenticates with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    authenticate(strategyName, data) {
        return this.getStrategy(strategyName).authenticate(data)
            .pipe(switchMap((result) => {
            return this.processResultToken(result);
        }));
    }
    /**
     * Registers with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    register(strategyName, data) {
        return this.getStrategy(strategyName).register(data)
            .pipe(switchMap((result) => {
            return this.processResultToken(result);
        }));
    }
    /**
     * Sign outs with the selected strategy
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param strategyName
     * @returns {Observable<NbAuthResult>}
     */
    logout(strategyName) {
        return this.getStrategy(strategyName).logout()
            .pipe(switchMap((result) => {
            if (result.isSuccess()) {
                this.tokenService.clear()
                    .pipe(map(() => result));
            }
            return of(result);
        }));
    }
    /**
     * Sends forgot password request to the selected strategy
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    requestPassword(strategyName, data) {
        return this.getStrategy(strategyName).requestPassword(data);
    }
    /**
     * Tries to reset password with the selected strategy
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    resetPassword(strategyName, data) {
        return this.getStrategy(strategyName).resetPassword(data);
    }
    /**
     * Sends a refresh token request
     * Stores received token in the token storage
     *
     * Example:
     * refreshToken('email', {token: token})
     *
     * @param {string} strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    refreshToken(strategyName, data) {
        return this.getStrategy(strategyName).refreshToken(data)
            .pipe(switchMap((result) => {
            return this.processResultToken(result);
        }));
    }
    /**
     * Get registered strategy by name
     *
     * Example:
     * getStrategy('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    getStrategy(strategyName) {
        const found = this.strategies.find((strategy) => strategy.getName() === strategyName);
        if (!found) {
            throw new TypeError(`There is no Auth Strategy registered under '${strategyName}' name`);
        }
        return found;
    }
    processResultToken(result) {
        if (result.isSuccess() && result.getToken()) {
            return this.tokenService.set(result.getToken())
                .pipe(map((token) => {
                return result;
            }));
        }
        return of(result);
    }
}
NbAuthService.decorators = [
    { type: Injectable }
];
NbAuthService.ctorParameters = () => [
    { type: NbTokenService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_STRATEGIES,] }] }
];

class NbAuthStrategy {
    // we should keep this any and validation should be done in `register` method instead
    // otherwise it won't be possible to pass an empty object
    setOptions(options) {
        this.options = deepExtend({}, this.defaultOptions, options);
    }
    getOption(key) {
        return getDeepFromObject(this.options, key, null);
    }
    createToken(value, failWhenInvalidToken) {
        const token = nbAuthCreateToken(this.getOption('token.class'), value, this.getName());
        // At this point, nbAuthCreateToken failed with NbAuthIllegalTokenError which MUST be intercepted by strategies
        // Or token is created. It MAY be created even if backend did not return any token, in this case it is !Valid
        if (failWhenInvalidToken && !token.isValid()) {
            // If we require a valid token (i.e. isValid), then we MUST throw NbAuthIllegalTokenError so that the strategies
            // intercept it
            throw new NbAuthIllegalTokenError('Token is empty or invalid.');
        }
        return token;
    }
    getName() {
        return this.getOption('name');
    }
    createFailResponse(data) {
        return new HttpResponse({ body: {}, status: 401 });
    }
    createSuccessResponse(data) {
        return new HttpResponse({ body: {}, status: 200 });
    }
    getActionEndpoint(action) {
        const actionEndpoint = this.getOption(`${action}.endpoint`);
        const baseEndpoint = this.getOption('baseEndpoint');
        return actionEndpoint ? baseEndpoint + actionEndpoint : '';
    }
}

class NbAuthResult {
    // TODO: better pass object
    constructor(success, response, redirect, errors, messages, token = null) {
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        this.token = token;
    }
    getResponse() {
        return this.response;
    }
    getToken() {
        return this.token;
    }
    getRedirect() {
        return this.redirect;
    }
    getErrors() {
        return this.errors.filter(val => !!val);
    }
    getMessages() {
        return this.messages.filter(val => !!val);
    }
    isSuccess() {
        return this.success;
    }
    isFailure() {
        return !this.success;
    }
}

class NbAuthStrategyOptions {
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.token = {
            class: NbAuthSimpleToken,
        };
        this.delay = 1000;
        this.alwaysFail = false;
    }
}
const dummyStrategyOptions = new NbDummyAuthStrategyOptions();

/**
 * Dummy auth strategy. Could be useful for auth setup when backend is not available yet.
 *
 *
 * Strategy settings.
 *
 * ```ts
 * export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
 *   name = 'dummy';
 *   token = {
 *     class: NbAuthSimpleToken,
 *   };
 *   delay? = 1000;
 *   alwaysFail? = false;
 * }
 * ```
 */
class NbDummyAuthStrategy extends NbAuthStrategy {
    constructor() {
        super(...arguments);
        this.defaultOptions = dummyStrategyOptions;
    }
    static setup(options) {
        return [NbDummyAuthStrategy, options];
    }
    authenticate(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    register(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    requestPassword(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    resetPassword(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    logout(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    refreshToken(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    createDummyResult(data) {
        if (this.getOption('alwaysFail')) {
            return new NbAuthResult(false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        try {
            const token = this.createToken('test token', true);
            return new NbAuthResult(true, this.createSuccessResponse(data), '/', [], ['Successfully logged in.'], token);
        }
        catch (err) {
            return new NbAuthResult(false, this.createFailResponse(data), null, [err.message]);
        }
    }
}
NbDummyAuthStrategy.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbOAuth2ResponseType;
(function (NbOAuth2ResponseType) {
    NbOAuth2ResponseType["CODE"] = "code";
    NbOAuth2ResponseType["TOKEN"] = "token";
})(NbOAuth2ResponseType || (NbOAuth2ResponseType = {}));
// TODO: client_credentials
var NbOAuth2GrantType;
(function (NbOAuth2GrantType) {
    NbOAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    NbOAuth2GrantType["PASSWORD"] = "password";
    NbOAuth2GrantType["REFRESH_TOKEN"] = "refresh_token";
})(NbOAuth2GrantType || (NbOAuth2GrantType = {}));
var NbOAuth2ClientAuthMethod;
(function (NbOAuth2ClientAuthMethod) {
    NbOAuth2ClientAuthMethod["NONE"] = "none";
    NbOAuth2ClientAuthMethod["BASIC"] = "basic";
    NbOAuth2ClientAuthMethod["REQUEST_BODY"] = "request-body";
})(NbOAuth2ClientAuthMethod || (NbOAuth2ClientAuthMethod = {}));
class NbOAuth2AuthStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.baseEndpoint = '';
        this.clientId = '';
        this.clientSecret = '';
        this.clientAuthMethod = NbOAuth2ClientAuthMethod.NONE;
        this.redirect = {
            success: '/',
            failure: null,
        };
        this.defaultErrors = ['Something went wrong, please try again.'];
        this.defaultMessages = ['You have been successfully authenticated.'];
        this.authorize = {
            endpoint: 'authorize',
            responseType: NbOAuth2ResponseType.CODE,
            requireValidToken: true,
        };
        this.token = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
            requireValidToken: true,
            class: NbAuthOAuth2Token,
        };
        this.refresh = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.REFRESH_TOKEN,
            requireValidToken: true,
        };
    }
}
const auth2StrategyOptions = new NbOAuth2AuthStrategyOptions();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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
class NbOAuth2AuthStrategy extends NbAuthStrategy {
    constructor(http, route, window) {
        super();
        this.http = http;
        this.route = route;
        this.window = window;
        this.redirectResultHandlers = {
            [NbOAuth2ResponseType.CODE]: () => {
                return of(this.route.snapshot.queryParams).pipe(switchMap((params) => {
                    if (params.code) {
                        return this.requestToken(params.code);
                    }
                    return of(new NbAuthResult(false, params, this.getOption('redirect.failure'), this.getOption('defaultErrors'), []));
                }));
            },
            [NbOAuth2ResponseType.TOKEN]: () => {
                const module = 'authorize';
                const requireValidToken = this.getOption(`${module}.requireValidToken`);
                return of(this.route.snapshot.fragment).pipe(map(fragment => this.parseHashAsQueryParams(fragment)), map((params) => {
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
                    return of(new NbAuthResult(false, err, this.getOption('redirect.failure'), errors));
                }));
            },
        };
        this.redirectResults = {
            [NbOAuth2ResponseType.CODE]: () => {
                return of(this.route.snapshot.queryParams).pipe(map((params) => !!(params && (params.code || params.error))));
            },
            [NbOAuth2ResponseType.TOKEN]: () => {
                return of(this.route.snapshot.fragment).pipe(map(fragment => this.parseHashAsQueryParams(fragment)), map((params) => !!(params && (params.access_token || params.error))));
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
                    return of(new NbAuthResult(true));
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
        
        return of(new NbAuthResult(false, res, this.getOption('redirect.failure'), errors, []));
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
        return of(new NbAuthResult(true));
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

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.baseEndpoint = '/api/auth/';
        this.login = {
            alwaysFail: false,
            endpoint: 'login',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
        };
        this.register = {
            alwaysFail: false,
            endpoint: 'register',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
        };
        this.requestPass = {
            endpoint: 'request-pass',
            method: 'post',
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
        };
        this.resetPass = {
            endpoint: 'reset-pass',
            method: 'put',
            redirect: {
                success: '/',
                failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
        };
        this.logout = {
            alwaysFail: false,
            endpoint: 'logout',
            method: 'delete',
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
        };
        this.refreshToken = {
            endpoint: 'refresh-token',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: null,
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your token has been successfully refreshed.'],
        };
        this.token = {
            class: NbAuthSimpleToken,
            key: 'data.token',
            getter: (module, res, options) => getDeepFromObject(res.body, options.token.key),
        };
        this.errors = {
            key: 'data.errors',
            getter: (module, res, options) => getDeepFromObject(res.error, options.errors.key, options[module].defaultErrors),
        };
        this.messages = {
            key: 'data.messages',
            getter: (module, res, options) => getDeepFromObject(res.body, options.messages.key, options[module].defaultMessages),
        };
    }
}
const passwordStrategyOptions = new NbPasswordAuthStrategyOptions();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The most common authentication provider for email/password strategy.
 *
 * Strategy settings. Note, there is no need to copy over the whole object to change the settings you need.
 * Also, this.getOption call won't work outside of the default options declaration
 * (which is inside of the `NbPasswordAuthStrategy` class), so you have to replace it with a custom helper function
 * if you need it.
 *
 * ```ts
 *export class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
 *  name: string;
 *  baseEndpoint? = '/api/auth/';
 *  login?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'login',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  };
 *  register?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'register',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  };
 *  requestPass?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  };
 *  resetPass?: boolean | NbPasswordStrategyReset = {
 *    endpoint: 'reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  };
 *  logout?: boolean | NbPasswordStrategyReset = {
 *    alwaysFail: false,
 *    endpoint: 'logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  };
 *  refreshToken?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'refresh-token',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: null,
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your token has been successfully refreshed.'],
 *  };
 *  token?: NbPasswordStrategyToken = {
 *    class: NbAuthSimpleToken,
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.token.key,
 *    ),
 *  };
 *  errors?: NbPasswordStrategyMessage = {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.error,
 *      options.errors.key,
 *      options[module].defaultErrors,
 *    ),
 *  };
 *  messages?: NbPasswordStrategyMessage = {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.messages.key,
 *      options[module].defaultMessages,
 *    ),
 *  };
 *  validation?: {
 *    password?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *    email?: {
 *      required?: boolean;
 *      regexp?: string | null;
 *    };
 *    fullName?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *  };
 *}
 * ```
 */
class NbPasswordAuthStrategy extends NbAuthStrategy {
    constructor(http, route) {
        super();
        this.http = http;
        this.route = route;
        this.defaultOptions = passwordStrategyOptions;
    }
    static setup(options) {
        return [NbPasswordAuthStrategy, options];
    }
    authenticate(data) {
        const module = 'login';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse(data);
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options), this.createToken(this.getOption('token.getter')(module, res, this.options), requireValidToken));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    register(data) {
        const module = 'register';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse(data);
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options), this.createToken(this.getOption('token.getter')('login', res, this.options), requireValidToken));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    requestPassword(data) {
        const module = 'requestPass';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse();
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    resetPassword(data = {}) {
        const module = 'resetPass';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        const tokenKey = this.getOption(`${module}.resetPasswordTokenKey`);
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse();
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    logout() {
        const module = 'logout';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        return of({})
            .pipe(switchMap((res) => {
            if (!url) {
                return of(res);
            }
            return this.http.request(method, url, { observe: 'response' });
        }), map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse();
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    refreshToken(data) {
        const module = 'refreshToken';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse(data);
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options), this.createToken(this.getOption('token.getter')(module, res, this.options), requireValidToken));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    handleResponseError(res, module) {
        let errors = [];
        if (res instanceof HttpErrorResponse) {
            errors = this.getOption('errors.getter')(module, res, this.options);
        }
        else if (res instanceof NbAuthIllegalTokenError) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        return of(new NbAuthResult(false, res, this.getOption(`${module}.redirect.failure`), errors));
    }
}
NbPasswordAuthStrategy.decorators = [
    { type: Injectable }
];
NbPasswordAuthStrategy.ctorParameters = () => [
    { type: HttpClient },
    { type: ActivatedRoute }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbAuthComponent {
    // showcase of how to use the onAuthenticationChange method
    constructor(auth, location) {
        this.auth = auth;
        this.location = location;
        this.destroy$ = new Subject();
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((authenticated) => {
            this.authenticated = authenticated;
        });
    }
    back() {
        this.location.back();
        return false;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbAuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-auth',
                template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link back-link" aria-label="Back">
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"]
            },] }
];
NbAuthComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: Location }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbAuthBlockComponent {
}
NbAuthBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-auth-block',
                template: `
    <ng-content></ng-content>
  `,
                styles: [":host{display:block;width:100%;max-width:35rem}:host ::ng-deep form{width:100%}:host ::ng-deep .label{display:block;margin-bottom:0.5rem}:host ::ng-deep .forgot-password{text-decoration:none;margin-bottom:0.5rem}:host ::ng-deep .caption{margin-top:0.5rem}:host ::ng-deep .alert{text-align:center}:host ::ng-deep .title{margin-top:0;margin-bottom:0.75rem;text-align:center}:host ::ng-deep .sub-title{margin-bottom:2rem;text-align:center}:host ::ng-deep .form-control-group{margin-bottom:2rem}:host ::ng-deep .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host ::ng-deep .label-with-link{display:flex;justify-content:space-between}:host ::ng-deep .links{text-align:center;margin-top:1.75rem}:host ::ng-deep .links .socials{margin-top:1.5rem}:host ::ng-deep .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}:host ::ng-deep .links .socials a.with-icon{font-size:2rem}:host ::ng-deep .another-action{margin-top:2rem;text-align:center}:host ::ng-deep .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host ::ng-deep nb-alert .alert-title,:host ::ng-deep nb-alert .alert-message{margin:0 0 0.5rem}:host ::ng-deep nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}\n"]
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbLoginComponent {
    constructor(service, options = {}, cd, router) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.socialLinks = [];
        this.rememberMe = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.rememberMe = this.getConfigValue('forms.login.rememberMe');
    }
    login() {
        this.errors = [];
        this.messages = [];
        this.submitted = true;
        this.service.authenticate(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return getDeepFromObject(this.options, key, null);
    }
}
NbLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-login',
                template: "<h1 id=\"title\" class=\"title\">Login</h1>\n<p class=\"sub-title\">Hello! Log in with your email.</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           name=\"email\"\n           id=\"input-email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email address\"\n           fieldSize=\"large\"\n           autofocus\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\" for=\"input-password\">Password:</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"../request-password\">Forgot Password?</a>\n    </span>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           name=\"password\"\n           type=\"password\"\n           id=\"input-password\"\n           placeholder=\"Password\"\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched \">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Log In\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  Don't have an account? <a class=\"text-link\" routerLink=\"../register\">Register</a>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbLoginComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbRegisterComponent {
    constructor(service, options = {}, cd, router) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.strategy = this.getConfigValue('forms.register.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    register() {
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return getDeepFromObject(this.options, key, null);
    }
}
NbRegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-register',
                template: "<h1 id=\"title\" class=\"title\">Register</h1>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"register()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">Full name:</label>\n    <input nbInput\n           [(ngModel)]=\"user.fullName\"\n           #fullName=\"ngModel\"\n           id=\"input-name\"\n           name=\"fullName\"\n           placeholder=\"Full name\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"fullName.dirty ? (fullName.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.fullName.required')\"\n           [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n           [attr.aria-invalid]=\"fullName.invalid && fullName.touched ? true : null\">\n    <ng-container *ngIf=\"fullName.invalid && fullName.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.required\">\n        Full name is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.minlength || fullName.errors?.maxlength\">\n        Full name should contains\n        from {{getConfigValue('forms.validation.fullName.minLength')}}\n        to {{getConfigValue('forms.validation.fullName.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+..+\"\n           placeholder=\"Email address\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           placeholder=\"Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-re-password\">Repeat password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           type=\"password\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.dirty ? (rePass.invalid || password.value != rePass.value  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.invalid && rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\" *ngIf=\"getConfigValue('forms.register.terms')\">\n    <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n      Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n    </nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Register\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  Already have an account? <a class=\"text-link\" routerLink=\"../login\">Log in</a>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .title{margin-bottom:2rem}\n"]
            },] }
];
NbRegisterComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbLogoutComponent {
    constructor(service, options = {}, router) {
        this.service = service;
        this.options = options;
        this.router = router;
        this.redirectDelay = 0;
        this.strategy = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
    }
    ngOnInit() {
        this.logout(this.strategy);
    }
    logout(strategy) {
        this.service.logout(strategy).subscribe((result) => {
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
        });
    }
    getConfigValue(key) {
        return getDeepFromObject(this.options, key, null);
    }
}
NbLogoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-logout',
                template: "<div>Logging out, please wait...</div>\n"
            },] }
];
NbLogoutComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: Router }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbRequestPasswordComponent {
    constructor(service, options = {}, cd, router) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
        this.strategy = this.getConfigValue('forms.requestPassword.strategy');
    }
    requestPass() {
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.requestPassword(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return getDeepFromObject(this.options, key, null);
    }
}
NbRequestPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-request-password-page',
                template: "<h1 id=\"title\" class=\"title\">Forgot Password</h1>\n<p class=\"sub-title\">Enter your email address and we\u2019ll send a link to reset your password</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Enter your email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email address\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !requestPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Request password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a routerLink=\"../register\" class=\"text-link\">Register</a></p>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .form-group:last-of-type{margin-bottom:3rem}\n"]
            },] }
];
NbRequestPasswordComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbResetPasswordComponent {
    constructor(service, options = {}, cd, router) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.strategy = this.getConfigValue('forms.resetPassword.strategy');
    }
    resetPass() {
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.resetPassword(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return getDeepFromObject(this.options, key, null);
    }
}
NbResetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-reset-password-page',
                template: "<h1 id=\"title\" class=\"title\">Change password</h1>\n<p class=\"sub-title\">Please set a new password</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">New Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           class=\"first\"\n           placeholder=\"New Password\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contains\n        from {{getConfigValue('forms.validation.password.minLength')}}\n        to {{getConfigValue('forms.validation.password.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"label\" for=\"input-re-password\">Confirm Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           type=\"password\"\n           class=\"last\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.touched\n               ? (rePass.invalid || password.value != rePass.value ? 'danger' : 'success')\n               : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.invalid && rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          status=\"primary\"\n          fullWidth\n          size=\"large\"\n          [disabled]=\"submitted || !resetPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Change password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a class=\"text-link\" routerLink=\"../register\">Register</a></p>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .form-group:last-of-type{margin-bottom:3rem}\n"]
            },] }
];
NbResetPasswordComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];

function nbStrategiesFactory(options, injector) {
    const strategies = [];
    options.strategies
        .forEach(([strategyClass, strategyOptions]) => {
        const strategy = injector.get(strategyClass);
        strategy.setOptions(strategyOptions);
        strategies.push(strategy);
    });
    return strategies;
}
function nbTokensFactory(strategies) {
    const tokens = [];
    strategies
        .forEach((strategy) => {
        tokens.push(strategy.getOption('token.class'));
    });
    return tokens;
}
function nbOptionsFactory(options) {
    return deepExtend(defaultAuthOptions, options);
}
function nbNoOpInterceptorFilter(req) {
    return true;
}
class NbAuthModule {
    static forRoot(nbAuthOptions) {
        return {
            ngModule: NbAuthModule,
            providers: [
                { provide: NB_AUTH_USER_OPTIONS, useValue: nbAuthOptions },
                { provide: NB_AUTH_OPTIONS, useFactory: nbOptionsFactory, deps: [NB_AUTH_USER_OPTIONS] },
                { provide: NB_AUTH_STRATEGIES, useFactory: nbStrategiesFactory, deps: [NB_AUTH_OPTIONS, Injector] },
                { provide: NB_AUTH_TOKENS, useFactory: nbTokensFactory, deps: [NB_AUTH_STRATEGIES] },
                { provide: NB_AUTH_FALLBACK_TOKEN, useValue: NbAuthSimpleToken },
                { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
                { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: nbNoOpInterceptorFilter },
                { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
                NbAuthTokenParceler,
                NbAuthService,
                NbTokenService,
                NbDummyAuthStrategy,
                NbPasswordAuthStrategy,
                NbOAuth2AuthStrategy,
            ],
        };
    }
}
NbAuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbLayoutModule,
                    NbCardModule,
                    NbCheckboxModule,
                    NbAlertModule,
                    NbInputModule,
                    NbButtonModule,
                    RouterModule,
                    FormsModule,
                    NbIconModule,
                ],
                declarations: [
                    NbAuthComponent,
                    NbAuthBlockComponent,
                    NbLoginComponent,
                    NbRegisterComponent,
                    NbRequestPasswordComponent,
                    NbResetPasswordComponent,
                    NbLogoutComponent,
                ],
                exports: [
                    NbAuthComponent,
                    NbAuthBlockComponent,
                    NbLoginComponent,
                    NbRegisterComponent,
                    NbRequestPasswordComponent,
                    NbResetPasswordComponent,
                    NbLogoutComponent,
                ],
            },] }
];

const routes = [
    {
        path: 'auth',
        component: NbAuthComponent,
        children: [
            {
                path: '',
                component: NbLoginComponent,
            },
            {
                path: 'login',
                component: NbLoginComponent,
            },
            {
                path: 'register',
                component: NbRegisterComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent,
            },
        ],
    },
];

class NbAuthJWTInterceptor {
    constructor(injector, filter$$1) {
        this.injector = injector;
        this.filter = filter$$1;
    }
    intercept(req, next) {
        // do not intercept request whose urls are filtered by the injected filter
        if (!this.filter(req)) {
            return this.authService.isAuthenticatedOrRefresh()
                .pipe(switchMap(authenticated => {
                if (authenticated) {
                    return this.authService.getToken().pipe(switchMap((token) => {
                        const JWT = `Bearer ${token.getValue()}`;
                        req = req.clone({
                            setHeaders: {
                                Authorization: JWT,
                            },
                        });
                        return next.handle(req);
                    }));
                }
                else {
                    // Request is sent to server without authentication so that the client code
                    // receives the 401/403 error and can act as desired ('session expired', redirect to login, aso)
                    return next.handle(req);
                }
            }));
        }
        else {
            return next.handle(req);
        }
    }
    get authService() {
        return this.injector.get(NbAuthService);
    }
}
NbAuthJWTInterceptor.decorators = [
    { type: Injectable }
];
NbAuthJWTInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_TOKEN_INTERCEPTOR_FILTER,] }] }
];

class NbAuthSimpleInterceptor {
    constructor(injector, headerName = 'Authorization') {
        this.injector = injector;
        this.headerName = headerName;
    }
    intercept(req, next) {
        return this.authService.getToken()
            .pipe(switchMap((token) => {
            if (token && token.getValue()) {
                req = req.clone({
                    setHeaders: {
                        [this.headerName]: token.getValue(),
                    },
                });
            }
            return next.handle(req);
        }));
    }
    get authService() {
        return this.injector.get(NbAuthService);
    }
}
NbAuthSimpleInterceptor.decorators = [
    { type: Injectable }
];
NbAuthSimpleInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: String, decorators: [{ type: Inject, args: [NB_AUTH_INTERCEPTOR_HEADER,] }] }
];

class NbUser {
    constructor(id, email, password, rememberMe, terms, confirmPassword, fullName) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
        this.terms = terms;
        this.confirmPassword = confirmPassword;
        this.fullName = fullName;
    }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { defaultAuthOptions, NB_AUTH_OPTIONS, NB_AUTH_USER_OPTIONS, NB_AUTH_STRATEGIES, NB_AUTH_TOKENS, NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, nbStrategiesFactory, nbTokensFactory, nbOptionsFactory, nbNoOpInterceptorFilter, NbAuthModule, routes, NbAuthComponent, NbAuthBlockComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbAuthService, NbAuthResult, NbAuthJWTInterceptor, NbAuthSimpleInterceptor, NbAuthToken, NbAuthTokenNotFoundError, NbAuthIllegalTokenError, NbAuthEmptyTokenError, NbAuthIllegalJWTTokenError, nbAuthCreateToken, decodeJwtPayload, NbAuthSimpleToken, NbAuthJWTToken, NbAuthOAuth2Token, NbAuthOAuth2JWTToken, ɵ0, NbTokenStorage, NbTokenLocalStorage, NbTokenService, NB_AUTH_FALLBACK_TOKEN, NbAuthTokenParceler, NbAuthStrategy, NbAuthStrategyOptions, NbDummyAuthStrategy, NbDummyAuthStrategyOptions, dummyStrategyOptions, NbPasswordAuthStrategy, NbPasswordAuthStrategyOptions, passwordStrategyOptions, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbOAuth2GrantType, NbOAuth2ClientAuthMethod, NbOAuth2AuthStrategyOptions, auth2StrategyOptions, NbUser, deepExtend, getDeepFromObject, urlBase64Decode, b64decode, b64DecodeUnicode };
