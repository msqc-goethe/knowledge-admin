/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef, HostBinding, } from '@angular/core';
import { NbSpinnerComponent } from './spinner.component';
/**
 * Styled spinner directive
 *
 * @stacked-example(Spinner Showcase, spinner/spinner-card.component)
 *
 *
 * ```ts
 * <nb-card [nbSpinner]="loading" nbSpinnerStatus="danger">
 *   <nb-card-body>Card Content</nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbSpinnerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSpinnerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Could be colored using `status` property
 *
 * @stacked-example(Spinner Colors, spinner/spinner-colors.component)
 *
 * Available in different sizes with `size` property:
 *
 * @stacked-example(Spinner Sizes, spinner/spinner-sizes.component)
 *
 * It is also possible to place it into the button:
 * @stacked-example(Buttons with spinner, spinner/spinner-button.component)
 *
 * Or tabs:
 * @stacked-example(Spinner in tabs, spinner/spinner-tabs.component)
 */
export class NbSpinnerDirective {
    constructor(directiveView, componentFactoryResolver, renderer, directiveElement) {
        this.directiveView = directiveView;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.directiveElement = directiveElement;
        this.shouldShow = false;
        /**
         * Spinner status color
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
         */
        this.spinnerStatus = 'basic';
        /**
         * Spinner size. Possible values: `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.spinnerSize = 'medium';
        this.isSpinnerExist = false;
    }
    /**
     * Directive value - show or hide spinner
     * @param {boolean} val
     */
    set nbSpinner(val) {
        if (this.componentFactory) {
            if (val) {
                this.show();
            }
            else {
                this.hide();
            }
        }
        else {
            this.shouldShow = val;
        }
    }
    ngOnInit() {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(NbSpinnerComponent);
        if (this.shouldShow) {
            this.show();
        }
    }
    hide() {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    }
    show() {
        if (!this.isSpinnerExist) {
            this.spinner = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinner.instance);
            this.spinner.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinner.location.nativeElement);
            this.isSpinnerExist = true;
        }
    }
    setInstanceInputs(instance) {
        instance.message = this.spinnerMessage;
        typeof this.spinnerStatus !== 'undefined' && (instance.status = this.spinnerStatus);
        typeof this.spinnerSize !== 'undefined' && (instance.size = this.spinnerSize);
    }
}
NbSpinnerDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbSpinner]' },] }
];
NbSpinnerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: ElementRef }
];
NbSpinnerDirective.propDecorators = {
    spinnerMessage: [{ type: Input, args: ['nbSpinnerMessage',] }],
    spinnerStatus: [{ type: Input, args: ['nbSpinnerStatus',] }],
    spinnerSize: [{ type: Input, args: ['nbSpinnerSize',] }],
    nbSpinner: [{ type: Input, args: ['nbSpinner',] }],
    isSpinnerExist: [{ type: HostBinding, args: ['class.nb-spinner-container',] }]
};
//# sourceMappingURL=spinner.directive.js.map