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

    //IOR
    public selectedValueIOR: any;
    performances: any;
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

    chartRW = [];
  /*public selectedValue: any;
  public io500: any;
  public selectedTestCases: any;
  public selectedTestCaseOptions: any;
  public selectedTestCasesResults: any;
  public scoreChartOptions: any;
  public boundingboxOptions: any;
  themeSubscription: any;
  selectedDim = 'score'
  selectedBDim = [12];*/

  
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
          //this.initScoreChart();
          //this.initBoundingbox();
          //this.test(this.selectedTestCasesResults, 'bwMiB');
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
      /*Promise.all(parr).then(() => {
        console.log(this.chartRW)
        this.initReadChart()
        this.initWriteChart()
        this.initMulti();
        this.ws.getFilesystem(this.selectedValue.id).then((x)=>{
          this.selectedFilesystem = x;
          this.selectedFilesystem = JSON.parse(this.selectedFilesystem[0].settings)
         console.log(this.selectedFilesystem)
        })
      });*/
    });
  }
  
}
