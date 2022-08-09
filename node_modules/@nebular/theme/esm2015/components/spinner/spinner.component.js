/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
/**
 * Styled spinner component
 *
 * @styles
 *
 * spinner-text-color:
 * spinner-text-font-family:
 * spinner-text-font-size:
 * spinner-text-font-weight:
 * spinner-text-line-height:
 * spinner-basic-background-color:
 * spinner-basic-circle-filled-color:
 * spinner-basic-circle-empty-color:
 * spinner-primary-background-color:
 * spinner-primary-circle-filled-color:
 * spinner-primary-circle-empty-color:
 * spinner-info-background-color:
 * spinner-info-circle-filled-color:
 * spinner-info-circle-empty-color:
 * spinner-success-background-color:
 * spinner-success-circle-filled-color:
 * spinner-success-circle-empty-color:
 * spinner-warning-background-color:
 * spinner-warning-circle-filled-color:
 * spinner-warning-circle-empty-color:
 * spinner-danger-background-color:
 * spinner-danger-circle-filled-color:
 * spinner-danger-circle-empty-color:
 * spinner-control-background-color:
 * spinner-control-circle-filled-color:
 * spinner-control-circle-empty-color:
 * spinner-height-tiny:
 * spinner-height-small:
 * spinner-height-medium:
 * spinner-height-large:
 * spinner-height-giant:
 */
export class NbSpinnerComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Loading text that is shown near the icon
         * @type string
         */
        this.message = 'Loading...';
        /**
         * Spinner size, available sizes:
         * tiny, small, medium, large, giant
         * @param {string} value
         */
        this.size = 'medium';
        /**
         * Spinner status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
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
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
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
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-spinner',
                template: `
    <span class="spin-circle"></span>
    <span class="message" *ngIf="message">{{ message }}</span>
  `,
                styles: [":host{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:flex;justify-content:center;align-items:center;visibility:visible}:host .spin-circle{animation:spin 0.8s infinite linear;border-radius:50%;border-style:solid;border-width:0.125em;width:1em;height:1em}:host .message{margin-left:0.5rem}\n"]
            },] }
];
NbSpinnerComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbSpinnerComponent.propDecorators = {
    message: [{ type: Input }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=spinner.component.js.map