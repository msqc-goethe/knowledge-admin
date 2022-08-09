/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, Optional, Output, NgZone, Renderer2, } from '@angular/core';
import { Subject } from 'rxjs';
// Component class scoped counter for aria attributes.
let lastOptionId = 0;
import { convertToBoolProperty } from '../helpers';
import { NB_SELECT_INJECTION_TOKEN } from '../select/select-injection-tokens';
/**
 * NbOptionComponent
 *
 * @styles
 *
 * option-background-color:
 * option-text-color:
 * option-text-font-family:
 * option-hover-background-color:
 * option-hover-text-color:
 * option-active-background-color:
 * option-active-text-color:
 * option-focus-background-color:
 * option-focus-text-color:
 * option-selected-background-color:
 * option-selected-text-color:
 * option-selected-hover-background-color:
 * option-selected-hover-text-color:
 * option-selected-active-background-color:
 * option-selected-active-text-color:
 * option-selected-focus-background-color:
 * option-selected-focus-text-color:
 * option-disabled-background-color:
 * option-disabled-text-color:
 * option-tiny-text-font-size:
 * option-tiny-text-font-weight:
 * option-tiny-text-line-height:
 * option-tiny-padding:
 * option-small-text-font-size:
 * option-small-text-font-weight:
 * option-small-text-line-height:
 * option-small-padding:
 * option-medium-text-font-size:
 * option-medium-text-font-weight:
 * option-medium-text-line-height:
 * option-medium-padding:
 * option-large-text-font-size:
 * option-large-text-font-weight:
 * option-large-text-line-height:
 * option-large-padding:
 * option-giant-text-font-size:
 * option-giant-text-font-weight:
 * option-giant-text-line-height:
 * option-giant-padding:
 **/
export class NbOptionComponent {
    constructor(parent, elementRef, cd, zone, renderer) {
        this.elementRef = elementRef;
        this.cd = cd;
        this.zone = zone;
        this.renderer = renderer;
        this.disabledByGroup = false;
        this._disabled = false;
        /**
         * Fires value when option selection change.
         * */
        this.selectionChange = new EventEmitter();
        /**
         * Fires when option clicked
         */
        this.click$ = new Subject();
        this.selected = false;
        this.alive = true;
        /**
         * Component scoped id for aria attributes.
         * */
        this.id = `nb-option-${lastOptionId++}`;
        this._active = false;
        this.parent = parent;
    }
    get disabled() {
        return this._disabled || this.disabledByGroup;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    get click() {
        return this.click$.asObservable();
    }
    ngOnDestroy() {
        this.alive = false;
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.elementRef.nativeElement, 'nb-transition');
        }));
    }
    /**
     * Determines should we render checkbox.
     * */
    get withCheckbox() {
        return this.multiple && this.value != null;
    }
    get content() {
        return this.elementRef.nativeElement.textContent;
    }
    // TODO: replace with isShowCheckbox property to control this behaviour outside, issues/1965
    get multiple() {
        // We check parent existing because parent can be NbSelectComponent or
        // NbAutocomplete and `miltiple` property exists only in NbSelectComponent
        return this.parent ? this.parent.multiple : false;
    }
    get selectedClass() {
        return this.selected;
    }
    get disabledAttribute() {
        return this.disabled ? '' : null;
    }
    get tabindex() {
        return '-1';
    }
    get activeClass() {
        return this._active;
    }
    ;
    onClick(event) {
        this.click$.next(this);
        // Prevent scroll on space click, etc.
        event.preventDefault();
    }
    select() {
        this.setSelection(true);
    }
    deselect() {
        this.setSelection(false);
    }
    /**
     * Sets disabled by group state and marks component for check.
     */
    setDisabledByGroupState(disabled) {
        // Check if the component still alive as the option group defer method call so the component may become destroyed.
        if (this.disabledByGroup !== disabled && this.alive) {
            this.disabledByGroup = disabled;
            this.cd.markForCheck();
        }
    }
    setSelection(selected) {
        /**
         * In case of changing options in runtime the reference to the selected option will be kept in select component.
         * This may lead to exceptions with detecting changes in destroyed component.
         *
         * Also Angular can call writeValue on destroyed view (select implements ControlValueAccessor).
         * angular/angular#27803
         * */
        if (this.alive && this.selected !== selected) {
            this.selected = selected;
            this.selectionChange.emit(this);
            this.cd.markForCheck();
        }
    }
    focus() {
        this.elementRef.nativeElement.focus();
    }
    getLabel() {
        return this.content;
    }
    setActiveStyles() {
        this._active = true;
        this.cd.markForCheck();
    }
    setInactiveStyles() {
        this._active = false;
        this.cd.markForCheck();
    }
}
NbOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <nb-checkbox *ngIf="withCheckbox"
                 [checked]="selected"
                 [disabled]="disabled"
                 aria-hidden="true">
    </nb-checkbox>
    <ng-content></ng-content>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex}:host:hover{cursor:pointer}:host nb-checkbox{display:flex;pointer-events:none}[dir=ltr] :host nb-checkbox{margin-right:.5rem}[dir=rtl] :host nb-checkbox{margin-left:.5rem}:host nb-checkbox ::ng-deep .label{padding:0}:host([disabled]){pointer-events:none}:host(.nb-transition){transition-duration:0.15s;transition-property:background-color,color;transition-timing-function:ease-in}\n"]
            },] }
];
NbOptionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_SELECT_INJECTION_TOKEN,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
NbOptionComponent.propDecorators = {
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    selectionChange: [{ type: Output }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    multiple: [{ type: HostBinding, args: ['class.multiple',] }],
    selectedClass: [{ type: HostBinding, args: ['class.selected',] }],
    disabledAttribute: [{ type: HostBinding, args: ['attr.disabled',] }],
    tabindex: [{ type: HostBinding, args: ['tabIndex',] }],
    activeClass: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }, { type: HostListener, args: ['keydown.space', ['$event'],] }, { type: HostListener, args: ['keydown.enter', ['$event'],] }]
};
//# sourceMappingURL=option.component.js.map