import { NgModule } from '@angular/core';
import { NbSharedModule } from '../../shared/shared.module';
import { NbA11yModule } from '../a11y/a11y.module';
import { NbCdkMappingModule } from './mapping';
import { NbPositionBuilderService } from './overlay-position';
import { NbOverlayContainerComponent, NbPositionedContainerComponent } from './overlay-container';
import { NbOverlayService } from './overlay-service';
import { NbCdkAdapterModule } from '../adapter/adapter.module';
import { NbPositionHelper } from './position-helper';
import { NbTriggerStrategyBuilderService } from './overlay-trigger';
export class NbOverlayModule {
    static forRoot() {
        return {
            ngModule: NbOverlayModule,
            providers: [
                NbPositionBuilderService,
                NbTriggerStrategyBuilderService,
                NbOverlayService,
                NbPositionHelper,
                ...NbCdkMappingModule.forRoot().providers,
                ...NbCdkAdapterModule.forRoot().providers,
                ...NbA11yModule.forRoot().providers,
            ],
        };
    }
}
NbOverlayModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbCdkMappingModule,
                    NbSharedModule,
                ],
                declarations: [
                    NbPositionedContainerComponent,
                    NbOverlayContainerComponent,
                ],
                exports: [
                    NbCdkMappingModule,
                    NbCdkAdapterModule,
                    NbOverlayContainerComponent,
                ],
            },] }
];
//# sourceMappingURL=overlay.module.js.map