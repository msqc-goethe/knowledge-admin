/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnChanges, Type } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbDateService } from '../../services/date.service';
import { NbCalendarYearModelService } from '../../services/calendar-year-model.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarYearPickerComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbCalendarYearPickerComponent<any>, "nb-calendar-year-picker", never, { "size": "size"; "_cellComponent": "cellComponent"; "date": "date"; "min": "min"; "max": "max"; "filter": "filter"; "year": "year"; }, { "yearChange": "yearChange"; }, never, never>;
}

//# sourceMappingURL=calendar-year-picker.component.d.ts.map