import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { DarshanResultComparisonComponent } from './darshan-result-comparison.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SmartTableResultDarshanComponent} from './smart-table-result-darshan.component';
import {DarshanWindowFormComponent} from './darshan-result-comparison-window-form.component';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    Ng2SmartTableModule,
    CommonModule,
  ],
  declarations: [
    DarshanResultComparisonComponent, SmartTableResultDarshanComponent,DarshanWindowFormComponent
  ],
})
export class DarshanResultComparisonModule { }
