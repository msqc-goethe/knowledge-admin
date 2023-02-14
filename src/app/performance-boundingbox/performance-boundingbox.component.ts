import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbThemeService, NbTreeGridDataSource } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Result, WebServiceService } from '../webservice.service';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'app-performance-boundingbox',
  templateUrl: './performance-boundingbox.component.html',
  styleUrls: ['./performance-boundingbox.component.scss']
})
export class PerformanceBoundingboxComponent implements OnInit {

 //IO500
 public selectedValue: any;
 public selectedTestCases: any;
 public selectedTestCaseOptions: any;
 public selectedTestCasesResults: any;
 io500: any=[];
 parr: any = [];
 other: any = [];
 selectedSettings: any =[];

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

 //sOptions = ['blockKiB', 'bwMiB', 'closeTime', 'iops', 'latency', 'openTime','totalTime', 'wrRdTime', 'xferKiB'];
 //selectedsOp = 'bwMiB';

 chartRW = [];

 //collective Barchart
 themeSubscriptionBarChart: any;
 options_bar: any={};

 //readyVariables
 readyIO500: any = false;
 readyIOR: any = false;

 //ScatterChart
 selectXAxis: any = [];
 selectYAxis: any = [];

 selectX: any = "";
 selectY: any = "";
 

 themeSubscriptionScatterChart: any;
 options_scatter: any={}
 scatter_series = [
   {
     name: 'IO500',
     type: 'scatter',
     symbolSize: 1 ,
     emphasis: {
       focus: 'series'
     },
     // custome data gets changed afterwards
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
 ]

 //scatter_backup = this.scatter_series

 //used to reset scatter chart when deselcting items from smarttable

 //SmartTableBase
 settingsTable = {
   selectMode:"multi",
   pager:{
     perPage: 100,
   }, 
   actions: {
    delete: false,
    add: false,
    edit: false,
    select: true,
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
     summary_str: {
       title: 'Summary',
       type: 'text'
     },
   },
 };

 sourceTable: LocalDataSource = new LocalDataSource();

clickedRows: any = [];
isDisabled = true;

smartdata: any[]
smartdata2: any[]


constructor(private theme: NbThemeService, public ws: WebServiceService) {
}

ngOnInit(): void {

 this.ws.getCustom().then((cu: any[])=>{
   this.parr.push(cu.map(val => ({
     id: val['id'],
     name: val['name_app'],
     type: val['type'],
     summary: JSON.parse(val['summary']),
     fs: JSON.parse(val['fs']),
     sysinfo: JSON.parse(val['sysinfo']),
     summary_str: val['summary'],
   })))

   let temp = []
   this.parr[0].forEach(i => {
     if(i.name == "IO500"){
       this.io500.push(i)
     }else{
       this.other.push(i)
     }
   });

   this.sourceTable.load(this.other)
 });
}

addDataToSmartTable(parr){
 let smart = []
   parr.forEach(e => {
     e.forEach(s => {
       smart.push(s)
     })
   })
   this.sourceTable.load(smart)
}


selectIO500Custome(){
 this.selectedTestCases = []
 this.selectedTestCasesResults =[]
 this.selectedValue.summary.testcases.forEach(e => {
   this.selectedTestCases.push(e)
   if (e.name.includes("ior")){
     this.selectedTestCasesResults.push(e.results)
   }
 });
 this.selectedSettings = Object.assign({},this.selectedValue.summary.run,this.selectedValue.summary.score,this.selectedValue.sysinfo)

 this.setupscatterseries()
}


getTestCase(tid){
 let ob =  this.selectedTestCases.find((x)=>{
   return x.id == tid;
     });
     return ob;
}

//Everything related to the scatter chart and smartable -->

setupscatterseries(){
 this.scatter_series = [
   {
     name: 'IO500',
     type: 'scatter',
     symbolSize: 1 ,
     emphasis: {
       focus: 'series'
     },
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
   },
 ]

 this.clickedRows.forEach(row => {
   this.addSeriesToScatter(row.id,row.name,row.readbw,row.writebw)
   this.scatterChart();
 });

 this.scatterChart();
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
         name: this.selectX.name,
         type: 'value',
         scale: true,
         min: 0,
         axisLabel: {
           formatter: '{value} bwMiB'
         },
         splitLine: {
           show: false
         }
       }
     ],
     yAxis: [
       {
         name: this.selectY.name,
         type: 'value',
         scale: true,
         min: 0,
         axisLabel: {
           formatter: '{value} bwMiB'
         },
         splitLine: {
           show: false
         }
       }
     ],
     series: this.scatter_series
   };
 });
}

updatescatter(options){
 this.themeSubscriptionScatterChart = this.theme.getJsTheme().subscribe(config => {
   const colors: any = config.variables;
   const echarts: any = config.variables.echarts;
   this.options_scatter = options
 })
}

scatterIO500indicator(){
 let results = []
 this.selectedTestCasesResults.forEach(res => {
   let ob = this.getTestCase(res.testcase_id);
   if(ob){
     results.push([res['bwMiB']])
   }
 });
 return [[results[3],results[1] ], [results[2], results[0]],
]
}

scatterIO500XYindicator(x,y){
 let results = []
 this.selectedTestCasesResults.forEach(res => {
   let ob = this.getTestCase(res.testcase_id);
   if(ob){
     results.push([res['bwMiB']])
   }
 });
}

addSeriesToScatter(id,name,read,write){
 let serie = {
     name: '' + name.toString() + id.toString(),
     type: 'scatter',
     symbolSize: 10 ,
     emphasis: {
       focus: 'series'
     },
     data: [[read, write]
           ],
 }
 this.options_scatter.series.push(serie)
 this.scatterChart()
}

get_row_values(row){
 let r = {}
 if(row.name == 'Haccio'){
   r['id'] = row.id
   r['name'] = row.name
   r['readbw'] = row.summary[1].bw[0]
   r['writebw'] = row.summary[0].bw[0]

   this.addSeriesToScatter(r['id'],r['name'],r['readbw'],r['writebw'])
 }else if(row.name=='IOR'){
   let iter = 0
   row.summary[0].tests[0].Results.forEach(e => {
     r['id'] = row.id
     r['name'] = row.name + iter
     r['readbw'] = e[1].bwMiB
     r['writebw'] = e[0].bwMiB

     this.addSeriesToScatter(r['id'],r['name'],r['readbw'],r['writebw'])
     iter = iter +1
   });
 }else if(row.name=='Darshan'){
  console.log(row)
  let iter = 0
  row.summary[0].tests[0].Results.forEach(e => {
    r['id'] = row.id
    r['name'] = row.name + iter
    r['readbw'] = e[1].bwMiB
    r['writebw'] = e[0].bwMiB

    this.addSeriesToScatter(r['id'],r['name'],r['readbw'],r['writebw'])
    iter = iter +1
  });
}
 
 
}

testTable($event){
 this.clickedRows = $event.selected

 this.setupscatterseries()
 this.clickedRows.forEach(row => {
   let r = this.get_row_values(row)
   
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
