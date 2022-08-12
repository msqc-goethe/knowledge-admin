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
  ],
  declarations: [IO500Component,
  ],
})
export class IO500Module { }
