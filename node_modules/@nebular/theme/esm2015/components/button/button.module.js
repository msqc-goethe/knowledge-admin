/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbButtonComponent } from './button.component';
const NB_BUTTON_COMPONENTS = [
    NbButtonComponent,
];
export class NbButtonModule {
}
NbButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [
                    ...NB_BUTTON_COMPONENTS,
                ],
                exports: [
                    ...NB_BUTTON_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=button.module.js.map