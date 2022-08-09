/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../calendar-kit/model';
import { NbCalendarRange } from './calendar-range.component';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbBaseCalendarRangeCell } from './base-calendar-range-cell';
import * as ɵngcc0 from '@angular/core';
export declare class NbCalendarRangeDayCellComponent<D> extends NbBaseCalendarRangeCell<D> implements NbCalendarCell<D, NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    date: D;
    selectedValue: NbCalendarRange<D>;
    visibleDate: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get inRange(): boolean;
    get start(): boolean;
    get end(): boolean;
    rangeCellClass: boolean;
    dayCellClass: boolean;
    get today(): boolean;
    get boundingMonth(): boolean;
    get selected(): boolean;
    get empty(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    get day(): number;
    onClick(): void;
    protected smallerThanMin(): boolean;
    protected greaterThanMax(): boolean;
    protected dontFitFilter(): boolean;
    protected isInRange(date: D, { start, end }: NbCalendarRange<D>): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarRangeDayCellComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbCalendarRangeDayCellComponent<any>, "nb-calendar-range-day-cell", never, { "size": "size"; "date": "date"; "selectedValue": "selectedValue"; "visibleDate": "visibleDate"; "min": "min"; "max": "max"; "filter": "filter"; }, { "select": "select"; }, never, never>;
}

//# sourceMappingURL=calendar-range-day-cell.component.d.ts.map