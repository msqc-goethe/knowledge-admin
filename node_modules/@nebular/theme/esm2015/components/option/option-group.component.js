/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChildren, HostBinding, Input, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { from, Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NbOptionComponent } from './option.component';
/**
 * NbOptionGroupComponent
 *
 * @styles
 *
 * option-group-text-color:
 * option-group-tiny-start-padding:
 * option-group-small-start-padding:
 * option-group-medium-start-padding:
 * option-group-large-start-padding:
 * option-group-giant-start-padding:
 **/
export class NbOptionGroupComponent {
    constructor() {
        this.destroy$ = new Subject();
        this._disabled = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
        if (this.options) {
            this.updateOptionsDisabledState();
        }
    }
    get disabledAttribute() {
        return this.disabled ? '' : null;
    }
    ngAfterContentInit() {
        if (this.options.length) {
            this.asyncUpdateOptionsDisabledState();
        }
        this.options.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.asyncUpdateOptionsDisabledState());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Sets disabled state for each option to current group disabled state.
     */
    updateOptionsDisabledState() {
        this.options.forEach((option) => option.setDisabledByGroupState(this.disabled));
    }
    /**
     * Updates options disabled state after promise resolution.
     * This way change detection will be triggered after options state updated.
     * Use this method when updating options during change detection run (e.g. QueryList.changes, lifecycle hooks).
     */
    asyncUpdateOptionsDisabledState() {
        // Wrap Promise into Observable with `takeUntil(this.destroy$)` to prevent update if component destroyed.
        from(Promise.resolve())
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.updateOptionsDisabledState());
    }
}
NbOptionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-option-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <span class="option-group-title">{{ title }}</span>
    <ng-content select="nb-option, ng-container"></ng-content>
  `,
                styles: [":host{display:block}.option-group-title{display:block}\n"]
            },] }
];
NbOptionGroupComponent.propDecorators = {
    title: [{ type: Input }],
    disabled: [{ type: Input }],
    disabledAttribute: [{ type: HostBinding, args: ['attr.disabled',] }],
    options: [{ type: ContentChildren, args: [NbOptionComponent, { descendants: true },] }]
};
//# sourceMappingURL=option-group.component.js.map