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
import { DarshanResultViewerComponent } from './darshan-viewer.component';


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
  declarations: [DarshanResultViewerComponent,
  ],
})
export class DarshanResultViewerModule { }
