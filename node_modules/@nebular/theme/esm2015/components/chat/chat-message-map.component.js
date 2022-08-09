/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbChatOptions } from './chat.options';
/**
 * Chat message component.
 */
export class NbChatMessageMapComponent {
    constructor(options) {
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
        this.mapKey = options.messageGoogleMapKey;
    }
    get file() {
        return {
            // tslint:disable-next-line:max-line-length
            url: `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=12&size=400x400&key=${this.mapKey}`,
            type: 'image/png',
            icon: 'location',
        };
    }
}
NbChatMessageMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message-map',
                template: `
    <nb-chat-message-file [files]="[file]" [message]="message" [sender]="sender" [date]="date"
     [dateFormat]="dateFormat"></nb-chat-message-file>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageMapComponent.ctorParameters = () => [
    { type: NbChatOptions }
];
NbChatMessageMapComponent.propDecorators = {
    message: [{ type: Input }],
    sender: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }],
    latitude: [{ type: Input }],
    longitude: [{ type: Input }]
};
//# sourceMappingURL=chat-message-map.component.js.map