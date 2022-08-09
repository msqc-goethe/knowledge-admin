/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbInputDirective } from './input.directive';
const NB_INPUT_COMPONENTS = [
    NbInputDirective,
];
export class NbInputModule {
}
NbInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbSharedModule],
                declarations: NB_INPUT_COMPONENTS,
                exports: NB_INPUT_COMPONENTS,
            },] }
];
//# sourceMappingURL=input.module.js.map