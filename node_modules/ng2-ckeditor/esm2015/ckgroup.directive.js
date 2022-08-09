import { Directive, Input, ContentChildren } from '@angular/core';
import { CKButtonDirective } from './ckbutton.directive';
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
export class CKGroupDirective {
    ngAfterContentInit() {
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach((button) => (button.toolbar = this.name));
    }
    initialize(editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach((button) => {
            button.initialize(editor);
        });
    }
}
CKGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ckgroup',
            },] }
];
CKGroupDirective.propDecorators = {
    name: [{ type: Input }],
    previous: [{ type: Input }],
    subgroupOf: [{ type: Input }],
    toolbarButtons: [{ type: ContentChildren, args: [CKButtonDirective,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tncm91cC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2tncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9CLGVBQWUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RDs7Ozs7Ozs7O0dBU0c7QUFJSCxNQUFNLE9BQU8sZ0JBQWdCO0lBTTNCLGtCQUFrQjtRQUNoQixzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sVUFBVSxDQUFDLE1BQXlCO1FBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7bUJBRUUsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsZUFBZSxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDS0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2tlZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IENLQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9ja2J1dHRvbi5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIENLR3JvdXAgY29tcG9uZW50XG4gKiBVc2FnZSA6XG4gKiAgPGNrZWRpdG9yIFsobmdNb2RlbCldPVwiZGF0YVwiIFtjb25maWddPVwiey4uLn1cIiBkZWJvdW5jZT1cIjUwMFwiPlxuICogICAgICA8Y2tncm91cCBbbmFtZV09XCInZXhhbXBsZUdyb3VwMidcIiBbcHJldmlvdXNdPVwiJzEnXCIgW3N1Ymdyb3VwT2ZdPVwiJ2V4YW1wbGVHcm91cDEnXCI+XG4gKiAgICAgICAgICAuXG4gKiAgICAgICAgICAuXG4gKiAgICAgIDwvY2tncm91cD5cbiAqICAgPC9ja2VkaXRvcj5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2tncm91cCcsXG59KVxuZXhwb3J0IGNsYXNzIENLR3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwcmV2aW91czogYW55O1xuICBASW5wdXQoKSBzdWJncm91cE9mOiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGRyZW4oQ0tCdXR0b25EaXJlY3RpdmUpIHRvb2xiYXJCdXR0b25zOiBRdWVyeUxpc3Q8Q0tCdXR0b25EaXJlY3RpdmU+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBSZWNvbmZpZ3VyZSBlYWNoIGJ1dHRvbidzIHRvb2xiYXIgcHJvcGVydHkgd2l0aGluIGNrZ3JvdXAgdG8gaG9sZCBpdHMgcGFyZW50J3MgbmFtZVxuICAgIHRoaXMudG9vbGJhckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiAoYnV0dG9uLnRvb2xiYXIgPSB0aGlzLm5hbWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplKGVkaXRvcjogQ0tFZGl0b3JDb21wb25lbnQpIHtcbiAgICBlZGl0b3IuaW5zdGFuY2UudWkuYWRkVG9vbGJhckdyb3VwKHRoaXMubmFtZSwgdGhpcy5wcmV2aW91cywgdGhpcy5zdWJncm91cE9mKTtcbiAgICAvLyBJbml0aWFsaXplIGVhY2ggYnV0dG9uIHdpdGhpbiBja2dyb3VwXG4gICAgdGhpcy50b29sYmFyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5pbml0aWFsaXplKGVkaXRvcik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==