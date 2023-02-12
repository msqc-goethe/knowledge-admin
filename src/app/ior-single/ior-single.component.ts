import { Component, OnInit } from '@angular/core';

import {WebServiceService, Performance} from '../webservice.service';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Result} from '../webservice.service';
import { NbThemeService } from '@nebular/theme';


interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'app-ior-single',
  templateUrl: './ior-single.component.html',
  styleUrls: ['./ior-single.component.scss']
})
export class IorSingleComponent implements OnInit {

  ior: any = [];
  //selectedValue: Performance;
  selectedValue: any;
  performances: any = [];
  summaries: any;
  results: any;
  selectedSummary: any;
  selectedFilesystem: any;
  summariesP = false;
  data: TreeNode<Result>[] = [];

  
  customColumn = 'name';
  defaultColumns = [ "blockKiB","bwMiB","closeTime","iops","latency","openTime", "totalTime", "wrRdTime", "xferKiB"];
  allColumns = [...this.defaultColumns ];

  dataSource_r: NbTreeGridDataSource<Result>;
  dataSource_w: NbTreeGridDataSource<Result>;


  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;


  //for chart
  options_read: any = {};
  options_write: any = {};
  options_multi: any = {};

  themeSubscription: any;
  themeSubscription2: any;

  sOptions = ['blockKiB', 'bwMiB', 'closeTime', 'iops', 'latency', 'openTime','totalTime', 'wrRdTime', 'xferKiB'];
  selectedsOp = 'bwMiB';

  chartRW = [];


  constructor(private theme: NbThemeService, public ws: WebServiceService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<Result>) {

  }
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }


  ngOnInit(): void {
    this.ws.getCustom().then((x:[])=>{
      this.ior = x.map(val =>({
        id: val['id'],
        name: val['name_app'],
        type: val['type'],
        summary: JSON.parse(val['summary']),
        fs: JSON.parse(val['fs']),
        sysinfo: JSON.parse(val['sysinfo']),
      }));
      let temp = []
      this.ior.forEach(i => {
        if(i.name == "IOR"){
          temp.push(i)
        }
      });

      this.ior = temp
      this.ior.forEach(e => {
        this.performances.push(Object.assign({}, {"ts": e.summary[0].Began}, {'cmd': e.summary[0]['Command line']}, {'te': e.summary[0].Finished}, e.summary[0].tests[0].Parameters, {'summary': e.summary[0].summary}, {'tests': e.summary[0].tests}, {'fs': e.fs}))

        //Next summary
        //this.summaries
        
      });

    });

    /*this.ws.getPerformances().then(()=>{
      this.performances = this.ws.performances;
    })*/

  }

  getSummary(rkey = "ops"){
      this.summaries = this.selectedValue.summary
      this.results = this.selectedValue.tests[0].Results

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

      this.initReadChart()
      this.initWriteChart()
      this.initMulti();
      //this.ws.getFilesystem(this.selectedValue.id).then((x)=>{
      this.selectedFilesystem = this.selectedValue.fs;
  }

//read chart
  initReadChart(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      //const echarts: any = config.variables.echarts;

      this.options_read = {
        //backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {},
        legend: {
          left: 'left',
          data: ['Line 1'],
          textStyle: {
            //color: echarts.textColor,
          },
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
                //color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                //color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {name: this.selectedsOp,
            type: 'value',
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
      
          dimensions: ['iteration', this.selectedsOp],
          source: this.transformToSeriesRead_Write(this.ws.simpleDataR, this.selectedsOp)
        },
        series: [{ type: 'line' },]
      };
    });
  }
//write chart
  initWriteChart(){
    this.themeSubscription2= this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options_write = {
        //backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {},
        legend: {
          left: 'left',
          data: ['Line 1', 'Line 2', 'Line 3'],
          textStyle: {
            //color: echarts.textColor,
          },
        },
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
                //color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                //color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            name: this.selectedsOp,
            type: 'value',
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
      
          dimensions: ['iteration', this.selectedsOp],
          source: this.transformToSeriesRead_Write(this.ws.simpleDataW, this.selectedsOp)
        },
        series: [{ type: 'line' },]
      };
    });
  }
  transformToSeriesRead_Write(src, rkey){
    let data = [];
    src.forEach((value, index) =>{
      data.push({"iteration": index + 1, [rkey]: value.data[rkey]});
    })
    return data;
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

  sOpSelection(){
    this.getSummary()
  }

}
