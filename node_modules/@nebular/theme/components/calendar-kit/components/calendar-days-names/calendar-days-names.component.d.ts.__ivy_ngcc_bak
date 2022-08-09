/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit } from '@angular/core';
import { NbCalendarDay, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbDateService } from '../../services/date.service';
export declare class NbCalendarDaysNamesComponent<D> implements OnInit {
    private dateService;
    days: NbCalendarDay[];
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    get isLarge(): boolean;
    constructor(dateService: NbDateService<D>);
    ngOnInit(): void;
    private createDaysNames;
    private shiftStartOfWeek;
    private markIfHoliday;
}
