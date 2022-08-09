"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tasks_1 = require("@angular-devkit/schematics/tasks");
/**
 * This utils has to imported directly from the `/util/package`, not from the `/util/`.
 * Other utilities use `@angular/sdk/schematics` and `@schematics/angular` packages.
 * But these packages are not installed in this step.
 * */
var package_1 = require("../util/package");
/**
 * ng-add schematics, installs peer dependencies and runs project setup schematics.
 * */
function default_1(options) {
    return runSetupSchematics(options);
}
exports.default = default_1;
/**
 * Add required peer dependencies in package.json
 * */
function installMainPeerDependencies(tree) {
    var angularCoreVersion = package_1.getDependencyVersionFromPackageJson(tree, '@angular/core');
    var angularCliVersion = package_1.getDevDependencyVersionFromPackageJson(tree, '@angular/cli');
    var nebularThemeVersion = package_1.getNebularVersion();
    var angularCdkVersion = package_1.getNebularPeerDependencyVersionFromPackageJson('@angular/cdk');
    package_1.addDependencyToPackageJson(tree, '@angular/animations', angularCoreVersion);
    package_1.addDependencyToPackageJson(tree, '@angular/cdk', angularCdkVersion, true);
    package_1.addDependencyToPackageJson(tree, '@nebular/theme', nebularThemeVersion);
    package_1.addDependencyToPackageJson(tree, '@nebular/eva-icons', nebularThemeVersion);
    package_1.addDevDependencyToPackageJson(tree, '@schematics/angular', angularCliVersion);
}
/**
 * Runs `npm install`, then `post-install` schematic and after complete runs `setup` schematics.
 * The rest part of the ng-add schematics uses `@angular/cdk/schematics` and `@schematics/angular`
 * utilities. That's why we have to install `@angular/cdk` and `@schematics/angular` package
 * before running Nebular setup in the project.
 *
 * The only possibility to run `setup` schematics after required packages installed
 * is to use context tasks and add `npm install` task as the dependency to `setup` schematics task.
 * */
function runSetupSchematics(options) {
    return function (tree, context) {
        installMainPeerDependencies(tree);
        var installTaskId = context.addTask(new tasks_1.NodePackageInstallTask());
        var postInstallTaskId = context.addTask(new tasks_1.RunSchematicTask('post-install', options), [installTaskId]);
        context.addTask(new tasks_1.RunSchematicTask('setup', options), [postInstallTaskId]);
    };
}
