import { Inject, Injectable, Injector } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { NbAuthService } from '../auth.service';
import { NB_AUTH_INTERCEPTOR_HEADER } from '../../auth.options';
export class NbAuthSimpleInterceptor {
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
//# sourceMappingURL=simple-interceptor.js.map