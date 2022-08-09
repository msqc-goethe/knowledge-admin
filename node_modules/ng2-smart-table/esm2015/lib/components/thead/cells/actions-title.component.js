import { Component, Input, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
export class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
}
ActionsTitleComponent.decorators = [
    { type: Component, args: [{
                selector: '[ng2-st-actions-title]',
                template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `
            },] }
];
ActionsTitleComponent.ctorParameters = () => [
    { type: ElementRef }
];
ActionsTitleComponent.propDecorators = {
    grid: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NlcmdleS9wcm9ncmFtL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvYWN0aW9ucy10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWlCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRekMsTUFBTSxPQUFPLHFCQUFxQjtJQU1oQyxZQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUNuQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7OztZQVR3QyxVQUFVOzs7bUJBWWhELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtYWN0aW9ucy10aXRsZV0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuZzItc21hcnQtdGl0bGVcIj57eyBhY3Rpb25zQ29sdW1uVGl0bGUgfX08L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uc1RpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuXG4gIGFjdGlvbnNDb2x1bW5UaXRsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduZzItc21hcnQtYWN0aW9ucycpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5hY3Rpb25zQ29sdW1uVGl0bGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5jb2x1bW5UaXRsZScpO1xuICB9XG59XG4iXX0=