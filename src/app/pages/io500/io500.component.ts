import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'io500-app',
  templateUrl: './io500.component.html',
})
export class IO500Component implements OnInit{

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme();
}


  ngOnInit(): void {
    
  }
}
