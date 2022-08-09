/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { NbDateService } from '../../services/date.service';
import { NbCalendarSize } from '../../model';
export class NbCalendarWeekNumberComponent {
    constructor(dateService) {
        this.dateService = dateService;
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges(changes) {
        if (changes.weeks) {
            this.weekNumbers = this.getWeeks();
        }
    }
    getWeeks() {
        return this.weeks.map((week) => {
            // Find last defined day as week could contain null days in case
            // boundingMonth set to false
            const lastDay = [...week].reverse().find((day) => !!day);
            // Use last day of the week to determine week number.
            // This way weeks which span between sibling years is marked first
            return this.dateService.getWeekNumber(lastDay);
        });
    }
}
NbCalendarWeekNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-week-numbers',
                template: `
    <div class="sign-container">
      <div class="sign">{{ weekNumberSymbol }}</div>
    </div>
    <div class="week-number" *ngFor="let weekNumber of weekNumbers">{{ weekNumber }}</div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;flex-direction:column}\n"]
            },] }
];
NbCalendarWeekNumberComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarWeekNumberComponent.propDecorators = {
    weeks: [{ type: Input }],
    size: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }]
};
//# sourceMappingURL=calendar-week-number.component.js.map