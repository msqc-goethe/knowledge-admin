/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbCalendarComponent } from './calendar.component';
import { NbBaseCalendarModule } from './base-calendar.module';
export class NbCalendarModule {
}
NbCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbBaseCalendarModule],
                exports: [NbCalendarComponent],
                declarations: [NbCalendarComponent],
            },] }
];
//# sourceMappingURL=calendar.module.js.map