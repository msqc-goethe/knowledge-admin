/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbIconLibraries, NbSvgIcon } from '@nebular/theme';
import { icons } from 'eva-icons';
export class NbEvaSvgIcon extends NbSvgIcon {
    constructor(name, content) {
        super(name, '');
        this.name = name;
        this.content = content;
    }
    getContent(options) {
        return this.content.toSvg(Object.assign({ width: '100%', height: '100%', fill: 'currentColor' }, options));
    }
}
export class NbEvaIconsModule {
    constructor(iconLibrary) {
        this.NAME = 'eva';
        iconLibrary.registerSvgPack(this.NAME, this.createIcons());
        iconLibrary.setDefaultPack(this.NAME);
    }
    createIcons() {
        return Object
            .entries(icons)
            .map(([name, icon]) => {
            return [name, new NbEvaSvgIcon(name, icon)];
        })
            .reduce((newIcons, [name, icon]) => {
            newIcons[name] = icon;
            return newIcons;
        }, {});
    }
}
NbEvaIconsModule.decorators = [
    { type: NgModule, args: [{},] }
];
NbEvaIconsModule.ctorParameters = () => [
    { type: NbIconLibraries }
];
//# sourceMappingURL=eva-icons.module.js.map