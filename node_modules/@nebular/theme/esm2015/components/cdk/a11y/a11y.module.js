import { NgModule, Injectable } from '@angular/core';
import { NbFocusTrapFactoryService } from './focus-trap';
import { NbFocusKeyManagerFactoryService } from './focus-key-manager';
import { NbActiveDescendantKeyManagerFactoryService } from './descendant-key-manager';
import { FocusMonitor } from '@angular/cdk/a11y';
export class NbFocusMonitor extends FocusMonitor {
}
NbFocusMonitor.decorators = [
    { type: Injectable }
];
export class NbA11yModule {
    static forRoot() {
        return {
            ngModule: NbA11yModule,
            providers: [
                NbFocusTrapFactoryService,
                NbFocusKeyManagerFactoryService,
                NbActiveDescendantKeyManagerFactoryService,
                { provide: NbFocusMonitor, useClass: FocusMonitor },
            ],
        };
    }
}
NbA11yModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=a11y.module.js.map