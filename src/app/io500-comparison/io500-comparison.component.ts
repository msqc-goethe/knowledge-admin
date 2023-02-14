import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { WebServiceService } from '../webservice.service';
import { IO500CompWindowFormComponent } from './io500-comp-window-form.component';

@Component({
  selector: 'app-io500-comparison',
  templateUrl: './io500-comparison.component.html',
  styleUrls: ['./io500-comparison.component.scss']
})
export class Io500ComparisonComponent implements OnInit {

 

  public selectedValue: any;
  public io500: any;
  public io500custome: any = [];
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
      score: {
        title: 'score',
        type: 'number',
      },

      result_Dir: {
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

  constructor(private theme: NbThemeService, public ws: WebServiceService, private windowService: NbWindowService) {
    this.ws.getCustom().then((x:[])=>{
      this.io500custome = x.map(val =>({
        id: val['id'],
        name: val['name_app'],
        type: val['type'],
        summary: JSON.parse(val['summary']),
        fs: JSON.parse(val['fs']),
        sysinfo: JSON.parse(val['sysinfo']),
      }));
      let temp = []
      this.io500custome.forEach(i => {
        if(i.name == "IO500"){
          temp.push(i)
        }
      });
      this.io500custome = temp

      const data = []
      this.io500custome.forEach(e => {
        data.push(Object.assign({},e.summary.run,e.summary.score,e.sysinfo,e.summary.start, e.summary.end))   
      });
      

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
  //const echarts: any = config.variables.echarts;

  let dim = this.transformDim(src);
  this.boundingboxOptions = {
    //backgroundColor: echarts.bg,
    color: [colors.danger, colors.primary, colors.info],
    textStyle: {
      //color: echarts.textColor,
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
      orient: 'vertical',
      textStyle: {
        //color: echarts.textColor,
      },
    },
    radar: {
      // shape: 'circle',
      indicator: [{name:'BW', max: 10}, {name:'MD', max: 50},{name:'score', max: 10},]
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
  //const echarts: any = config.variables.echarts;

  this.rankingOptions = { 
    //backgroundColor: echarts.bg,
    color: [colors.danger, colors.primary, colors.info],
    tooltip: {},
    textStyle: {
      //color: echarts.textColor,
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        saveAsImage: { show: true }
      }
    },
    xAxis: {
    type: 'category',
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
      splitLine: {
        lineStyle: {
          //color: echarts.splitLineColor,
        }
      },
    },
    data: src.map(x=>x.name)
  },
  yAxis: {
    type: 'value',
    axisTick: {
      alignWithLabel: true,
    },
    axisLine: {
      lineStyle: {
        //color: echarts.axisLineColor,
      },
      
    },
    splitLine: {
      lineStyle: {
        //color: echarts.splitLineColor,
      }
    },
    axisLabel: {
      textStyle: {
        //color: echarts.textColor,
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
  },
  series: [
    {
      data: src.map(x=>x.score),
      type: 'bar'
    }
  ]
};
  });
}

transformDim(runs){
  let final = []
  runs.forEach(run => {
    let sub = [];
    sub.push(run.BW);
    sub.push(run.MD);
    sub.push(run.score);
    final.push({'value': sub, 'name': run.id});
  });;
  return final;
} 


  
}
