import { AfterViewInit, Component, OnDestroy, Input} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { WebServiceService} from '../../webservice.service';
@Component({
  selector: 'echarts-line-result-read',
  template: `
    <div style="width: 95%; height: 300px;" echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineResultReadComponent implements AfterViewInit, OnDestroy {
  @Input() data!: any;
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, public ws: WebServiceService) {
  }

  ngAfterViewInit() {
    //console.log("passed data-Read", this.data)
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {},
        legend: {
          left: 'left',
          data: ['Line 1'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            name:'Iteration',
            type: 'category',
            nameLocation: 'center',
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
          {name:'bwMiB',
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
      
          dimensions: ['iteration', 'bwMiB'],
          source: this.transformToSeries(this.data, "bwMiB")
        },
        series: [{ type: 'line' },]
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  transformToSeries(src, rkey){
    let data = [];
    src.forEach((value, index) =>{
      //console.log(value, rkey)
      data.push({"iteration": index + 1, [rkey]: value.data[rkey]});
    })
    //console.log(data)
    return data;
  }

}
