import { NbDateService } from './date.service';
export declare class NbCalendarTimeModelService<D> {
    protected dateService: NbDateService<D>;
    readonly MINUTES_AND_SECONDS = 60;
    constructor(dateService: NbDateService<D>);
    getHoursRange(step?: number): D[];
    getResetTime(): D;
    paddToTwoSymbols(n: number): string;
    buildDateFormat(twelveHoursFormat: boolean, withSeconds?: boolean): string;
}
