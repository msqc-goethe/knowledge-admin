/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
import { convertToBoolProperty } from '../helpers';
/**
 * Alert component.
 *
 * Basic alert example:
 * @stacked-example(Showcase, alert/alert-showcase.component)
 *
 * Alert configuration:
 *
 * ```html
 * <nb-alert status="success">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 * ### Installation
 *
 * Import `NbAlertModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAlertModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Alert could additionally have a `close` button when `closable` property is set:
 * ```html
 * <nb-alert status="success" closable (close)="onClose()">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 *
 * Colored alerts could be simply configured by providing a `status` property:
 * @stacked-example(Alert status, alert/alert-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight alert highlight
 * as well as combine it with `status`:
 * @stacked-example(Alert accent, alert/alert-accents.component)
 *
 * And `outline` property:
 * @stacked-example(Outline Alert, alert/alert-outline.component)
 *
 * @additional-example(Multiple Sizes, alert/alert-sizes.component)
 *
 * @styles
 *
 * alert-border-radius:
 * alert-bottom-margin:
 * alert-padding:
 * alert-scrollbar-color:
 * alert-scrollbar-background-color:
 * alert-scrollbar-width:
 * alert-shadow:
 * alert-text-font-family:
 * alert-text-font-size:
 * alert-text-font-weight:
 * alert-text-line-height:
 * alert-closable-start-padding:
 * alert-tiny-height:
 * alert-small-height:
 * alert-medium-height:
 * alert-medium-padding:
 * alert-large-height:
 * alert-giant-height:
 * alert-basic-background-color:
 * alert-basic-text-color:
 * alert-primary-background-color:
 * alert-primary-text-color:
 * alert-success-background-color:
 * alert-success-text-color:
 * alert-info-background-color:
 * alert-info-text-color:
 * alert-warning-background-color:
 * alert-warning-text-color:
 * alert-danger-background-color:
 * alert-danger-text-color:
 * alert-control-background-color:
 * alert-control-text-color:
 * alert-accent-basic-color:
 * alert-accent-primary-color:
 * alert-accent-info-color:
 * alert-accent-success-color:
 * alert-accent-warning-color:
 * alert-accent-danger-color:
 * alert-accent-control-color:
 * alert-outline-width:
 * alert-outline-basic-color:
 * alert-outline-primary-color:
 * alert-outline-info-color:
 * alert-outline-success-color:
 * alert-outline-warning-color:
 * alert-outline-danger-color:
 * alert-outline-control-color:
 */
export class NbAlertComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Alert size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         * Unset by default.
         */
        this.size = '';
        /**
         * Alert status (adds specific styles):
         * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
        /**
         * Alert accent (color of the top border):
         * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
         * Unset by default.
         */
        this.accent = '';
        /**
         * Alert outline (color of the border):
         * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
         * Unset by default.
         */
        this.outline = '';
        this._closable = false;
        /**
         * Emits when chip is removed
         * @type EventEmitter<any>
         */
        this.close = new EventEmitter();
    }
    /**
     * Shows `close` icon
     */
    get closable() {
        return this._closable;
    }
    set closable(value) {
        this._closable = convertToBoolProperty(value);
    }
    /**
     * Emits the removed chip event
     */
    onClose() {
        this.close.emit();
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get primaryAccent() {
        return this.accent === 'primary';
    }
    get successAccent() {
        return this.accent === 'success';
    }
    get infoAccent() {
        return this.accent === 'info';
    }
    get warningAccent() {
        return this.accent === 'warning';
    }
    get dangerAccent() {
        return this.accent === 'danger';
    }
    get basicAccent() {
        return this.accent === 'basic';
    }
    get controlAccent() {
        return this.accent === 'control';
    }
    get primaryOutline() {
        return this.outline === 'primary';
    }
    get successOutline() {
        return this.outline === 'success';
    }
    get infoOutline() {
        return this.outline === 'info';
    }
    get warningOutline() {
        return this.outline === 'warning';
    }
    get dangerOutline() {
        return this.outline === 'danger';
    }
    get basicOutline() {
        return this.outline === 'basic';
    }
    get controlOutline() {
        return this.outline === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-alert',
                template: `
    <button *ngIf="closable" type="button" class="close" aria-label="Close" (click)="onClose()">
      <span aria-hidden="true">&times;</span>
    </button>
    <ng-content></ng-content>
  `,
                styles: [":host{display:flex;flex-direction:column;position:relative}[dir=ltr] :host .close{right:0}[dir=rtl] :host .close{left:0}.close{position:absolute;top:0;color:inherit;background-color:transparent;border:0;appearance:none}\n"]
            },] }
];
NbAlertComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbAlertComponent.propDecorators = {
    size: [{ type: Input }],
    status: [{ type: Input }],
    accent: [{ type: Input }],
    outline: [{ type: Input }],
    closable: [{ type: Input }, { type: HostBinding, args: ['class.closable',] }],
    close: [{ type: Output }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    primaryAccent: [{ type: HostBinding, args: ['class.accent-primary',] }],
    successAccent: [{ type: HostBinding, args: ['class.accent-success',] }],
    infoAccent: [{ type: HostBinding, args: ['class.accent-info',] }],
    warningAccent: [{ type: HostBinding, args: ['class.accent-warning',] }],
    dangerAccent: [{ type: HostBinding, args: ['class.accent-danger',] }],
    basicAccent: [{ type: HostBinding, args: ['class.accent-basic',] }],
    controlAccent: [{ type: HostBinding, args: ['class.accent-control',] }],
    primaryOutline: [{ type: HostBinding, args: ['class.outline-primary',] }],
    successOutline: [{ type: HostBinding, args: ['class.outline-success',] }],
    infoOutline: [{ type: HostBinding, args: ['class.outline-info',] }],
    warningOutline: [{ type: HostBinding, args: ['class.outline-warning',] }],
    dangerOutline: [{ type: HostBinding, args: ['class.outline-danger',] }],
    basicOutline: [{ type: HostBinding, args: ['class.outline-basic',] }],
    controlOutline: [{ type: HostBinding, args: ['class.outline-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=alert.component.js.map