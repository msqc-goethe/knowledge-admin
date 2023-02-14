import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NbIconModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbCheckboxModule, NbMenuModule,NbUserModule,  NbListModule, NbCardModule, NbWindowModule, NbSelectModule, NbTreeGridModule, NbSearchModule, NbTabsetModule, NbButtonModule, NbTableModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { KnowledgeDashboardComponent } from './knowledge-dashboard/knowledge-dashboard.component';
import { IorSingleComponent } from './ior-single/ior-single.component';
import { IorComparisonComponent } from './ior-comparison/ior-comparison.component';
import { Io500SingleComponent } from './io500-single/io500-single.component';
import { Io500ComparisonComponent } from './io500-comparison/io500-comparison.component';
import { DarshanSingleComponent } from './darshan-single/darshan-single.component';
import { DarshanComparisonComponent } from './darshan-comparison/darshan-comparison.component';
import { CustomComparisonComponent } from './custom-comparison/custom-comparison.component';
import { CustomSingleComponent } from './custom-single/custom-single.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WindowFormComponent } from './ior-comparison/result-comparison-window-form.component';
import { IO500WindowFormComponent } from './io500-single/io500-window-form.component';
import { CustomWindowFormComponent } from './custom-single/custom-window-form.component';
import { CustomCompWindowFormComponent } from './custom-comparison/custom-comp-window-form.component';
import { DarshanWindowFormComponent } from './darshan-comparison/darshan-result-comparison-window-form.component';
import { IO500CompWindowFormComponent } from './io500-comparison/io500-comp-window-form.component';
import { LocalDataComponent } from './local-data/local-data.component';
import { SlurmDashboardComponent } from './slurm-dashboard/slurm-dashboard.component';
import { OptimizationComponent } from './optimization/optimization.component';
import { PerformanceBoundingboxComponent } from './performance-boundingbox/performance-boundingbox.component';
import { Io500IorComparisonComponent } from './io500-ior-comparison/io500-ior-comparison.component';
import { IorBuilderComponent } from './ior-builder/ior-builder.component';
import { NewExperienceComponent } from './new-experience/new-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    KnowledgeDashboardComponent,
    IorSingleComponent,
    IorComparisonComponent,
    Io500SingleComponent,
    Io500ComparisonComponent,
    DarshanSingleComponent,
    DarshanComparisonComponent,
    CustomComparisonComponent,
    CustomSingleComponent,
    WindowFormComponent,
    IO500WindowFormComponent,
    CustomWindowFormComponent,
    CustomCompWindowFormComponent,
    DarshanWindowFormComponent,
    IO500CompWindowFormComponent,
    LocalDataComponent,
    SlurmDashboardComponent,
    OptimizationComponent,
    PerformanceBoundingboxComponent,
    Io500IorComparisonComponent,
    IorBuilderComponent,
    NewExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbTreeGridModule,
    NbTableModule,
    NbInputModule,
    NbTooltipModule,
    NbWindowModule.forRoot(),
    NbSearchModule,
    NbSelectModule,
    NbTabsetModule,
    NbButtonModule,
    NbUserModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    NgbModule,
    NbIconModule,
    NbEvaIconsModule,
    NbListModule,
    NbCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
