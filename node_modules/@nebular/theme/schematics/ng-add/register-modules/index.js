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
exports.registerModules = void 0;
var schematics_1 = require("@angular-devkit/schematics");
var ast_utils_1 = require("@schematics/angular/utility/ast-utils");
var schematics_2 = require("@angular/cdk/schematics");
var core_1 = require("@angular-devkit/core");
var util_1 = require("../../util");
var app_routing_module_content_1 = require("./app-routing-module-content");
function registerModules(options) {
    if (!options.theme) {
        options.theme = 'default';
    }
    return schematics_1.chain([
        registerAnimationsModule(options),
        registerNebularModules(options),
        registerRouterIfNeeded(options),
    ]);
}
exports.registerModules = registerModules;
function registerAnimationsModule(options) {
    var _this = this;
    return function (tree, context) { return __awaiter(_this, void 0, void 0, function () {
        var project, appModulePath, browserAnimationsModuleName, noopAnimationsModuleName, animationsPackage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, util_1.getProject(tree, options.project)];
                case 1:
                    project = _a.sent();
                    appModulePath = util_1.getAppModulePath(tree, schematics_2.getProjectMainFile(project));
                    browserAnimationsModuleName = 'BrowserAnimationsModule';
                    noopAnimationsModuleName = 'NoopAnimationsModule';
                    animationsPackage = '@angular/platform-browser/animations';
                    if (options.animations) {
                        // In case the project explicitly uses the NoopAnimationsModule, we should print a warning
                        // message that makes the user aware of the fact that we won't automatically set up
                        // animations. If we would add the BrowserAnimationsModule while the NoopAnimationsModule
                        // is already configured, we would cause unexpected behavior and runtime exceptions.
                        if (schematics_2.hasNgModuleImport(tree, appModulePath, noopAnimationsModuleName)) {
                            return [2 /*return*/, context.logger.warn("\u001B[31mCould not set up \"" + browserAnimationsModuleName + "\" " +
                                    ("because \"" + noopAnimationsModuleName + "\" is already imported. Please manually ") +
                                    "set up browser animations.")];
                        }
                        schematics_2.addModuleImportToRootModule(tree, browserAnimationsModuleName, animationsPackage, project);
                    }
                    else if (!schematics_2.hasNgModuleImport(tree, appModulePath, browserAnimationsModuleName)) {
                        // Do not add the NoopAnimationsModule module if the project already explicitly uses
                        // the BrowserAnimationsModule.
                        schematics_2.addModuleImportToRootModule(tree, noopAnimationsModuleName, animationsPackage, project);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
}
function registerNebularModules(options) {
    var _this = this;
    return function (tree) { return __awaiter(_this, void 0, void 0, function () {
        var project, nebularThemeModule;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, util_1.getProject(tree, options.project)];
                case 1:
                    project = _a.sent();
                    nebularThemeModule = "NbThemeModule.forRoot({ name: '" + options.theme + "' })";
                    schematics_2.addModuleImportToRootModule(tree, nebularThemeModule, '@nebular/theme', project);
                    schematics_2.addModuleImportToRootModule(tree, 'NbLayoutModule', '@nebular/theme', project);
                    schematics_2.addModuleImportToRootModule(tree, 'NbEvaIconsModule', '@nebular/eva-icons', project);
                    return [2 /*return*/];
            }
        });
    }); };
}
/**
 * Creates `AppRoutingModule` if no either `RouterModule` or `AppRoutingModule` already imported
 * in the `AppModule`.
 * */
function registerRouterIfNeeded(options) {
    var _this = this;
    return function (tree) { return __awaiter(_this, void 0, void 0, function () {
        var project;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, util_1.getProject(tree, options.project)];
                case 1:
                    project = _a.sent();
                    if (!shouldRegisterRouter(tree, project)) return [3 /*break*/, 3];
                    return [4 /*yield*/, registerRoutingModule(tree, options.project)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
}
/**
 * Checks if `RouterModule` or `AppRoutingModule` already imported in the `AppModule`.
 * */
function shouldRegisterRouter(tree, project) {
    var appRoutingModuleAlreadyImported = util_1.isImportedInMainModule(tree, project, 'AppRoutingModule');
    var appModulePath = util_1.getAppModulePath(tree, schematics_2.getProjectMainFile(project));
    var routerModuleAlreadyImported = !!ast_utils_1.getRouterModuleDeclaration(schematics_2.parseSourceFile(tree, appModulePath));
    return !(appRoutingModuleAlreadyImported || routerModuleAlreadyImported);
}
function registerRoutingModule(tree, projectName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, registerAppRoutingModule(tree, projectName)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, createAppRoutingModule(tree, projectName)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * We're just adding app-routing.module without any interpolations
 * and customization. So, I don't think we have to use schematics
 * template files.
 * */
function createAppRoutingModule(tree, projectName) {
    return __awaiter(this, void 0, void 0, function () {
        var project, appRoutingModulePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, util_1.getProject(tree, projectName)];
                case 1:
                    project = _a.sent();
                    appRoutingModulePath = core_1.normalize(project.sourceRoot + "/app/app-routing.module.ts");
                    tree.create(appRoutingModulePath, app_routing_module_content_1.appRoutingModuleContent);
                    return [2 /*return*/];
            }
        });
    });
}
function registerAppRoutingModule(tree, projectName) {
    return __awaiter(this, void 0, void 0, function () {
        var project;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, util_1.getProject(tree, projectName)];
                case 1:
                    project = _a.sent();
                    schematics_2.addModuleImportToRootModule(tree, 'AppRoutingModule', './app-routing.module', project);
                    return [2 /*return*/];
            }
        });
    });
}
