/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * Chat message component.
 */
export class NbChatMessageQuoteComponent {
    constructor() {
        /**
          * Message send date format, default 'shortTime'
          * @type {string}
          */
        this.dateFormat = 'shortTime';
    }
}
NbChatMessageQuoteComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message-quote',
                template: `
    <p class="sender" *ngIf="sender || date">{{ sender }} <time>{{ date | date: dateFormat }}</time></p>
    <p class="quote">
      {{ quote }}
    </p>
    <nb-chat-message-text [message]="message">
      {{ message }}
    </nb-chat-message-text>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageQuoteComponent.propDecorators = {
    message: [{ type: Input }],
    sender: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }],
    quote: [{ type: Input }]
};
//# sourceMappingURL=chat-message-quote.component.js.map