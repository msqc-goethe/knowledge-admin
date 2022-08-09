import { Type } from '@angular/core';
import { NbCalendarRange } from '../calendar/calendar-range.component';
import { NbDatepickerComponent, NbRangepickerComponent } from './datepicker.component';
import { NbDatepickerAdapter } from './datepicker.directive';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbDateTimePickerComponent } from './date-timepicker.component';
export declare class NbDateAdapterService<D> extends NbDatepickerAdapter<D> {
    protected dateService: NbDateService<D>;
    picker: Type<NbDatepickerComponent<D>>;
    constructor(dateService: NbDateService<D>);
    parse(date: string, format: any): D;
    format(date: D, format: string): string;
    isValid(date: string, format: string): boolean;
}
export declare class NbRangeAdapterService<D> extends NbDatepickerAdapter<NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    picker: Type<NbRangepickerComponent<D>>;
    constructor(dateService: NbDateService<D>);
    parse(range: string, format: any): NbCalendarRange<D>;
    format(range: NbCalendarRange<D>, format: string): string;
    isValid(range: string, format: string): boolean;
}
export declare class NbDateTimeAdapterService<D> extends NbDatepickerAdapter<D> {
    protected dateService: NbDateService<D>;
    picker: Type<NbDateTimePickerComponent<D>>;
    constructor(dateService: NbDateService<D>);
    parse(date: string, format: string): D;
    format(date: any, format: string): string;
    isValid(date: string, format: string): boolean;
}
