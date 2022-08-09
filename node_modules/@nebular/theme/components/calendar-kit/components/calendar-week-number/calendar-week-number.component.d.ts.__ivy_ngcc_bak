import { OnChanges, SimpleChanges } from '@angular/core';
import { NbDateService } from '../../services/date.service';
import { NbCalendarSize, NbCalendarSizeValues } from '../../model';
export declare class NbCalendarWeekNumberComponent<D> implements OnChanges {
    private dateService;
    weekNumbers: number[];
    weeks: D[][];
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    get isLarge(): boolean;
    constructor(dateService: NbDateService<D>);
    ngOnChanges(changes: SimpleChanges): void;
    getWeeks(): number[];
}
