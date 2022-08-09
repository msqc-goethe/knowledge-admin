"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylesContent = exports.createThemeContent = void 0;
function createThemeContent(themeName) {
    return "@import '~@nebular/theme/styles/theming';\n@import '~@nebular/theme/styles/themes/" + themeName + "';\n\n$nb-themes: nb-register-theme((\n\n  // add your variables here like:\n\n  // color-primary-100: #f2f6ff,\n  // color-primary-200: #d9e4ff,\n  // color-primary-300: #a6c1ff,\n  // color-primary-400: #598bff,\n  // color-primary-500: #3366ff,\n  // color-primary-600: #274bdb,\n  // color-primary-700: #1a34b8,\n  // color-primary-800: #102694,\n  // color-primary-900: #091c7a,\n\n), " + themeName + ", " + themeName + ");\n";
}
exports.createThemeContent = createThemeContent;
exports.stylesContent = "@import 'themes';\n\n@import '~@nebular/theme/styles/globals';\n\n@include nb-install() {\n  @include nb-theme-global();\n};\n";
