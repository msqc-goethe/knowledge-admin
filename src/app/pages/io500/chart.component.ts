import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance} from '../../webservice.service';
import { Result} from '../../webservice.service';


@Component({
    selector: 'test-chart',
    template: `
      <chart type="radar" [data]="data" [options]="options"></chart>
    `,
})
export class ChartTestComponent {

data = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 80, 81]
    }
  ]
};
options = {
  maintainAspectRatio: false
};


}
