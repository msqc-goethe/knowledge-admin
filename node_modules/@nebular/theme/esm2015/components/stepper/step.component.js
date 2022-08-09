import { Component, Inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { NB_STEPPER } from './stepper-tokens';
import { convertToBoolProperty } from '../helpers';
/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
export class NbStepComponent {
    constructor(stepper) {
        this._hidden = false;
        this._completed = false;
        this.interacted = false;
        this.stepper = stepper;
    }
    /**
     * Whether step will be displayed in wizard
     *
     * @type {boolean}
     */
    get hidden() {
        return this._hidden;
    }
    set hidden(value) {
        this._hidden = convertToBoolProperty(value);
    }
    /**
     * Check that label is a TemplateRef.
     *
     * @return boolean
     * */
    get isLabelTemplate() {
        return this.label instanceof TemplateRef;
    }
    /**
     * Whether step is marked as completed.
     *
     * @type {boolean}
     */
    get completed() {
        return this._completed || this.isCompleted;
    }
    set completed(value) {
        this._completed = convertToBoolProperty(value);
    }
    get isCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /**
     * Mark step as selected
     * */
    select() {
        this.stepper.selected = this;
    }
    /**
     * Reset step and stepControl state
     * */
    reset() {
        this.interacted = false;
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
}
NbStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-step',
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
            },] }
];
NbStepComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_STEPPER,] }] }
];
NbStepComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    stepControl: [{ type: Input }],
    label: [{ type: Input }],
    hidden: [{ type: Input }],
    completed: [{ type: Input }]
};
//# sourceMappingURL=step.component.js.map