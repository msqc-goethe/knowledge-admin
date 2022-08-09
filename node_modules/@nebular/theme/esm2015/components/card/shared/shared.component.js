import { Component } from '@angular/core';
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
export class NbCardFrontComponent {
}
NbCardFrontComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-front',
                template: '<ng-content select="nb-card"></ng-content>'
            },] }
];
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */
export class NbCardBackComponent {
}
NbCardBackComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-back',
                template: '<ng-content select="nb-card"></ng-content>'
            },] }
];
//# sourceMappingURL=shared.component.js.map