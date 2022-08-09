/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, ViewChild, ElementRef, Renderer2, } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
import { convertToBoolProperty } from '../helpers';
/**
 * The `NbRadioComponent` provides the same functionality as native `<input type="radio">`
 * with Nebular styles and animations.
 *
 * @stacked-example(Showcase, radio/radio-showcase.component)
 *
 * ### Installation
 *
 * Import `NbRadioModule` to your feature module.
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRadioModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * Radio buttons should be wrapped in `nb-radio-group` to provide form bindings.
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * You can disable some radios in the group using a `disabled` attribute.
 *
 * @stacked-example(Disabled, radio/radio-disabled.component)
 *
 *
 * @styles
 *
 * radio-width:
 * radio-height:
 * radio-border-style:
 * radio-border-width:
 * radio-text-font-family:
 * radio-text-font-size:
 * radio-text-font-weight:
 * radio-text-line-height:
 * radio-outline-color:
 * radio-outline-width:
 * radio-basic-text-color:
 * radio-basic-border-color:
 * radio-basic-background-color:
 * radio-basic-checked-background-color:
 * radio-basic-checked-border-color:
 * radio-basic-inner-circle-color:
 * radio-basic-focus-border-color:
 * radio-basic-focus-inner-circle-color:
 * radio-basic-hover-background-color:
 * radio-basic-hover-border-color:
 * radio-basic-hover-inner-circle-color:
 * radio-basic-hover-checked-background-color:
 * radio-basic-active-border-color:
 * radio-basic-active-inner-circle-color:
 * radio-basic-disabled-background-color:
 * radio-basic-disabled-border-color:
 * radio-basic-disabled-text-color:
 * radio-basic-disabled-checked-background-color:
 * radio-basic-disabled-checked-border-color:
 * radio-basic-disabled-checked-inner-circle-color:
 * radio-primary-text-color:
 * radio-primary-border-color:
 * radio-primary-background-color:
 * radio-primary-checked-background-color:
 * radio-primary-checked-border-color:
 * radio-primary-inner-circle-color:
 * radio-primary-focus-border-color:
 * radio-primary-focus-inner-circle-color:
 * radio-primary-hover-background-color:
 * radio-primary-hover-border-color:
 * radio-primary-hover-inner-circle-color:
 * radio-primary-hover-checked-background-color:
 * radio-primary-active-border-color:
 * radio-primary-active-inner-circle-color:
 * radio-primary-disabled-background-color:
 * radio-primary-disabled-border-color:
 * radio-primary-disabled-text-color:
 * radio-primary-disabled-checked-background-color:
 * radio-primary-disabled-checked-border-color:
 * radio-primary-disabled-checked-inner-circle-color:
 * radio-success-text-color:
 * radio-success-border-color:
 * radio-success-background-color:
 * radio-success-checked-background-color:
 * radio-success-checked-border-color:
 * radio-success-inner-circle-color:
 * radio-success-focus-border-color:
 * radio-success-focus-inner-circle-color:
 * radio-success-hover-background-color:
 * radio-success-hover-border-color:
 * radio-success-hover-inner-circle-color:
 * radio-success-hover-checked-background-color:
 * radio-success-active-border-color:
 * radio-success-active-inner-circle-color:
 * radio-success-disabled-background-color:
 * radio-success-disabled-border-color:
 * radio-success-disabled-text-color:
 * radio-success-disabled-checked-background-color:
 * radio-success-disabled-checked-border-color:
 * radio-success-disabled-checked-inner-circle-color:
 * radio-info-text-color:
 * radio-info-border-color:
 * radio-info-background-color:
 * radio-info-checked-background-color:
 * radio-info-checked-border-color:
 * radio-info-inner-circle-color:
 * radio-info-focus-border-color:
 * radio-info-focus-inner-circle-color:
 * radio-info-hover-background-color:
 * radio-info-hover-border-color:
 * radio-info-hover-inner-circle-color:
 * radio-info-hover-checked-background-color:
 * radio-info-active-border-color:
 * radio-info-active-inner-circle-color:
 * radio-info-disabled-background-color:
 * radio-info-disabled-border-color:
 * radio-info-disabled-text-color:
 * radio-info-disabled-checked-background-color:
 * radio-info-disabled-checked-border-color:
 * radio-info-disabled-checked-inner-circle-color:
 * radio-warning-text-color:
 * radio-warning-border-color:
 * radio-warning-background-color:
 * radio-warning-checked-background-color:
 * radio-warning-checked-border-color:
 * radio-warning-inner-circle-color:
 * radio-warning-focus-border-color:
 * radio-warning-focus-inner-circle-color:
 * radio-warning-hover-background-color:
 * radio-warning-hover-border-color:
 * radio-warning-hover-inner-circle-color:
 * radio-warning-hover-checked-background-color:
 * radio-warning-active-border-color:
 * radio-warning-active-inner-circle-color:
 * radio-warning-disabled-background-color:
 * radio-warning-disabled-border-color:
 * radio-warning-disabled-text-color:
 * radio-warning-disabled-checked-background-color:
 * radio-warning-disabled-checked-border-color:
 * radio-warning-disabled-checked-inner-circle-color:
 * radio-danger-text-color:
 * radio-danger-border-color:
 * radio-danger-background-color:
 * radio-danger-checked-background-color:
 * radio-danger-checked-border-color:
 * radio-danger-inner-circle-color:
 * radio-danger-focus-border-color:
 * radio-danger-focus-inner-circle-color:
 * radio-danger-hover-background-color:
 * radio-danger-hover-border-color:
 * radio-danger-hover-inner-circle-color:
 * radio-danger-hover-checked-background-color:
 * radio-danger-active-border-color:
 * radio-danger-active-inner-circle-color:
 * radio-danger-disabled-background-color:
 * radio-danger-disabled-border-color:
 * radio-danger-disabled-text-color:
 * radio-danger-disabled-checked-background-color:
 * radio-danger-disabled-checked-border-color:
 * radio-danger-disabled-checked-inner-circle-color:
 * radio-control-text-color:
 * radio-control-background-color:
 * radio-control-border-color:
 * radio-control-checked-background-color:
 * radio-control-checked-border-color:
 * radio-control-inner-circle-color:
 * radio-control-focus-border-color:
 * radio-control-focus-inner-circle-color:
 * radio-control-hover-background-color:
 * radio-control-hover-border-color:
 * radio-control-hover-inner-circle-color:
 * radio-control-hover-checked-background-color:
 * radio-control-active-border-color:
 * radio-control-active-inner-circle-color:
 * radio-control-disabled-background-color:
 * radio-control-disabled-border-color:
 * radio-control-disabled-text-color:
 * radio-control-disabled-checked-background-color:
 * radio-control-disabled-checked-border-color:
 * radio-control-disabled-checked-inner-circle-color:
 * */
