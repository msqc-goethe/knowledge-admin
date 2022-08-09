import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import { debounceTime } from 'rxjs/operators';
export class CheckboxFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.filterActive = false;
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe((checked) => {
            this.filterActive = true;
            const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
            const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
            this.query = checked ? trueVal : falseVal;
            this.setFilter();
        });
    }
    resetFilter(event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    }
}
CheckboxFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-filter',
                template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `
            },] }
];
CheckboxFilterComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2VyZ2V5L3Byb2dyYW0vbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2NoZWNrYm94LWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVU5QyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBYTtJQUt4RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSlYsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsaUJBQVksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBSWpDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWTthQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQzlGLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUNqRyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LWZpbHRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtmb3JtQ29udHJvbF09XCJpbnB1dENvbnRyb2xcIiBbbmdDbGFzc109XCJpbnB1dENsYXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiZmlsdGVyQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVzZXRGaWx0ZXIoJGV2ZW50KVwiPnt7Y29sdW1uLmdldEZpbHRlckNvbmZpZygpPy5yZXNldFRleHQgfHwgJ3Jlc2V0J319PC9hPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpbHRlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGZpbHRlckFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBpbnB1dENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWxheSkpXG4gICAgICAuc3Vic2NyaWJlKChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdHJ1ZVZhbCA9ICh0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKSAmJiB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS50cnVlKSB8fCB0cnVlO1xuICAgICAgICBjb25zdCBmYWxzZVZhbCA9ICh0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKSAmJiB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5mYWxzZSkgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMucXVlcnkgPSBjaGVja2VkID8gdHJ1ZVZhbCA6IGZhbHNlVmFsO1xuICAgICAgICB0aGlzLnNldEZpbHRlcigpO1xuICAgICAgfSk7XG4gIH1cblxuICByZXNldEZpbHRlcihldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnF1ZXJ5ID0gJyc7XG4gICAgdGhpcy5pbnB1dENvbnRyb2wuc2V0VmFsdWUoZmFsc2UsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0RmlsdGVyKCk7XG4gIH1cbn1cbiJdfQ==