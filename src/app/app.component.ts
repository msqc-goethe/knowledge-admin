import { Component } from '@angular/core';
import { MENU_ITEMS } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knowex2';
  menu = MENU_ITEMS;
}
