/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ContentChild, Directive, EventEmitter, HostBinding, HostListener, Inject, Input, Output, TemplateRef, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NB_SORT_HEADER_COLUMN_DEF } from '../cdk/table/cell';
export var NbSortDirection;
(function (NbSortDirection) {
    NbSortDirection["ASCENDING"] = "asc";
    NbSortDirection["DESCENDING"] = "desc";
    NbSortDirection["NONE"] = "";
})(NbSortDirection || (NbSortDirection = {}));
const sortDirections = [
    NbSortDirection.ASCENDING,
    NbSortDirection.DESCENDING,
    NbSortDirection.NONE,
];
/**
 * Directive triggers sort method of passed object when sort header changes direction
 */
export class NbSortDirective {
    constructor() {
        this.sort = new EventEmitter();
    }
    emitSort(sortRequest) {
        if (this.sortable && this.sortable.sort) {
            this.sortable.sort(sortRequest);
        }
        this.sort.emit(sortRequest);
    }
}
NbSortDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbSort]' },] }
];
NbSortDirective.propDecorators = {
    sortable: [{ type: Input, args: ['nbSort',] }],
    sort: [{ type: Output }]
};
/**
 * Directive for headers sort icons. Mark you icon implementation with this structural directive and
 * it'll set template's implicit context with current direction. Context also has `isAscending`,
 * `isDescending` and `isNone` properties.
 */
export class NbSortHeaderIconDirective {
}
NbSortHeaderIconDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbSortHeaderIcon]' },] }
];
export class NbSortIconComponent {
    constructor() {
        this.direction = NbSortDirection.NONE;
    }
    isAscending() {
        return this.direction === NbSortDirection.ASCENDING;
    }
    isDescending() {
        return this.direction === NbSortDirection.DESCENDING;
    }
    isDirectionSet() {
        return this.isAscending() || this.isDescending();
    }
}
NbSortIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-sort-icon',
                template: `
    <ng-container *ngIf="isDirectionSet()">
      <nb-icon *ngIf="isAscending()" icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
      <nb-icon *ngIf="isDescending()" icon="chevron-up-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </ng-container>
  `
            },] }
];
NbSortIconComponent.propDecorators = {
    direction: [{ type: Input }]
};
/**
 * Marks header as sort header so it emitting sort event when clicked.
 */
export class NbSortHeaderComponent {
    constructor(sort, columnDef) {
        this.sort = sort;
        this.columnDef = columnDef;
        this.disabledValue = false;
    }
    /**
     * Disable sort header
     */
    set disabled(value) {
        this.disabledValue = convertToBoolProperty(value);
    }
    get disabled() {
        return this.disabledValue;
    }
    sortIfEnabled() {
        if (!this.disabled) {
            this.sortData();
        }
    }
    isAscending() {
        return this.direction === NbSortDirection.ASCENDING;
    }
    isDescending() {
        return this.direction === NbSortDirection.DESCENDING;
    }
    sortData() {
        const sortRequest = this.createSortRequest();
        this.sort.emitSort(sortRequest);
    }
    getIconContext() {
        return {
            $implicit: this.direction,
            isAscending: this.isAscending(),
            isDescending: this.isDescending(),
            isNone: !this.isAscending() && !this.isDescending(),
        };
    }
    getDisabledAttributeValue() {
        return this.disabled ? '' : null;
    }
    createSortRequest() {
        this.direction = this.getNextDirection();
        return { direction: this.direction, column: this.columnDef.name };
    }
    getNextDirection() {
        const sortDirectionCycle = sortDirections;
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
}
NbSortHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: '[nbSortHeader]',
                template: `
    <button
      class="nb-tree-grid-header-change-sort-button"
      type="button"
      [attr.disabled]="getDisabledAttributeValue()"
      (click)="sortData()">
      <ng-content></ng-content>
    </button>
    <nb-sort-icon *ngIf="!sortIcon; else customIcon" [direction]="direction"></nb-sort-icon>
    <ng-template #customIcon [ngTemplateOutlet]="sortIcon" [ngTemplateOutletContext]="getIconContext()"></ng-template>
  `
            },] }
];
NbSortHeaderComponent.ctorParameters = () => [
    { type: NbSortDirective },
    { type: undefined, decorators: [{ type: Inject, args: [NB_SORT_HEADER_COLUMN_DEF,] }] }
];
NbSortHeaderComponent.propDecorators = {
    sortIcon: [{ type: ContentChild, args: [NbSortHeaderIconDirective, { read: TemplateRef },] }],
    direction: [{ type: Input, args: ['nbSortHeader',] }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['class.disabled',] }],
    sortIfEnabled: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=tree-grid-sort.component.js.map