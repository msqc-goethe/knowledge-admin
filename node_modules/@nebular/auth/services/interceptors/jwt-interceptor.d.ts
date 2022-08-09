import { Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService } from '../auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbAuthJWTInterceptor implements HttpInterceptor {
    private injector;
    protected filter: any;
    constructor(injector: Injector, filter: any);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected get authService(): NbAuthService;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbAuthJWTInterceptor, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbAuthJWTInterceptor>;
}

//# sourceMappingURL=jwt-interceptor.d.ts.map