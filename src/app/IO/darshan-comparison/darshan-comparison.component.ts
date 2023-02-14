import { Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {WebServiceService} from '../../webservice.service';
import { NbWindowService } from '@nebular/theme';
import {DarshanWindowFormComponent} from './darshan-result-comparison-window-form.component';

@Component({
  selector: 'app-darshan-comparison',
  templateUrl: './darshan-comparison.component.html',
  styleUrls: ['./darshan-comparison.component.scss']
})
export class DarshanComparisonComponent implements OnInit {

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
      exe:{
        title: 'Exe',
        type: 'o'
      },
      nprocs:{
        title: 'NProcs',
        type: 'o'
      },
      jobid:{
        title: 'JobID',
        type: 'o'
      }
    },
  };
  
  darshantable: any =[]
  darshanlist: any = []
  source: LocalDataSource = new LocalDataSource();

  constructor(public ws: WebServiceService, private windowService: NbWindowService) {

    this.ws.getCustom().then((x:[])=>{
      this.darshantable = x.map(val =>({
        id: val['id'],
        name: val['name_app'],
        type: val['type'],
        summary: JSON.parse(val['summary']),
        fs: JSON.parse(val['fs']),
        sysinfo: JSON.parse(val['sysinfo']),
      }));

      let temp = []
      this.darshantable.forEach(i => {
        if(i.name == "Darshan"){
          temp.push(i)
        }
      });

      temp.forEach(d => {
        let data = {id: d.id, exe: d.summary.meta.exe,  nprocs: d.summary.meta.job.nprocs , jobid: d.summary.meta.job.jobid, summary: d.summary.summary,}
        this.darshanlist.push(data)
      })
      console.log(this.darshanlist)
      this.source.load(this.darshanlist)

    })
    



    /*this.ws.getDarshan().then((darshans: any[])=>{
      darshans = darshans.map((darshan) =>{
        return {id: darshan.id, exe: JSON.parse(darshan.meta).exe, nprocs: JSON.parse(darshan.meta).job.nprocs, jobid: JSON.parse(darshan.meta).job.jobid, summary: JSON.parse(darshan.summary)}
      })
      const data = darshans;
      console.log(data)
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
  console.log(this.isDisabled)

}

openWindowForm() {
  this.ws.multiSum = [];
  let selectedIds = [];
   this.clickedRows.forEach(element => {
     selectedIds.push(element.id)
   });
  this.windowService.open(DarshanWindowFormComponent, { title: `Window`, context: selectedIds});
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
