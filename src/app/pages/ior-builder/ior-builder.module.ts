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
  NbTooltipModule,
  NbButtonModule,
  NbFormFieldModule,
} from '@nebular/theme';
import { IorBuilderComponent } from './ior-builder.component';
import { FormsModule } from '@angular/forms';


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
    NbTooltipModule,
    NbButtonModule,
    NbFormFieldModule,
    FormsModule
  ],
  declarations: [IorBuilderComponent,
  ],
})
export class IorBuilderModule { }
