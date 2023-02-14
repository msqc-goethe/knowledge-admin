import { Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
//import { SmartTableData } from '../../utils/smart-table-data';
import {WebServiceService, Performance} from '../webservice.service';
import { NbWindowService } from '@nebular/theme';
import {WindowFormComponent} from './result-comparison-window-form.component';

@Component({
  selector: 'app-ior-comparison',
  templateUrl: './ior-comparison.component.html',
  styleUrls: ['./ior-comparison.component.scss']
})
export class IorComparisonComponent implements OnInit {
  performances: any=[];
  ior = []
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
      platform: {
        title: 'platform',
        type: 'string',
      },
      api: {
        title: 'API',
        type: 'string',
      },
      blockSize: {
        title: 'Blocksize',
        type: 'string',
      },
      segmentCount: {
        title: 'segmentCount',
        type: 'number',
      },
      collective: {
        title: 'collective',
        type: 'string',
      },
      filePerProc: {
        title: 'filePerProc',
        type: 'string',
      },
      nodes: {
        title: 'nodes',
        type: 'number',
      },
      tasksPerNode: {
        title: 'tasksPerNode',
        type: 'number',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(public ws: WebServiceService, private windowService: NbWindowService) {
    //const data = this.service.getData();

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
        this.performances.push(Object.assign({}, {'id': e.id, "ts": e.summary[0].Began}, {'cmd': e.summary[0]['Command line']}, {'te': e.summary[0].Finished}, e.summary[0].tests[0].Parameters, {'summary': e.summary[0].summary}, {'tests': e.summary[0].tests}, {'fs': e.fs}))

        //Next summary
        //this.summaries
        
      });

      this.source.load(this.performances)
    })

    /*this.ws.getPerformances().then((performances: Performance[])=>{
      const data = performances;
      this.source.load(data);
    });*/

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
  }

}

openWindowForm() {
  this.ws.multiSum = [];
  let selectedIds = [];
   this.clickedRows.forEach(element => {
     selectedIds.push(element.id)
   });
  this.windowService.open(WindowFormComponent, { title: `Window`, context: selectedIds});
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



}
