import { Component, OnInit } from '@angular/core';
import {WebServiceService} from '../../webservice.service';
import { NbThemeService, NbWindowService} from '@nebular/theme';
import {IO500WindowFormComponent} from './io500-window-form.component';


@Component({
  selector: 'io-500',
  templateUrl: './io500.component.html',
})
export class IO500Component implements OnInit {



  public selectedValue: any;
  public io500: any;
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
    this.ws.getIO500().then(x =>{
      this.io500 = x;
      console.log(this.io500)
    });
  }

  openWindowForm(tid, tn) {
    this.windowService.open(IO500WindowFormComponent, { title: tn, context: [this.getTestCassesResult(tid), this.getTestCaseOptions(tid)]});
  }

  getTestCassesResult(tid){
  console.log(tid)
  let ob =  this.selectedTestCasesResults.find((x)=>{
  return x.testcase_id === tid;
    });
  console.log(this.selectedTestCasesResults)
  console.log("result:::", ob)
  return ob;
  }

  getTestCaseOptions(tid){
    let ob =  this.selectedTestCaseOptions.find((x)=>{
      return x.testcase_id == tid;
        });
        return ob;
      }
  
  getTestCase(tid){
    let ob =  this.selectedTestCases.find((x)=>{
      return x.id == tid;
        });
        return ob;
      }

  selectIO500(){
    this.ws.getIO500_testcases(this.selectedValue.run_id).then(x=>{
      this.selectedTestCases = x;
      console.log("TC: ", this.selectedTestCases)
      this.ws.getIO500_results(this.selectedValue.run_id).then(res => {
        this.selectedTestCasesResults = res;
        console.log("TCR: ", this.selectedTestCasesResults)
        this.ws.getIO500_options (this.selectedValue.run_id).then(op =>{
          this.selectedTestCaseOptions = op;
          console.log("TCO ", this.selectedTestCaseOptions)
          this.initScoreChart();
          this.initBoundingbox();
          //this.test(this.selectedTestCasesResults, 'bwMiB');
      })
      });
    })
  }

  initScoreChart(){
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
        data: this.transformDim(this.selectedTestCases, 'name')

      },
      series: [
        {
          data: this.transformDim(this.selectedTestCases, this.selectedDim),
          type: 'bar'
        }
      ]
    };
    });
  }

  initBoundingbox(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
    const echarts: any = config.variables.echarts;

    this.boundingboxOptions = {
      legend: {},
      backgroundColor: echarts.bg,
      color: [colors.danger, colors.primary, colors.info],
      textStyle: {
        color: echarts.textColor,
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          saveAsImage: { show: true }
        }
      },
      tooltip:{},
      title:{
        show:false,
        text: this.selectedDim,
        left: 'center'
      },
      radar: {
        // shape: 'circle',
        indicator: this.getIndicator(this.selectedTestCasesResults, 'bwMiB')
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: this.transformDim(this.selectedTestCasesResults, 'bwMiB'),
              name: 'Min/Max IO'
            }
          ]
        }
      ]
    };
    });
  }



  transformDim(src, rkey){
    return src.map(x => x[rkey]);
  }

  getIndicator(arr, rkey){
    let indi= [];
      arr.forEach(result => {
        let ob = this.getTestCase(result.testcase_id);
        if (ob){
          indi.push({ name: ob.name, max: result[rkey]})
        }
      });
      return indi;
  }

  getIndicator_multi_dim(ids, rkey){
    let indi= [];
    ids.forEach(id => {
        let ob_name = this.getTestCase(id);
        let ob_max = this.getTestCassesResult(id)
        console.log("ob:maxc :::", ob_max)
        if (ob_name && ob_max){
          indi.push({ name: ob_name.name, max: ob_max[rkey]})
        }
      });
      console.log(indi)
      return indi;
  }

  
}
