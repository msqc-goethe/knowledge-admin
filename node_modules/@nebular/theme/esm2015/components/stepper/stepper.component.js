/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ContentChildren, HostBinding, Input, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NB_STEPPER } from './stepper-tokens';
import { NbStepComponent } from './step.component';
/**
 * Stepper component
 *
 * @stacked-example(Showcase, stepper/stepper-showcase.component)
 *
 * ### Installation
 *
 * Import `NbStepperModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbStepperModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If step label is string you can pass it as `label` attribute. Otherwise ng-template should be used:
 * ```html
 * // ...
 * <nb-stepper orientation="horizontal">
 *   <nb-step label="step number one">
 *       // ... step content here
 *   </nb-step>
 *   <nb-step label="stepLabel">
 *       <ng-template #stepLabel>
 *           <div>
 *               step number two
 *           </div>
 *       </ng-template>
 *       // ... step content here
 *   </nb-step>
 * </nb-stepper>
 * ```
 *
 * When linear mode enabled user can't move forward unless current step is complete.
 * @stacked-example(Linear, stepper/stepper-linear.component)
 *
 * Specify `[stepControl]="form"` and stepper allow go to the next step only if form is valid.
 * You can disable it via `linear` mode setting.
 * ```html
 * // ...
 * <nb-stepper  orientation="horizontal">
 *   <nb-step label="step number one" [stepControl]="form">
 *     <form [formGroup]="form">
 *       // ...
 *     </form>
 *   </nb-step>
 *    // ...
 * </nb-stepper>
 * ```
 *
 * @stacked-example(Validation, stepper/stepper-validation.component)
 *
 * Stepper component has two layout options - `vertical` & `horizontal`
 * @stacked-example(Vertical, stepper/stepper-vertical.component)
 *
 * `disableStepNavigation` disables navigation by clicking on steps, so user can navigate only using
 * 'nbStepperPrevious' and 'nbStepperNext' buttons.
 * @stacked-example(Disabled steps navigation, stepper/stepper-disabled-step-nav.component)
 *
 * @styles
 *
 * stepper-step-text-color:
 * stepper-step-text-font-family:
 * stepper-step-text-font-size:
 * stepper-step-text-font-weight:
 * stepper-step-text-line-height:
 * stepper-step-active-text-color:
 * stepper-step-completed-text-color:
 * stepper-step-index-border-color:
 * stepper-step-index-border-style:
 * stepper-step-index-border-width:
 * stepper-step-index-border-radius:
 * stepper-step-index-width:
 * stepper-step-index-active-border-color:
 * stepper-step-index-completed-background-color:
 * stepper-step-index-completed-border-color:
 * stepper-step-index-completed-text-color:
 * stepper-connector-background-color:
 * stepper-connector-completed-background-color:
 * stepper-horizontal-connector-margin:
 * stepper-vertical-connector-margin:
 * stepper-step-content-padding:
 */