export class NbRadioComponent {
    constructor(cd, renderer, statusService) {
        this.cd = cd;
        this.renderer = renderer;
        this.statusService = statusService;
        this._checked = false;
        this._disabled = false;
        this.status = 'basic';
        this.valueChange = new EventEmitter();
        this.blur = new EventEmitter();
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (this._name !== value) {
            this._name = value;
        }
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        const boolValue = convertToBoolProperty(value);
        if (this._checked !== boolValue) {
            this._checked = boolValue;
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        const boolValue = convertToBoolProperty(disabled);
        if (this._disabled !== boolValue) {
            this._disabled = boolValue;
        }
    }
    get isPrimary() {
        return this.status === 'primary';
    }
    get isSuccess() {
        return this.status === 'success';
    }
    get isWarning() {
        return this.status === 'warning';
    }
    get isDanger() {
        return this.status === 'danger';
    }
    get isInfo() {
        return this.status === 'info';
    }
    get isBasic() {
        return this.status === 'basic';
    }
    get isControl() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    onChange(event) {
        event.stopPropagation();
        this.checked = true;
        this.valueChange.emit(this.value);
    }
    onClick(event) {
        event.stopPropagation();
    }
    /*
     * @docs-private
     * We use this method when setting radio inputs from radio group component.
     * Otherwise Angular won't detect changes in radio template as cached last rendered
     * value didn't updated.
     **/
    _markForCheck() {
        this.cd.markForCheck();
    }
    /*
     * @docs-private
     * Use this method when setting radio name from radio group component.
     * In case option 'name' isn't set on nb-radio component we need to set name
     * right away, so it won't overlap with options without names from other radio
     * groups. Otherwise they all would have same name and will be considered as
     * options from one group so only the last option will stay selected.
     **/
    _setName(name) {
        this.name = name;
        if (this.input) {
            this.renderer.setProperty(this.input.nativeElement, 'name', name);
        }
    }
}
NbRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-radio',
                template: `
    <label>
      <input
        #input
        type="radio"
        class="native-input visually-hidden"
        [name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
        (click)="onClick($event)">
      <span class="outer-circle"></span>
      <span class="inner-circle"></span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;position:relative}:host label{display:inline-flex;margin:0;min-height:inherit;padding:0.375rem 0;align-items:center}[dir=ltr] :host label{padding-right:1.5rem}[dir=rtl] :host label{padding-left:1.5rem}:host .outer-circle,:host .inner-circle{border-radius:50%;position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] :host .outer-circle,[dir=ltr] :host .inner-circle{left:0}[dir=rtl] :host .outer-circle,[dir=rtl] :host .inner-circle{right:0}:host .inner-circle{transform:translateY(-50%) scale(0.6)}[dir=ltr] :host .text{padding-left:.5rem}[dir=rtl] :host .text{padding-right:.5rem}\n"]
            },] }
];
NbRadioComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NbStatusService }
];
NbRadioComponent.propDecorators = {
    name: [{ type: Input }],
    checked: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    status: [{ type: Input }],
    valueChange: [{ type: Output }],
    blur: [{ type: Output }],
    input: [{ type: ViewChild, args: ['input', { read: ElementRef },] }],
    isPrimary: [{ type: HostBinding, args: ['class.status-primary',] }],
    isSuccess: [{ type: HostBinding, args: ['class.status-success',] }],
    isWarning: [{ type: HostBinding, args: ['class.status-warning',] }],
    isDanger: [{ type: HostBinding, args: ['class.status-danger',] }],
    isInfo: [{ type: HostBinding, args: ['class.status-info',] }],
    isBasic: [{ type: HostBinding, args: ['class.status-basic',] }],
    isControl: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=radio.component.js.map