import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
export class ActionsComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    }
}
ActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-st-actions',
                template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `
            },] }
];
ActionsComponent.propDecorators = {
    grid: [{ type: Input }],
    create: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NlcmdleS9wcm9ncmFtL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvYWN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFhekMsTUFBTSxPQUFPLGdCQUFnQjtJQVg3QjtRQWNZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBUzdDLENBQUM7SUFKQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDthQUNGOzs7bUJBR0UsS0FBSztxQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zdC1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWFkZC1jcmVhdGVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImNyZWF0ZUJ1dHRvbkNvbnRlbnRcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Y3JlYXRlLmVtaXQoJGV2ZW50KVwiPjwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWFkZC1jYW5jZWxcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImNhbmNlbEJ1dHRvbkNvbnRlbnRcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Z3JpZC5jcmVhdGVGb3JtU2hvd24gPSBmYWxzZTtcIj48L2E+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjcmVhdGVCdXR0b25Db250ZW50OiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmNyZWF0ZUJ1dHRvbkNvbnRlbnQnKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmNhbmNlbEJ1dHRvbkNvbnRlbnQnKTtcbiAgfVxufVxuIl19