import { Output, EventEmitter, Input, Component } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
export class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
}
FilterDefault.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
FilterDefault.propDecorators = {
    column: [{ type: Input }],
    source: [{ type: Input }],
    inputClass: [{ type: Input }],
    filter: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NlcmdleS9wcm9ncmFtL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci1kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUsvRCxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQU9XLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFM0MsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQVNyQixDQUFDO0lBUEMsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixNQUFNLEVBQUUsS0FBSztZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYjs7O3FCQUdFLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJEZWZhdWx0IHtcblxuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcXVlcnk6IHN0cmluZyA9ICcnO1xuXG4gIG9uRmlsdGVyKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvdXJjZS5hZGRGaWx0ZXIoe1xuICAgICAgZmllbGQ6IHRoaXMuY29sdW1uLmlkLFxuICAgICAgc2VhcmNoOiBxdWVyeSxcbiAgICAgIGZpbHRlcjogdGhpcy5jb2x1bW4uZ2V0RmlsdGVyRnVuY3Rpb24oKSxcbiAgICB9KTtcbiAgfVxufVxuIl19