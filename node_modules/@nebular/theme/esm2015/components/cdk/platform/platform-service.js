import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
export class NbPlatform extends Platform {
}
NbPlatform.ɵprov = i0.ɵɵdefineInjectable({ factory: function NbPlatform_Factory() { return new i1.Platform(i0.ɵɵinject(i0.PLATFORM_ID)); }, token: NbPlatform, providedIn: "root" });
NbPlatform.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useClass: Platform,
            },] }
];
//# sourceMappingURL=platform-service.js.map