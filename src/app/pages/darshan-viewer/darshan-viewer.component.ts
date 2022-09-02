import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance} from '../../webservice.service';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Result} from '../../webservice.service';
import { NbThemeService } from '@nebular/theme';
import { posix } from 'path';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'darshan-viewer-app',
  templateUrl: './darshan-viewer.component.html',
})
export class DarshanResultViewerComponent implements OnInit {
  darshans: any;
  summaries: any;
  results: any;
  selectedSummary: any;
  selectedFilesystem: any;
  summariesP = false;
  data: TreeNode<Result>[] = [];

  //some information
  testMounts: any;
  testFiles: any;

  
  customColumn = 'name';
  defaultColumns = [ "blockKiB","bwMiB","closeTime","iops","latency","openTime", "totalTime", "wrRdTime", "xferKiB"];
  allColumns = [...this.defaultColumns ];

  dataSource_r: NbTreeGridDataSource<Result>;
  dataSource_w: NbTreeGridDataSource<Result>;


  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;


  //for chart
  options_hist: any = {};
  options_ioops: any = {};
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
    this.ws.getDarshan().then((darshans:any)=>{
      this.darshans = darshans.map((darshan) =>{
        return {id: darshan.id, meta: JSON.parse(darshan.meta), summary: JSON.parse(darshan.summary), mounts: JSON.parse(darshan.mounts), writtenFiles: JSON.parse(darshan.writtenFiles)}
      })
      console.log(this.darshans)
    })
  }

  getSummary(){
    console.log("selected: ",this.selectedSummary)
    this.initTestMount()
    this.initTestFiles()
    this.initHistChart()
    this.initIoopsCharts()
  }

  isObj(val): boolean { return typeof val === 'object'; }


initHistChart(){
  const op = this.transformToData(this.selectedSummary.summary.agg_iohist.POSIX)
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      this.options_hist = {
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
        xAxis: {
          type: 'category',
          data: op.dim,
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
        yAxis: {
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
        series: [
          {
            data: op.val,
            type: 'bar'
          }
        ]
      };
      
      
    });
  }

   
transformToData(sum_posix){
  console.log(sum_posix)
  let dim = [];
  let value = [];
  Object.keys(sum_posix).forEach(key=>{
    dim.push(key);
    value.push(sum_posix[key])
  });
  return {'dim': dim, 'val': value}
  }

  

  initIoopsCharts(){
    const op = this.transformSimplesToData(this.selectedSummary.summary.agg_ioops)
    console.log(op)
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
  
        const colors: any = config.variables;
        const echarts: any = config.variables.echarts;
        this.options_ioops = {
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
          xAxis: [
            {
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
              data: ['Fsync', 'Mmap', 'Open', 'Read', 'Seek', 'Stat', 'Write']
            }
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
            }
          ],
          series: [
            {
              name: 'POSIX',
              type: 'bar',
              barGap: 0,
              emphasis: {
                focus: 'series'
              },
              data: op['posixio']
            },
            {
              name: 'MPIIO_indep',
              type: 'bar',
              emphasis: {
                focus: 'series'
              },
              data: op['mpiio_indep']
            },
            {
              name: 'MPIIO_coll',
              type: 'bar',
              emphasis: {
                focus: 'series'
              },
              data: op['mpiio_coll']
            },
            {
              name: 'STDIO',
              type: 'bar',
              emphasis: {
                focus: 'series'
              },
              data:  op['stdio']
            }
          ]
        };        
      });
    }
  
transformSimplesToData(ioops){
  let obj = {posixio: [], mpiio_indep: [], mpiio_coll: [], stdio:[]}
  console.log(ioops);
  for (let key in ioops) {
    if (key == "POSIX_simple"){
      this.pushops(obj, 'posixio', ioops, key);

    }else if (key == "MPI-IO_indep_simple"){
      this.pushops(obj, 'mpiio_indep', ioops, key);

    }else if (key == "MPI-IO_coll_simple"){
      this.pushops(obj, 'mpiio_coll', ioops, key);
    }else if (key == "STDIO_simple"){
      this.pushops(obj, 'stdio', ioops, key);
    }

    //console.log(key)
}  
return obj
}
pushops(obj, ops, ioops, key){
  obj[ops].push(ioops[key].Fsync)
  obj[ops].push(ioops[key].Mmap)
  obj[ops].push(ioops[key].Open)
  obj[ops].push(ioops[key].Read)
  obj[ops].push(ioops[key].Seek)
  obj[ops].push(ioops[key].Stat)
  obj[ops].push(ioops[key].Write)
}

initTestMount(){
  let mountdata = {}
  this.selectedSummary.mounts.forEach(mount => {
    mountdata[mount[0]] = mount[1]
    
  });
  this.testMounts = mountdata
}

initTestFiles(){
  this.testFiles = this.selectedSummary.writtenFiles
}
}
