import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance} from '../../webservice.service';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Result} from '../../webservice.service';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'resultviewer-app',
  templateUrl: './resultviewer.component.html',
})
export class ResultViewerComponent implements OnInit {
  selectedValue: Performance;
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


  constructor(public ws: WebServiceService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<Result>) {

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
    this.ws.getPerformances().then(()=>{
      this.performances = this.ws.performances;
    })
  }

  getSummary(rkey = "ops"){
    console.log(this.selectedValue)
    this.ws.getSummaries(this.selectedValue.id).then(()=>{
     console.log( this.selectedValue)
      this.summaries = this.ws.summaries;
     console.log(this.summaries)
      this.summariesP = true;
      this.summaries.forEach(sum => {
        this.ws.getResultsForTable(sum).then((x:[Result])=>{
          x.forEach(r =>{
            this.data.push({"data":r})
          });
          if(sum.operation == "read"){
            this.dataSource_r = this.dataSourceBuilder.create(this.data);
            //this.transformToSeries(this.data, this.ws.simpleDataR, "bwMiB")
            this.ws.simpleDataR = this.data;
            this.data = []
          }else {
            this.dataSource_w = this.dataSourceBuilder.create(this.data);
            //this.transformToSeries(this.data, this.ws.simpleDataW, "bwMiB")
            this.ws.simpleDataR = this.data;
            this.data = []
          }
        
        })
      });
      this.ws.getFilesystem(this.selectedValue.id).then((x)=>{
        this.selectedFilesystem = x;
        this.selectedFilesystem = JSON.parse(this.selectedFilesystem[0].settings)
       console.log(this.selectedFilesystem)
      })
    });
  }

transformToSeries(src, dest, rkey){
  
  let data = [];
  src.forEach(r =>{
    //console.log()
    data.push(r.data[rkey]);
  })
  let obj = {"name":rkey, type: 'line', data};
  dest.push(obj);
  data = [];
}

}
