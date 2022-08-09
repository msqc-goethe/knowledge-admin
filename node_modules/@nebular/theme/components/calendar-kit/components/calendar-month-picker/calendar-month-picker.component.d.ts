/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnChanges, Type, SimpleChanges } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbDateService } from '../../services/date.service';
import * as ɵngcc0 from '@angular/core';
export declare const MONTHS_IN_VIEW = 12;
export declare const MONTHS_IN_COLUMN = 4;
export declare class NbCalendarMonthPickerComponent<D, T> implements OnChanges {
    protected dateService: NbDateService<D>;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Visible month
     **/
    month: D;
    /**
     * Selected date
     **/
    date: D;
    monthChange: EventEmitter<D>;
    months: D[][];
    constructor(dateService: NbDateService<D>);
    set _cellComponent(cellComponent: Type<NbCalendarCell<D, T>>);
    cellComponent: Type<NbCalendarCell<any, any>>;
    get large(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    initMonths(): void;
    onSelect(month: D): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarMonthPickerComponent<any, any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbCalendarMonthPickerComponent<any, any>, "nb-calendar-month-picker", never, { "size": "size"; "_cellComponent": "cellComponent"; "min": "min"; "max": "max"; "filter": "filter"; "month": "month"; "date": "date"; }, { "monthChange": "monthChange"; }, never, never>;
}

//# sourceMappingURL=calendar-month-picker.component.d.ts.map