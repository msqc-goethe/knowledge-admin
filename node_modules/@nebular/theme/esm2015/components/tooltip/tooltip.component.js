/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NbStatusService } from '../../services/status.service';
import { NbPosition } from '../cdk/overlay/overlay-position';
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-icon-height:
 * tooltip-icon-width:
 * tooltip-max-width:
 * tooltip-basic-background-color:
 * tooltip-basic-border-color:
 * tooltip-basic-text-color:
 * tooltip-primary-background-color:
 * tooltip-primary-border-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-border-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-border-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-border-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-border-color:
 * tooltip-danger-text-color:
 * tooltip-control-background-color:
 * tooltip-control-border-color:
 * tooltip-control-text-color:
 * tooltip-shadow:
 */
export class NbTooltipComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Popover position relatively host element.
         * */
        this.position = NbPosition.TOP;
        this.context = {};
    }
    get binding() {
        return `${this.position} ${this.statusClass}`;
    }
    get show() {
        return true;
    }
    get statusClass() {
        if (this.context.status) {
            return this.statusService.getStatusClass(this.context.status);
        }
        return '';
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent() { }
}
NbTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tooltip',
                template: `
    <span class="arrow"></span>
    <div class="content">
      <nb-icon *ngIf="context?.icon" [config]="context.icon"></nb-icon>
      <span *ngIf="content">{{ content }}</span>
    </div>
  `,
                animations: [
                    trigger('showTooltip', [
                        state('in', style({ opacity: 1 })),
                        transition('void => *', [
                            style({ opacity: 0 }),
                            animate(100),
                        ]),
                        transition('* => void', [
                            animate(100, style({ opacity: 0 })),
                        ]),
                    ]),
                ],
                styles: [":host{z-index:10000}:host .content{display:flex;align-items:center}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host nb-icon+span{margin-left:0.5rem}:host.right nb-icon+span{margin-right:0.5rem}:host .arrow{border-left:6px solid transparent;border-right:6px solid transparent}:host(.bottom) .arrow{top:-6px;left:calc(50% - 6px)}:host(.bottom-start) .arrow{top:-6px}[dir=ltr] :host(.bottom-start) .arrow{right:6px}[dir=rtl] :host(.bottom-start) .arrow{left:6px}:host(.bottom-end) .arrow{top:-6px}[dir=ltr] :host(.bottom-end) .arrow{left:6px}[dir=rtl] :host(.bottom-end) .arrow{right:6px}:host(.left) .arrow,:host(.start) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.left) .arrow,[dir=ltr] :host(.start) .arrow{right:-8px;transform:rotate(90deg)}[dir=rtl] :host(.left) .arrow,[dir=rtl] :host(.start) .arrow{left:-8px;transform:rotate(270deg)}:host(.start-top) .arrow{right:-8px;bottom:6px;transform:rotate(90deg)}:host(.start-bottom) .arrow{right:-8px;top:6px;transform:rotate(90deg)}:host(.top) .arrow{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}:host(.top-start) .arrow{bottom:calc(-1 * 6px + 1px);transform:rotate(180deg)}[dir=ltr] :host(.top-start) .arrow{right:6px}[dir=rtl] :host(.top-start) .arrow{left:6px}:host(.top-end) .arrow{bottom:calc(-6px + 1px);transform:rotate(180deg)}[dir=ltr] :host(.top-end) .arrow{left:6px}[dir=rtl] :host(.top-end) .arrow{right:6px}:host(.right) .arrow,:host(.end) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.right) .arrow,[dir=ltr] :host(.end) .arrow{left:-8px;transform:rotate(270deg)}[dir=rtl] :host(.right) .arrow,[dir=rtl] :host(.end) .arrow{right:-8px;transform:rotate(90deg)}:host(.end-top) .arrow{left:calc(-6px - 6px / 2.5);bottom:6px;transform:rotate(270deg)}:host(.end-bottom) .arrow{left:calc(-6px - 6px / 2.5);top:6px;transform:rotate(270deg)}\n"]
            },] }
];
NbTooltipComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbTooltipComponent.propDecorators = {
    content: [{ type: Input }],
    position: [{ type: Input }],
    binding: [{ type: HostBinding, args: ['class',] }],
    show: [{ type: HostBinding, args: ['@showTooltip',] }],
    context: [{ type: Input }]
};
//# sourceMappingURL=tooltip.component.js.map