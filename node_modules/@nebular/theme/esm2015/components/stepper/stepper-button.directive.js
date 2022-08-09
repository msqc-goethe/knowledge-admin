import { NbStepperComponent } from './stepper.component';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';
export class NbStepperNextDirective {
    constructor(stepper) {
        this.stepper = stepper;
        this.type = 'submit';
    }
    onClick() {
        this.stepper.next();
    }
}
NbStepperNextDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[nbStepperNext]',
            },] }
];
NbStepperNextDirective.ctorParameters = () => [
    { type: NbStepperComponent }
];
NbStepperNextDirective.propDecorators = {
    type: [{ type: Input }, { type: HostBinding, args: ['attr.type',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
export class NbStepperPreviousDirective {
    constructor(stepper) {
        this.stepper = stepper;
        this.type = 'button';
    }
    onClick() {
        this.stepper.previous();
    }
}
NbStepperPreviousDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[nbStepperPrevious]',
            },] }
];
NbStepperPreviousDirective.ctorParameters = () => [
    { type: NbStepperComponent }
];
NbStepperPreviousDirective.propDecorators = {
    type: [{ type: Input }, { type: HostBinding, args: ['attr.type',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=stepper-button.directive.js.map