import { Component, ViewContainerRef, ViewChild } from '@angular/core';
export class NbWindowsContainerComponent {
}
NbWindowsContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-windows-container',
                template: `<ng-container #viewContainerRef></ng-container>`,
                styles: [":host{display:flex;align-items:flex-end;overflow-x:auto}:host ::ng-deep nb-window:not(.full-screen){margin:0 2rem}\n"]
            },] }
];
NbWindowsContainerComponent.propDecorators = {
    viewContainerRef: [{ type: ViewChild, args: ['viewContainerRef', { read: ViewContainerRef, static: true },] }]
};
//# sourceMappingURL=windows-container.component.js.map