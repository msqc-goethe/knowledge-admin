/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbAlertComponent } from './alert.component';
export class NbAlertModule {
}
NbAlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [
                    NbAlertComponent,
                ],
                exports: [
                    NbAlertComponent,
                ],
            },] }
];
//# sourceMappingURL=alert.module.js.map