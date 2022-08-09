import { NgModule } from '@angular/core';
import { NbIconLibraries, NbSvgIcon } from '@nebular/theme';
import { icons } from 'eva-icons';

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@nebular/theme';
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
NbEvaIconsModule.ɵfac = function NbEvaIconsModule_Factory(t) { return new (t || NbEvaIconsModule)(ɵngcc0.ɵɵinject(ɵngcc1.NbIconLibraries)); };
NbEvaIconsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NbEvaIconsModule });
NbEvaIconsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({});
NbEvaIconsModule.ctorParameters = () => [
    { type: NbIconLibraries }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbEvaIconsModule, [{
        type: NgModule,
        args: [{}]
    }], function () { return [{ type: ɵngcc1.NbIconLibraries }]; }, null); })();

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NbEvaSvgIcon, NbEvaIconsModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztrRUFHRTtBQUNGO0FBQ0E7QUFDQTs7OztnRkFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkljb25MaWJyYXJpZXMsIE5iU3ZnSWNvbiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnZXZhLWljb25zJztcblxuLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5jbGFzcyBOYkV2YVN2Z0ljb24gZXh0ZW5kcyBOYlN2Z0ljb24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgJycpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cbiAgICBnZXRDb250ZW50KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudC50b1N2ZyhPYmplY3QuYXNzaWduKHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0sIG9wdGlvbnMpKTtcbiAgICB9XG59XG5jbGFzcyBOYkV2YUljb25zTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihpY29uTGlicmFyeSkge1xuICAgICAgICB0aGlzLk5BTUUgPSAnZXZhJztcbiAgICAgICAgaWNvbkxpYnJhcnkucmVnaXN0ZXJTdmdQYWNrKHRoaXMuTkFNRSwgdGhpcy5jcmVhdGVJY29ucygpKTtcbiAgICAgICAgaWNvbkxpYnJhcnkuc2V0RGVmYXVsdFBhY2sodGhpcy5OQU1FKTtcbiAgICB9XG4gICAgY3JlYXRlSWNvbnMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RcbiAgICAgICAgICAgIC5lbnRyaWVzKGljb25zKVxuICAgICAgICAgICAgLm1hcCgoW25hbWUsIGljb25dKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW25hbWUsIG5ldyBOYkV2YVN2Z0ljb24obmFtZSwgaWNvbildO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnJlZHVjZSgobmV3SWNvbnMsIFtuYW1lLCBpY29uXSkgPT4ge1xuICAgICAgICAgICAgbmV3SWNvbnNbbmFtZV0gPSBpY29uO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0ljb25zO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxufVxuTmJFdmFJY29uc01vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7fSxdIH1cbl07XG5OYkV2YUljb25zTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogTmJJY29uTGlicmFyaWVzIH1cbl07XG5cbi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCB7IE5iRXZhU3ZnSWNvbiwgTmJFdmFJY29uc01vZHVsZSB9O1xuIl19