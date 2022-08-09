/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, HostBinding, Host, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbAccordionComponent } from './accordion.component';
import { convertToBoolProperty } from '../helpers';
/**
 * Component intended to be used within `<nb-accordion>` component
 */
export class NbAccordionItemComponent {
    constructor(accordion, cd) {
        this.accordion = accordion;
        this.cd = cd;
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         */
        this.collapsedChange = new EventEmitter();
        this.accordionItemInvalidate = new Subject();
        this.collapsedValue = true;
        this.disabledValue = false;
        this.destroy$ = new Subject();
    }
    /**
     * Item is collapse (`true` by default)
     * @type {boolean}
     */
    get collapsed() {
        return this.collapsedValue;
    }
    set collapsed(val) {
        this.collapsedValue = convertToBoolProperty(val);
        this.collapsedChange.emit(this.collapsedValue);
        this.invalidate();
    }
    /**
     * Item is expanded (`false` by default)
     * @type {boolean}
     */
    get expanded() {
        return !this.collapsed;
    }
    set expanded(val) {
        this.collapsedValue = !convertToBoolProperty(val);
    }
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled() {
        return this.disabledValue;
    }
    set disabled(val) {
        this.disabledValue = convertToBoolProperty(val);
        this.invalidate();
    }
    /**
     * Open/close the item
     */
    toggle() {
        if (!this.disabled) {
            // we need this temporary variable as `openCloseItems.next` will change current value we need to save
            const willSet = !this.collapsed;
            if (!this.accordion.multi) {
                this.accordion.openCloseItems.next(true);
            }
            this.collapsed = willSet;
        }
    }
    /**
     * Open the item.
     */
    open() {
        !this.disabled && (this.collapsed = false);
    }
    /**
     * Collapse the item.
     */
    close() {
        !this.disabled && (this.collapsed = true);
    }
    ngOnInit() {
        this.accordion.openCloseItems
            .pipe(takeUntil(this.destroy$))
            .subscribe(collapsed => {
            !this.disabled && (this.collapsed = collapsed);
        });
    }
    ngOnChanges(changes) {
        this.accordionItemInvalidate.next(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.accordionItemInvalidate.complete();
    }
    invalidate() {
        this.accordionItemInvalidate.next(true);
        this.cd.markForCheck();
    }
}
NbAccordionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-accordion-item',
                template: `
    <ng-content select="nb-accordion-item-header"></ng-content>
    <ng-content select="nb-accordion-item-body"></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;flex-direction:column}\n"]
            },] }
];
NbAccordionItemComponent.ctorParameters = () => [
    { type: NbAccordionComponent, decorators: [{ type: Host }] },
    { type: ChangeDetectorRef }
];
NbAccordionItemComponent.propDecorators = {
    collapsed: [{ type: Input, args: ['collapsed',] }, { type: HostBinding, args: ['class.collapsed',] }],
    expanded: [{ type: Input, args: ['expanded',] }, { type: HostBinding, args: ['class.expanded',] }],
    disabled: [{ type: Input, args: ['disabled',] }, { type: HostBinding, args: ['class.disabled',] }],
    collapsedChange: [{ type: Output }]
};
//# sourceMappingURL=accordion-item.component.js.map