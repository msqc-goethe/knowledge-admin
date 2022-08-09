/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { from, merge, Subject } from 'rxjs';
import { debounceTime, filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NbStatusService } from '../../services/status.service';
import { convertToBoolProperty } from '../helpers';
import { NbButton } from '../button/base-button';
import { NbButtonToggleDirective } from './button-toggle.directive';
/**
 * `<nb-button-group>` visually groups buttons together and allow to control buttons properties and the state as a
 * group.
 * @stacked-example(Button Group Showcase, button-group/button-group-showcase.component)
 *
 * ### Installation
 *
 * Import `NbButtonGroupModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbButtonGroupModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * You can use `<nb-button-group>` to group a series of `[nbButton]` or `[nbButtonToggle]` components.
 * @stacked-example(Button and Button Toggle Groups, button-group/button-and-button-toggle-groups.component)
 *
 * For a group of multiple `[nbButtonToggle]` you also can control multi-selection behavior. By default, the group
 * component allows only one pressed button toggle at a time (similar to the radio group). To be able to keep multiple
 * toggles pressed, you need to add `multiple` attributes to the `<nb-button-toggle>`.
 * @stacked-example(Button Group Multiple, button-group/button-group-multiple.component)
 *
 * To know which buttons are currently pressed listen to `(valueChange)` on the `nb-button-group`. Event
 * contains an array of values of currently pressed button toggles. You can assign a value to the
 * `[nbButtonToggle]` via the `value` input.
 * @stacked-example(Button Group Value Change, button-group/button-group-value-change.component)
 *
 * To disable a group of buttons, add a `disabled` attribute to the `<nb-button-group>`.
 * @stacked-example(Button Group Disabled, button-group/button-group-disabled.component)
 *
 * The group component controls all visual attributes of buttons such as `appearance`, `status`, `size`, `shape`.
 * You can change it via the appropriate attributes.
 *
 * Button group appearances:
 * @stacked-example(Button Group Appearances, button-group/button-group-appearances.component)
 *
 * Button group statuses:
 * @stacked-example(Button Group Statuses, button-group/button-group-statuses.component)
 *
 * Button group sizes:
 * @stacked-example(Button Group Sizes, button-group/button-group-sizes.component)
 *
 * Buttons group shapes:
 * @additional-example(Button Group Shapes, button-group/button-group-shapes.component)
 *
 * @styles
 *
 * button-group-filled-button-basic-text-color:
 * button-group-filled-button-primary-text-color:
 * button-group-filled-button-success-text-color:
 * button-group-filled-button-info-text-color:
 * button-group-filled-button-warning-text-color:
 * button-group-filled-button-danger-text-color:
 * button-group-filled-button-control-text-color:
 * button-group-filled-basic-divider-color:
 * button-group-filled-primary-divider-color:
 * button-group-filled-success-divider-color:
 * button-group-filled-info-divider-color:
 * button-group-filled-warning-divider-color:
 * button-group-filled-danger-divider-color:
 * button-group-filled-control-divider-color:
 * button-group-ghost-divider-color:
 **/
