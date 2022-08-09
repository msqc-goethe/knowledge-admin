/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Host, HostBinding, HostListener, ChangeDetectorRef, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAccordionItemComponent } from './accordion-item.component';
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
export class NbAccordionItemHeaderComponent {
    constructor(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.destroy$ = new Subject();
    }
    get isCollapsed() {
        return this.accordionItem.collapsed;
    }
    get expanded() {
        return !this.accordionItem.collapsed;
    }
    // issue #794
    get tabbable() {
        return this.accordionItem.disabled ? '-1' : '0';
    }
    get disabled() {
        return this.accordionItem.disabled;
    }
    toggle() {
        this.accordionItem.toggle();
    }
    get state() {
        if (this.isCollapsed) {
            return 'collapsed';
        }
        if (this.expanded) {
            return 'expanded';
        }
    }
    ngOnInit() {
        this.accordionItem.accordionItemInvalidate
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbAccordionItemHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-accordion-item-header',
                template: `
    <ng-content select="nb-accordion-item-title"></ng-content>
    <ng-content select="nb-accordion-item-description"></ng-content>
    <ng-content></ng-content>
    <nb-icon icon="chevron-down-outline"
             pack="nebular-essentials"
             [@expansionIndicator]="state"
             *ngIf="!disabled"
             class="expansion-indicator">
    </nb-icon>
  `,
                animations: [
                    trigger('expansionIndicator', [
                        state('expanded', style({
                            transform: 'rotate(180deg)',
                        })),
                        transition('collapsed => expanded', animate('100ms ease-in')),
                        transition('expanded => collapsed', animate('100ms ease-out')),
                    ]),
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;align-items:center;cursor:pointer}:host:focus{outline:0}\n"]
            },] }
];
NbAccordionItemHeaderComponent.ctorParameters = () => [
    { type: NbAccordionItemComponent, decorators: [{ type: Host }] },
    { type: ChangeDetectorRef }
];
NbAccordionItemHeaderComponent.propDecorators = {
    isCollapsed: [{ type: HostBinding, args: ['class.accordion-item-header-collapsed',] }],
    expanded: [{ type: HostBinding, args: ['class.accordion-item-header-expanded',] }, { type: HostBinding, args: ['attr.aria-expanded',] }],
    tabbable: [{ type: HostBinding, args: ['attr.tabindex',] }],
    disabled: [{ type: HostBinding, args: ['attr.aria-disabled',] }],
    toggle: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['keydown.space',] }, { type: HostListener, args: ['keydown.enter',] }]
};
//# sourceMappingURL=accordion-item-header.component.js.map