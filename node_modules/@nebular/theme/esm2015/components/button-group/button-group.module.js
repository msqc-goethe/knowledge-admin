/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbButtonGroupComponent } from './button-group.component';
import { NbButtonToggleDirective } from './button-toggle.directive';
export class NbButtonGroupModule {
}
NbButtonGroupModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NbButtonGroupComponent, NbButtonToggleDirective],
                exports: [NbButtonGroupComponent, NbButtonToggleDirective],
            },] }
];
//# sourceMappingURL=button-group.module.js.map