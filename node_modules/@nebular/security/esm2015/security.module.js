import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NB_SECURITY_OPTIONS_TOKEN } from './security.options';
import { NbAclService } from './services/acl.service';
import { NbAccessChecker } from './services/access-checker.service';
import { NbIsGrantedDirective } from './directives/is-granted.directive';
export class NbSecurityModule {
    static forRoot(nbSecurityOptions) {
        return {
            ngModule: NbSecurityModule,
            providers: [
                { provide: NB_SECURITY_OPTIONS_TOKEN, useValue: nbSecurityOptions },
                NbAclService,
                NbAccessChecker,
            ],
        };
    }
}
NbSecurityModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    NbIsGrantedDirective,
                ],
                exports: [
                    NbIsGrantedDirective,
                ],
            },] }
];
//# sourceMappingURL=security.module.js.map