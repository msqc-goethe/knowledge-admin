import { NgModule } from '@angular/core';
import { BidiModule, Directionality } from '@angular/cdk/bidi';
import { NbDirectionality } from './bidi-service';
export class NbBidiModule extends BidiModule {
}
NbBidiModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: NbDirectionality, useExisting: Directionality },
                ],
            },] }
];
//# sourceMappingURL=bidi.module.js.map