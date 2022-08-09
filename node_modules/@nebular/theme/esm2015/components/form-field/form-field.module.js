/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormFieldComponent } from './form-field.component';
import { NbPrefixDirective } from './prefix.directive';
import { NbSuffixDirective } from './suffix.directive';
const COMPONENTS = [
    NbFormFieldComponent,
    NbPrefixDirective,
    NbSuffixDirective,
];
export class NbFormFieldModule {
}
NbFormFieldModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];
//# sourceMappingURL=form-field.module.js.map