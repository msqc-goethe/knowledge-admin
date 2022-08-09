/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * ```ts
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *    icon: 'home',
 *    responsive: true, // hide title before `route-tabs-icon-only-max-width` value
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 * ### Installation
 *
 * Import `NbRouteTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRouteTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * @stacked-example(Route Tabset, tabset/route-tabset-showcase.component)
 *
 * @styles
 *
 * route-tabset-background-color:
 * route-tabset-border-radius:
 * route-tabset-shadow:
 * route-tabset-tab-background-color:
 * route-tabset-tab-padding:
 * route-tabset-tab-text-color:
 * route-tabset-tab-text-font-family:
 * route-tabset-tab-text-font-size:
 * route-tabset-tab-text-font-weight:
 * route-tabset-tab-text-line-height:
 * route-tabset-tab-text-transform:
 * route-tabset-tab-underline-width:
 * route-tabset-tab-underline-color:
 * route-tabset-tab-active-background-color:
 * route-tabset-tab-active-text-color:
 * route-tabset-tab-active-underline-color:
 * route-tabset-tab-focus-background-color:
 * route-tabset-tab-focus-text-color:
 * route-tabset-tab-focus-underline-color:
 * route-tabset-tab-hover-background-color:
 * route-tabset-tab-hover-text-color:
 * route-tabset-tab-hover-underline-color:
 * route-tabset-tab-disabled-background-color:
 * route-tabset-tab-disabled-text-color:
 * route-tabset-tab-disabled-underline-color:
 * route-tabset-divider-color:
 * route-tabset-divider-style:
 * route-tabset-divider-width:
 * route-tabset-scrollbar-color:
 * route-tabset-scrollbar-background-color:
 * route-tabset-scrollbar-width:
 * route-tabset-tab-text-hide-breakpoint:
 */
export class NbRouteTabsetComponent {
    constructor() {
        this.fullWidthValue = false;
        /**
         * Options passed to `routerLinkActiveOptions` directive which set on tab links.
         * `{ exact: true }` by default.
         */
        this.activeLinkOptions = { exact: true };
        /**
         * Emits when tab is selected
         * @type {EventEmitter<any>}
         */
        this.changeTab = new EventEmitter();
    }
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val) {
        this.fullWidthValue = convertToBoolProperty(val);
    }
    selectTab(tab) {
        this.changeTab.emit(tab);
    }
}
NbRouteTabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-route-tabset',
                template: `
    <ul class="route-tabset">
      <ng-container *ngFor="let tab of tabs">
        <li *ngIf="tab.disabled; else enabled"
            [class.responsive]="tab.responsive"
            class="route-tab disabled"
            tabindex="-1">
          <a tabindex="-1" class="tab-link">
            <nb-icon *ngIf="tab.icon" [config]="tab.icon"></nb-icon>
            <span *ngIf="tab.title" class="tab-text">{{ tab.title }}</span>
          </a>
        </li>

        <ng-template #enabled>
          <li (click)="$event.preventDefault(); selectTab(tab)"
              [routerLink]="tab.route"
              routerLinkActive="active"
              [routerLinkActiveOptions]="activeLinkOptions"
              [class.responsive]="tab.responsive"
              [queryParams]="tab.queryParams"
              [queryParamsHandling]="tab.queryParamsHandling"
              [fragment]="tab.fragment"
              [preserveFragment]="tab.preserveFragment"
              [skipLocationChange]="tab.skipLocationChange"
              [replaceUrl]="tab.replaceUrl"
              [state]="tab.state"
              tabindex="0"
              class="route-tab">
            <a tabindex="-1" class="tab-link">
              <nb-icon *ngIf="tab.icon" [icon]="tab.icon"></nb-icon>
              <span *ngIf="tab.title" class="tab-text">{{ tab.title }}</span>
            </a>
          </li>
        </ng-template>
      </ng-container>
    </ul>
    <router-outlet></router-outlet>
  `,
                styles: [".route-tabset{display:flex;flex-direction:row;list-style-type:none;margin:0;padding:0}.route-tabset .route-tab{margin-bottom:-1px;text-align:center;padding:0}.route-tabset .route-tab.active a::before{display:block}.route-tabset .route-tab a{position:relative;text-decoration:none;display:inline-block}.route-tabset .route-tab a::before{position:absolute;content:'';width:100%;border-radius:3px;bottom:-2px;left:0}.route-tabset .route-tab a nb-icon{vertical-align:middle}[dir=ltr] :host .tab-link nb-icon+span{margin-left:.5rem}[dir=rtl] :host .tab-link nb-icon+span{margin-right:.5rem}:host(.full-width) .route-tabset{justify-content:space-around}\n"]
            },] }
];
NbRouteTabsetComponent.propDecorators = {
    fullWidthValue: [{ type: HostBinding, args: ['class.full-width',] }],
    tabs: [{ type: Input }],
    activeLinkOptions: [{ type: Input }],
    fullWidth: [{ type: Input }],
    changeTab: [{ type: Output }]
};
//# sourceMappingURL=route-tabset.component.js.map