import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
//import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
//import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ResultViewerModule} from './result-viewer/resultviewer.module';
import {ResultComparisonModule} from './result-comp/result-comparison.module';
import {DashboardExModule} from './dashboard-ex/dashboard-ex.module';
import {DarshanResultViewerModule} from './darshan-viewer/darshan-viewer.module';
import {DarshanResultComparisonModule} from './darshan-result-comp/darshan-result-comparison.module';
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    //ECommerceModule,
    //MiscellaneousModule,
    ResultViewerModule,
    ResultComparisonModule,
    DashboardExModule,
    DarshanResultViewerModule,
    DarshanResultComparisonModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
