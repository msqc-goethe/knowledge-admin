/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, Input, Output, ViewChild, Renderer2, NgZone, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, Subject, BehaviorSubject, from } from 'rxjs';
import { startWith, switchMap, takeUntil, filter, map, finalize } from 'rxjs/operators';
import { NbStatusService } from '../../services/status.service';
import { NbAdjustment, NbPosition, NbPositionBuilderService, } from '../cdk/overlay/overlay-position';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbTrigger, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbFocusKeyManagerFactoryService } from '../cdk/a11y/focus-key-manager';
import { ESCAPE } from '../cdk/keycodes/keycodes';
import { NB_DOCUMENT } from '../../theme.options';
import { NbOptionComponent } from '../option/option.component';
import { convertToBoolProperty } from '../helpers';
import { NB_SELECT_INJECTION_TOKEN } from './select-injection-tokens';
import { NbFormFieldControl, NbFormFieldControlConfig } from '../form-field/form-field-control';
import { NbFocusMonitor } from '../cdk/a11y/a11y.module';
export class NbSelectLabelComponent {
}
NbSelectLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-select-label',
                template: '<ng-content></ng-content>'
            },] }
];
export function nbSelectFormFieldControlConfigFactory() {
    const config = new NbFormFieldControlConfig();
    config.supportsSuffix = false;
    return config;
}
/**
 * The `NbSelectComponent` provides a capability to select one of the passed items.
 *
 * @stacked-example(Showcase, select/select-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSelectModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSelectModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use it as the multi-select control you have to mark it as `multiple`.
 * In this case, `nb-select` will work only with arrays - accept arrays and propagate arrays.
 *
 * @stacked-example(Multiple, select/select-multiple.component)
 *
 * Items without values will clean the selection. Both `null` and `undefined` values will also clean the selection.
 *
 * @stacked-example(Clean selection, select/select-clean.component)
 *
 * Select may be bounded using `selected` input:
 *
 * ```html
 * <nb-select [(selected)]="selected"></nb-selected>
 * ```
 *
 * Or you can bind control with form controls or ngModel:
 *
 * @stacked-example(Select form binding, select/select-form.component)
 *
 * Options in the select may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, select/select-groups.component)
 *
 * Select may have a placeholder that will be shown when nothing selected:
 *
 * @stacked-example(Placeholder, select/select-placeholder.component)
 *
 * You can disable select, options and whole groups.
 *
 * @stacked-example(Disabled select, select/select-disabled.component)
 *
 * Also, the custom label may be provided in select.
 * This custom label will be used for instead placeholder when something selected.
 *
 * @stacked-example(Custom label, select/select-label.component)
 *
 * Default `nb-select` size is `medium` and status is `basic`.
 * Select is available in multiple colors using `status` property:
 *
 * @stacked-example(Select statuses, select/select-status.component)
 *
 * There are five select sizes:
 *
 * @stacked-example(Select sizes, select/select-sizes.component)
 *
 * And two additional style types - `filled`:
 *
 * @stacked-example(Filled select, select/select-filled.component)
 *
 * and `hero`:
 *
 * @stacked-example(Select colors, select/select-hero.component)
 *
 * Select is available in different shapes, that could be combined with the other properties:
 *
 * @stacked-example(Select shapes, select/select-shapes.component)
 *
 * By default, the component selects options whose values are strictly equal (`===`) with the select value.
 * To change such behavior, pass a custom comparator function to the `compareWith` attribute.
 *
 * @stacked-example(Select custom comparator, select/select-compare-with.component)
 *
 * You can add an additional icon to the select via the `nb-form-field` component:
 * @stacked-example(Select with icon, select/select-icon.component)
 *
 * @additional-example(Interactive, select/select-interactive.component)
 *
 * @styles
 *
 * select-cursor:
 * select-disabled-cursor:
 * select-min-width:
 * select-outline-width:
 * select-outline-color:
 * select-icon-offset:
 * select-text-font-family:
 * select-placeholder-text-font-family:
 * select-tiny-text-font-size:
 * select-tiny-text-font-weight:
 * select-tiny-text-line-height:
 * select-tiny-placeholder-text-font-size:
 * select-tiny-placeholder-text-font-weight:
 * select-tiny-max-width:
 * select-small-text-font-size:
 * select-small-text-font-weight:
 * select-small-text-line-height:
 * select-small-placeholder-text-font-size:
 * select-small-placeholder-text-font-weight:
 * select-small-max-width:
 * select-medium-text-font-size:
 * select-medium-text-font-weight:
 * select-medium-text-line-height:
 * select-medium-placeholder-text-font-size:
 * select-medium-placeholder-text-font-weight:
 * select-medium-max-width:
 * select-large-text-font-size:
 * select-large-text-font-weight:
 * select-large-text-line-height:
 * select-large-placeholder-text-font-size:
 * select-large-placeholder-text-font-weight:
 * select-large-max-width:
 * select-giant-text-font-size:
 * select-giant-text-font-weight:
 * select-giant-text-line-height:
 * select-giant-placeholder-text-font-size:
 * select-giant-placeholder-text-font-weight:
 * select-giant-max-width:
 * select-rectangle-border-radius:
 * select-semi-round-border-radius:
 * select-round-border-radius:
 * select-outline-border-style:
 * select-outline-border-width:
 * select-outline-tiny-padding:
 * select-outline-small-padding:
 * select-outline-medium-padding:
 * select-outline-large-padding:
 * select-outline-giant-padding:
 * select-outline-basic-icon-color:
 * select-outline-basic-text-color:
 * select-outline-basic-placeholder-text-color:
 * select-outline-basic-background-color:
 * select-outline-basic-border-color:
 * select-outline-basic-focus-background-color:
 * select-outline-basic-focus-border-color:
 * select-outline-basic-hover-background-color:
 * select-outline-basic-hover-border-color:
 * select-outline-basic-disabled-background-color:
 * select-outline-basic-disabled-border-color:
 * select-outline-basic-disabled-icon-color:
 * select-outline-basic-disabled-text-color:
 * select-outline-primary-icon-color:
 * select-outline-primary-text-color:
 * select-outline-primary-placeholder-text-color:
 * select-outline-primary-background-color:
 * select-outline-primary-border-color:
 * select-outline-primary-focus-background-color:
 * select-outline-primary-focus-border-color:
 * select-outline-primary-hover-background-color:
 * select-outline-primary-hover-border-color:
 * select-outline-primary-disabled-background-color:
 * select-outline-primary-disabled-border-color:
 * select-outline-primary-disabled-icon-color:
 * select-outline-primary-disabled-text-color:
 * select-outline-success-icon-color:
 * select-outline-success-text-color:
 * select-outline-success-placeholder-text-color:
 * select-outline-success-background-color:
 * select-outline-success-border-color:
 * select-outline-success-focus-background-color:
 * select-outline-success-focus-border-color:
 * select-outline-success-hover-background-color:
 * select-outline-success-hover-border-color:
 * select-outline-success-disabled-background-color:
 * select-outline-success-disabled-border-color:
 * select-outline-success-disabled-icon-color:
 * select-outline-success-disabled-text-color:
 * select-outline-info-icon-color:
 * select-outline-info-text-color:
 * select-outline-info-placeholder-text-color:
 * select-outline-info-background-color:
 * select-outline-info-border-color:
 * select-outline-info-focus-background-color:
 * select-outline-info-focus-border-color:
 * select-outline-info-hover-background-color:
 * select-outline-info-hover-border-color:
 * select-outline-info-disabled-background-color:
 * select-outline-info-disabled-border-color:
 * select-outline-info-disabled-icon-color:
 * select-outline-info-disabled-text-color:
 * select-outline-warning-icon-color:
 * select-outline-warning-text-color:
 * select-outline-warning-placeholder-text-color:
 * select-outline-warning-background-color:
 * select-outline-warning-border-color:
 * select-outline-warning-focus-background-color:
 * select-outline-warning-focus-border-color:
 * select-outline-warning-hover-background-color:
 * select-outline-warning-hover-border-color:
 * select-outline-warning-disabled-background-color:
 * select-outline-warning-disabled-border-color:
 * select-outline-warning-disabled-icon-color:
 * select-outline-warning-disabled-text-color:
 * select-outline-danger-icon-color:
 * select-outline-danger-text-color:
 * select-outline-danger-placeholder-text-color:
 * select-outline-danger-background-color:
 * select-outline-danger-border-color:
 * select-outline-danger-focus-background-color:
 * select-outline-danger-focus-border-color:
 * select-outline-danger-hover-background-color:
 * select-outline-danger-hover-border-color:
 * select-outline-danger-disabled-background-color:
 * select-outline-danger-disabled-border-color:
 * select-outline-danger-disabled-icon-color:
 * select-outline-danger-disabled-text-color:
 * select-outline-control-icon-color:
 * select-outline-control-text-color:
 * select-outline-control-placeholder-text-color:
 * select-outline-control-background-color:
 * select-outline-control-border-color:
 * select-outline-control-focus-background-color:
 * select-outline-control-focus-border-color:
 * select-outline-control-hover-background-color:
 * select-outline-control-hover-border-color:
 * select-outline-control-disabled-background-color:
 * select-outline-control-disabled-border-color:
 * select-outline-control-disabled-icon-color:
 * select-outline-control-disabled-text-color:
 * select-outline-adjacent-border-style:
 * select-outline-adjacent-border-width:
 * select-outline-basic-open-border-color:
 * select-outline-basic-adjacent-border-color:
 * select-outline-primary-open-border-color:
 * select-outline-primary-adjacent-border-color:
 * select-outline-success-open-border-color:
 * select-outline-success-adjacent-border-color:
 * select-outline-info-open-border-color:
 * select-outline-info-adjacent-border-color:
 * select-outline-warning-open-border-color:
 * select-outline-warning-adjacent-border-color:
 * select-outline-danger-open-border-color:
 * select-outline-danger-adjacent-border-color:
 * select-outline-control-open-border-color:
 * select-outline-control-adjacent-border-color:
 * select-filled-border-style:
 * select-filled-border-width:
 * select-filled-tiny-padding:
 * select-filled-small-padding:
 * select-filled-medium-padding:
 * select-filled-large-padding:
 * select-filled-giant-padding:
 * select-filled-basic-background-color:
 * select-filled-basic-border-color:
 * select-filled-basic-icon-color:
 * select-filled-basic-text-color:
 * select-filled-basic-placeholder-text-color:
 * select-filled-basic-focus-background-color:
 * select-filled-basic-focus-border-color:
 * select-filled-basic-hover-background-color:
 * select-filled-basic-hover-border-color:
 * select-filled-basic-disabled-background-color:
 * select-filled-basic-disabled-border-color:
 * select-filled-basic-disabled-icon-color:
 * select-filled-basic-disabled-text-color:
 * select-filled-primary-background-color:
 * select-filled-primary-border-color:
 * select-filled-primary-icon-color:
 * select-filled-primary-text-color:
 * select-filled-primary-placeholder-text-color:
 * select-filled-primary-focus-background-color:
 * select-filled-primary-focus-border-color:
 * select-filled-primary-hover-background-color:
 * select-filled-primary-hover-border-color:
 * select-filled-primary-disabled-background-color:
 * select-filled-primary-disabled-border-color:
 * select-filled-primary-disabled-icon-color:
 * select-filled-primary-disabled-text-color:
 * select-filled-success-background-color:
 * select-filled-success-border-color:
 * select-filled-success-icon-color:
 * select-filled-success-text-color:
 * select-filled-success-placeholder-text-color:
 * select-filled-success-focus-background-color:
 * select-filled-success-focus-border-color:
 * select-filled-success-hover-background-color:
 * select-filled-success-hover-border-color:
 * select-filled-success-disabled-background-color:
 * select-filled-success-disabled-border-color:
 * select-filled-success-disabled-icon-color:
 * select-filled-success-disabled-text-color:
 * select-filled-info-background-color:
 * select-filled-info-border-color:
 * select-filled-info-icon-color:
 * select-filled-info-text-color:
 * select-filled-info-placeholder-text-color:
 * select-filled-info-focus-background-color:
 * select-filled-info-focus-border-color:
 * select-filled-info-hover-background-color:
 * select-filled-info-hover-border-color:
 * select-filled-info-disabled-background-color:
 * select-filled-info-disabled-border-color:
 * select-filled-info-disabled-icon-color:
 * select-filled-info-disabled-text-color:
 * select-filled-warning-background-color:
 * select-filled-warning-border-color:
 * select-filled-warning-icon-color:
 * select-filled-warning-text-color:
 * select-filled-warning-placeholder-text-color:
 * select-filled-warning-focus-background-color:
 * select-filled-warning-focus-border-color:
 * select-filled-warning-hover-background-color:
 * select-filled-warning-hover-border-color:
 * select-filled-warning-disabled-background-color:
 * select-filled-warning-disabled-border-color:
 * select-filled-warning-disabled-icon-color:
 * select-filled-warning-disabled-text-color:
 * select-filled-danger-background-color:
 * select-filled-danger-border-color:
 * select-filled-danger-icon-color:
 * select-filled-danger-text-color:
 * select-filled-danger-placeholder-text-color:
 * select-filled-danger-focus-background-color:
 * select-filled-danger-focus-border-color:
 * select-filled-danger-hover-background-color:
 * select-filled-danger-hover-border-color:
 * select-filled-danger-disabled-background-color:
 * select-filled-danger-disabled-border-color:
 * select-filled-danger-disabled-icon-color:
 * select-filled-danger-disabled-text-color:
 * select-filled-control-background-color:
 * select-filled-control-border-color:
 * select-filled-control-icon-color:
 * select-filled-control-text-color:
 * select-filled-control-placeholder-text-color:
 * select-filled-control-focus-background-color:
 * select-filled-control-focus-border-color:
 * select-filled-control-hover-background-color:
 * select-filled-control-hover-border-color:
 * select-filled-control-disabled-background-color:
 * select-filled-control-disabled-border-color:
 * select-filled-control-disabled-icon-color:
 * select-filled-control-disabled-text-color:
 * select-hero-tiny-padding:
 * select-hero-small-padding:
 * select-hero-medium-padding:
 * select-hero-large-padding:
 * select-hero-giant-padding:
 * select-hero-basic-left-background-color:
 * select-hero-basic-right-background-color:
 * select-hero-basic-icon-color:
 * select-hero-basic-text-color:
 * select-hero-basic-placeholder-text-color:
 * select-hero-basic-focus-left-background-color:
 * select-hero-basic-focus-right-background-color:
 * select-hero-basic-hover-left-background-color:
 * select-hero-basic-hover-right-background-color:
 * select-hero-basic-disabled-background-color:
 * select-hero-basic-disabled-icon-color:
 * select-hero-basic-disabled-text-color:
 * select-hero-primary-left-background-color:
 * select-hero-primary-right-background-color:
 * select-hero-primary-icon-color:
 * select-hero-primary-text-color:
 * select-hero-primary-placeholder-text-color:
 * select-hero-primary-focus-left-background-color:
 * select-hero-primary-focus-right-background-color:
 * select-hero-primary-hover-left-background-color:
 * select-hero-primary-hover-right-background-color:
 * select-hero-primary-disabled-background-color:
 * select-hero-primary-disabled-icon-color:
 * select-hero-primary-disabled-text-color:
 * select-hero-success-left-background-color:
 * select-hero-success-right-background-color:
 * select-hero-success-icon-color:
 * select-hero-success-text-color:
 * select-hero-success-placeholder-text-color:
 * select-hero-success-focus-left-background-color:
 * select-hero-success-focus-right-background-color:
 * select-hero-success-hover-left-background-color:
 * select-hero-success-hover-right-background-color:
 * select-hero-success-disabled-background-color:
 * select-hero-success-disabled-icon-color:
 * select-hero-success-disabled-text-color:
 * select-hero-info-left-background-color:
 * select-hero-info-right-background-color:
 * select-hero-info-icon-color:
 * select-hero-info-text-color:
 * select-hero-info-placeholder-text-color:
 * select-hero-info-focus-left-background-color:
 * select-hero-info-focus-right-background-color:
 * select-hero-info-hover-left-background-color:
 * select-hero-info-hover-right-background-color:
 * select-hero-info-disabled-background-color:
 * select-hero-info-disabled-icon-color:
 * select-hero-info-disabled-text-color:
 * select-hero-warning-left-background-color:
 * select-hero-warning-right-background-color:
 * select-hero-warning-icon-color:
 * select-hero-warning-text-color:
 * select-hero-warning-placeholder-text-color:
 * select-hero-warning-focus-left-background-color:
 * select-hero-warning-focus-right-background-color:
 * select-hero-warning-hover-left-background-color:
 * select-hero-warning-hover-right-background-color:
 * select-hero-warning-disabled-background-color:
 * select-hero-warning-disabled-icon-color:
 * select-hero-warning-disabled-text-color:
 * select-hero-danger-left-background-color:
 * select-hero-danger-right-background-color:
 * select-hero-danger-icon-color:
 * select-hero-danger-text-color:
 * select-hero-danger-placeholder-text-color:
 * select-hero-danger-focus-left-background-color:
 * select-hero-danger-focus-right-background-color:
 * select-hero-danger-hover-left-background-color:
 * select-hero-danger-hover-right-background-color:
 * select-hero-danger-disabled-background-color:
 * select-hero-danger-disabled-icon-color:
 * select-hero-danger-disabled-text-color:
 * select-hero-control-left-background-color:
 * select-hero-control-right-background-color:
 * select-hero-control-icon-color:
 * select-hero-control-text-color:
 * select-hero-control-placeholder-text-color:
 * select-hero-control-focus-left-background-color:
 * select-hero-control-focus-right-background-color:
 * select-hero-control-hover-left-background-color:
 * select-hero-control-hover-right-background-color:
 * select-hero-control-disabled-background-color:
 * select-hero-control-disabled-icon-color:
 * select-hero-control-disabled-text-color:
 * */
