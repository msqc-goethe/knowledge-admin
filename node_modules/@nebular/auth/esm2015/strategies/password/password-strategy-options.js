/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthSimpleToken } from '../../services/token/token';
import { NbAuthStrategyOptions } from '../auth-strategy-options';
import { getDeepFromObject } from '../../helpers';
export class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
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
export const passwordStrategyOptions = new NbPasswordAuthStrategyOptions();
//# sourceMappingURL=password-strategy-options.js.map