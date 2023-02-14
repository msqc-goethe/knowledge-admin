import { Component } from '@angular/core';
import { MENU_ITEMS } from './app-routing.module';
import { NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knowex2';
  menu = MENU_ITEMS;

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true, 'left');
  }

  
}
