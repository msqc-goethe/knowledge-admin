/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
export class NbActionComponent {
    constructor() {
        /**
         * Optional title for mouseover
         * @type string
         */
        this.title = '';
        this._disabled = false;
        /**
         * Badge status (adds specific styles):
         * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
         * @param {string} val
         */
        this.badgeStatus = 'basic';
    }
    /**
     * Visually disables the item
     * @type boolean
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    /**
     * Use badge dot mode
     * @type boolean
     */
    get badgeDot() {
        return this._badgeDot;
    }
    set badgeDot(value) {
        this._badgeDot = convertToBoolProperty(value);
    }
}
NbActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-action',
                template: `
    <ng-container *ngIf="icon; else projectedContent">
      <a class="icon-container"
         [routerLink]="link"
         [title]="title"
         *ngIf="link">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
      <a class="icon-container"
         [href]="href"
         [title]="title"
         *ngIf="href && !link">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
      <a class="icon-container"
         href="#"
         [title]="title"
         *ngIf="!href && !link"
         (click)="$event.preventDefault()">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
    </ng-container>

    <ng-template #projectedContent>
      <ng-content></ng-content>
      <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
    </ng-template>
    <ng-template #badgeTemplate>
      <nb-badge *ngIf="badgeText || badgeDot"
                [text]="badgeText"
                [dotMode]="badgeDot"
                [status]="badgeStatus"
                [position]="badgePosition">
      </nb-badge>
    </ng-template>
  `,
                styles: [":host{background:transparent;display:flex;align-items:center;position:relative}:host(.disabled){cursor:not-allowed}:host(.disabled) a,:host(.disabled) nb-icon{cursor:not-allowed}:host-context(nb-actions.full-width){justify-content:center;width:100%}a.icon-container{position:relative}a.icon-container:hover,a.icon-container:focus{text-decoration:none}nb-icon:hover{cursor:pointer}\n"]
            },] }
];
NbActionComponent.propDecorators = {
    link: [{ type: Input }],
    href: [{ type: Input }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['class.disabled',] }],
    badgeDot: [{ type: Input }],
    badgeText: [{ type: Input }],
    badgeStatus: [{ type: Input }],
    badgePosition: [{ type: Input }]
};
/**
 * Shows a horizontal list of actions, available in multiple sizes.
 * Aligns items vertically.
 *
 * @stacked-example(Showcase, action/action-showcase.component)
 *
 * Basic actions setup:
 * ```html
 * <nb-actions size="small">
 *   <nb-action icon="nb-search"></nb-action>
 *   <nb-action icon="nb-power-circled"></nb-action>
 *   <nb-action icon="nb-person"></nb-action>
 * </nb-actions>
 * ```
 * ### Installation
 *
 * Import `NbActionsModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbActionsModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Multiple sizes example:
 * @stacked-example(Multiple Sizes, action/action-sizes.component)
 *
 * It is also possible to specify a `badge` value:
 *
 * @stacked-example(Action Badge, action/action-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, action/action-width.component)
 *
 * Action dot mode
 * @stacked-example(Action badge in dot mode, action/action-dot-mode.component)
 *
 * @styles
 *
 * actions-background-color:
 * actions-divider-color:
 * actions-divider-style:
 * actions-divider-width:
 * actions-icon-color:
 * actions-text-color:
 * actions-text-font-family:
 * actions-text-font-weight:
 * actions-text-line-height:
 * actions-disabled-icon-color:
 * actions-disabled-text-color:
 * actions-tiny-height:
 * actions-tiny-icon-height:
 * actions-tiny-padding:
 * actions-tiny-text-font-size:
 * actions-small-height:
 * actions-small-icon-height:
 * actions-small-padding:
 * actions-small-text-font-size:
 * actions-medium-height:
 * actions-medium-icon-height:
 * actions-medium-padding:
 * actions-medium-text-font-size:
 * actions-large-height:
 * actions-large-icon-height:
 * actions-large-padding:
 * actions-large-text-font-size:
 * actions-giant-height:
 * actions-giant-icon-height:
 * actions-giant-padding:
 * actions-giant-text-font-size:
 */
export class NbActionsComponent {
    constructor() {
        this._size = 'small';
        this._fullWidth = false;
    }
    /**
     * Size of the component: 'tiny', 'small' (default), 'medium', 'large', 'giant'
     */
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    /**
     * Component will fill full width of the container
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
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
}
NbActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-actions',
                template: `
    <ng-content select="nb-action"></ng-content>
  `,
                styles: [":host{display:flex;align-items:center}\n"]
            },] }
];
NbActionsComponent.propDecorators = {
    size: [{ type: Input }],
    fullWidth: [{ type: Input }, { type: HostBinding, args: ['class.full-width',] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }]
};
//# sourceMappingURL=actions.component.js.map