/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { NbLayoutDirectionService } from '../../../../services/direction.service';
export class NbCalendarPageableNavigationComponent {
    constructor(directionService) {
        this.directionService = directionService;
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
    }
    get isLtr() {
        return this.directionService.isLtr();
    }
}
NbCalendarPageableNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-pageable-navigation',
                template: `
    <button nbButton (click)="prev.emit()" ghost status="basic" class="prev-month">
      <nb-icon [icon]="isLtr ? 'chevron-left-outline' : 'chevron-right-outline'" pack="nebular-essentials"></nb-icon>
    </button>
    <button nbButton (click)="next.emit()" ghost status="basic" class="next-month">
      <nb-icon [icon]="isLtr ? 'chevron-right-outline' : 'chevron-left-outline'" pack="nebular-essentials"></nb-icon>
    </button>
  `,
                styles: [":host{display:flex;align-items:center;justify-content:flex-start}\n"]
            },] }
];
NbCalendarPageableNavigationComponent.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
NbCalendarPageableNavigationComponent.propDecorators = {
    next: [{ type: Output }],
    prev: [{ type: Output }]
};
//# sourceMappingURL=calendar-pageable-navigation.component.js.map