import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
export class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
}
TbodyCustomComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-st-tbody-custom',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
            },] }
];
TbodyCustomComponent.propDecorators = {
    grid: [{ type: Input }],
    row: [{ type: Input }],
    source: [{ type: Input }],
    custom: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2VyZ2V5L3Byb2dyYW0vbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90Ym9keS9jZWxscy9jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVl6QyxNQUFNLE9BQU8sb0JBQW9CO0lBVmpDO1FBZWMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhL0MsQ0FBQztJQVhHLFFBQVEsQ0FBQyxNQUFXLEVBQUUsS0FBVTtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBMUJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7OztTQUtMO2FBQ1I7OzttQkFHSSxLQUFLO2tCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktY3VzdG9tJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGEgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuY3VzdG9tJylcIiBocmVmPVwiI1wiXG4gICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tXCIgXG4gICAgICAgICBbaW5uZXJIVE1MXT1cImFjdGlvbi50aXRsZVwiXG4gICAgICAgICAoY2xpY2spPVwib25DdXN0b20oYWN0aW9uLCAkZXZlbnQpXCI+PC9hPlxuICAgICAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRib2R5Q3VzdG9tQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gICAgQElucHV0KCkgcm93OiBSb3c7XG4gICAgQElucHV0KCkgc291cmNlOiBhbnk7XG4gICAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgb25DdXN0b20oYWN0aW9uOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jdXN0b20uZW1pdCh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbi5uYW1lLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==