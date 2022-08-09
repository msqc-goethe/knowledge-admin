/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
export class NbSharedModule {
}
NbSharedModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    CommonModule,
                    // TODO: probably we don't need FormsModule in SharedModule
                    FormsModule,
                    RouterModule,
                ],
            },] }
];
//# sourceMappingURL=shared.module.js.map