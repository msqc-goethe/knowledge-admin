/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
import { convertToBoolProperty } from '../helpers';
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-border-radius:
 * badge-text-font-family:
 * badge-text-font-size:
 * badge-text-font-weight:
 * badge-text-line-height:
 * badge-padding:
 * badge-basic-background-color:
 * badge-basic-text-color:
 * badge-primary-background-color:
 * badge-primary-text-color:
 * badge-success-background-color:
 * badge-success-text-color:
 * badge-info-background-color:
 * badge-info-text-color:
 * badge-warning-background-color:
 * badge-warning-text-color:
 * badge-danger-background-color:
 * badge-danger-text-color:
 * badge-control-background-color:
 * badge-control-text-color:
 */
export class NbBadgeComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Text to display
         * @type string
         */
        this.text = '';
        this._defaultPosition = 'top right';
        this._position = this._defaultPosition;
        /**
         * Badge status (adds specific styles):
         * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
         */
        this.status = 'basic';
    }
    /**
     * Badge position
     *
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value || this._defaultPosition;
    }
    /**
     * Shows badge as a dot. No text is shown.
     * @type boolean
     */
    get dotMode() {
        return this._dotMode;
    }
    set dotMode(value) {
        this._dotMode = convertToBoolProperty(value);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
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
    get top() {
        return this.position.includes('top');
    }
    get right() {
        return this.position.includes('right');
    }
    get bottom() {
        return this.position.includes('bottom');
    }
    get left() {
        return this.position.includes('left');
    }
    get start() {
        return this.position.includes('start');
    }
    get end() {
        return this.position.includes('end');
    }
    get center() {
        return this.position.includes('center');
    }
}
NbBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-badge',
                template: `{{dotMode ? '' : text}}`,
                styles: [":host{position:absolute;text-align:center;white-space:nowrap;vertical-align:baseline}:host(.position-top){top:0}:host(.position-right){right:0}:host(.position-bottom){bottom:0}:host(.position-left){left:0}:host(.position-center){top:50%;transform:translateY(-50%)}[dir=ltr] :host(.position-start){left:0}[dir=rtl] :host(.position-start){right:0}[dir=ltr] :host(.position-end){right:0}[dir=rtl] :host(.position-end){left:0}\n"]
            },] }
];
NbBadgeComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbBadgeComponent.propDecorators = {
    text: [{ type: Input }],
    position: [{ type: Input }],
    dotMode: [{ type: Input }, { type: HostBinding, args: ['class.dot-mode',] }],
    status: [{ type: Input }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    top: [{ type: HostBinding, args: ['class.position-top',] }],
    right: [{ type: HostBinding, args: ['class.position-right',] }],
    bottom: [{ type: HostBinding, args: ['class.position-bottom',] }],
    left: [{ type: HostBinding, args: ['class.position-left',] }],
    start: [{ type: HostBinding, args: ['class.position-start',] }],
    end: [{ type: HostBinding, args: ['class.position-end',] }],
    center: [{ type: HostBinding, args: ['class.position-center',] }]
};
//# sourceMappingURL=badge.component.js.map