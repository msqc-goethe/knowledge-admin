import { Inject, Injectable, NgZone } from '@angular/core';
import { FocusTrap, FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { NB_DOCUMENT } from '../../../theme.options';
/**
 * Overrides angular cdk focus trap to keep restore functionality inside trap.
 * */
export class NbFocusTrap extends FocusTrap {
    constructor(element, checker, ngZone, document, deferAnchors) {
        super(element, checker, ngZone, document, deferAnchors);
        this.element = element;
        this.checker = checker;
        this.ngZone = ngZone;
        this.document = document;
        this.savePreviouslyFocusedElement();
    }
    restoreFocus() {
        this.previouslyFocusedElement.focus();
        this.destroy();
    }
    blurPreviouslyFocusedElement() {
        this.previouslyFocusedElement.blur();
    }
    savePreviouslyFocusedElement() {
        this.previouslyFocusedElement = this.document.activeElement;
    }
}
export class NbFocusTrapFactoryService extends FocusTrapFactory {
    constructor(checker, ngZone, document) {
        super(checker, ngZone, document);
        this.checker = checker;
        this.ngZone = ngZone;
        this.document = document;
    }
    create(element, deferCaptureElements) {
        return new NbFocusTrap(element, this.checker, this.ngZone, this.document, deferCaptureElements);
    }
}
NbFocusTrapFactoryService.decorators = [
    { type: Injectable }
];
NbFocusTrapFactoryService.ctorParameters = () => [
    { type: InteractivityChecker },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
//# sourceMappingURL=focus-trap.js.map