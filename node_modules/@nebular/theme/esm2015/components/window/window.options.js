import { InjectionToken } from '@angular/core';
export var NbWindowState;
(function (NbWindowState) {
    NbWindowState["MINIMIZED"] = "minimized";
    NbWindowState["MAXIMIZED"] = "maximized";
    NbWindowState["FULL_SCREEN"] = "full-screen";
})(NbWindowState || (NbWindowState = {}));
export const NB_WINDOW_DEFAULT_BUTTONS_CONFIG = {
    minimize: true,
    maximize: true,
    fullScreen: true,
};
/**
 * Window configuration options.
 */
export class NbWindowConfig {
    constructor(...configs) {
        /**
         * Window title.
         */
        this.title = '';
        /**
         * Initial window state. Full screen by default.
         */
        this.initialState = NbWindowState.FULL_SCREEN;
        /**
         * If true than backdrop will be rendered behind window.
         * By default set to true.
         */
        this.hasBackdrop = true;
        /**
         * If set to true mouse clicks on backdrop will close a window.
         * Default is true.
         */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a window.
         * Default is true.
         */
        this.closeOnEsc = true;
        /**
         * Class to be applied to the window.
         */
        this.windowClass = '';
        /**
         * Both, template and component may receive data through `config.context` property.
         * For components, this data will be set as component properties.
         * For templates, you can access it inside template as $implicit.
         */
        this.context = {};
        /**
         * Where the attached component should live in Angular's *logical* component tree.
         * This affects what is available for injection and the change detection order for the
         * component instantiated inside of the window. This does not affect where the window
         * content will be rendered.
         */
        this.viewContainerRef = null;
        /**
         * Windows control buttons can be hidden by setting according property to false.
         */
        this.buttons = {};
        Object.assign(this, ...configs);
        this.applyDefaultButtonConfig();
    }
    applyDefaultButtonConfig() {
        Object.assign(this, { buttons: Object.assign(Object.assign({}, NB_WINDOW_DEFAULT_BUTTONS_CONFIG), this.buttons) });
    }
}
export const NB_WINDOW_CONTENT = new InjectionToken('Nebular Window Content');
export const NB_WINDOW_CONFIG = new InjectionToken('Nebular Window Config');
export const NB_WINDOW_CONTEXT = new InjectionToken('Nebular Window Context');
//# sourceMappingURL=window.options.js.map