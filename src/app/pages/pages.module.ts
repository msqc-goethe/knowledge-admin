import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import {ResultViewerModule} from './result-viewer/resultviewer.module';
import {ResultComparisonModule} from './result-comp/result-comparison.module';
import {DashboardExModule} from './dashboard-ex/dashboard-ex.module';
import {DarshanResultViewerModule} from './darshan-viewer/darshan-viewer.module';
import {DarshanResultComparisonModule} from './darshan-result-comp/darshan-result-comparison.module';
import {IorBuilderModule} from './ior-builder/ior-builder.module';
import {IO500Module} from './io500/io500.module';
import {IO500CompModule} from './io500-comp/io500-comp.module';
import {CustomModule} from './custom/custom.module';
import {CustomCompModule} from './custom-comp/custom-comp.module';
import { BenchCompModule } from './bench-comp/bench-comp.module';
import {Io500IorCompModule} from './io500-ior-comp/io500-ior-comp.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ResultViewerModule,
    ResultComparisonModule,
    DashboardExModule,
    DarshanResultViewerModule,
    DarshanResultComparisonModule,
    IorBuilderModule,
    IO500Module,
    IO500CompModule,
    CustomModule,
    CustomCompModule,
    BenchCompModule,
    Io500IorCompModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
