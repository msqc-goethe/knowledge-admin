import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { FilterComponent } from './filter.component';
import { DefaultFilterComponent } from "./default-filter.component";
import { CustomFilterComponent } from "./custom-filter.component";
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { CompleterFilterComponent } from './filter-types/completer-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';
import { DefaultFilter } from './filter-types/default-filter';
import { FilterDefault } from './filter-default';
const FILTER_COMPONENTS = [
    FilterDefault,
    DefaultFilter,
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
export class FilterModule {
}
FilterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    Ng2CompleterModule,
                ],
                declarations: [
                    ...FILTER_COMPONENTS,
                ],
                exports: [
                    ...FILTER_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2VyZ2V5L3Byb2dyYW0vbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE1BQU0saUJBQWlCLEdBQUc7SUFDeEIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDdEIsQ0FBQztBQWdCRixNQUFNLE9BQU8sWUFBWTs7O1lBZHhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsa0JBQWtCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxpQkFBaUI7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGlCQUFpQjtpQkFDckI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZzJDb21wbGV0ZXJNb2R1bGUgfSBmcm9tICduZzItY29tcGxldGVyJztcblxuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRGaWx0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kZWZhdWx0LWZpbHRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEN1c3RvbUZpbHRlckNvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGVja2JveEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2NoZWNrYm94LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9pbnB1dC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9kZWZhdWx0LWZpbHRlcic7XG5pbXBvcnQgeyBGaWx0ZXJEZWZhdWx0IH0gZnJvbSAnLi9maWx0ZXItZGVmYXVsdCc7XG5cbmNvbnN0IEZJTFRFUl9DT01QT05FTlRTID0gW1xuICBGaWx0ZXJEZWZhdWx0LFxuICBEZWZhdWx0RmlsdGVyLFxuICBGaWx0ZXJDb21wb25lbnQsXG4gIERlZmF1bHRGaWx0ZXJDb21wb25lbnQsXG4gIEN1c3RvbUZpbHRlckNvbXBvbmVudCxcbiAgQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQsXG4gIENvbXBsZXRlckZpbHRlckNvbXBvbmVudCxcbiAgSW5wdXRGaWx0ZXJDb21wb25lbnQsXG4gIFNlbGVjdEZpbHRlckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZzJDb21wbGV0ZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkZJTFRFUl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uRklMVEVSX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1vZHVsZSB7IH1cbiJdfQ==