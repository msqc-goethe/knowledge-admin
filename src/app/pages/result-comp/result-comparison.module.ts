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
  NbLayoutModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { ResultComparisonComponent } from './result-comparison.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SmartTableResultComponent} from './smart-table-result.component';
import {WindowFormComponent} from './result-comparison-window-form.component';


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
    NbLayoutModule,
  ],
  declarations: [
    ResultComparisonComponent, SmartTableResultComponent,WindowFormComponent
  ],
})
export class ResultComparisonModule { }
