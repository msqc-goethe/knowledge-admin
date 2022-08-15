import { Component, OnInit} from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { WebServiceService} from '../../webservice.service';

@Component({
  template: `
<nb-card size="large">
  <nb-card-header>
  <div class="row">
    <nb-select class="col" placeholder="Select X dimension" [(selected)]="selectedC">
      <nb-option *ngFor="let opC of optionsC" [value]="opC"> {{ opC }}</nb-option>
    </nb-select>
    <nb-select class="col" placeholder="Select Y dimension" [(selected)]="selectedR">
    <nb-option *ngFor="let opR of optionsR" [value]="opR"> {{ opR }}</nb-option>
    </nb-select>
    <button style="float: right;" (click)="update()" nbButton>Apply</button>
 </div>
  </nb-card-header>
  <nb-card-body>
  <div style="width: 600px; height: 450px;" echarts [options]="option" class="echart"></div>
  </nb-card-body>
</nb-card>

  `,
  styleUrls: ['darshan-result-comparison-window-form.component.scss'],
})
export class DarshanWindowFormComponent implements OnInit {
  option: any;
  selectedItem = '2';
  selectedR = 'bwMeanMIB';
  selectedC = 'performance_id';
  optionsR = ['bwMaxMIB', 'bwMinMIB', 'bwMeanMIB', 'bwStdMIB', 'OPsMax', 'OPsMin', 'OPsMean', 'OPsSD', 'MeanTime', 'xsizeMiB']
  optionsC = ['performance_id', 'API', 'segmentCount', 'blockSize', 'transferSize', 'numTasks', 'tasksPerNode', 'filePerProc']
  selectedIds: any;

  constructor(public windowRef: NbWindowRef, public ws: WebServiceService) {

  }

  ngOnInit(): void {
    //console.log(this.windowRef.config.context);
    this.selectedIds = this.windowRef.config.context;
    this.ws.getMultiSummaries(this.selectedIds, this.selectedR, this.selectedC).then(x=>{ 
      this.initChart();
    });

  }

  close() {
    this.windowRef.close();
  }

  update(){
    this.ws.multiSum = [];
     this.ws.getMultiSummaries(this.selectedIds, this.selectedR, this.selectedC).then(x=>{
        this.initChart();
      });
  }

  initChart(){
    this.option = {
      legend: {},
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
      tooltip: {},
      dataset: {
        source: this.transform()
      },
      xAxis: { 
        name: this.selectedC,
        nameLocation: 'center',
        nameTextStyle: {
          verticalAlign: 'top',
          lineHeight: 50
        },
        type: 'category' },
      yAxis: {
        nameLocation: 'center',
        //type: 'log',
        nameTextStyle: {
          lineHeight: 80
        },
        name:this.selectedR,
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }]
    };
  }

  transform(){
    console.log(this.ws.multiSum)
    let data = [];
   this.ws.multiSum.forEach(x => {
      let r;
      let w;
      for (let i = 0; i < x.series.length; i ++){
        if (x.series[i].name === 'read'){
          r = x.series[i].value
        }else {
          w = x.series[i].value
        }
      }
      data.push({selectedC: x.name, 'read': r, 'write': w})


  })
  console.log("final: ", data)
  return data
  }

  

}
