/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbDateService } from './date.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbCalendarMonthModelService<D> {
    protected dateService: NbDateService<D>;
    constructor(dateService: NbDateService<D>);
    createDaysGrid(activeMonth: D, boundingMonth?: boolean): D[][];
    private createDates;
    private withBoundingMonths;
    private addPrevBoundingMonth;
    private addNextBoundingMonth;
    private createPrevBoundingDays;
    private createNextBoundingDays;
    private getStartOfWeekDayDiff;
    private getWeekStartDiff;
    private isShouldAddPrevBoundingMonth;
    private isShouldAddNextBoundingMonth;
    private createDateRangeForMonth;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarMonthModelService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbCalendarMonthModelService<any>>;
}

//# sourceMappingURL=calendar-month-model.service.d.ts.map