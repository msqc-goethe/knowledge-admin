/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnDestroy, OnInit, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { NbToastComponent } from './toast.component';
import { NbToast } from './model';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbGlobalPosition, NbPositionHelper } from '../cdk/overlay/position-helper';
export declare class NbToastrContainerComponent implements OnInit, OnDestroy {
    protected layoutDirection: NbLayoutDirectionService;
    protected positionHelper: NbPositionHelper;
    protected destroy$: Subject<void>;
    content: NbToast[];
    context: Object;
    position: NbGlobalPosition;
    toasts: QueryList<NbToastComponent>;
    fadeIn: any;
    constructor(layoutDirection: NbLayoutDirectionService, positionHelper: NbPositionHelper);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected onDirectionChange(): void;
}
