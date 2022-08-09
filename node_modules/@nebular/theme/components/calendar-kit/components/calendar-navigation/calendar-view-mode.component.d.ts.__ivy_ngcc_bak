/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarViewMode, NbCalendarViewModeValues } from '../../model';
import { NbCalendarYearModelService } from '../../services/calendar-year-model.service';
import { NbDateService } from '../../services/date.service';
export declare class NbCalendarViewModeComponent<D> {
    protected dateService: NbDateService<D>;
    protected yearModelService: NbCalendarYearModelService<D>;
    date: D;
    viewMode: NbCalendarViewMode;
    static ngAcceptInputType_viewMode: NbCalendarViewModeValues;
    changeMode: EventEmitter<void>;
    constructor(dateService: NbDateService<D>, yearModelService: NbCalendarYearModelService<D>);
    getText(): string;
    getIcon(): string;
    protected getFirstYear(): string;
    protected getLastYear(): string;
}
