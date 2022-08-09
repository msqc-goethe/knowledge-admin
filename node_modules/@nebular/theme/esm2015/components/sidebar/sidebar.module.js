/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbSidebarComponent, NbSidebarFooterComponent, NbSidebarHeaderComponent, } from './sidebar.component';
import { NbSidebarService } from './sidebar.service';
const NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
const NB_SIDEBAR_PROVIDERS = [
    NbSidebarService,
];
export class NbSidebarModule {
    static forRoot() {
        return {
            ngModule: NbSidebarModule,
            providers: [
                ...NB_SIDEBAR_PROVIDERS,
            ],
        };
    }
}
NbSidebarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [
                    ...NB_SIDEBAR_COMPONENTS,
                ],
                exports: [
                    ...NB_SIDEBAR_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=sidebar.module.js.map