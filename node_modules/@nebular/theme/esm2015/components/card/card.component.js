/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
/**
 * Component intended to be used within the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-text-color:
 * card-header-text-font-family:
 * card-header-text-font-size:
 * card-header-text-font-weight:
 * card-header-text-line-height:
 * card-header-basic-background-color:
 * card-header-basic-text-color:
 * card-header-primary-background-color:
 * card-header-primary-text-color:
 * card-header-info-background-color:
 * card-header-info-text-color:
 * card-header-success-background-color:
 * card-header-success-text-color:
 * card-header-warning-background-color:
 * card-header-warning-text-color:
 * card-header-danger-background-color:
 * card-header-danger-text-color:
 * card-header-control-background-color:
 * card-header-control-text-color:
 */
export class NbCardHeaderComponent {
}
NbCardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-header',
                template: `<ng-content></ng-content>`
            },] }
];
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
export class NbCardBodyComponent {
}
NbCardBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-body',
                template: `<ng-content></ng-content>`
            },] }
];
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
export class NbCardFooterComponent {
}
NbCardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-footer',
                template: `<ng-content></ng-content>`
            },] }
];
/**
 * Basic content container component.
 *
 * Basic card example:
 * @stacked-example(Showcase, card/card-showcase.component)
 *
 * Basic card configuration:
 *
 * ```html
 * <nb-card>
 *   <nb-card-body>
 *     Card
 *   </nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Card with header and footer:
 * @stacked-example(With Header & Footer, card/card-full.component)
 *
 * Most of the time main card content goes to `nb-card-body`,
 * so it is styled and aligned in accordance with the header and footer.
 * In case you need a higher level of control, you can pass contend directly to `nb-card`,
 * so `nb-card-body` styling will not be applied.
 *
 * Consider an example with `nb-list` component:
 * @stacked-example(Card with list, card/card-without-body.component)
 *
 * Colored cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, card/card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, card/card-accents.component)
 *
 * Cards of smaller sizes could be combined and put on the same row with a bigger card so they have the same heights.
 * @stacked-example(Card sizes combinations, card/card-sizes-combinations.component)
 *
 * @additional-example(Multiple Sizes, card/card-sizes.component)
 *
 * @styles
 *
 * card-background-color:
 * card-text-color:
 * card-text-font-family:
 * card-text-font-size:
 * card-text-font-weight:
 * card-text-line-height:
 * card-border-width:
 * card-border-style:
 * card-border-color:
 * card-border-radius:
 * card-padding:
 * card-shadow:
 * card-divider-color:
 * card-divider-style:
 * card-divider-width:
 * card-height-tiny:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-giant:
 * card-margin-bottom:
 * card-scrollbar-color:
 * card-scrollbar-background-color:
 * card-scrollbar-width:
 */
export class NbCardComponent {
    constructor(statusService) {
        this.statusService = statusService;
        this._size = '';
        /**
         * Card status:
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = '';
        /**
         * Card accent (color of the top border):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.accent = '';
    }
    /**
     * Card size, available sizes:
     * tiny, small, medium, large, giant
     */
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
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
    get hasAccent() {
        return this.accent;
    }
    get primaryAccent() {
        return this.accent === 'primary';
    }
    get infoAccent() {
        return this.accent === 'info';
    }
    get successAccent() {
        return this.accent === 'success';
    }
    get warningAccent() {
        return this.accent === 'warning';
    }
    get dangerAccent() {
        return this.accent === 'danger';
    }
    get basicAccent() {
        return this.accent === 'basic';
    }
    get controlAccent() {
        return this.accent === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card',
                template: `
    <ng-content select="nb-card-header"></ng-content>
    <ng-content select="nb-card-body"></ng-content>
    <ng-content></ng-content>
    <ng-content select="nb-card-footer"></ng-content>
  `,
                styles: [":host{display:flex;flex-direction:column}\n"]
            },] }
];
NbCardComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbCardComponent.propDecorators = {
    size: [{ type: Input }],
    status: [{ type: Input }],
    accent: [{ type: Input }],
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
    hasAccent: [{ type: HostBinding, args: ['class.accent',] }],
    primaryAccent: [{ type: HostBinding, args: ['class.accent-primary',] }],
    infoAccent: [{ type: HostBinding, args: ['class.accent-info',] }],
    successAccent: [{ type: HostBinding, args: ['class.accent-success',] }],
    warningAccent: [{ type: HostBinding, args: ['class.accent-warning',] }],
    dangerAccent: [{ type: HostBinding, args: ['class.accent-danger',] }],
    basicAccent: [{ type: HostBinding, args: ['class.accent-basic',] }],
    controlAccent: [{ type: HostBinding, args: ['class.accent-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=card.component.js.map