/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgZone, Output, Renderer2, } from '@angular/core';
import { Subject } from 'rxjs';
import { NbStatusService } from '../../services/status.service';
import { convertToBoolProperty } from '../helpers';
import { NbButton } from '../button/base-button';
/**
 * `[nbButtonToggle]` is a directive to add a `pressed` state to a button.
 */
export class NbButtonToggleDirective extends NbButton {
    constructor(renderer, hostElement, cd, zone, statusService) {
        super(renderer, hostElement, cd, zone, statusService);
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
        this._pressedChange$ = new Subject();
        this.appearance = 'filled';
        this._pressed = false;
        /**
         * Emits whenever button pressed state change
         **/
        this.pressedChange = new EventEmitter();
    }
    get pressedChange$() {
        return this._pressedChange$.asObservable();
    }
    /**
     * Controls button pressed state
     **/
    get pressed() {
        return this._pressed;
    }
    set pressed(value) {
        if (this.pressed !== convertToBoolProperty(value)) {
            this._pressed = !this.pressed;
            this.pressedChange.emit(this.pressed);
            this._pressedChange$.next({ source: this, pressed: this.pressed });
        }
    }
    get basic() {
        // By design, all toggle buttons should have a `basic` status when not pressed.
        return !this.pressed;
    }
    get primary() {
        return this.pressed && (this.status === 'basic' || this.status === 'primary');
    }
    get success() {
        return this.pressed && this.status === 'success';
    }
    get info() {
        return this.pressed && this.status === 'info';
    }
    get warning() {
        return this.pressed && this.status === 'warning';
    }
    get danger() {
        return this.pressed && this.status === 'danger';
    }
    get control() {
        return this.pressed && this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    onClick() {
        this.pressed = !this.pressed;
    }
    /**
     * @docs-private
     */
    _updatePressed(value) {
        this.pressed = value;
        this.cd.markForCheck();
    }
}
NbButtonToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[nbButtonToggle]',
                providers: [
                    { provide: NbButton, useExisting: NbButtonToggleDirective },
                ],
                exportAs: 'nbButtonToggle',
            },] }
];
NbButtonToggleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NbStatusService }
];
NbButtonToggleDirective.propDecorators = {
    appearance: [{ type: Input }],
    value: [{ type: Input }],
    pressed: [{ type: Input }, { type: HostBinding, args: ['attr.aria-pressed',] }],
    pressedChange: [{ type: Output }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=button-toggle.directive.js.map