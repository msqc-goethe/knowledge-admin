import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import {EchartsLineResultComponent} from './echarts-line.component';
import {EchartsLineResultReadComponent} from './echarts-line-result-read.component';
import {EchartsLineResultRWComponent} from './echarts-line-result-rw.component';
import {
  NbCardModule,
  NbSelectModule,
  NbSearchModule,
  NbTabsetModule,
  NbInputModule,
  NbRadioModule,
  NbTreeGridModule,

} from '@nebular/theme';
import { ResultViewerComponent } from './resultviewer.component';


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
  declarations: [ResultViewerComponent, EchartsLineResultComponent,EchartsLineResultReadComponent,EchartsLineResultRWComponent,
  ],
})
export class ResultViewerModule { }
