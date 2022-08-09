import { Injector, ModuleWithProviders } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { NbAuthTokenClass } from './services/token/token';
import { NbAuthStrategy } from './strategies/auth-strategy';
import { NbAuthOptions } from './auth.options';
export declare function nbStrategiesFactory(options: NbAuthOptions, injector: Injector): NbAuthStrategy[];
export declare function nbTokensFactory(strategies: NbAuthStrategy[]): NbAuthTokenClass[];
export declare function nbOptionsFactory(options: any): any;
export declare function nbNoOpInterceptorFilter(req: HttpRequest<any>): boolean;
export declare class NbAuthModule {
    static forRoot(nbAuthOptions?: NbAuthOptions): ModuleWithProviders<NbAuthModule>;
}
