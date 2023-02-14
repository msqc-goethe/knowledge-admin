import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbThemeService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Result, WebServiceService } from '../../webservice.service';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'app-io500-ior-comparison',
  templateUrl: './io500-ior-comparison.component.html',
  styleUrls: ['./io500-ior-comparison.component.scss']
})
export class Io500IorComparisonComponent implements OnInit {

  every: any = []

    //IO500
    public selectedValue: any;
    public selectedTestCases: any;
    public selectedTestCaseOptions: any;
    public selectedTestCasesResults: any;
    selectedSettingsIO500: any=[];
    io500: any = [];

    //IO500Chart
    public boundingboxOptions: any;
    themeSubscription: any;
    selectedDim = 'score'
    selectedBDim = [12];

    //IOR
    ior: any = [];
    public selectedValueIOR: any;
    performances: any = [];
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

  constructor(private theme: NbThemeService, public ws: WebServiceService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<Result>) {
  }

  ngOnInit(): void {

    this.ws.getCustom().then((cu: any[])=>{
      this.every.push(cu.map(val => ({
        id: val['id'],
        name: val['name_app'],
        type: val['type'],
        summary: JSON.parse(val['summary']),
        fs: JSON.parse(val['fs']),
        sysinfo: JSON.parse(val['sysinfo']),
      })))

      this.every[0].forEach(i => {
        if(i.name == "IO500"){
          this.io500.push(i)
        }else if(i.name == 'IOR'){
          this.performances.push(Object.assign({}, {"ts": i.summary[0].Began}, {'cmd': i.summary[0]['Command line']}, {'te': i.summary[0].Finished}, i.summary[0].tests[0].Parameters, {'summary': i.summary[0].summary}, {'tests': i.summary[0].tests}, {'fs': i.fs}))
        }
      });

    })
  }


  selectIO500(){
    this.selectedTestCases = []
    this.selectedTestCasesResults =[]
    this.selectedValue.summary.testcases.forEach(e => {
      this.selectedTestCases.push(e)
      if (e.name.includes("ior")){
        this.selectedTestCasesResults.push(e.results)
      }
    });
    this.selectedSettingsIO500 = Object.assign({},this.selectedValue.summary.run,this.selectedValue.summary.score,this.selectedValue.sysinfo)

    this.initBoundingbox()
  }


  getSummary(rkey = "ops"){
    this.summaries = this.selectedValueIOR.summary
    this.results = this.selectedValueIOR.tests[0].Results

    let iteration_read = []
    let iteration_write = []
    this.results.forEach(res => {
      //Read
      let r = res[1]
      //delete r['access']
      iteration_read.push({'data': r})
      this.chartRW.push(r)
      

      //Write
      let w= res[0]
      iteration_write.push({'data': w})
      this.chartRW.push(w)
    });

    //let data = [{"data": iteration_read}]
    //console.log(data)
    this.dataSource_r = this.dataSourceBuilder.create(iteration_read);
    this.ws.simpleDataR = iteration_read;

    //data = [{"data": iteration_write}]
    this.dataSource_w = this.dataSourceBuilder.create(iteration_write);
    this.ws.simpleDataW = iteration_write; 

    this.summariesP = true;
    let parr = [];

    this.initBoundingbox();
    this.initBarChart();
    this.initMulti();
    //this.ws.getFilesystem(this.selectedValue.id).then((x)=>{
    this.selectedFilesystem = this.selectedValueIOR.fs;
}


  initBoundingbox(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
    const colors: any = config.variables;
    //const echarts: any = config.variables.echarts;

    this.boundingboxOptions = {
      legend: {},
      //backgroundColor: echarts.bg,
      color: [colors.danger, colors.primary, colors.info],
      textStyle: {
        //color: echarts.textColor,
      },

      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { title: "Data",show: true, readOnly: false },
          saveAsImage: {title: "Download", show: true }
        }
      },
      tooltip:{},
      title:{
        show:false,
        text: this.selectedDim,
        left: 'center'
      },
      radar: {
        startAngle: 45,
        //shape: 'square',
        //indicator: this.getIndicator(this.selectedTestCasesResults, 'bwMiB')
        indicator: this.boxIndicator('bwMiB')
      },
      series: [
        {
          name: 'IO500',
          type: 'radar',
          data: [
            {
              value: this.transformDim(this.selectedTestCasesResults, 'bwMiB'),
              name: 'IO500'
            },
            {
              value: [this.summaries[0].bwMeanMIB,2500,this.summaries[1].bwMeanMIB,1600],
              name: 'IOR',
              symbol: 'triangle',
              symbolOffset: ['50%','50%'],
              lineStyle:{
                opacity: 0,
              },
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

    results.forEach(res =>{
      finalresult.push(Math.max(...res))
    })
    let count = 0;
    names.forEach(n => {
      indicator.push({name: n, max: finalresult[count]})
      count = count + 1
    })

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
        return obj
        }

      initMulti(){
        this.themeSubscription2= this.theme.getJsTheme().subscribe(config => {
    
          const colors: any = config.variables;
          //const echarts: any = config.variables.echarts;
          this.options_multi = {
            //backgroundColor: echarts.bg,
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
                  //color: echarts.axisLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  //color: echarts.textColor,
                },
              },
            },
            yAxis: {name:this.selectedsOp,
              axisLine: {
                lineStyle: {
                  //color: echarts.axisLineColor,
                },
              },
              splitLine: {
                lineStyle: {
                  //color: echarts.splitLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  //color: echarts.textColor,
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
      //const echarts: any = config.variables.echarts;
      this.options_bar = {
        //backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        toolbox: {
          show: true,
          feature: {
            saveAsImage: { title: "Download", show: true }
          }
        },
        xAxis: {
          data: this.barChartXaxis(),
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              //color: echarts.axisLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              //color: echarts.textColor,
            },
          },
        },
        yAxis: {name:this.selectedsOp,
          axisLine: {
            lineStyle: {
              //color: echarts.axisLineColor,
            },
          },
          splitLine: {
            lineStyle: {
              //color: echarts.splitLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              //color: echarts.textColor,
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
    let data1 = {
      value: this.summaries[0].bwMeanMIB,
      itemStyle: {
        color: '#0000a9'
      }
    }
    let data2 = {
      value: this.summaries[1].bwMeanMIB,
      itemStyle: {
        color: '#0000a9'
      }
    }
    data.push(data1, data2)
    
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

