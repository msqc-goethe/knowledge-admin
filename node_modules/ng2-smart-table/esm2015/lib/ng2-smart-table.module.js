import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { Ng2SmartTableComponent } from './ng2-smart-table.component';
export class Ng2SmartTableModule {
}
Ng2SmartTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CellModule,
                    FilterModule,
                    PagerModule,
                    TBodyModule,
                    THeadModule,
                ],
                declarations: [
                    Ng2SmartTableComponent,
                ],
                exports: [
                    Ng2SmartTableComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2VyZ2V5L3Byb2dyYW0vbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvbmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQW9CckUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBbEIvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO2lCQUN2QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ2VsbE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jZWxsL2NlbGwubW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlci9wYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgVEJvZHlNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlJztcbmltcG9ydCB7IFRIZWFkTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVDb21wb25lbnQgfSBmcm9tICcuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ2VsbE1vZHVsZSxcbiAgICBGaWx0ZXJNb2R1bGUsXG4gICAgUGFnZXJNb2R1bGUsXG4gICAgVEJvZHlNb2R1bGUsXG4gICAgVEhlYWRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nMlNtYXJ0VGFibGVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZzJTbWFydFRhYmxlQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlTW9kdWxlIHtcbn1cbiJdfQ==