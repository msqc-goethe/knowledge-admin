/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * Chat message component.
 */
export class NbChatMessageTextComponent {
    constructor() {
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
    }
}
NbChatMessageTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message-text',
                template: `
    <p class="sender" *ngIf="sender || date">{{ sender }} <time>{{ date  | date: dateFormat }}</time></p>
    <p class="text" *ngIf="message">{{ message }}</p>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageTextComponent.propDecorators = {
    sender: [{ type: Input }],
    message: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }]
};
//# sourceMappingURL=chat-message-text.component.js.map