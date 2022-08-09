import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
export class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.cell && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
}
CustomEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-custom-editor',
                template: `
    <ng-template #dynamicTarget></ng-template>
  `
            },] }
];
CustomEditComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
CustomEditComponent.propDecorators = {
    dynamicTarget: [{ type: ViewChild, args: ['dynamicTarget', { read: ViewContainerRef, static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZXJnZXkvcHJvZ3JhbS9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvY3VzdG9tLWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxnQkFBZ0IsR0FJakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBUXRELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxlQUFlO0lBS3RELFlBQW9CLFFBQWtDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFFdEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFNUUsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN0RjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7WUFmQyx3QkFBd0I7Ozs0QkFtQnZCLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWRpdENlbGxEZWZhdWx0IH0gZnJvbSAnLi9lZGl0LWNlbGwtZGVmYXVsdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtY3VzdG9tLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkeW5hbWljVGFyZ2V0PjwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVkaXRDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q2VsbERlZmF1bHQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgY3VzdG9tQ29tcG9uZW50OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2R5bmFtaWNUYXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkeW5hbWljVGFyZ2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5jZWxsICYmICF0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvci5jb21wb25lbnQpO1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQgPSB0aGlzLmR5bmFtaWNUYXJnZXQuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgICAvLyBzZXQgQElucHV0cyBhbmQgQE91dHB1dHMgb2YgY3VzdG9tIGNvbXBvbmVudFxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UuY2VsbCA9IHRoaXMuY2VsbDtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLmlucHV0Q2xhc3MgPSB0aGlzLmlucHV0Q2xhc3M7XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5vblN0b3BFZGl0aW5nLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uU3RvcEVkaXRpbmcoKSk7XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5vbkVkaXRlZC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHRoaXMub25FZGl0ZWQoZXZlbnQpKTtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm9uQ2xpY2suc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==