import { ComponentFactoryResolver, OnInit, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import { NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbCalendarWithTimeComponent } from './calendar-with-time.component';
import { NbBasePickerComponent } from './datepicker.component';
import * as ɵngcc0 from '@angular/core';
export declare class NbDateTimePickerComponent<D> extends NbBasePickerComponent<D, D, NbCalendarWithTimeComponent<D>> implements OnInit {
    protected calendarWithTimeModelService: NbCalendarTimeModelService<D>;
    protected pickerClass: Type<NbCalendarWithTimeComponent<D>>;
    get value(): any;
    set value(date: any);
    step: number;
    title: string;
    applyButtonText: string;
    currentTimeButtonText: string;
    get twelveHoursFormat(): boolean;
    set twelveHoursFormat(value: boolean);
    _twelveHoursFormat: boolean;
    static ngAcceptInputType_twelveHoursFormat: NbBooleanInput;
    get withSeconds(): boolean;
    set withSeconds(value: boolean);
    _withSeconds: boolean;
    static ngAcceptInputType_withSeconds: NbBooleanInput;
    get singleColumn(): boolean;
    set singleColumn(value: boolean);
    _singleColumn: boolean;
    static ngAcceptInputType_singleColumn: NbBooleanInput;
    constructor(document: any, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, overlay: NbOverlayService, cfr: ComponentFactoryResolver, dateService: NbDateService<D>, dateServiceOptions: any, calendarWithTimeModelService: NbCalendarTimeModelService<D>);
    ngOnInit(): void;
    protected patchWithInputs(): void;
    protected get pickerValueChange(): Observable<any>;
    protected writeQueue(): void;
    protected buildTimeFormat(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbDateTimePickerComponent<any>, [null, null, null, null, null, null, { optional: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbDateTimePickerComponent<any>, "nb-date-timepicker", never, { "twelveHoursFormat": "twelveHoursFormat"; "withSeconds": "withSeconds"; "singleColumn": "singleColumn"; "step": "step"; "title": "title"; "applyButtonText": "applyButtonText"; "currentTimeButtonText": "currentTimeButtonText"; }, {}, never, never>;
}

//# sourceMappingURL=date-timepicker.component.d.ts.map