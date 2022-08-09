import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';
const THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
export class THeadModule {
}
THeadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FilterModule,
                    CellModule,
                ],
                declarations: [
                    ...THEAD_COMPONENTS,
                ],
                exports: [
                    ...THEAD_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZXJnZXkvcHJvZ3JhbS9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFNUUsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwyQkFBMkI7Q0FDNUIsQ0FBQztBQWdCRixNQUFNLE9BQU8sV0FBVzs7O1lBZHZCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVk7b0JBQ1osVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxnQkFBZ0I7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGdCQUFnQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlci9maWx0ZXIubW9kdWxlJztcbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcblxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi90aGVhZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uc1RpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hY3Rpb25zLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FkZC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jaGVja2JveC1zZWxlY3QtYWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5UaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY29sdW1uLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlYWRGb3JtUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLWZvcm0tcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC10aXRsZXMtcm93LmNvbXBvbmVudCc7XG5cbmNvbnN0IFRIRUFEX0NPTVBPTkVOVFMgPSBbXG4gIEFjdGlvbnNDb21wb25lbnQsXG4gIEFjdGlvbnNUaXRsZUNvbXBvbmVudCxcbiAgQWRkQnV0dG9uQ29tcG9uZW50LFxuICBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCxcbiAgQ29sdW1uVGl0bGVDb21wb25lbnQsXG4gIFRpdGxlQ29tcG9uZW50LFxuICBUaGVhZEZpdGxlcnNSb3dDb21wb25lbnQsXG4gIFRoZWFkRm9ybVJvd0NvbXBvbmVudCxcbiAgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQsXG4gIE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRmlsdGVyTW9kdWxlLFxuICAgIENlbGxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLlRIRUFEX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5USEVBRF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUSGVhZE1vZHVsZSB7IH1cbiJdfQ==