/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbLayoutDirectionService } from '../../../../services/direction.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbCalendarPageableNavigationComponent<D> {
    private directionService;
    next: EventEmitter<void>;
    prev: EventEmitter<void>;
    constructor(directionService: NbLayoutDirectionService);
    get isLtr(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarPageableNavigationComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbCalendarPageableNavigationComponent<any>, "nb-calendar-pageable-navigation", never, {}, { "next": "next"; "prev": "prev"; }, never, never>;
}

//# sourceMappingURL=calendar-pageable-navigation.component.d.ts.map