/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2, } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-border-style:
 * toastr-border-width:
 * toastr-border-radius:
 * toastr-padding:
 * toastr-shadow:
 * toastr-text-font-family:
 * toastr-text-font-size:
 * toastr-text-font-weight:
 * toastr-text-line-height:
 * toastr-title-text-font-family:
 * toastr-title-text-font-size:
 * toastr-title-text-font-weight:
 * toastr-title-text-line-height:
 * toastr-basic-background-color:
 * toastr-basic-border-color:
 * toastr-basic-text-color:
 * toastr-icon-basic-background-color:
 * toastr-icon-basic-color:
 * toastr-destroyable-basic-hover-background-color:
 * toastr-destroyable-basic-hover-border-color:
 * toastr-primary-background-color:
 * toastr-primary-border-color:
 * toastr-primary-text-color:
 * toastr-icon-primary-background-color:
 * toastr-icon-primary-color:
 * toastr-destroyable-primary-hover-background-color:
 * toastr-destroyable-primary-hover-border-color:
 * toastr-success-background-color:
 * toastr-success-border-color:
 * toastr-success-text-color:
 * toastr-icon-success-background-color:
 * toastr-icon-success-color:
 * toastr-destroyable-success-hover-background-color:
 * toastr-destroyable-success-hover-border-color:
 * toastr-info-background-color:
 * toastr-info-border-color:
 * toastr-info-text-color:
 * toastr-icon-info-background-color:
 * toastr-icon-info-color:
 * toastr-destroyable-info-hover-background-color:
 * toastr-destroyable-info-hover-border-color:
 * toastr-warning-background-color:
 * toastr-warning-border-color:
 * toastr-warning-text-color:
 * toastr-icon-warning-background-color:
 * toastr-icon-warning-color:
 * toastr-destroyable-warning-hover-background-color:
 * toastr-destroyable-warning-hover-border-color:
 * toastr-danger-background-color:
 * toastr-danger-border-color:
 * toastr-danger-text-color:
 * toastr-icon-danger-background-color:
 * toastr-icon-danger-color:
 * toastr-destroyable-danger-hover-background-color:
 * toastr-destroyable-danger-hover-border-color:
 * toastr-control-background-color:
 * toastr-control-border-color:
 * toastr-control-text-color:
 * toastr-icon-control-background-color:
 * toastr-icon-control-color:
 * toastr-destroyable-control-hover-background-color:
 * toastr-destroyable-control-hover-border-color:
 * */
export class NbToastComponent {
    constructor(renderer, elementRef, statusService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.statusService = statusService;
        this.destroy = new EventEmitter();
    }
    get success() {
        return this.toast.config.status === 'success';
    }
    get info() {
        return this.toast.config.status === 'info';
    }
    get warning() {
        return this.toast.config.status === 'warning';
    }
    get primary() {
        return this.toast.config.status === 'primary';
    }
    get danger() {
        return this.toast.config.status === 'danger';
    }
    get basic() {
        return this.toast.config.status === 'basic';
    }
    get control() {
        return this.toast.config.status === 'control';
    }
    get destroyByClick() {
        return this.toast.config.destroyByClick;
    }
    get hasIcon() {
        const { icon } = this.toast.config;
        if (typeof icon === 'string') {
            return true;
        }
        return !!(icon && icon.icon);
    }
    get customIcon() {
        return !!this.icon;
    }
    get icon() {
        return this.toast.config.icon;
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.toast.config.status)) {
            return [this.statusService.getStatusClass(this.toast.config.status)];
        }
        return [];
    }
    onClick() {
        this.destroy.emit();
    }
    ngOnInit() {
        if (this.toast.config.toastClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.toast.config.toastClass);
        }
    }
}
NbToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-toast',
                template: "<div class=\"icon-container\" *ngIf=\"hasIcon && icon\">\n  <nb-icon [config]=\"icon\"></nb-icon>\n</div>\n<div class=\"content-container\">\n  <span class=\"title subtitle\">{{ toast.title }}</span>\n  <div class=\"message\">{{ toast.message }}</div>\n</div>\n",
                styles: [":host{display:flex;align-items:center;width:25rem;margin:0.5rem}:host .title{margin-right:0.25rem}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host nb-icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem}\n"]
            },] }
];
NbToastComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NbStatusService }
];
NbToastComponent.propDecorators = {
    toast: [{ type: Input }],
    destroy: [{ type: Output }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    destroyByClick: [{ type: HostBinding, args: ['class.destroy-by-click',] }],
    hasIcon: [{ type: HostBinding, args: ['class.has-icon',] }],
    customIcon: [{ type: HostBinding, args: ['class.custom-icon',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=toast.component.js.map