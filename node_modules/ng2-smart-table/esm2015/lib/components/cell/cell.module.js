import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { CellComponent } from './cell.component';
import { CustomEditComponent } from './cell-edit-mode/custom-edit.component';
import { DefaultEditComponent } from './cell-edit-mode/default-edit.component';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { CheckboxEditorComponent } from './cell-editors/checkbox-editor.component';
import { CompleterEditorComponent } from './cell-editors/completer-editor.component';
import { InputEditorComponent } from './cell-editors/input-editor.component';
import { SelectEditorComponent } from './cell-editors/select-editor.component';
import { TextareaEditorComponent } from './cell-editors/textarea-editor.component';
import { CustomViewComponent } from './cell-view-mode/custom-view.component';
import { ViewCellComponent } from './cell-view-mode/view-cell.component';
import { EditCellDefault } from './cell-edit-mode/edit-cell-default';
import { DefaultEditor } from './cell-editors/default-editor';
const CELL_COMPONENTS = [
    CellComponent,
    EditCellDefault,
    DefaultEditor,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
export class CellModule {
}
CellModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    Ng2CompleterModule,
                ],
                declarations: [
                    ...CELL_COMPONENTS,
                ],
                exports: [
                    ...CELL_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NlcmdleS9wcm9ncmFtL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNsQixDQUFDO0FBZUYsTUFBTSxPQUFPLFVBQVU7OztZQWJ0QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxrQkFBa0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLGVBQWU7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGVBQWU7aUJBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmcyQ29tcGxldGVyTW9kdWxlIH0gZnJvbSAnbmcyLWNvbXBsZXRlcic7XG5cbmltcG9ydCB7IENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdC1tb2RlL2N1c3RvbS1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2NoZWNrYm94LWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGxldGVyRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9pbnB1dC1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL3NlbGVjdC1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvdGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0NlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtdmlldy1tb2RlL3ZpZXctY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdENlbGxEZWZhdWx0IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9lZGl0LWNlbGwtZGVmYXVsdCc7XG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvZGVmYXVsdC1lZGl0b3InO1xuXG5jb25zdCBDRUxMX0NPTVBPTkVOVFMgPSBbXG4gIENlbGxDb21wb25lbnQsXG4gIEVkaXRDZWxsRGVmYXVsdCxcbiAgRGVmYXVsdEVkaXRvcixcbiAgQ3VzdG9tRWRpdENvbXBvbmVudCxcbiAgRGVmYXVsdEVkaXRDb21wb25lbnQsXG4gIEVkaXRDZWxsQ29tcG9uZW50LFxuICBDaGVja2JveEVkaXRvckNvbXBvbmVudCxcbiAgQ29tcGxldGVyRWRpdG9yQ29tcG9uZW50LFxuICBJbnB1dEVkaXRvckNvbXBvbmVudCxcbiAgU2VsZWN0RWRpdG9yQ29tcG9uZW50LFxuICBUZXh0YXJlYUVkaXRvckNvbXBvbmVudCxcbiAgQ3VzdG9tVmlld0NvbXBvbmVudCxcbiAgVmlld0NlbGxDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nMkNvbXBsZXRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQ0VMTF9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQ0VMTF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDZWxsTW9kdWxlIHsgfVxuIl19