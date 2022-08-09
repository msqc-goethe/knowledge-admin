/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnChanges, Type } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbDateService } from '../../services/date.service';
import { NbCalendarYearModelService } from '../../services/calendar-year-model.service';
export declare class NbCalendarYearPickerComponent<D> implements OnChanges {
    protected dateService: NbDateService<D>;
    protected yearModelService: NbCalendarYearModelService<D>;
    date: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    set _cellComponent(cellComponent: Type<NbCalendarCell<D, D>>);
    cellComponent: Type<NbCalendarCell<D, D>>;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    year: D;
    yearChange: EventEmitter<D>;
    get large(): boolean;
    years: D[][];
    constructor(dateService: NbDateService<D>, yearModelService: NbCalendarYearModelService<D>);
    ngOnChanges(): void;
    onSelect(year: any): void;
}
