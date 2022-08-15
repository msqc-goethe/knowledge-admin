import { Component, OnInit} from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import {WebServiceService, Performance} from '../../webservice.service';
import { NbWindowService } from '@nebular/theme';
import {WindowFormComponent} from './result-comparison-window-form.component';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';



@Component({
  selector:'smart-table-result',
  template:`
  <nb-card>
  <nb-card-header>
    Smart Table
    <button *ngIf="!isDisabled" style="float: right;" (click)="openWindowForm()" nbButton>Inspect View</button>
  </nb-card-header>

  <nb-card-body>
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)" (userRowSelect)="test($event)">
    </ng2-smart-table>
  </nb-card-body>
</nb-card>

`,
  styleUrls: ['./smart-table-result.component.scss'],
})
export class SmartTableResultComponent  implements OnInit{

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

  constructor(private service: SmartTableData, public ws: WebServiceService, private windowService: NbWindowService) {
    //const data = this.service.getData();
    //console.log(data);
    this.ws.getPerformances().then((performances: Performance[])=>{
      const data = performances;
      this.source.load(data);
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
  }
  console.log(this.isDisabled)

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
