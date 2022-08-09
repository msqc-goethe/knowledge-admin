/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbThemeOptions } from './theme.options';
import { NbJSThemeOptions } from './services/js-themes/theme.options';
import { NbMediaBreakpoint } from './services/breakpoints.service';
import { NbLayoutDirection } from './services/direction.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare function windowFactory(platformId: Object): Window | undefined;
export declare class NbThemeModule {
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     * @param layoutDirection {NbLayoutDirection} Layout direction
     *
     * @returns {ModuleWithProviders}
     */
    static forRoot(nbThemeOptions?: NbThemeOptions, nbJSThemes?: NbJSThemeOptions[], nbMediaBreakpoints?: NbMediaBreakpoint[], layoutDirection?: NbLayoutDirection): ModuleWithProviders<NbThemeModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbThemeModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<NbThemeModule, never, [typeof ɵngcc1.CommonModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<NbThemeModule>;
}

//# sourceMappingURL=theme.module.d.ts.map