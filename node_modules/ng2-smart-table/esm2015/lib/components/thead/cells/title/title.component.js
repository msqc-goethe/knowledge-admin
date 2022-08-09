import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
export class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
}
TitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-smart-table-title',
                template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
                styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{border:4px solid transparent;border-bottom-color:rgba(0,0,0,.3);content:\"\";display:inline-block;height:0;margin-bottom:2px;width:0}a.sort.desc:after{margin-bottom:-2px;transform:rotate(-180deg)}"]
            },] }
];
TitleComponent.propDecorators = {
    column: [{ type: Input }],
    source: [{ type: Input }],
    sort: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZXJnZXkvcHJvZ3JhbS9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RoZWFkL2NlbGxzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUdqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBZXpELE1BQU0sT0FBTyxjQUFjO0lBYjNCO1FBZUUscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBR1osU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUErQzNDLENBQUM7SUEzQ0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO29CQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2lCQUM1QjtnQkFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUU7Z0JBRXBDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsQjtnQkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7YUFDMUM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFFakMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUOzthQUNGOzs7cUJBSUUsS0FBSztxQkFDTCxLQUFLO21CQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLXRpdGxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGl0bGUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiY29sdW1uLmlzU29ydGFibGVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJfc29ydCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1zb3J0LWxpbmsgc29ydFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiY3VycmVudERpcmVjdGlvblwiPlxuICAgICAge3sgY29sdW1uLnRpdGxlIH19XG4gICAgPC9hPlxuICAgIDxzcGFuIGNsYXNzPVwibmcyLXNtYXJ0LXNvcnRcIiAqbmdJZj1cIiFjb2x1bW4uaXNTb3J0YWJsZVwiPnt7IGNvbHVtbi50aXRsZSB9fTwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIGN1cnJlbnREaXJlY3Rpb24gPSAnJztcbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuc291cmNlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvcnRDb25mID0gdGhpcy5zb3VyY2UuZ2V0U29ydCgpO1xuXG4gICAgICAgIGlmIChzb3J0Q29uZi5sZW5ndGggPiAwICYmIHNvcnRDb25mWzBdWydmaWVsZCddID09PSB0aGlzLmNvbHVtbi5pZCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHNvcnRDb25mWzBdWydkaXJlY3Rpb24nXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnRDb25mLmZvckVhY2goKGZpZWxkQ29uZjogYW55KSA9PiB7XG5cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc29ydChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNoYW5nZVNvcnREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnNvdXJjZS5zZXRTb3J0KFtcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IHRoaXMuY29sdW1uLmlkLFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuY3VycmVudERpcmVjdGlvbixcbiAgICAgICAgY29tcGFyZTogdGhpcy5jb2x1bW4uZ2V0Q29tcGFyZUZ1bmN0aW9uKCksXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHRoaXMuc29ydC5lbWl0KG51bGwpO1xuICB9XG5cbiAgY2hhbmdlU29ydERpcmVjdGlvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1cnJlbnREaXJlY3Rpb24pIHtcbiAgICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbiA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gdGhpcy5jb2x1bW4uc29ydERpcmVjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERpcmVjdGlvbjtcbiAgfVxufVxuIl19