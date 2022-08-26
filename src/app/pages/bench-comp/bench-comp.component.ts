import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance, Result} from '../../webservice.service';
import { NbThemeService, NbWindowService, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';

/*
import {WebServiceService, Performance} from '../../webservice.service';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Result} from '../../webservice.service';

*/

interface TreeNode<T> {
    data: T;
    children?: TreeNode<T>[];
    expanded?: boolean;
}

@Component({
  selector: 'bench-comp',
  templateUrl: './bench-comp.component.html',
})
export class BenchCompComponent implements OnInit {
    
    //IO500
    public selectedValue: any;
    public selectedTestCases: any;
    public selectedTestCaseOptions: any;
    public selectedTestCasesResults: any;
    public io500: any;

    //IO500Chart
    public boundingboxOptions: any;
    themeSubscription: any;
    selectedDim = 'score'
    selectedBDim = [12];

    //IOR
    public selectedValueIOR: any;
    performances: any;
    summaries: any;
    results: any;
    selectedSummary: any;
    selectedFilesystem: any;
    summariesP = false;
    data: TreeNode<Result>[] = [];

    options_multi: any = {};
    themeSubscription2: any;

  
    customColumn = 'name';
    defaultColumns = [ "blockKiB","bwMiB","closeTime","iops","latency","openTime", "totalTime", "wrRdTime", "xferKiB"];
    allColumns = [...this.defaultColumns ];

    dataSource_r: NbTreeGridDataSource<Result>;
    dataSource_w: NbTreeGridDataSource<Result>;


    sortColumn: string;
    sortDirection: NbSortDirection = NbSortDirection.NONE;

    sOptions = ['blockKiB', 'bwMiB', 'closeTime', 'iops', 'latency', 'openTime','totalTime', 'wrRdTime', 'xferKiB'];
    selectedsOp = 'bwMiB';

    chartRW = [];

    //collective Barchart
    themeSubscriptionBarChart: any;
    options_bar: any={};

    //readyVariables
    readyIO500: any = false;
    readyIOR: any = false;

  
  constructor(private theme: NbThemeService, public ws: WebServiceService, private windowService: NbWindowService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<Result>) {
  }

  ngOnInit(): void {
   this.ws.getIO500().then(x =>{
      this.io500 = x;
      console.log(this.io500)
    });
    this.ws.getPerformances().then(()=>{
        this.performances = this.ws.performances;
      })
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

          this.readyIO500 = true
          if(this.readyIO500 && this.readyIOR){
            this.initBoundingbox();
          }
      })
      });
    })
  }

  getSummary(rkey = "ops"){
    console.log(this.selectedValueIOR)
    this.ws.getSummaries(this.selectedValueIOR.id).then(()=>{
     //console.log( this.selectedValue)
      this.summaries = this.ws.summaries;
     //console.log(this.summaries)
      this.summariesP = true;
      let parr = [];
      this.summaries.forEach(sum => {
        parr.push(this.ws.getResultsForTable(sum).then((x:[Result])=>{
          x.forEach(r =>{
            this.data.push({"data":r})
            this.chartRW.push(r);
          });
          if(sum.operation == "read"){
            this.dataSource_r = this.dataSourceBuilder.create(this.data);
            this.ws.simpleDataR = this.data;
            this.data = []
          }else {
            this.dataSource_w = this.dataSourceBuilder.create(this.data);
            this.ws.simpleDataW = this.data;
            this.data = []
          }
        }))
      });

      this.readyIOR = true
      if(this.readyIO500 && this.readyIOR){
        this.initBoundingbox();
      }

      Promise.all(parr).then(() => {
        this.initMulti();
        this.initBarChart();
        this.ws.getFilesystem(this.selectedValue.id).then((x)=>{
          this.selectedFilesystem = x;
          this.selectedFilesystem = JSON.parse(this.selectedFilesystem[0].settings)
         console.log(this.selectedFilesystem)
        })
      });
    });
  }

  initBoxChart(){

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
        //shape: 'square',
        //indicator: this.getIndicator(this.selectedTestCasesResults, 'bwMiB')
        indicator: this.boxIndicator('bwMiB')
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: this.transformDim(this.selectedTestCasesResults, 'bwMiB'),
              name: 'Min/Max IO'
            },
            {
              value: [this.summaries[0].bwMeanMIB,0,this.summaries[1].bwMeanMIB,0],
              name: 'IOR',
              lineStyle:{
                opacity: 0
              }

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
      console.log("HERE")
      console.log(indi)
      return indi;
  }


  getTestCase(tid){
    let ob =  this.selectedTestCases.find((x)=>{
      return x.id == tid;
        });
        return ob;
  }


  boxIndicator(rkey){
    let indicator = [];
    let names = []
    let results = []
    let finalresult = []
    this.selectedTestCasesResults.forEach(res => {
      let ob = this.getTestCase(res.testcase_id);
      if(ob){
        names.push(ob.name)
        results.push([res[rkey]])
      }
    });
    results[0].push(this.summaries[0].bwMeanMIB)
    results[2].push(this.summaries[1].bwMeanMIB)
    console.log(results[0])
    results.forEach(res =>{
      finalresult.push(Math.max(...res))
    })
    console.log(finalresult)
    let count = 0;
    names.forEach(n => {
      indicator.push({name: n, max: finalresult[count]})
      count = count + 1
    })

    console.log("There u are")
    console.log(indicator)
    return indicator
  }



      //IOR
      sOpSelection(){
        this.getSummary()
      }

      transformToData(cRW, rkey){
        let read = [];
        let write = [];
        cRW.forEach(rw => {
          if(rw.access=== "read"){
            read.push(rw[rkey]);
          }else{
            write.push(rw[rkey]);
          }
        });
        if(read.length === 1){
          read.push(read[0],read[0],read[0])
        }
        if (write.length === 1){
          write.push(write[0],write[0],write[0])
        }
        let obj = [read,write]
        //console.log("my data: ", obj)
        return obj
        }

      initMulti(){
        this.themeSubscription2= this.theme.getJsTheme().subscribe(config => {
    
          const colors: any = config.variables;
          const echarts: any = config.variables.echarts;
          this.options_multi = {
                    backgroundColor: echarts.bg,
            color: [colors.danger, colors.primary, colors.info],
            toolbox: {
              show: true,
              feature: {
                saveAsImage: { show: true }
              }
            },
            xAxis: {
              data: ['Read',"Write"],
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
            yAxis: {name:this.selectedsOp,
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
              },},
            series: [
              {
                type: 'candlestick',
                data: this.transformToData(this.chartRW,this.selectedsOp)
              }
            ]
          };
    
        });
    
       
        this.chartRW = [];
      }

  initBarChart(){
    this.themeSubscriptionBarChart = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      this.options_bar = {
                backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        toolbox: {
          show: true,
          feature: {
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          data: this.barChartXaxis(),
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
        yAxis: {name:this.selectedsOp,
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
          },},
        series: [
          {
            type: 'bar',
            data: this.barChartData()
          }
        ]
      };
    });
  }

  barChartData(){
    let data = this.transformDim(this.selectedTestCasesResults, 'bwMiB')
    //let dataMulti = this.transformToData(this.chartRW,this.selectedsOp)
    data.push(this.summaries[0].bwMeanMIB, this.summaries[1].bwMeanMIB)
    
    return data;
  }

  barChartXaxis(){
    let xAxis = []
    let names = this.getIndicator(this.selectedTestCasesResults, 'bwMiB')

    names.forEach(n =>{
      xAxis.push(n.name)
    })
    xAxis.push("IORMeanWrite", "IORMeanRead")
    return xAxis
  }
}
