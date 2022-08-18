import { Component, OnInit } from '@angular/core';
import {WebServiceService} from '../../webservice.service';
import { NbThemeService, NbWindowService} from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import {IO500CompWindowFormComponent} from './io500-comp-window-form.component';
@Component({
  selector: 'io-500-comp',
  templateUrl: './io500-comp.component.html',
})
export class IO500CompComponent implements OnInit {



  public selectedValue: any;
  public io500: any;
  public selectedTestCases: any;
  public selectedTestCaseOptions: any;
  public selectedTestCasesResults: any;
  public rankingOptions: any;
  public boundingboxOptions: any;
  themeSubscription: any;
  selectedDim = 'score'
  selectedBDim = [12];

  
  clickedRows: any;
  isDisabled = true;

  settings = {
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
        title: 'name',
        type: 'string',
      },
      version: {
        title: 'version',
        type: 'string',
      },
      BW: {
        title: 'BW',
        type: 'string',
      },
      MD: {
        title: 'MD',
        type: 'string',
      },
      SCORE: {
        title: 'SCORE',
        type: 'number',
      },

      result_dir: {
        title: 'result_dir',
        type: 'string',
      },
      start: {
        title: 'start',
        type: 'string',
      },
      end: {
        title: 'end',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private theme: NbThemeService, private service: SmartTableData, public ws: WebServiceService, private windowService: NbWindowService) {
    this.ws.getIO500().then((io: any[])=>{
      const data = io;
      console.log(io);
      this.source.load(data);
      this.initBoundingbox(data);
      this.initRanking(data);

    });

  }

  ngOnInit(): void {

  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

test($event){
  this.clickedRows = $event.selected
  console.log(this.clickedRows)
  if (this.clickedRows.length==0){
    this.isDisabled = true;
  }
  else{
    this.isDisabled =false;
    this.initBoundingbox(this.clickedRows);
    this.initRanking(this.clickedRows);
  }
}

openWindowForm() {
  this.ws.multiSum = [];
  let selectedIds = [];
   this.clickedRows.forEach(element => {
     selectedIds.push(element.id)
   });
  this.windowService.open(IO500CompWindowFormComponent, { title: `Window`, context: selectedIds});
  //this.view_update()
}
view_update(){
  this.ws.multiSum = [];
 this.ws.selectedIds = [];
  this.clickedRows.forEach(element => {
    this.ws.selectedIds.push(element.id)
  });
  this.ws.getMultiSummaries(this.ws.selectedIds, 'bwMeanMIB','performance_id').then(x=>{ 
    
  });
  // this.ws.getBoxSummaries(this.ws.selectedIds, 'bw','performance_id', "write").then(x=>{ });
}

initBoundingbox(src){
  this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
    const colors: any = config.variables;
  const echarts: any = config.variables.echarts;

  let dim = this.transformDim(src);
  this.boundingboxOptions = {
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
    legend: {
      data: src.map(x => x.id),
      left:'left',
      orient: 'vertical'
    },
    radar: {
      // shape: 'circle',
      indicator: [{name:'BW', max: 10}, {name:'MD', max: 50},{name:'SCORE', max: 10},]
    },
    series: [
      {
        type: 'radar',
        data: dim
      }
    ]
  };
  });
}

initRanking(src){
  this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
    const colors: any = config.variables;
  const echarts: any = config.variables.echarts;

  let dim = this.transformDim(src);
  this.rankingOptions = { 
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
    yAxis: {
    type: 'category',
    data: src.map(x=>x.name)
  },
  xAxis: {
    type: 'value'
  },
  series: [
    {
      data: src.map(x=>x.SCORE),
      type: 'bar'
    }
  ]
};
  });
}


/*
transformDim(src, rkey){
  return src.map(x => x[rkey]);
}
*/ 
transformDim(runs){
  let final = []
  runs.forEach(run => {
    let sub = [];
    sub.push(run.BW);
    sub.push(run.MD);
    sub.push(run.SCORE);
    final.push({'value': sub, 'name': run.id});
  });;
  return final;
} 


  
}
