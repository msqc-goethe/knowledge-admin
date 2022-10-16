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
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { Io500IorCompComponent } from './io500-ior-comp.component';
import {Io500IorCompWindowFormComponent} from './io500-ior-comp-window-form.component';




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
    Ng2SmartTableModule
  ],
  declarations: [
    Io500IorCompComponent,Io500IorCompWindowFormComponent,
  ],
})
export class Io500IorCompModule { }
