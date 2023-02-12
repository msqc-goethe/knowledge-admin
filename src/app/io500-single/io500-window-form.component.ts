import { Component, OnInit} from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { WebServiceService} from '../webservice.service';

@Component({
  template: `
<nb-card size="large">
  <nb-card-header>
    Details
  </nb-card-header>
  <nb-card-body>
    <div class="col-md-6" style="display: inline-block;" *ngFor="let m of data[0] | keyvalue">
    <label class="label">{{m.key}}: </label>{{m.value}} 
    </div>
  </nb-card-body>
</nb-card>

  `,
  styleUrls: ['io500-window-form.component.scss'],
})
export class IO500WindowFormComponent implements OnInit {

  data: any;

  constructor(public windowRef: NbWindowRef, public ws: WebServiceService) {

  }

  ngOnInit(): void {
    this.data = this.windowRef.config.context;
  }

  close() {
    this.windowRef.close();
  }  

}
