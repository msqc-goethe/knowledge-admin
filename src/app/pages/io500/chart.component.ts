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
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Series A',
        }, {
          data: [28, 48, 40, 19, 96, 27, 100],
          label: 'Series B',
        }],
      };
      options = {
        responsive: true,
        maintainAspectRatio: false,
        scaleFontColor: 'white',
    
        scale: {
          pointLabels: {
            fontSize: 14,
          },
        },
      };


}
