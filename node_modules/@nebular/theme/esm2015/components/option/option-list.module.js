import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOptionComponent } from './option.component';
import { NbOptionGroupComponent } from './option-group.component';
import { NbOptionListComponent } from './option-list.component';
import { NbCheckboxModule } from '../checkbox/checkbox.module';
const NB_OPTION_LIST_COMPONENTS = [
    NbOptionListComponent,
    NbOptionComponent,
    NbOptionGroupComponent,
];
export class NbOptionModule {
}
NbOptionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...NB_OPTION_LIST_COMPONENTS,
                ],
                imports: [
                    CommonModule,
                    NbCheckboxModule,
                ],
                exports: [
                    ...NB_OPTION_LIST_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=option-list.module.js.map