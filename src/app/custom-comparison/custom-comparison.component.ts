import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { WebServiceService } from '../webservice.service';
import { CustomCompWindowFormComponent } from './custom-comp-window-form.component';

@Component({
  selector: 'app-custom-comparison',
  templateUrl: './custom-comparison.component.html',
  styleUrls: ['./custom-comparison.component.scss']
})
export class CustomComparisonComponent implements OnInit {

  public selectedValue: any;
  public io500: any;
  public custome: any =[];
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

  source: LocalDataSource = new LocalDataSource();

  constructor(private theme: NbThemeService, public ws: WebServiceService, private windowService: NbWindowService) {
    this.ws.getCustom().then((x:[])=>{
      this.custome = x.map(val =>({
        id: val['id'],
        name: val['name_app'],
        type: val['type'],
        summary: JSON.parse(val['summary']),
        fs: JSON.parse(val['fs']),
        sysinfo: JSON.parse(val['sysinfo']),
      }));
      let temp = []
      this.custome.forEach(i => {
        
        if(i.name == "Haccio"){
          //i['sysName'] = JSON.parse(i['sysinfo']).name
          i['sysName'] = i.sysinfo.name
          console.log(i)
          //i['size'] = (Number(JSON.parse(i['summary'])[0].size[0]) + Number(JSON.parse(i['summary'])[1].size[0]))/2
          i['size'] = (Number(i.summary[0].size[0]) + Number(i.summary[1].size[0]))/2
          i['bw'] = (Number(i.summary[0].bw[0]) + Number(i.summary[1].bw[0]))/2
          i['time'] = (Number(i.summary[0].time[0]) + Number(i.summary[1].time[0]))/2
          temp.push(i)
        }
      });
      

      this.custome = temp
      this.source.load(this.custome);
      this.initBoundingbox(this.custome);
      this.initRanking(this.custome);
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
  this.windowService.open(CustomCompWindowFormComponent, { title: `Window`, context: selectedIds});
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
      indicator: [{name:'BW', max: Math.max(...src.map(function(val){return val.bw}))}, 
      {name:'size', max: Math.max(...src.map(function(val){return val.size}))},
      {name:'time', max: Math.max(...src.map(function(val){return val.time}))},]
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
    data: src.map(x=>x.id)
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
      data: src.map(x=>x.bw),
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
    sub.push(run.bw);
    sub.push(run.size);
    sub.push(run.time);
    final.push({'value': sub, 'name': run.id});
  });;
  return final;
} 


  
}

