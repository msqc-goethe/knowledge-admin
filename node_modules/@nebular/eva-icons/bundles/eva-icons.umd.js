(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@nebular/theme'), require('eva-icons')) :
	typeof define === 'function' && define.amd ? define(['exports', 'tslib', '@angular/core', '@nebular/theme', 'eva-icons'], factory) :
	(factory((global.nb = global.nb || {}, global.nb['eva-icons'] = global.nb['eva-icons'] || {}),global.tslib,global.ng.core,global.nb.theme,global['eva-icons']));
}(this, (function (exports,tslib,_angular_core,_nebular_theme,evaIcons) { 'use strict';

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbEvaSvgIcon = /** @class */ (function (_super) {
    tslib.__extends(NbEvaSvgIcon, _super);
    function NbEvaSvgIcon(name, content) {
        var _this = _super.call(this, name, '') || this;
        _this.name = name;
        _this.content = content;
        return _this;
    }
    NbEvaSvgIcon.prototype.getContent = function (options) {
        return this.content.toSvg(tslib.__assign({ width: '100%', height: '100%', fill: 'currentColor' }, options));
    };
    return NbEvaSvgIcon;
}(_nebular_theme.NbSvgIcon));
var NbEvaIconsModule = /** @class */ (function () {
    function NbEvaIconsModule(iconLibrary) {
        this.NAME = 'eva';
        iconLibrary.registerSvgPack(this.NAME, this.createIcons());
        iconLibrary.setDefaultPack(this.NAME);
    }
    NbEvaIconsModule.prototype.createIcons = function () {
        return Object
            .entries(evaIcons.icons)
            .map(function (_a) {
            var name = _a[0], icon = _a[1];
            return [name, new NbEvaSvgIcon(name, icon)];
        })
            .reduce(function (newIcons, _a) {
            var name = _a[0], icon = _a[1];
            newIcons[name] = icon;
            return newIcons;
        }, {});
    };
    NbEvaIconsModule.decorators = [
        { type: _angular_core.NgModule, args: [{},] }
    ];
    NbEvaIconsModule.ctorParameters = function () { return [
        { type: _nebular_theme.NbIconLibraries }
    ]; };
    return NbEvaIconsModule;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

exports.NbEvaSvgIcon = NbEvaSvgIcon;
exports.NbEvaIconsModule = NbEvaIconsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
