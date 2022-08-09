import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { NbPosition } from '../cdk/overlay/overlay-position';
/**
 * The `NbOptionListComponent` is container component for `NbOptionGroupComponent` and`NbOptionComponent` list.
 *
 * @styles
 *
 * option-list-max-height:
 * option-list-shadow:
 * option-list-background-color:
 * option-list-border-style:
 * option-list-border-width:
 * option-list-border-color:
 * option-list-border-radius:
 * option-list-adjacent-border-color:
 * option-list-adjacent-border-style:
 * option-list-adjacent-border-width:
 * */
export class NbOptionListComponent {
    constructor() {
        this.size = 'medium';
    }
    get positionTop() {
        return this.position === NbPosition.TOP;
    }
    get positionBottom() {
        return this.position === NbPosition.BOTTOM;
    }
    get sizeTiny() {
        return this.size === 'tiny';
    }
    get sizeSmall() {
        return this.size === 'small';
    }
    get sizeMedium() {
        return this.size === 'medium';
    }
    get sizeLarge() {
        return this.size === 'large';
    }
    get sizeGiant() {
        return this.size === 'giant';
    }
}
NbOptionListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-option-list',
                template: `
    <ul class="option-list">
      <ng-content></ng-content>
    </ul>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbOptionListComponent.propDecorators = {
    size: [{ type: Input }],
    position: [{ type: Input }],
    positionTop: [{ type: HostBinding, args: ['class.position-top',] }],
    positionBottom: [{ type: HostBinding, args: ['class.position-bottom',] }],
    sizeTiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    sizeSmall: [{ type: HostBinding, args: ['class.size-small',] }],
    sizeMedium: [{ type: HostBinding, args: ['class.size-medium',] }],
    sizeLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    sizeGiant: [{ type: HostBinding, args: ['class.size-giant',] }]
};
//# sourceMappingURL=option-list.component.js.map