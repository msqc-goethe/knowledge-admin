import { Inject, Injectable, Injector } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { NbAuthService } from '../auth.service';
import { NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '../../auth.options';
export class NbAuthJWTInterceptor {
    constructor(injector, filter) {
        this.injector = injector;
        this.filter = filter;
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
//# sourceMappingURL=jwt-interceptor.js.map