/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbProgressBarComponent } from './progress-bar.component';
export class NbProgressBarModule {
}
NbProgressBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [NbProgressBarComponent],
                exports: [NbProgressBarComponent],
            },] }
];
//# sourceMappingURL=progress-bar.module.js.map