/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, ViewChildren } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbToastComponent } from './toast.component';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbPositionHelper } from '../cdk/overlay/position-helper';
const voidState = style({
    transform: 'translateX({{ direction }}110%)',
    height: 0,
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '0',
});
const defaultOptions = { params: { direction: '' } };
export class NbToastrContainerComponent {
    constructor(layoutDirection, positionHelper) {
        this.layoutDirection = layoutDirection;
        this.positionHelper = positionHelper;
        this.destroy$ = new Subject();
        this.content = [];
    }
    ngOnInit() {
        this.layoutDirection.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onDirectionChange());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onDirectionChange() {
        const direction = this.positionHelper.isRightPosition(this.position) ? '' : '-';
        this.fadeIn = { value: '', params: { direction } };
    }
}
NbToastrContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-toastr-container',
                template: `
    <nb-toast [@fadeIn]="fadeIn" *ngFor="let toast of content" [toast]="toast"></nb-toast>`,
                animations: [
                    trigger('fadeIn', [
                        transition(':enter', [voidState, animate(100)], defaultOptions),
                        transition(':leave', [animate(100, voidState)], defaultOptions),
                    ]),
                ]
            },] }
];
NbToastrContainerComponent.ctorParameters = () => [
    { type: NbLayoutDirectionService },
    { type: NbPositionHelper }
];
NbToastrContainerComponent.propDecorators = {
    content: [{ type: Input }],
    context: [{ type: Input }],
    position: [{ type: Input }],
    toasts: [{ type: ViewChildren, args: [NbToastComponent,] }]
};
//# sourceMappingURL=toastr-container.component.js.map