export class NbStepperComponent {
    constructor() {
        this._selectedIndex = 0;
        this._disableStepNavigation = false;
        /**
         * Stepper orientation - `horizontal`|`vertical`
         */
        this.orientation = 'horizontal';
        this._linear = true;
    }
    /**
     * Selected step index
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(index) {
        if (!this.steps) {
            this._selectedIndex = index;
            return;
        }
        this.markCurrentStepInteracted();
        if (this.canBeSelected(index)) {
            this._selectedIndex = index;
        }
    }
    /**
     * Disables navigation by clicking on steps. False by default
     * @param {boolean} value
     */
    set disableStepNavigation(value) {
        this._disableStepNavigation = convertToBoolProperty(value);
    }
    get disableStepNavigation() {
        return this._disableStepNavigation;
    }
    /**
     * Selected step component
     */
    get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
    }
    set selected(step) {
        if (!this.steps) {
            return;
        }
        this.selectedIndex = this.steps.toArray().indexOf(step);
    }
    /**
     * Allow moving forward only if the current step is complete
     * @default true
     */
    set linear(value) {
        this._linear = convertToBoolProperty(value);
    }
    get linear() {
        return this._linear;
    }
    get vertical() {
        return this.orientation === 'vertical';
    }
    get horizontal() {
        return this.orientation === 'horizontal';
    }
    /**
     * Navigate to next step
     * */
    next() {
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.steps.length - 1);
    }
    /**
     * Navigate to previous step
     * */
    previous() {
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    }
    /**
     * Reset stepper and stepControls to initial state
     * */
    reset() {
        this._selectedIndex = 0;
        this.steps.forEach(step => step.reset());
    }
    isStepSelected(step) {
        return this.selected === step;
    }
    /*
     * @docs-private
     **/
    getStepTemplate(step) {
        if (step.isLabelTemplate) {
            return step.label;
        }
        return null;
    }
    isStepValid(index) {
        return this.steps.toArray()[index].completed;
    }
    canBeSelected(indexToCheck) {
        const noSteps = !this.steps || this.steps.length === 0;
        if (noSteps || indexToCheck < 0 || indexToCheck >= this.steps.length) {
            return false;
        }
        if (indexToCheck <= this.selectedIndex || !this.linear) {
            return true;
        }
        let isAllStepsValid = true;
        for (let i = this.selectedIndex; i < indexToCheck; i++) {
            if (!this.isStepValid(i)) {
                isAllStepsValid = false;
                break;
            }
        }
        return isAllStepsValid;
    }
    markCurrentStepInteracted() {
        if (this.selected) {
            this.selected.interacted = true;
        }
    }
}
NbStepperComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-stepper',
                template: "<ng-template><ng-content select=\"nb-step\"></ng-content></ng-template>\n<div class=\"header\">\n  <ng-container *ngFor=\"let step of steps; let index = index; let first = first\">\n\n    <div *ngIf=\"!first && !step.hidden\"\n         [class.connector-past]=\"index <= selectedIndex\"\n         class=\"connector\"></div>\n\n    <div *ngIf=\"!step.hidden\" class=\"step\"\n         [class.selected]=\"isStepSelected(step)\"\n         [class.completed]=\"!isStepSelected(step) && step.completed\"\n         [class.noninteractive]=\"disableStepNavigation\"\n         (click)=\"!disableStepNavigation && step.select()\">\n      <div class=\"label-index\">\n        <span *ngIf=\"!step.completed || isStepSelected(step)\">{{ index + 1 }}</span>\n        <nb-icon *ngIf=\"!isStepSelected(step) && step.completed\" icon=\"checkmark-outline\" pack=\"nebular-essentials\">\n        </nb-icon>\n      </div>\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.isLabelTemplate\">\n          <ng-container *ngTemplateOutlet=\"getStepTemplate(step)\"></ng-container>\n        </ng-container>\n        <span *ngIf=\"!step.isLabelTemplate\">{{ step.label }}</span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<div class=\"step-content\">\n  <ng-container [ngTemplateOutlet]=\"selected?.content\"></ng-container>\n</div>\n",
                providers: [{ provide: NB_STEPPER, useExisting: NbStepperComponent }],
                styles: [":host(.horizontal) .header .step{flex-direction:column}:host(.horizontal) .header .connector{height:2px}:host(.horizontal) .label-index{margin-bottom:10px}:host(.vertical){display:flex;height:100%}:host(.vertical) .header{flex-direction:column}:host(.vertical) .header .label{margin:0 10px}:host(.vertical) .header .connector{width:2px}.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}.header .connector{flex:auto}.header .step{display:flex;align-items:center;cursor:pointer}.header .step.noninteractive{cursor:default}.header .label-index{display:flex;justify-content:center;align-items:center}.header .label{width:max-content}\n"]
            },] }
];
NbStepperComponent.propDecorators = {
    selectedIndex: [{ type: Input }],
    disableStepNavigation: [{ type: Input }],
    selected: [{ type: Input }],
    orientation: [{ type: Input }],
    linear: [{ type: Input }],
    vertical: [{ type: HostBinding, args: ['class.vertical',] }],
    horizontal: [{ type: HostBinding, args: ['class.horizontal',] }],
    steps: [{ type: ContentChildren, args: [NbStepComponent,] }]
};
//# sourceMappingURL=stepper.component.js.map