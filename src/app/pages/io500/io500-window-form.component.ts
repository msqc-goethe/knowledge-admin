import { Component, OnInit} from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { WebServiceService} from '../../webservice.service';

@Component({
  template: `
<nb-card size="large">
  <nb-card-header>
  </nb-card-header>
  <nb-card-body>
    <div *ngFor="let m of data[0] | keyvalue">
        {{m.key}} : {{m.value}} 
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
