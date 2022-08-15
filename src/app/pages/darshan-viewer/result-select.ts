import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-select',
  template: `
            <nb-card size="small">
          <nb-card-body>
            <nb-select placeholder="Select Showcase" [(selected)]="selectedItem">
              <nb-option value="">Option empty</nb-option>
              <nb-option value="0">Option 0</nb-option>
              <nb-option value="1">Option 1</nb-option>
              <nb-option value="2">Option 2</nb-option>
              <nb-option value="3">Option 3</nb-option>
              <nb-option value="4">Option 4</nb-option>
            </nb-select>
          </nb-card-body>
        </nb-card>
  `,
})
export class ResultSelectComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  selectedItem = '2';
  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
