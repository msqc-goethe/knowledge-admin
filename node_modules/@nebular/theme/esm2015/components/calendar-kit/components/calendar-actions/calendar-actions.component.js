import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
export class NbCalendarActionsComponent {
    constructor() {
        this._applyButtonText = 'ok';
        this._currentTimeButtonText = 'now';
        this.setCurrentTime = new EventEmitter();
        this.saveValue = new EventEmitter();
    }
    set applyButtonText(value) {
        if (value) {
            this._applyButtonText = value;
        }
    }
    ;
    get applyText() {
        return this._applyButtonText;
    }
    ;
    set currentTimeButtonText(value) {
        if (value) {
            this._currentTimeButtonText = value;
        }
    }
    get currentTimeText() {
        return this._currentTimeButtonText;
    }
    ;
}
NbCalendarActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-actions',
                template: `
    <button
      nbButton
      ghost
      status="primary"
      size="small"
      (click)="setCurrentTime.emit()">
      {{ currentTimeText }}</button>
    <button
      nbButton
      status="primary"
      size="small"
      (click)="saveValue.emit()">
      {{ applyText }}</button>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;justify-content:space-between}\n"]
            },] }
];
NbCalendarActionsComponent.propDecorators = {
    applyButtonText: [{ type: Input }],
    currentTimeButtonText: [{ type: Input }],
    setCurrentTime: [{ type: Output }],
    saveValue: [{ type: Output }]
};
//# sourceMappingURL=calendar-actions.component.js.map