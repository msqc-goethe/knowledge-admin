import { NgModule } from '@angular/core';
import { NbListComponent, NbListItemComponent } from './list.component';
import { NbListPageTrackerDirective } from './list-page-tracker.directive';
import { NbInfiniteListDirective } from './infinite-list.directive';
const components = [
    NbListComponent,
    NbListItemComponent,
    NbListPageTrackerDirective,
    NbInfiniteListDirective,
];
export class NbListModule {
}
NbListModule.decorators = [
    { type: NgModule, args: [{
                declarations: components,
                exports: components,
            },] }
];
//# sourceMappingURL=list.module.js.map