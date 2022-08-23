import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {WebServiceService, Performance} from '../../webservice.service';
import { Result} from '../../webservice.service';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
    selector: 'test-chart',
    template: `
      <div echarts [options]="options_io500" class="echart"></div>
    `,
})
export class ChartTestComponent implements /*AfterViewInit,*/ OnDestroy {
  options_io500: any = {};
  themeSubscription: any;
  data: any = [];

  constructor(private theme: NbThemeService, public ws: WebServiceService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.data = [
        {
          value: [4300, 10000, 28000, 35000],
          name: 'Allocated Budget',
        },
        {
          value: [5000, 14000, 28000, 31000],
          name: 'Actual Spending',
        },
      ]

      this.options_io500 = {
        
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.warning],
        tooltip: {},
        legend: {
          data: ['Allocated Budget', 'Actual Spending'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        radar: {
          startAngle: 45,
          name: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          indicator: [
            { name: 'Easy-Read', max: 6500 },
            { name: 'Easy-Write', max: 16000 },
            { name: 'Hard-Read', max: 30000 },
            { name: 'Hard-Write', max: 38000 },
          ],
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
        },
        series: [
          {
            name: 'Budget vs Spending',
            type: 'radar',
            data: this.data,
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }


}
