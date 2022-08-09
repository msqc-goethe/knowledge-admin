import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
}
DefaultEditor.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
DefaultEditor.propDecorators = {
    cell: [{ type: Input }],
    inputClass: [{ type: Input }],
    onStopEditing: [{ type: Output }],
    onEdited: [{ type: Output }],
    onClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NlcmdleS9wcm9ncmFtL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXRvcnMvZGVmYXVsdC1lZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLbEQsTUFBTSxPQUFPLGFBQWE7SUFIMUI7UUFPWSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDOUMsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2I7OzttQkFFRSxLQUFLO3lCQUNMLEtBQUs7NEJBRUwsTUFBTTt1QkFDTixNQUFNO3NCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgRWRpdG9yIHtcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvblN0b3BFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvciB7XG4gIGNlbGw6IENlbGw7XG4gIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgb25TdG9wRWRpdGluZzogRXZlbnRFbWl0dGVyPGFueT47XG4gIG9uRWRpdGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT47XG59XG4iXX0=