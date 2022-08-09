import { Injector, ModuleWithProviders } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { NbAuthTokenClass } from './services/token/token';
import { NbAuthStrategy } from './strategies/auth-strategy';
import { NbAuthOptions } from './auth.options';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './components/auth.component';
import * as ɵngcc2 from './components/auth-block/auth-block.component';
import * as ɵngcc3 from './components/login/login.component';
import * as ɵngcc4 from './components/register/register.component';
import * as ɵngcc5 from './components/request-password/request-password.component';
import * as ɵngcc6 from './components/reset-password/reset-password.component';
import * as ɵngcc7 from './components/logout/logout.component';
import * as ɵngcc8 from '@angular/common';
import * as ɵngcc9 from '@nebular/theme';
import * as ɵngcc10 from '@angular/router';
import * as ɵngcc11 from '@angular/forms';
export declare function nbStrategiesFactory(options: NbAuthOptions, injector: Injector): NbAuthStrategy[];
export declare function nbTokensFactory(strategies: NbAuthStrategy[]): NbAuthTokenClass[];
export declare function nbOptionsFactory(options: any): any;
export declare function nbNoOpInterceptorFilter(req: HttpRequest<any>): boolean;
export declare class NbAuthModule {
    static forRoot(nbAuthOptions?: NbAuthOptions): ModuleWithProviders<NbAuthModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbAuthModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<NbAuthModule, [typeof ɵngcc1.NbAuthComponent, typeof ɵngcc2.NbAuthBlockComponent, typeof ɵngcc3.NbLoginComponent, typeof ɵngcc4.NbRegisterComponent, typeof ɵngcc5.NbRequestPasswordComponent, typeof ɵngcc6.NbResetPasswordComponent, typeof ɵngcc7.NbLogoutComponent], [typeof ɵngcc8.CommonModule, typeof ɵngcc9.NbLayoutModule, typeof ɵngcc9.NbCardModule, typeof ɵngcc9.NbCheckboxModule, typeof ɵngcc9.NbAlertModule, typeof ɵngcc9.NbInputModule, typeof ɵngcc9.NbButtonModule, typeof ɵngcc10.RouterModule, typeof ɵngcc11.FormsModule, typeof ɵngcc9.NbIconModule], [typeof ɵngcc1.NbAuthComponent, typeof ɵngcc2.NbAuthBlockComponent, typeof ɵngcc3.NbLoginComponent, typeof ɵngcc4.NbRegisterComponent, typeof ɵngcc5.NbRequestPasswordComponent, typeof ɵngcc6.NbResetPasswordComponent, typeof ɵngcc7.NbLogoutComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<NbAuthModule>;
}

//# sourceMappingURL=auth.module.d.ts.map