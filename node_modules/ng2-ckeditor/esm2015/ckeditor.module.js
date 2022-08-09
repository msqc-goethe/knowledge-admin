import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorComponent } from './ckeditor.component';
import { CKButtonDirective } from './ckbutton.directive';
import { CKGroupDirective } from './ckgroup.directive';
/**
 * CKEditorModule
 */
export class CKEditorModule {
}
CKEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
                exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NrZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDs7R0FFRztBQU1ILE1BQU0sT0FBTyxjQUFjOzs7WUFMMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3RFLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDO2FBQ2xFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENLRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9ja2VkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ0tCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2NrYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDS0dyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi9ja2dyb3VwLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogQ0tFZGl0b3JNb2R1bGVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NLRWRpdG9yQ29tcG9uZW50LCBDS0J1dHRvbkRpcmVjdGl2ZSwgQ0tHcm91cERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtDS0VkaXRvckNvbXBvbmVudCwgQ0tCdXR0b25EaXJlY3RpdmUsIENLR3JvdXBEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBDS0VkaXRvck1vZHVsZSB7fVxuIl19