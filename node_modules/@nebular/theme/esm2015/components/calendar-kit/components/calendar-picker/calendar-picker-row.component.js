/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { NbCalendarSize } from '../../model';
export class NbCalendarPickerRowComponent {
    constructor(cfr) {
        this.cfr = cfr;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter();
    }
    ngOnChanges() {
        const factory = this.cfr.resolveComponentFactory(this.component);
        this.containerRef.clear();
        this.row.forEach((date) => {
            const component = this.containerRef.createComponent(factory);
            this.patchWithContext(component.instance, date);
            component.changeDetectorRef.detectChanges();
        });
    }
    patchWithContext(component, date) {
        component.visibleDate = this.visibleDate;
        component.selectedValue = this.selectedValue;
        component.date = date;
        component.min = this.min;
        component.max = this.max;
        component.filter = this.filter;
        component.size = this.size;
        component.select.subscribe(this.select.emit.bind(this.select));
    }
}
NbCalendarPickerRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-picker-row',
                template: '<ng-template></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    :host {
      display: flex;
      justify-content: space-between;
    }
  `]
            },] }
];
NbCalendarPickerRowComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
NbCalendarPickerRowComponent.propDecorators = {
    row: [{ type: Input }],
    selectedValue: [{ type: Input }],
    visibleDate: [{ type: Input }],
    component: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    containerRef: [{ type: ViewChild, args: [TemplateRef, { read: ViewContainerRef, static: true },] }]
};
//# sourceMappingURL=calendar-picker-row.component.js.map