import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbCardModule } from '../card/card.module';
import { NbIconModule } from '../icon/icon.module';
import { NbButtonModule } from '../button/button.module';
import { NbWindowService } from './window.service';
import { NbWindowsContainerComponent } from './windows-container.component';
import { NbWindowComponent } from './window.component';
import { NB_WINDOW_CONFIG } from './window.options';
export class NbWindowModule {
    static forRoot(defaultConfig) {
        return {
            ngModule: NbWindowModule,
            providers: [
                NbWindowService,
                { provide: NB_WINDOW_CONFIG, useValue: defaultConfig },
            ],
        };
    }
    static forChild(defaultConfig) {
        return {
            ngModule: NbWindowModule,
            providers: [
                NbWindowService,
                { provide: NB_WINDOW_CONFIG, useValue: defaultConfig },
            ],
        };
    }
}
NbWindowModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NbOverlayModule, NbCardModule, NbIconModule, NbButtonModule],
                declarations: [
                    NbWindowsContainerComponent,
                    NbWindowComponent,
                ],
                entryComponents: [NbWindowsContainerComponent, NbWindowComponent],
            },] }
];
//# sourceMappingURL=window.module.js.map