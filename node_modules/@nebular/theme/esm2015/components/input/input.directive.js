/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, Input, HostBinding, ElementRef, Renderer2, NgZone, } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { map, finalize, takeUntil } from 'rxjs/operators';
import { NbStatusService } from '../../services/status.service';
import { convertToBoolProperty } from '../helpers';
import { NbFormFieldControl } from '../form-field/form-field-control';
import { NbFocusMonitor } from '../cdk/a11y/a11y.module';
/**
 * Basic input directive.
 *
 * ```html
 * <input nbInput></input>
 * ```
 *
 * ### Installation
 *
 * Import `NbInputModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbInputModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Default input size is `medium`:
 * @stacked-example(Showcase, input/input-showcase.component)
 *
 * Inputs are available in multiple colors using `status` property:
 * @stacked-example(Input Colors, input/input-colors.component)
 *
 * There are three input sizes:
 *
 * @stacked-example(Input Sizes, input/input-sizes.component)
 *
 * Inputs available in different shapes, which could be combined with the other properties:
 * @stacked-example(Input Shapes, input/input-shapes.component)
 *
 * `nbInput` could be applied to the following selectors - `input`, `textarea`:
 * @stacked-example(Input Elements, input/input-types.component)
 *
 * You can add `fullWidth` attribute to make element fill container:
 * @stacked-example(Full width inputs, input/input-full-width.component)
 *
 * Or you can bind control with form controls or ngModel:
 * @stacked-example(Input form binding, input/input-form.component)
 *
 * Use `<nb-form-field>` to add custom content to the input field.
 * First import `NbFormFieldModule`. Then put the input field and custom content into
 * `<nb-form-field>` and add `nbPrefix` or `nbSuffix` directive to the custom content.
 * `nbPrefix` puts content before input and `nbSuffix` after.
 *
 * @stacked-example(Input with icon, form-field/form-field-input.component)
 * @stacked-example(Input with button, form-field/form-field-password.component)
 *
 * @styles
 *
 * input-border-style:
 * input-border-width:
 * input-outline-color:
 * input-outline-width:
 * input-placeholder-text-font-family:
 * input-text-font-family:
 * input-basic-text-color:
 * input-basic-placeholder-text-color:
 * input-basic-background-color:
 * input-basic-border-color:
 * input-basic-focus-background-color:
 * input-basic-focus-border-color:
 * input-basic-hover-background-color:
 * input-basic-hover-border-color:
 * input-basic-disabled-background-color:
 * input-basic-disabled-border-color:
 * input-basic-disabled-text-color:
 * input-basic-disabled-placeholder-text-color:
 * input-primary-text-color:
 * input-primary-placeholder-text-color:
 * input-primary-background-color:
 * input-primary-border-color:
 * input-primary-focus-background-color:
 * input-primary-focus-border-color:
 * input-primary-hover-background-color:
 * input-primary-hover-border-color:
 * input-primary-disabled-background-color:
 * input-primary-disabled-border-color:
 * input-primary-disabled-text-color:
 * input-primary-disabled-placeholder-text-color:
 * input-success-text-color:
 * input-success-placeholder-text-color:
 * input-success-background-color:
 * input-success-border-color:
 * input-success-focus-background-color:
 * input-success-focus-border-color:
 * input-success-hover-background-color:
 * input-success-hover-border-color:
 * input-success-disabled-background-color:
 * input-success-disabled-border-color:
 * input-success-disabled-text-color:
 * input-success-disabled-placeholder-text-color:
 * input-info-text-color:
 * input-info-placeholder-text-color:
 * input-info-background-color:
 * input-info-border-color:
 * input-info-focus-background-color:
 * input-info-focus-border-color:
 * input-info-hover-background-color:
 * input-info-hover-border-color:
 * input-info-disabled-background-color:
 * input-info-disabled-border-color:
 * input-info-disabled-text-color:
 * input-info-disabled-placeholder-text-color:
 * input-warning-text-color:
 * input-warning-placeholder-text-color:
 * input-warning-background-color:
 * input-warning-border-color:
 * input-warning-focus-background-color:
 * input-warning-focus-border-color:
 * input-warning-hover-background-color:
 * input-warning-hover-border-color:
 * input-warning-disabled-background-color:
 * input-warning-disabled-border-color:
 * input-warning-disabled-text-color:
 * input-warning-disabled-placeholder-text-color:
 * input-danger-text-color:
 * input-danger-placeholder-text-color:
 * input-danger-background-color:
 * input-danger-border-color:
 * input-danger-focus-background-color:
 * input-danger-focus-border-color:
 * input-danger-hover-background-color:
 * input-danger-hover-border-color:
 * input-danger-disabled-background-color:
 * input-danger-disabled-border-color:
 * input-danger-disabled-text-color:
 * input-danger-disabled-placeholder-text-color:
 * input-control-text-color:
 * input-control-placeholder-text-color:
 * input-control-background-color:
 * input-control-border-color:
 * input-control-focus-background-color:
 * input-control-focus-border-color:
 * input-control-hover-background-color:
 * input-control-hover-border-color:
 * input-control-disabled-background-color:
 * input-control-disabled-border-color:
 * input-control-disabled-text-color:
 * input-control-disabled-placeholder-text-color:
 * input-rectangle-border-radius:
 * input-semi-round-border-radius:
 * input-round-border-radius:
 * input-tiny-text-font-size:
 * input-tiny-text-font-weight:
 * input-tiny-text-line-height:
 * input-tiny-placeholder-text-font-size:
 * input-tiny-placeholder-text-font-weight:
 * input-tiny-placeholder-text-line-height:
 * input-tiny-padding:
 * input-tiny-max-width:
 * input-small-text-font-size:
 * input-small-text-font-weight:
 * input-small-text-line-height:
 * input-small-placeholder-text-font-size:
 * input-small-placeholder-text-font-weight:
 * input-small-placeholder-text-line-height:
 * input-small-padding:
 * input-small-max-width:
 * input-medium-text-font-size:
 * input-medium-text-font-weight:
 * input-medium-text-line-height:
 * input-medium-placeholder-text-font-size:
 * input-medium-placeholder-text-font-weight:
 * input-medium-placeholder-text-line-height:
 * input-medium-padding:
 * input-medium-max-width:
 * input-large-text-font-size:
 * input-large-text-font-weight:
 * input-large-text-line-height:
 * input-large-placeholder-text-font-size:
 * input-large-placeholder-text-font-weight:
 * input-large-placeholder-text-line-height:
 * input-large-padding:
 * input-large-max-width:
 * input-giant-text-font-size:
 * input-giant-text-font-weight:
 * input-giant-text-line-height:
 * input-giant-placeholder-text-font-size:
 * input-giant-placeholder-text-font-weight:
 * input-giant-placeholder-text-line-height:
 * input-giant-padding:
 * input-giant-max-width:
 */
