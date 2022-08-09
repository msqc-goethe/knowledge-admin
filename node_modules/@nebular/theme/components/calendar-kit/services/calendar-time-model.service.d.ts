import { NbDateService } from './date.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbCalendarTimeModelService<D> {
    protected dateService: NbDateService<D>;
    readonly MINUTES_AND_SECONDS = 60;
    constructor(dateService: NbDateService<D>);
    getHoursRange(step?: number): D[];
    getResetTime(): D;
    paddToTwoSymbols(n: number): string;
    buildDateFormat(twelveHoursFormat: boolean, withSeconds?: boolean): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarTimeModelService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbCalendarTimeModelService<any>>;
}

//# sourceMappingURL=calendar-time-model.service.d.ts.map