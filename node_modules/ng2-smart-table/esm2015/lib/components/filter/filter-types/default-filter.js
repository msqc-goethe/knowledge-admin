import { Input, Output, EventEmitter, Component } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
export class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
DefaultFilter.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
DefaultFilter.propDecorators = {
    query: [{ type: Input }],
    inputClass: [{ type: Input }],
    column: [{ type: Input }],
    filter: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NlcmdleS9wcm9ncmFtL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci10eXBlcy9kZWZhdWx0LWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2xGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt0RCxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQUtFLFVBQUssR0FBVyxHQUFHLENBQUM7UUFLVixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQVdoRCxDQUFDO0lBVEMsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYjs7O29CQUtFLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBGaWx0ZXIsIE9uRGVzdHJveSB7XG5cbiAgZGVsYXk6IG51bWJlciA9IDMwMDtcbiAgY2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBASW5wdXQoKSBxdWVyeTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uO1xuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyKCkge1xuICAgIHRoaXMuZmlsdGVyLmVtaXQodGhpcy5xdWVyeSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xuXG4gIGRlbGF5PzogbnVtYmVyO1xuICBjaGFuZ2VzU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuICBxdWVyeTogc3RyaW5nO1xuICBpbnB1dENsYXNzOiBzdHJpbmc7XG4gIGNvbHVtbjogQ29sdW1uO1xuICBmaWx0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xufVxuIl19