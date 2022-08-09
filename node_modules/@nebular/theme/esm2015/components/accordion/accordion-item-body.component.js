/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Host, ChangeDetectorRef, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAccordionItemComponent } from './accordion-item.component';
const accordionItemBodyTrigger = trigger('accordionItemBody', [
    state('collapsed', style({
        overflow: 'hidden',
        visibility: 'hidden',
        height: 0,
    })),
    state('expanded', style({
        overflow: 'hidden',
        visibility: 'visible',
    })),
    transition('collapsed => expanded', animate('100ms ease-in')),
    transition('expanded => collapsed', animate('100ms ease-out')),
]);
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
export class NbAccordionItemBodyComponent {
    constructor(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.destroy$ = new Subject();
    }
    get state() {
        return this.accordionItem.collapsed ? 'collapsed' : 'expanded';
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
NbAccordionItemBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-accordion-item-body',
                template: `
    <div [@accordionItemBody]="{ value: state }">
      <div class="item-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                animations: [accordionItemBodyTrigger],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbAccordionItemBodyComponent.ctorParameters = () => [
    { type: NbAccordionItemComponent, decorators: [{ type: Host }] },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=accordion-item-body.component.js.map