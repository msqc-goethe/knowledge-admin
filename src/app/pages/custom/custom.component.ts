import { Component, OnInit } from '@angular/core';
import {WebServiceService} from '../../webservice.service';
import { NbThemeService, NbWindowService} from '@nebular/theme';
import {CustomWindowFormComponent} from './custom-window-form.component';


@Component({
  selector: 'custom',
  templateUrl: './custom.component.html',
})
export class CustomComponent implements OnInit {



  public selectedValue: any;
  public cus: any;
  public selectedTestCases: any;
  public selectedTestCaseOptions: any;
  public selectedTestCasesResults: any;
  public scoreChartOptions: any;
  public boundingboxOptions: any;
  themeSubscription: any;
  selectedDim = 'score'
  selectedBDim = [12];

  
  constructor(private theme: NbThemeService, public ws: WebServiceService, private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.ws.getCustom().then((x:[])=>{
      this.cus = x.map(val => ({
        id: val['id'],
        name: val['name_app'],
        type: val['type'],
        summary: JSON.parse(val['summary']),
        fs: JSON.parse(val['fs']),
        sysinfo: JSON.parse(val['sysinfo']),
      }));
      console.log(this.cus)
    });
  }

  openWindowForm(tid, tn) {
    this.windowService.open(CustomWindowFormComponent, { title: tn, context: ""});
  }

  initChart(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
    const echarts: any = config.variables.echarts;

    this.scoreChartOptions = {
      legend: {
        textStyle: {
          color: echarts.textColor,
        },
      },
      backgroundColor: echarts.bg,
      color: [colors.danger, colors.primary, colors.info],
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        name:this.selectedDim,
        nameLocation:'bottom',
        nameTextStyle:{
          padding: [50, 0,0 , 0],
          fontWeight:'bold'
        },
        type: 'value',
        boundaryGap: [0, 0.01],
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
      yAxis: {
        type: 'category',
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
        data: this.selectedValue.summary.map(x => x['operation'])

      },
      series: [
        {
          data: this.transformDim(this.selectedValue.summary, this.selectedDim),
          type: 'bar'
        }
      ]
    };
  });
  }
  
  transformDim(src, rkey){
    return src.map(x => x[rkey][0]);
  }

  selectCustom(){}

}