export class NbButtonGroupComponent {
    constructor(cd, statusService) {
        this.cd = cd;
        this.statusService = statusService;
        this.lastEmittedValue = [];
        this.destroy$ = new Subject();
        this.buttonsChange$ = new Subject();
        /**
         * Button group size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Button group status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = 'basic';
        /**
         * Button group shapes: `rectangle`, `round`, `semi-round`
         */
        this.shape = 'rectangle';
        /**
         * Button group appearance: `filled`, `outline`, `ghost`
         */
        this.appearance = 'filled';
        this._disabled = false;
        this._multiple = false;
        /**
         * Emits when `nbButtonToggle` pressed state change. `$event` contains an array of the currently pressed button
         * toggles.
         */
        this.valueChange = new EventEmitter();
        this.role = 'group';
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (this.disabled !== convertToBoolProperty(value)) {
            this._disabled = !this.disabled;
        }
    }
    /**
     * Allows to keep multiple button toggles pressed. Off by default.
     */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = convertToBoolProperty(value);
    }
    /**
     * Sets `filled` appearance
     */
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    /**
     * Sets `outline` appearance
     */
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    /**
     * Sets `ghost` appearance
     */
    get ghost() {
        return this.appearance === 'ghost';
    }
    set ghost(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'ghost';
        }
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngOnChanges({ size, status, shape, multiple, filled, outline, ghost, disabled }) {
        var _a;
        if (size || status || shape || multiple || filled || outline || ghost || disabled) {
            this.syncButtonsProperties(((_a = this.buttons) === null || _a === void 0 ? void 0 : _a.toArray()) || []);
        }
    }
    ngAfterContentInit() {
        this.buttonsChange$
            .pipe(takeUntil(this.destroy$))
            .subscribe((buttons) => {
            this.listenButtonPressedState(buttons);
            this.syncButtonsProperties(buttons);
        });
        this.buttons.changes
            .pipe(
        // `buttons.changes` emit during change detection run after projected content already was initialized.
        // So at this time, it's too late to update projected buttons properties as updating bindings after
        // initialization doesn't make sense. Changes won't be picked up and should cause an "expression changed" error.
        // Instead, we wrap the new buttons list into a promise to defer update to the following microtask and also to
        // trigger change detection one more time.
        switchMap((buttons) => from(Promise.resolve(buttons.toArray()))), takeUntil(this.destroy$))
            .subscribe(this.buttonsChange$);
        this.buttonsChange$.next(this.buttons.toArray());
    }
    listenButtonPressedState(buttons) {
        const toggleButtons = buttons.filter((button) => {
            return button instanceof NbButtonToggleDirective;
        });
        if (!toggleButtons.length) {
            return;
        }
        const buttonsPressedChange$ = toggleButtons
            .map((button) => button.pressedChange$);
        merge(...buttonsPressedChange$)
            .pipe(filter(({ pressed }) => !this.multiple && pressed), takeUntil(merge(this.buttonsChange$, this.destroy$)))
            .subscribe(({ source }) => {
            toggleButtons
                .filter((button) => button !== source)
                .forEach((button) => button._updatePressed(false));
        });
        merge(...buttonsPressedChange$)
            .pipe(
        // Use startWith to emit if some buttons are initially pressed.
        startWith(''), 
        // Use debounce to emit change once when pressed state change in multiple button toggles.
        debounceTime(0), takeUntil(merge(this.buttonsChange$, this.destroy$)))
            .subscribe(() => this.emitCurrentValue(toggleButtons));
    }
    syncButtonsProperties(buttons) {
        buttons.forEach((button) => {
            button.updateProperties({
                appearance: this.appearance,
                size: this.size,
                status: this.status,
                shape: this.shape,
                disabled: this.disabled,
            });
        });
    }
    emitCurrentValue(toggleButtons) {
        const pressedToggleValues = toggleButtons
            .filter((b) => b.pressed && typeof b.value !== 'undefined')
            .map((b) => b.value);
        // Prevent multiple emissions of empty value.
        if (pressedToggleValues.length === 0 && this.lastEmittedValue.length === 0) {
            return;
        }
        this.valueChange.emit(pressedToggleValues);
        this.lastEmittedValue = pressedToggleValues;
    }
}
NbButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-button-group',
                template: `
    <ng-content></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbButtonGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NbStatusService }
];
NbButtonGroupComponent.propDecorators = {
    buttons: [{ type: ContentChildren, args: [NbButton,] }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    shape: [{ type: Input }],
    appearance: [{ type: Input }],
    disabled: [{ type: Input }],
    multiple: [{ type: Input }],
    filled: [{ type: Input }],
    outline: [{ type: Input }],
    ghost: [{ type: Input }],
    valueChange: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=button-group.component.js.map