import { InjectionToken } from '@angular/core';
const socialLinks = [];
export const defaultAuthOptions = {
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
export const NB_AUTH_OPTIONS = new InjectionToken('Nebular Auth Options');
export const NB_AUTH_USER_OPTIONS = new InjectionToken('Nebular User Auth Options');
export const NB_AUTH_STRATEGIES = new InjectionToken('Nebular Auth Strategies');
export const NB_AUTH_TOKENS = new InjectionToken('Nebular Auth Tokens');
export const NB_AUTH_INTERCEPTOR_HEADER = new InjectionToken('Nebular Simple Interceptor Header');
export const NB_AUTH_TOKEN_INTERCEPTOR_FILTER = new InjectionToken('Nebular Interceptor Filter');
//# sourceMappingURL=auth.options.js.map