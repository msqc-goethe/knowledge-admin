import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance} from '../../webservice.service';
import { Result} from '../../webservice.service';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'io500-app',
  templateUrl: './io500.component.html',
})
export class IO500Component implements OnInit{
  selectedValue: Performance;
  performances: any;

  constructor(private theme: NbThemeService, public ws: WebServiceService) {

  }

  ngOnInit(): void {
    this.ws.getPerformances().then(()=>{
      this.performances = this.ws.performances;
    })
  }

}
