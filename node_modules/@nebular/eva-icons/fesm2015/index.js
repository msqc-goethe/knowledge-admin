import { NgModule } from '@angular/core';
import { NbIconLibraries, NbSvgIcon } from '@nebular/theme';
import { icons } from 'eva-icons';

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbEvaSvgIcon extends NbSvgIcon {
    constructor(name, content) {
        super(name, '');
        this.name = name;
        this.content = content;
    }
    getContent(options) {
        return this.content.toSvg(Object.assign({ width: '100%', height: '100%', fill: 'currentColor' }, options));
    }
}
class NbEvaIconsModule {
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

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NbEvaSvgIcon, NbEvaIconsModule };
