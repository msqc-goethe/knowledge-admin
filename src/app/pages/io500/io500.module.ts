import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbSearchModule,
  NbInputModule,
  NbTreeGridModule,
  NbRadioModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { IO500Component } from './io500.component';
import {IO500WindowFormComponent} from './io500-window-form.component';


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
    NbSearchModule,
    NbInputModule,
    NbTreeGridModule,
    NbRadioModule,
  ],
  declarations: [
    IO500Component, IO500WindowFormComponent
  ],
})
export class IO500Module { }
