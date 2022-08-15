import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {WebServiceService, Performance} from '../../webservice.service';
import { Result} from '../../webservice.service';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
    selector: 'test-chart',
    template: `
      <chart type="radar" style="width: 95%; height: 500px;" [data]="data" [options]="options"></chart>
    `,
    /*template: `
      <div echarts [options]="options_io500" class="echart"></div>
    `,*/
})
export class ChartTestComponent implements /*AfterViewInit,*/ OnDestroy {
  /*options_io500: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

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
          name: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Techology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 },
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
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'Allocated Budget',
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: 'Actual Spending',
              },
            ],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }*/

options: any;
  data: {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Easy-Read', 'Hard-Read', 'Easy-Write', 'Hard-Write'],
        datasets: [{
          data: [65, 59, 90, 81],
          label: 'Example 1',
          borderColor: colors.danger,
          backgroundColor: NbColorHelper.hexToRgbA(colors.dangerLight, 0.0),
        }, {
          data: [28, 48, 40, 19],
          label: 'Example 2',
          borderColor: colors.warning,
          backgroundColor: NbColorHelper.hexToRgbA(colors.warningLight, 0.0),
        }],
      };

      this.options = {
        startAngle: 45,
        responsive: true,
        maintainAspectRatio: false,
        scaleFontColor: 'white',
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: chartjs.textColor,
          },
          gridLines: {
            color: chartjs.axisLineColor,
          },
          angleLines: {
            color: chartjs.axisLineColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
