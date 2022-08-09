/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { TranslationWidth } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NbCalendarViewMode } from '../../model';
import { NbCalendarYearModelService } from '../../services/calendar-year-model.service';
import { NbDateService } from '../../services/date.service';
export class NbCalendarViewModeComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        this.viewMode = NbCalendarViewMode.DATE;
        this.changeMode = new EventEmitter(true);
    }
    getText() {
        if (!this.date) {
            return '';
        }
        switch (this.viewMode) {
            case NbCalendarViewMode.DATE: {
                const month = this.dateService.getMonthName(this.date, TranslationWidth.Wide);
                const year = this.dateService.getYear(this.date);
                return `${month} ${year}`;
            }
            case NbCalendarViewMode.MONTH:
                return `${this.dateService.getYear(this.date)}`;
            case NbCalendarViewMode.YEAR:
                return `${this.getFirstYear()} - ${this.getLastYear()}`;
        }
    }
    getIcon() {
        if (this.viewMode === NbCalendarViewMode.DATE) {
            return 'chevron-down-outline';
        }
        return 'chevron-up-outline';
    }
    getFirstYear() {
        const years = this.yearModelService.getViewYears(this.date);
        return this.dateService.getYear(years[0][0]).toString();
    }
    getLastYear() {
        const years = this.yearModelService.getViewYears(this.date);
        const lastRow = years[years.length - 1];
        const lastYear = lastRow[lastRow.length - 1];
        return this.dateService.getYear(lastYear).toString();
    }
}
NbCalendarViewModeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-view-mode',
                template: `
    <button nbButton (click)="changeMode.emit()" ghost status="basic">
      {{ getText() }}
      <nb-icon [icon]="getIcon()" pack="nebular-essentials"></nb-icon>
    </button>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarViewModeComponent.ctorParameters = () => [
    { type: NbDateService },
    { type: NbCalendarYearModelService }
];
NbCalendarViewModeComponent.propDecorators = {
    date: [{ type: Input }],
    viewMode: [{ type: Input }],
    changeMode: [{ type: Output }]
};
//# sourceMappingURL=calendar-view-mode.component.js.map