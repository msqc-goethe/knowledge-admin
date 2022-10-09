import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance, Result} from '../../webservice.service';
import { NbThemeService, NbWindowService, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import {BenchCompWindowFormComponent} from './bench-comp-window-form.component';

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

    //
    themeSubscriptionScatterChart: any;
    options_scatter: any={}
    /*scatter_series = [
      {
        name: 'IO500',
        type: 'scatter',
        symbolSize: 1 ,
        emphasis: {
          focus: 'series'
        },
        // prettier-ignore
        data: [[30,30 ], [9000, 5490],
              ],
        markArea: {
          silent: true,
          itemStyle: {
            color: 'transparent',
            borderWidth: 1,
            borderType: 'solid'
          },
          data: [
            [
              {
                name: 'IO500',
                xAxis: 'min',
                yAxis: 'min'
              },
              {
                xAxis: 'max',
                yAxis: 'max'
              }
            ]
          ]
        },
      },
    ]*/

    //scatter_backup = this.scatter_series

    //used to reset scatter chart when deselcting items from smarttable

    //SmartTableBase
    settingsTable = {
      selectMode:"multi",
      pager:{
        perPage: 100,
      }, 
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        id: {
          title: 'ID',
          type: 'number',
        },
        name: {
          title: 'Name',
          type: 'string',
        },
        type: {
          title: 'Type',
          type: 'string',
        },
        sysName: {
          title: 'Cluster',
          type: 'string',
        },
        bw: {
          title: 'BW(MB/s)',
          type: 'number',
        },
        size: {
          title: 'Size(Bytes)',
          type: 'number',
        },
  
        time: {
          title: 'T(sec)',
          type: 'string',
        },
      },
    };

    sourceTable: LocalDataSource = new LocalDataSource();

  clickedRows: any;
  isDisabled = true;

  smartdata: any[]
  smartdata2: any[]

  
  constructor(private theme: NbThemeService, public ws: WebServiceService, private windowService: NbWindowService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<Result>) {
  }

  ngOnInit(): void {
   this.ws.getIO500().then(x =>{
      this.io500 = x;
      //console.log(this.io500)
    });
    this.ws.getPerformances().then(()=>{
        this.performances = this.ws.performances;
    })

    let parr = []

    this.ws.getPerformances().then((performances: Performance[])=>{
      parr.push(performances.map(p => ({
        id: p.id,
        name: "IOR",
        type: "Benchmark",
        summary: "score",
        sysinfo: p.cmd,
        sysName: p.platform,
        size:p.transferSize,
        bw:40,
        writebw: 1000,
        readbw: 1000,
        time:5,
      })));;
      //this.sourceTable.load(this.smartdata2)
      console.log(parr)
      this.addDataToSmartTable(parr)
    });

    //DarshanData
    this.ws.getDarshan().then((darshans:any)=>{
       parr.push(darshans.map((darshan =>({
        id: darshan.id, 
        name: "Darshan",
        type: "Benshmark", 
        summary: JSON.parse(darshan.summary),
        //meta: JSON.parse(darshan.meta),
        sysinfo: "System",
        sysName: "Platform",
        bw: 120,
        writebw: 2000,
        readbw: 2000,
        time: 18000
       
      }))))
      console.log("Darshan")
      console.log(parr)
      this.addDataToSmartTable(parr)
    })


    this.ws.getCustom().then((cu: any[])=>{
      parr.push(cu.map(val => ({
        id: val['id'],
        name: val['name_app'],
        type: val['type'],
        summary: JSON.parse(val['summary']),
        fs: JSON.parse(val['fs']),
        sysinfo: JSON.parse(val['sysinfo']),
        sysName: JSON.parse(val['sysinfo']).name,
        size: (Number(JSON.parse(val['summary'])[0].size[0]) + Number(JSON.parse(val['summary'])[1].size[0]))/2,
        bw: (Number(JSON.parse(val['summary'])[0].bw[0]) + Number(JSON.parse(val['summary'])[1].bw[0]))/2,
        writebw: Number(JSON.parse(val['summary'])[0].bw[0]),
        readbw: Number(JSON.parse(val['summary'])[1].bw[0]),
        time: (Number(JSON.parse(val['summary'])[0].time[0]) + Number(JSON.parse(val['summary'])[1].time[0]))/2,
      })));;
      console.log("Here")
      console.log(parr);
      //this.sourceTable.load(this.smartdata);
      this.addDataToSmartTable(parr)


    });

    //this.addDataToSmartTable(parr)
  }

  addDataToSmartTable(parr){
    let smart = []
      parr.forEach(e => {
        e.forEach(s => {
          smart.push(s)
        })
      })
      console.log(smart)
      this.sourceTable.load(smart)
  }

  selectIO500(){
    this.ws.getIO500_testcases(this.selectedValue.run_id).then(x=>{
      this.selectedTestCases = x;

      this.ws.getIO500_results(this.selectedValue.run_id).then(res => {
        this.selectedTestCasesResults = res;

        this.ws.getIO500_options (this.selectedValue.run_id).then(op =>{
          this.selectedTestCaseOptions = op;


          this.readyIO500 = true
          if(this.readyIO500 && this.readyIOR){
            this.initBoundingbox();
          }
          this.scatterChart();
      })
      });
    })
  }

  getSummary(rkey = "ops"){

    this.ws.getSummaries(this.selectedValueIOR.id).then(()=>{

      this.summaries = this.ws.summaries;

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
        this.scatterChart();
        this.ws.getFilesystem(this.selectedValue.id).then((x)=>{
          this.selectedFilesystem = x;
          this.selectedFilesystem = JSON.parse(this.selectedFilesystem[0].settings)
        })
      });
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
    console.log(finalresult)
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

  

  scatterChart(){
    this.themeSubscriptionScatterChart = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      this.options_scatter = {
        grid: {
          left: '3%',
          right: '7%',
          bottom: '7%',
          containLabel: true
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return (
                params.seriesName +
                ' :<br/>' +
                params.value[0] +
                'bwMib ' +
                params.value[1] +
                'bwMib '
              );
            } else {
              return (
                params.seriesName +
                ' :<br/>' +
                params.name +
                ' : ' +
                params.value +
                'bwMib '
              );
            }
          },
          axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
              type: 'dashed',
              width: 1
            }
          }
        },
        legend: {
          data: ['IO500', 'Other'],
          left: 'center',
          bottom: 10
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: '{value} bwMib'
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: '{value} bwMiB'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'IO500',
            type: 'scatter',
            symbolSize: 1 ,
            emphasis: {
              focus: 'series'
            },
            // prettier-ignore
            data: this.scatterIO500indicator(),
            markArea: {
              silent: true,
              itemStyle: {
                color: 'transparent',
                borderWidth: 1,
                borderType: 'solid'
              },
              data: [
                [
                  {
                    name: 'IO500',
                    xAxis: 'min',
                    yAxis: 'min'
                  },
                  {
                    xAxis: 'max',
                    yAxis: 'max'
                  }
                ]
              ]
            },
          },{
            name: "Other",
            type: "scatter",
            symbolsize: 10,
            data: []


          }
        ],
      };
    });
  }


  updatescatter(options){
    this.themeSubscriptionScatterChart = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      this.options_scatter = options
      console.log(this.options_scatter[1])
    })
  }

  scatterIO500indicator(){
    //let names = []
    let results = []
    this.selectedTestCasesResults.forEach(res => {
      let ob = this.getTestCase(res.testcase_id);
      if(ob){
        //names.push(ob.name)
        results.push([res['bwMiB']])
      }
    });
    //return indicator
    return [[results[3],results[1] ], [results[2], results[0]],
]
  }

  addSeriesToScatter(id,name,read,write){
    let serie = {
        name: '' + name.toString() + id.toString(),
        type: 'scatter',
        symbolSize: 10 ,
        emphasis: {
          focus: 'series'
        },
        // prettier-ignore
        data: [[read, write]
              ],
    }
    console.log(this.options_scatter)
    this.options_scatter.series[2] = serie
    //console.log(this.options_scatter)
    //this.updatescatter(this.options_scatter)
    
    //this.scatterChart()
  }

  testTable($event){
    this.clickedRows = $event.selected

   // this.options_scatter.series = []
    //this.options_scatter = this.scatter_backup

    this.clickedRows.forEach(row => {
      console.log(row)
      this.addSeriesToScatter(row.id,row.name,row.readbw,row.writebw)
      //this,this.addSeriesToScatter(row.id,row.name,100,100)
      
    });

    this.scatterChart()
    if (this.clickedRows.length==0){
      this.isDisabled = true;
    }
    else{
      this.isDisabled =false;
    }
  }



}
