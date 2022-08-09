/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbMenuComponent, NbMenuItemComponent } from './menu.component';
import { NbMenuService, NbMenuInternalService } from './menu.service';
import { NbIconModule } from '../icon/icon.module';
import { NbBadgeModule } from '../badge/badge.module';
const nbMenuComponents = [NbMenuComponent, NbMenuItemComponent];
const NB_MENU_PROVIDERS = [NbMenuService, NbMenuInternalService];
export class NbMenuModule {
    static forRoot() {
        return {
            ngModule: NbMenuModule,
            providers: [
                ...NB_MENU_PROVIDERS,
            ],
        };
    }
}
NbMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbIconModule,
                    NbBadgeModule,
                ],
                declarations: [...nbMenuComponents],
                exports: [...nbMenuComponents],
            },] }
];
//# sourceMappingURL=menu.module.js.map