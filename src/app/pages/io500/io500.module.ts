import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import {
  NbCardModule,
  NbSelectModule,
  NbSearchModule,
  NbTabsetModule,
  NbInputModule,
  NbRadioModule,
  NbTreeGridModule,

} from '@nebular/theme';
import { IO500Component } from './io500.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableIO500Component } from './smart-table-io500.component';
import { ChartModule } from 'angular2-chartjs';
import { ChartTestComponent } from './chart.component';

const components = [
  ChartTestComponent
];

@NgModule({
  imports: [
    NbCardModule,
    NbSelectModule,
    CommonModule,
    NbSearchModule,
    NbTabsetModule,
    NbInputModule,
    NbRadioModule,
    NbTreeGridModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    ChartModule,
  ],
  declarations: [IO500Component, SmartTableIO500Component,...components
  ],
})
export class IO500Module { }
