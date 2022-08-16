import { Component, OnInit } from '@angular/core';
import {WebServiceService} from '../../webservice.service';
import { NbThemeService, NbWindowService} from '@nebular/theme';
import {IO500WindowFormComponent} from './io500-window-form.component';


@Component({
  selector: 'io-500',
  templateUrl: './io500.component.html',
})
export class IO500Component implements OnInit {



  public selectedValue: any;
  public io500: any;
  public selectedTestCases: any;
  public selectedTestCaseOptions: any;
  public selectedTestCasesResults: any;


  
  constructor(private theme: NbThemeService, public ws: WebServiceService, private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.ws.getIO500().then(x =>{
      this.io500 = x;
      console.log(this.io500)
    });
  }

  openWindowForm(tid, tn) {
    this.windowService.open(IO500WindowFormComponent, { title: tn, context: [this.getTestCassesResult(tid), this.getTestCaseOptions(tid)]});
  }

  getTestCassesResult(tid){
let ob =  this.selectedTestCasesResults.find((x)=>{
  //console.log(x)
  return x.testcase_id === tid;
    });
    return ob;
  }

  getTestCaseOptions(tid){
    let ob =  this.selectedTestCaseOptions.find((x)=>{
      return x.testcase_id == tid;
        });
        return ob;
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
      })
      });
    })
  }

}
