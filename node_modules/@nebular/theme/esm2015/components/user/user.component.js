/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { convertToBoolProperty } from '../helpers';
/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 * @stacked-example(Showcase, user/user-showcase.component)
 *
 * ```ts
 *   <nb-user name="John Doe" title="Engineer"></nb-user>
 * ```
 *
 * ### Installation
 *
 * Import `NbUserModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbUserModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Available in multiple sizes:
 * @stacked-example(Multiple Sizes, user/user-sizes.component)
 *
 *
 * You can hide unnecessary captions (name, title or both):
 * @stacked-example(Hide captions in user component, user/user-hide-captions.component)
 *
 *
 * You can set custom avatar background-color, user image (as link or BASE64 string) and disable user initials:
 * @stacked-example(Avatar image settings, user/user-avatar-settings.component)
 *
 * Component shape could be controlled with `shape` input.
 * @stacked-example(Shapes, user/user-shape.component)
 *
 * @styles
 *
 * user-picture-box-background-color:
 * user-picture-box-border-color:
 * user-picture-box-border-width:
 * user-initials-text-color:
 * user-initials-text-font-family:
 * user-initials-text-font-weight:
 * user-name-text-color:
 * user-name-text-font-family:
 * user-name-text-font-weight:
 * user-title-text-color:
 * user-title-text-font-family:
 * user-title-text-font-weight:
 * user-rectangle-border-radius:
 * user-semi-round-border-radius:
 * user-round-border-radius:
 * user-tiny-height:
 * user-tiny-width:
 * user-tiny-initials-text-font-size:
 * user-tiny-initials-text-line-height:
 * user-tiny-name-text-font-size:
 * user-tiny-name-text-line-height:
 * user-tiny-title-text-font-size:
 * user-tiny-title-text-line-height:
 * user-small-height:
 * user-small-width:
 * user-small-initials-text-font-size:
 * user-small-initials-text-line-height:
 * user-small-name-text-font-size:
 * user-small-name-text-line-height:
 * user-small-title-text-font-size:
 * user-small-title-text-line-height:
 * user-medium-height:
 * user-medium-width:
 * user-medium-initials-text-font-size:
 * user-medium-initials-text-line-height:
 * user-medium-name-text-font-size:
 * user-medium-name-text-line-height:
 * user-medium-title-text-font-size:
 * user-medium-title-text-line-height:
 * user-large-height:
 * user-large-width:
 * user-large-initials-text-font-size:
 * user-large-initials-text-line-height:
 * user-large-name-text-font-size:
 * user-large-name-text-line-height:
 * user-large-title-text-font-size:
 * user-large-title-text-line-height:
 * user-giant-height:
 * user-giant-width:
 * user-giant-initials-text-font-size:
 * user-giant-initials-text-line-height:
 * user-giant-name-text-font-size:
 * user-giant-name-text-line-height:
 * user-giant-title-text-font-size:
 * user-giant-title-text-line-height:
 */
export class NbUserComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
         * Specifies a name to be shown on the right of a user picture
         * @type string
         */
        this.name = 'Anonymous';
        /**
         * Size of the component.
         * Possible values: `tiny`, `small`, `medium` (default), `large`, 'giant'.
         */
        this.size = 'medium';
        /**
         * Shape of the picture box.
         * Possible values: `rectangle`, `semi-round`, `round`.
         */
        this.shape = 'round';
        this._showName = true;
        this._showTitle = true;
        this._showInitials = true;
        /**
         * Badge status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         * @param {string} val
         */
        this.badgeStatus = 'basic';
    }
    /**
     * Absolute path to a user picture or base64 image.
     * User name initials will be shown if no picture specified (JD for John Doe).
     * @type string
     */
    set picture(value) {
        this.imageBackgroundStyle = value ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`) : null;
    }
    /**
     * Whether to show a user name or not
     */
    get showName() {
        return this._showName;
    }
    set showName(val) {
        this._showName = convertToBoolProperty(val);
    }
    /**
     * Whether to show a user title or not
     * @type boolean
     */
    get showTitle() {
        return this._showTitle;
    }
    set showTitle(val) {
        this._showTitle = convertToBoolProperty(val);
    }
    /**
     * Whether to show a user initials (if no picture specified) or not
     * @type boolean
     */
    get showInitials() {
        return this._showInitials;
    }
    set showInitials(val) {
        this._showInitials = convertToBoolProperty(val);
    }
    /**
     * Whether to show only a picture or also show the name and title
     * @type boolean
     */
    get onlyPicture() {
        return !this.showName && !this.showTitle;
    }
    set onlyPicture(val) {
        this.showName = this.showTitle = !convertToBoolProperty(val);
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
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get round() {
        return this.shape === 'round';
    }
    getInitials() {
        if (this.name) {
            const names = this.name.split(' ');
            return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
        }
        return '';
    }
}
NbUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-user',
                template: "<div class=\"user-container\">\n  <div *ngIf=\"imageBackgroundStyle\" class=\"user-picture image\" [style.background-image]=\"imageBackgroundStyle\">\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  </div>\n  <div *ngIf=\"!imageBackgroundStyle\" class=\"user-picture initials\" [style.background-color]=\"color\">\n    <ng-container *ngIf=\"showInitials\">\n      {{ getInitials() }}\n    </ng-container>\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  </div>\n\n  <div class=\"info-container\">\n    <div *ngIf=\"showName && name\" class=\"user-name\">{{ name }}</div>\n    <div *ngIf=\"showTitle && title\" class=\"user-title\">{{ title }}</div>\n  </div>\n</div>\n",
                styles: [":host{display:flex}:host .user-container{position:relative;display:flex;align-items:center}:host .user-picture{position:relative;flex-shrink:0}:host .user-picture.image{background-size:cover;background-repeat:no-repeat}:host .user-picture.initials{display:flex;align-items:center;justify-content:center}[dir=rtl] :host .user-name,[dir=rtl] :host .user-title{text-align:right}[dir=ltr] :host .info-container{margin-left:.5rem}[dir=rtl] :host .info-container{margin-right:.5rem}\n"]
            },] }
];
NbUserComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
NbUserComponent.propDecorators = {
    name: [{ type: Input }],
    title: [{ type: Input }],
    picture: [{ type: Input }],
    color: [{ type: Input }],
    size: [{ type: Input }],
    shape: [{ type: Input }],
    showName: [{ type: Input }],
    showTitle: [{ type: Input }],
    showInitials: [{ type: Input }],
    onlyPicture: [{ type: Input }],
    badgeText: [{ type: Input }],
    badgeStatus: [{ type: Input }],
    badgePosition: [{ type: Input }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    rectangle: [{ type: HostBinding, args: ['class.shape-rectangle',] }],
    semiRound: [{ type: HostBinding, args: ['class.shape-semi-round',] }],
    round: [{ type: HostBinding, args: ['class.shape-round',] }]
};
//# sourceMappingURL=user.component.js.map