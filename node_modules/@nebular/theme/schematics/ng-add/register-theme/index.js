"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPrebuiltTheme = exports.registerCustomizableTheme = void 0;
var schematics_1 = require("@angular/cdk/schematics");
var schematics_2 = require("@angular-devkit/schematics");
var workspace_1 = require("@schematics/angular/utility/workspace");
var core_1 = require("@angular-devkit/core");
var theme_content_1 = require("./theme-content");
var util_1 = require("../../util");
/**
 * Registers customizable scss theme in the specified project.
 * It creates `theme.scss` file which manages theme content and it's customization.
 * Also as importing `theme.scss` in the styles.scss file and installing the theme globally.
 * If the project uses *.css files it'll throw the error. Because we can't use scss themes
 * in the css Angular project.
 * */
function registerCustomizableTheme(options) {
    var _this = this;
    return function (tree) { return __awaiter(_this, void 0, void 0, function () {
        var project, stylesPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, util_1.getProject(tree, options.project)];
                case 1:
                    project = _a.sent();
                    stylesPath = schematics_1.getProjectStyleFile(project, 'scss');
                    if (!tree.exists(stylesPath)) {
                        throwSCSSRequiredForCustomizableThemes();
                    }
                    createThemeSCSS(tree, options.theme, project.sourceRoot);
                    insertThemeImportInStyles(tree, stylesPath);
                    return [2 /*return*/];
            }
        });
    }); };
}
exports.registerCustomizableTheme = registerCustomizableTheme;
/**
 * Registers prebuilt css themes by inserting them in the angular.json styles.
 * */
function registerPrebuiltTheme(options) {
    var _this = this;
    return workspace_1.updateWorkspace(function (workspace) { return __awaiter(_this, void 0, void 0, function () {
        var project, themePath;
        return __generator(this, function (_a) {
            project = schematics_1.getProjectFromWorkspace(workspace, options.project);
            themePath = "./node_modules/@nebular/theme/styles/prebuilt/" + options.theme + ".css";
            addStyleToTarget(project, 'build', themePath);
            return [2 /*return*/];
        });
    }); });
}
exports.registerPrebuiltTheme = registerPrebuiltTheme;
/**
 * Creates theme.scss with Nebular theme setup.
 * */
function createThemeSCSS(tree, theme, sourceRoot) {
    var themeContent = theme_content_1.createThemeContent(theme);
    var customThemePath = core_1.normalize(core_1.join(sourceRoot, 'themes.scss'));
    tree.create(customThemePath, themeContent);
}
/**
 * Updates styles.scss and insert theme.scss import.
 * */
function insertThemeImportInStyles(tree, stylesPath) {
    var recorder = tree.beginUpdate(stylesPath)
        .insertLeft(0, theme_content_1.stylesContent);
    tree.commitUpdate(recorder);
}
/**
 * Adds a style entry to the given project target.
 * */
function addStyleToTarget(project, targetName, stylesPath) {
    var targetOptions = schematics_1.getProjectTargetOptions(project, targetName);
    if (!targetOptions.styles) {
        targetOptions.styles = [stylesPath];
    }
    else if (noNebularThemeIncluded(targetOptions, stylesPath)) {
        targetOptions.styles.unshift(stylesPath);
    }
}
/**
 * Validates no Nebular styles already included into the specified project.
 * */
function noNebularThemeIncluded(targetOptions, stylesPath) {
    var existingStyles = targetOptions.styles.map(function (s) { return typeof s === 'string' ? s : s.input; });
    var hasGivenTheme = existingStyles.find(function (s) { return s.includes(stylesPath); });
    var hasOtherTheme = existingStyles.find(function (s) { return s.includes('@nebular/theme/styles/prebuilt'); });
    return !hasGivenTheme && !hasOtherTheme;
}
function throwSCSSRequiredForCustomizableThemes() {
    throw new schematics_2.SchematicsException('No scss root found. Customizable theme requires scss to be enabled in the project.');
}
