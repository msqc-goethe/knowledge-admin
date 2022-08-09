import { Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService } from '../auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbAuthSimpleInterceptor implements HttpInterceptor {
    private injector;
    protected headerName: string;
    constructor(injector: Injector, headerName?: string);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected get authService(): NbAuthService;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbAuthSimpleInterceptor, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbAuthSimpleInterceptor>;
}

//# sourceMappingURL=simple-interceptor.d.ts.map