export class NbSelectComponent {
    constructor(document, overlay, hostRef, positionBuilder, triggerStrategyBuilder, cd, focusKeyManagerFactoryService, focusMonitor, renderer, zone, statusService) {
        this.document = document;
        this.overlay = overlay;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.cd = cd;
        this.focusKeyManagerFactoryService = focusKeyManagerFactoryService;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        /**
         * Select size, available sizes:
         * `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Select status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = 'basic';
        /**
         * Select shapes: `rectangle` (default), `round`, `semi-round`
         */
        this.shape = 'rectangle';
        /**
         * Select appearances: `outline` (default), `filled`, `hero`
         */
        this.appearance = 'outline';
        this._fullWidth = false;
        /**
         * Renders select placeholder if nothing selected.
         * */
        this.placeholder = '';
        this._compareWith = (v1, v2) => v1 === v2;
        this._multiple = false;
        /**
         * Determines options overlay offset (in pixels).
         **/
        this.optionsOverlayOffset = 8;
        /**
         * Determines options overlay scroll strategy.
         **/
        this.scrollStrategy = 'block';
        /**
         * Will be emitted when selected value changes.
         * */
        this.selectedChange = new EventEmitter();
        /**
         * List of selected options.
         * */
        this.selectionModel = [];
        /**
         * Current overlay position because of we have to toggle overlayPosition
         * in [ngClass] direction and this directive can use only string.
         */
        this.overlayPosition = '';
        this.alive = true;
        this.destroy$ = new Subject();
        /**
         * Function passed through control value accessor to propagate changes.
         * */
        this.onChange = () => { };
        this.onTouched = () => { };
        /*
         * @docs-private
         **/
        this.status$ = new BehaviorSubject(this.status);
        /*
         * @docs-private
         **/
        this.size$ = new BehaviorSubject(this.size);
        /*
         * @docs-private
         **/
        this.focused$ = new BehaviorSubject(false);
        /*
         * @docs-private
         **/
        this.disabled$ = new BehaviorSubject(this.disabled);
        /*
         * @docs-private
         **/
        this.fullWidth$ = new BehaviorSubject(this.fullWidth);
    }
    /**
     * Adds `outline` styles
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
     * Adds `filled` styles
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
     * Adds `hero` styles
     */
    get hero() {
        return this.appearance === 'hero';
    }
    set hero(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'hero';
        }
    }
    /**
     * Disables the select
     */
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    /**
     * If set element will fill its container
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    /**
     * A function to compare option value with selected value.
     * By default, values are compared with strict equality (`===`).
     */
    get compareWith() {
        return this._compareWith;
    }
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            return;
        }
        this._compareWith = fn;
        if (this.selectionModel.length && this.canSelectValue()) {
            this.setSelection(this.selected);
        }
    }
    /**
     * Accepts selected item or array of selected items.
     * */
    set selected(value) {
        this.writeValue(value);
    }
    get selected() {
        return this.multiple
            ? this.selectionModel.map(o => o.value)
            : this.selectionModel[0].value;
    }
    /**
     * Gives capability just write `multiple` over the element.
     * */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = convertToBoolProperty(value);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    /**
     * Determines is select opened.
     * */
    get isOpen() {
        return this.ref && this.ref.hasAttached();
    }
    /**
     * Determines is select hidden.
     * */
    get isHidden() {
        return !this.isOpen;
    }
    /**
     * Returns width of the select button.
     * */
    get hostWidth() {
        return this.button.nativeElement.getBoundingClientRect().width;
    }
    get selectButtonClasses() {
        const classes = [];
        if (!this.selectionModel.length) {
            classes.push('placeholder');
        }
        if (!this.selectionModel.length && !this.placeholder) {
            classes.push('empty');
        }
        if (this.isOpen) {
            classes.push(this.overlayPosition);
        }
        return classes;
    }
    /**
     * Content rendered in the label.
     * */
    get selectionView() {
        if (this.selectionModel.length > 1) {
            return this.selectionModel.map((option) => option.content).join(', ');
        }
        return this.selectionModel[0].content;
    }
    ngOnChanges({ disabled, status, size, fullWidth }) {
        if (disabled) {
            this.disabled$.next(disabled.currentValue);
        }
        if (status) {
            this.status$.next(status.currentValue);
        }
        if (size) {
            this.size$.next(size.currentValue);
        }
        if (fullWidth) {
            this.fullWidth$.next(this.fullWidth);
        }
    }
    ngAfterContentInit() {
        this.options.changes
            .pipe(startWith(this.options), filter(() => this.queue != null && this.canSelectValue()), 
        // Call 'writeValue' when current change detection run is finished.
        // When writing is finished, change detection starts again, since
        // microtasks queue is empty.
        // Prevents ExpressionChangedAfterItHasBeenCheckedError.
        switchMap((options) => from(Promise.resolve(options))), takeUntil(this.destroy$))
            .subscribe(() => this.writeValue(this.queue));
    }
    ngAfterViewInit() {
        this.triggerStrategy = this.createTriggerStrategy();
        this.subscribeOnButtonFocus();
        this.subscribeOnTriggers();
        this.subscribeOnOptionClick();
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostRef.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.alive = false;
        this.destroy$.next();
        this.destroy$.complete();
        if (this.ref) {
            this.ref.dispose();
        }
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    }
    show() {
        if (this.isHidden) {
            this.attachToOverlay();
            this.setActiveOption();
            this.cd.markForCheck();
        }
    }
    hide() {
        if (this.isOpen) {
            this.ref.detach();
            this.cd.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cd.markForCheck();
    }
    writeValue(value) {
        if (!this.alive) {
            return;
        }
        if (this.canSelectValue()) {
            this.setSelection(value);
            if (this.selectionModel.length) {
                this.queue = null;
            }
        }
        else {
            this.queue = value;
        }
    }
    /**
     * Selects option or clear all selected options if value is null.
     * */
    handleOptionClick(option) {
        this.queue = null;
        if (option.value == null) {
            this.reset();
        }
        else {
            this.selectOption(option);
        }
        this.cd.markForCheck();
    }
    /**
     * Deselect all selected options.
     * */
    reset() {
        this.selectionModel.forEach((option) => option.deselect());
        this.selectionModel = [];
        this.hide();
        this.button.nativeElement.focus();
        this.emitSelected(this.multiple ? [] : null);
    }
    /**
     * Determines how to select option as multiple or single.
     * */
    selectOption(option) {
        if (this.multiple) {
            this.handleMultipleSelect(option);
        }
        else {
            this.handleSingleSelect(option);
        }
    }
    /**
     * Select single option.
     * */
    handleSingleSelect(option) {
        const selected = this.selectionModel.pop();
        if (selected && !this._compareWith(selected.value, option.value)) {
            selected.deselect();
        }
        this.selectionModel = [option];
        option.select();
        this.hide();
        this.button.nativeElement.focus();
        this.emitSelected(option.value);
    }
    /**
     * Select for multiple options.
     * */
    handleMultipleSelect(option) {
        if (option.selected) {
            this.selectionModel = this.selectionModel.filter(s => !this._compareWith(s.value, option.value));
            option.deselect();
        }
        else {
            this.selectionModel.push(option);
            option.select();
        }
        this.emitSelected(this.selectionModel.map((opt) => opt.value));
    }
    attachToOverlay() {
        if (!this.ref) {
            this.createOverlay();
            this.subscribeOnPositionChange();
            this.createKeyManager();
            this.subscribeOnOverlayKeys();
        }
        this.ref.attach(this.portal);
    }
    setActiveOption() {
        if (this.selectionModel.length) {
            this.keyManager.setActiveItem(this.selectionModel[0]);
        }
        else {
            this.keyManager.setFirstItemActive();
        }
    }
    createOverlay() {
        const scrollStrategy = this.createScrollStrategy();
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy,
            panelClass: this.optionsPanelClass,
        });
    }
    createKeyManager() {
        this.keyManager = this.focusKeyManagerFactoryService.create(this.options).withTypeAhead(200);
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.button)
            .position(NbPosition.BOTTOM)
            .offset(this.optionsOverlayOffset)
            .adjustment(NbAdjustment.VERTICAL);
    }
    createScrollStrategy() {
        return this.overlay.scrollStrategies[this.scrollStrategy]();
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.CLICK)
            .host(this.hostRef.nativeElement)
            .container(() => this.getContainer())
            .build();
    }
    subscribeOnTriggers() {
        this.triggerStrategy.show$.subscribe(() => this.show());
        this.triggerStrategy.hide$
            .pipe(filter(() => this.isOpen))
            .subscribe(($event) => {
            this.hide();
            if (!this.isClickedWithinComponent($event)) {
                this.onTouched();
            }
        });
    }
    subscribeOnPositionChange() {
        this.positionStrategy.positionChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((position) => {
            this.overlayPosition = position;
            this.cd.detectChanges();
        });
    }
    subscribeOnOptionClick() {
        /**
         * If the user changes provided options list in the runtime we have to handle this
         * and resubscribe on options selection changes event.
         * Otherwise, the user will not be able to select new options.
         * */
        this.options.changes
            .pipe(startWith(this.options), switchMap((options) => {
            return merge(...options.map(option => option.click));
        }), takeUntil(this.destroy$))
            .subscribe((clickedOption) => this.handleOptionClick(clickedOption));
    }
    subscribeOnOverlayKeys() {
        this.ref.keydownEvents()
            .pipe(filter(() => this.isOpen), takeUntil(this.destroy$))
            .subscribe((event) => {
            if (event.keyCode === ESCAPE) {
                this.button.nativeElement.focus();
                this.hide();
            }
            else {
                this.keyManager.onKeydown(event);
            }
        });
        this.keyManager.tabOut
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.hide();
            this.onTouched();
        });
    }
    subscribeOnButtonFocus() {
        this.focusMonitor.monitor(this.button)
            .pipe(map(origin => !!origin), finalize(() => this.focusMonitor.stopMonitoring(this.button)), takeUntil(this.destroy$))
            .subscribe(this.focused$);
    }
    getContainer() {
        return this.ref && this.ref.hasAttached() && {
            location: {
                nativeElement: this.ref.overlayElement,
            },
        };
    }
    /**
     * Propagate selected value.
     * */
    emitSelected(selected) {
        this.onChange(selected);
        this.selectedChange.emit(selected);
    }
    /**
     * Set selected value in model.
     * */
    setSelection(value) {
        const isArray = Array.isArray(value);
        if (this.multiple && !isArray) {
            throw new Error('Can\'t assign single value if select is marked as multiple');
        }
        if (!this.multiple && isArray) {
            throw new Error('Can\'t assign array if select is not marked as multiple');
        }
        const previouslySelectedOptions = this.selectionModel;
        this.selectionModel = [];
        if (isArray) {
            value.forEach(option => this.selectValue(option));
        }
        else {
            this.selectValue(value);
        }
        // find options which were selected before and trigger deselect
        previouslySelectedOptions
            .filter((option) => !this.selectionModel.includes(option))
            .forEach((option) => option.deselect());
        this.cd.markForCheck();
    }
    /**
     * Selects value.
     * */
    selectValue(value) {
        const corresponding = this.options.find((option) => this._compareWith(option.value, value));
        if (corresponding) {
            corresponding.select();
            this.selectionModel.push(corresponding);
        }
    }
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    trySetTouched() {
        if (this.isHidden) {
            this.onTouched();
        }
    }
    isClickedWithinComponent($event) {
        return this.hostRef.nativeElement === $event.target || this.hostRef.nativeElement.contains($event.target);
    }
    canSelectValue() {
        return !!(this.options && this.options.length);
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
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get round() {
        return this.shape === 'round';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
}
NbSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-select',
                template: "<button [disabled]=\"disabled\"\n        [ngClass]=\"selectButtonClasses\"\n        (blur)=\"trySetTouched()\"\n        (keydown.arrowDown)=\"show()\"\n        (keydown.arrowUp)=\"show()\"\n        class=\"select-button\"\n        type=\"button\"\n        #selectButton>\n\n    <ng-container *ngIf=\"selectionModel.length; else placeholderTemplate\">\n      <ng-container *ngIf=\"customLabel; else defaultSelectionTemplate\">\n        <ng-content select=\"nb-select-label\"></ng-content>\n      </ng-container>\n\n      <ng-template #defaultSelectionTemplate>{{ selectionView }}</ng-template>\n    </ng-container>\n\n    <ng-template #placeholderTemplate>{{ placeholder }}</ng-template>\n\n    <nb-icon icon=\"chevron-down-outline\" pack=\"nebular-essentials\" (click)=\"disabled && $event.stopPropagation()\" aria-hidden=\"true\">\n    </nb-icon>\n</button>\n\n<nb-option-list *nbPortal [size]=\"size\" [position]=\"overlayPosition\" [style.width.px]=\"hostWidth\" [ngClass]=\"optionsListClass\">\n  <ng-content select=\"nb-option, nb-option-group\"></ng-content>\n</nb-option-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbSelectComponent),
                        multi: true,
                    },
                    { provide: NB_SELECT_INJECTION_TOKEN, useExisting: NbSelectComponent },
                    { provide: NbFormFieldControl, useExisting: NbSelectComponent },
                    { provide: NbFormFieldControlConfig, useFactory: nbSelectFormFieldControlConfigFactory },
                ],
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:inline-block;max-width:100%}[dir=ltr] :host .select-button{text-align:left}[dir=ltr] :host .select-button nb-icon{right:0.2em}[dir=rtl] :host .select-button{text-align:right}[dir=rtl] :host .select-button nb-icon{left:0.2em}:host(.full-width){width:100%}:host(.nb-transition) .select-button{transition-duration:0.15s;transition-property:background-color,border-color,border-radius,box-shadow,color;transition-timing-function:ease-in}.select-button{position:relative;width:100%;overflow:hidden;text-overflow:ellipsis;text-transform:none;white-space:nowrap}nb-icon{font-size:1.5em;position:absolute;top:50%;transform:translateY(-50%);transition-duration:0.15s;transition-property:transform;transition-timing-function:ease-in}[dir=ltr] nb-icon{right:.5rem}[dir=rtl] nb-icon{left:.5rem}:host(.open) nb-icon{transform:translateY(-50%) rotate(180deg)}\n"]
            },] }
];
NbSelectComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbOverlayService },
    { type: ElementRef },
    { type: NbPositionBuilderService },
    { type: NbTriggerStrategyBuilderService },
    { type: ChangeDetectorRef },
    { type: NbFocusKeyManagerFactoryService },
    { type: NbFocusMonitor },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbStatusService }
];
NbSelectComponent.propDecorators = {
    size: [{ type: Input }],
    status: [{ type: Input }],
    shape: [{ type: Input }],
    appearance: [{ type: Input }],
    optionsListClass: [{ type: Input }],
    optionsPanelClass: [{ type: Input }],
    outline: [{ type: Input }, { type: HostBinding, args: ['class.appearance-outline',] }],
    filled: [{ type: Input }, { type: HostBinding, args: ['class.appearance-filled',] }],
    hero: [{ type: Input }, { type: HostBinding, args: ['class.appearance-hero',] }],
    disabled: [{ type: Input }],
    fullWidth: [{ type: Input }, { type: HostBinding, args: ['class.full-width',] }],
    placeholder: [{ type: Input }],
    compareWith: [{ type: Input }],
    selected: [{ type: Input }],
    multiple: [{ type: Input }],
    optionsOverlayOffset: [{ type: Input }],
    scrollStrategy: [{ type: Input }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    selectedChange: [{ type: Output }],
    options: [{ type: ContentChildren, args: [NbOptionComponent, { descendants: true },] }],
    customLabel: [{ type: ContentChild, args: [NbSelectLabelComponent,] }],
    portal: [{ type: ViewChild, args: [NbPortalDirective,] }],
    button: [{ type: ViewChild, args: ['selectButton', { read: ElementRef },] }],
    isOpen: [{ type: HostBinding, args: ['class.open',] }],
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
    rectangle: [{ type: HostBinding, args: ['class.shape-rectangle',] }],
    round: [{ type: HostBinding, args: ['class.shape-round',] }],
    semiRound: [{ type: HostBinding, args: ['class.shape-semi-round',] }]
};
//# sourceMappingURL=select.component.js.map