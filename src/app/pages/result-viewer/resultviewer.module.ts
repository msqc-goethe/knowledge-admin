import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import {EchartsLineResultComponent} from './echarts-line.component';
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
  declarations: [ResultViewerComponent, EchartsLineResultComponent,
  ],
})
export class ResultViewerModule { }
