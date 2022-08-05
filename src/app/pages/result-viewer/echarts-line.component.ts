import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { WebServiceService} from '../../webservice.service';
@Component({
  selector: 'echarts-line-result',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineResultComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, public ws: WebServiceService) {
  }

  ngAfterViewInit() {
    console.log("from chart", this.ws.simpleDataR)
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {},
        legend: {
          left: 'left',
          data: ['Line 1', 'Line 2', 'Line 3'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            name:'Iteration',
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        dataset: {
          // Define the dimension of array. In cartesian coordinate system,
          // if the type of x-axis is category, map the first dimension to
          // x-axis by default, the second dimension to y-axis.
          // You can also specify 'series.encode' to complete the map
          // without specify dimensions. Please see below.
      
          dimensions: ['iteration', 'MB'],
          source: [
            { iteration: '1', 'MB': 43.3},
            { iteration: '2', 'MB': 83.1},
            { iteration: '3', 'MB': 86.4},
            { iteration: '4', 'MB': 72.4}
          ]
        },
        series: [{ type: 'line' },]
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