export class NbInputDirective {
    constructor(elementRef, focusMonitor, renderer, zone, statusService) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this.destroy$ = new Subject();
        /**
         * Field size modifications. Possible values: `small`, `medium` (default), `large`.
         */
        this.fieldSize = 'medium';
        /**
         * Field status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = 'basic';
        /**
         * Field shapes modifications. Possible values: `rectangle` (default), `round`, `semi-round`.
         */
        this.shape = 'rectangle';
        this._fullWidth = false;
        /*
         * @docs-private
         **/
        this.status$ = new BehaviorSubject(this.status);
        /*
         * @docs-private
         **/
        this.size$ = new BehaviorSubject(this.fieldSize);
        /*
         * @docs-private
         **/
        this.focused$ = new BehaviorSubject(false);
        /*
         * @docs-private
         **/
        this.disabled$ = new BehaviorSubject(false);
        /*
         * @docs-private
         **/
        this.fullWidth$ = new BehaviorSubject(this.fullWidth);
    }
    /**
     * If set element will fill container. `false` by default.
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngDoCheck() {
        const isDisabled = this.elementRef.nativeElement.disabled;
        if (isDisabled !== this.disabled$.value) {
            this.disabled$.next(isDisabled);
        }
    }
    ngOnChanges({ status, fieldSize, fullWidth }) {
        if (status) {
            this.status$.next(this.status);
        }
        if (fieldSize) {
            this.size$.next(this.fieldSize);
        }
        if (fullWidth) {
            this.fullWidth$.next(this.fullWidth);
        }
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef)
            .pipe(map(origin => !!origin), finalize(() => this.focusMonitor.stopMonitoring(this.elementRef)), takeUntil(this.destroy$))
            .subscribe(this.focused$);
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.elementRef.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    get tiny() {
        return this.fieldSize === 'tiny';
    }
    get small() {
        return this.fieldSize === 'small';
    }
    get medium() {
        return this.fieldSize === 'medium';
    }
    get large() {
        return this.fieldSize === 'large';
    }
    get giant() {
        return this.fieldSize === 'giant';
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
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get round() {
        return this.shape === 'round';
    }
}
NbInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbInput],textarea[nbInput]',
                providers: [
                    { provide: NbFormFieldControl, useExisting: NbInputDirective },
                ],
            },] }
];
NbInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbFocusMonitor },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbStatusService }
];
NbInputDirective.propDecorators = {
    fieldSize: [{ type: Input }],
    status: [{ type: Input }],
    shape: [{ type: Input }],
    fullWidth: [{ type: Input }, { type: HostBinding, args: ['class.input-full-width',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
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
    semiRound: [{ type: HostBinding, args: ['class.shape-semi-round',] }],
    round: [{ type: HostBinding, args: ['class.shape-round',] }]
};
//# sourceMappingURL=input.directive.js.map