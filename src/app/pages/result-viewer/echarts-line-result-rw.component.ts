import { AfterViewInit, Component, OnDestroy, Input} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { WebServiceService} from '../../webservice.service';
@Component({
  selector: 'echarts-line-result-rw',
  template: `
    <div style="width: 95%; height: 300px;" echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineResultRWComponent implements AfterViewInit, OnDestroy {
  @Input() data_r!: any;
  @Input() data_w!: any;
  options: any = {};
  themeSubscription: any;
  series: any [] = [];

  constructor(private theme: NbThemeService, public ws: WebServiceService) {
  }

  ngAfterViewInit() {
    console.log("passed data-READ-write", this.data_r, this.data_w)


    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      let r = this.transform(this.data_r, 'bwMiB');
      let w = this.transform(this.data_w, 'bwMiB');
      this.series.push({'name':'read', 'type': 'line', 'data':r })
      this.series.push({'name':'write', 'type': 'line', 'data':w })
      console.log("sersss: ", this.series)
      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {},
        xAxis: [
          {
            name:'Iteration',
            type: 'category',
            nameLocation: 'center',
            axisTick: {
              alignWithLabel: true,
            },
            legend: {
              data: ['read', 'write']
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
            name:'bwMiB',
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
        series: this.series
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  transform(src, rkey){
    let data = [];
    src.forEach((value, index) =>{
      console.log(value, rkey)
      data.push(value.data[rkey]);
    })
    console.log(data)
    return data;
  }

  addToSeries(){
  }


}
