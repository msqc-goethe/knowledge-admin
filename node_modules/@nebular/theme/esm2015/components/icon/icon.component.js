/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NbStatusService } from '../../services/status.service';
import { NbIconLibraries } from './icon-libraries';
/**
 * Icon component. Allows to render both `svg` and `font` icons.
 * Starting from Nebular 4.0 uses [Eva Icons](https://akveo.github.io/eva-icons/) pack by default.
 *
 * Basic icon example:
 * @stacked-example(Showcase, icon/icon-showcase.component)
 *
 * Icon configuration:
 *
 * ```html
 * <nb-icon icon="star"></nb-icon>
 * ```
 * ### Installation
 *
 * By default Nebular comes without any pre-installed icon pack.
 * Starting with Nebular 4.0.0 we ship separate package called `@nebular/eva-icons`
 * which integrates SVG [Eva Icons](https://akveo.github.io/eva-icons/) pack to Nebular. To add it to your
 * project run:
 * ```sh
 * npm i eva-icons @nebular/eva-icons
 * ```
 * This command will install Eva Icons pack. Then register `NbEvaIconsModule` into your app module:
 * ```ts
 * import { NbEvaIconsModule } from '@nebular/eva-icons';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbEvaIconsModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * Last thing, import `NbIconModule` to your feature module where you need to show an icon:
 * ```ts
 * import { NbIconModule } from '@nebular/theme';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbIconModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Icon can be colored using `status` input:
 * ```html
 * <nb-icon icon="star" status="warning"></nb-icon>
 * ```
 *
 * Colored icons:
 * @stacked-example(Colored Icons, icon/icon-colors.component)
 *
 * In case you need to specify an icon from a specific icon pack, this could be done using `pack` input property:
 * ```html
 * <nb-icon icon="star" pack="font-awesome"></nb-icon>
 * ```
 * Additional icon settings (if available by the icon pack) could be passed using `options` input:
 *
 * ```html
 * <nb-icon icon="star" [options]="{ animation: { type: 'zoom' } }"></nb-icon>
 * ```
 *
 * @styles
 *
 * icon-font-size:
 * icon-line-height:
 * icon-width:
 * icon-height:
 * icon-svg-vertical-align:
 * icon-basic-color:
 * icon-primary-color:
 * icon-info-color:
 * icon-success-color:
 * icon-warning-color:
 * icon-danger-color:
 * icon-control-color:
 */
export class NbIconComponent {
    constructor(sanitizer, iconLibrary, el, renderer, statusService) {
        this.sanitizer = sanitizer;
        this.iconLibrary = iconLibrary;
        this.el = el;
        this.renderer = renderer;
        this.statusService = statusService;
        this.prevClasses = [];
        this.html = '';
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
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    /**
     * Sets all icon configurable properties via config object.
     * If passed value is a string set icon name.
     * @docs-private
     */
    get config() {
        return this._config;
    }
    set config(value) {
        if (!value) {
            return;
        }
        this._config = value;
        if (typeof value === 'string') {
            this.icon = value;
        }
        else {
            this.icon = value.icon;
            this.pack = value.pack;
            this.status = value.status;
            this.options = value.options;
        }
    }
    ngOnInit() {
        this.iconDef = this.renderIcon(this.icon, this.pack, this.options);
    }
    ngOnChanges() {
        const iconDef = this.iconLibrary.getIcon(this.icon, this.pack);
        if (iconDef) {
            this.renderIcon(this.icon, this.pack, this.options);
        }
        else {
            this.clearIcon();
        }
    }
    renderIcon(name, pack, options) {
        const iconDefinition = this.iconLibrary.getIcon(name, pack);
        if (!iconDefinition) {
            return;
        }
        const content = iconDefinition.icon.getContent(options);
        if (content) {
            this.html = this.sanitizer.bypassSecurityTrustHtml(content);
        }
        this.assignClasses(iconDefinition.icon.getClasses(options));
        return iconDefinition;
    }
    clearIcon() {
        this.html = '';
        this.assignClasses([]);
    }
    assignClasses(classes) {
        this.prevClasses.forEach((className) => {
            this.renderer.removeClass(this.el.nativeElement, className);
        });
        classes.forEach((className) => {
            this.renderer.addClass(this.el.nativeElement, className);
        });
        this.prevClasses = classes;
    }
}
NbIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-icon',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:inline-block}\n"]
            },] }
];
NbIconComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: NbIconLibraries },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NbStatusService }
];
NbIconComponent.propDecorators = {
    html: [{ type: HostBinding, args: ['innerHtml',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    icon: [{ type: Input }],
    pack: [{ type: Input }],
    options: [{ type: Input }],
    status: [{ type: Input }],
    config: [{ type: Input }]
};
//# sourceMappingURL=icon.component.js.map