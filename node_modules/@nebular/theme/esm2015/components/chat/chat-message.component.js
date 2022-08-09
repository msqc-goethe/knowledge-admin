/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { convertToBoolProperty } from '../helpers';
import { NbCustomMessageService } from './custom-message.service';
/**
 * Chat message component.
 *
 * Multiple message types are available through a `type` property, such as
 * - text - simple text message
 * - file - could be a file preview or a file icon
 * if multiple files are provided grouped files are shown
 * - quote - quotes a message with specific quote styles
 * - map - shows a google map picture by provided [latitude] and [longitude] properties
 *
 * @stacked-example(Available Types, chat/chat-message-types-showcase.component)
 *
 * Message with attached files:
 * ```html
 * <nb-chat-message
 *   type="file"
 *   [files]="[ { url: '...' } ]"
 *   message="Hello world!">
 * </nb-chat-message>
 * ```
 *
 * Map message:
 * ```html
 * <nb-chat-message
 *   type="map"
 *   [latitude]="53.914"
 *   [longitude]="27.59"
 *   message="Here I am">
 * </nb-chat-message>
 * ```
 *
 * @styles
 *
 * chat-message-background:
 * chat-message-text-color:
 * chat-message-reply-background-color:
 * chat-message-reply-text-color:
 * chat-message-avatar-background-color:
 * chat-message-sender-text-color:
 * chat-message-quote-background-color:
 * chat-message-quote-text-color:
 * chat-message-file-text-color:
 * chat-message-file-background-color:
 */
export class NbChatMessageComponent {
    constructor(domSanitizer, customMessageService) {
        this.domSanitizer = domSanitizer;
        this.customMessageService = customMessageService;
        this.builtInMessageTypes = ['text', 'file', 'map', 'quote'];
        this._reply = false;
    }
    get _addReplyClass() {
        return this._areDefaultStylesEnabled() && this.reply;
    }
    get _addNotReplyClass() {
        return this._areDefaultStylesEnabled() && this.notReply;
    }
    get _addNoSpaceClass() {
        return this._areDefaultStylesEnabled() && !this.message;
    }
    get flyInOut() {
        return true;
    }
    get notReply() {
        return !this.reply;
    }
    /**
     * Determines if a message is a reply
     */
    get reply() {
        return this._reply;
    }
    set reply(value) {
        this._reply = convertToBoolProperty(value);
    }
    /**
     * Message send avatar
     * @type {string}
     */
    set avatar(value) {
        this.avatarStyle = value ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`) : null;
    }
    getInitials() {
        if (this.sender) {
            const names = this.sender.split(' ');
            return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
        }
        return '';
    }
    _isBuiltInMessageType() {
        // Unset type defaults to "text" type
        return this.type == null || this.builtInMessageTypes.includes(this.type);
    }
    _getTemplate() {
        const customMessage = this.getCustomMessage(this.type);
        return customMessage.templateRef;
    }
    _getTemplateContext() {
        return { $implicit: this.customMessageData, isReply: this.reply };
    }
    _areDefaultStylesEnabled() {
        const customMessageDirective = this.getCustomMessage(this.type);
        return !customMessageDirective.noStyles;
    }
    getCustomMessage(type) {
        const customMessageDirective = this.customMessageService.getInstance(type);
        if (!customMessageDirective) {
            throw new Error(`nb-chat: Can't find template for custom type '${type}'. ` +
                `Make sure you provide it in the chat component with *nbCustomMessage='${type}'.`);
        }
        return customMessageDirective;
    }
}
NbChatMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message',
                template: `
    <nb-chat-avatar *ngIf="notReply"
                    [initials]="getInitials()"
                    [avatarStyle]="avatarStyle">
    </nb-chat-avatar>

    <div class="message">
      <ng-container [ngSwitch]="type" *ngIf="_isBuiltInMessageType(); else customTemplate">
        <nb-chat-message-file *ngSwitchCase="'file'"
                              [sender]="sender"
                              [date]="date"
                              [dateFormat]="dateFormat"
                              [message]="message"
                              [files]="files">
        </nb-chat-message-file>

        <nb-chat-message-quote *ngSwitchCase="'quote'"
                               [sender]="sender"
                               [date]="date"
                               [dateFormat]="dateFormat"
                               [message]="message"
                               [quote]="quote">
        </nb-chat-message-quote>

        <nb-chat-message-map *ngSwitchCase="'map'"
                             [sender]="sender"
                             [date]="date"
                             [message]="message"
                             [latitude]="latitude"
                             [longitude]="longitude">
        </nb-chat-message-map>

        <nb-chat-message-text *ngSwitchDefault
                              [sender]="sender"
                              [date]="date"
                              [dateFormat]="dateFormat"
                              [message]="message">
        </nb-chat-message-text>
      </ng-container>
    </div>

    <ng-template #customTemplate>
      <nb-chat-message-text [sender]="sender"
                            [date]="date"
                            [dateFormat]="dateFormat"
                            [message]="message">
      </nb-chat-message-text>
      <div [class.nb-custom-message]="_areDefaultStylesEnabled()"
           [class.nb-custom-message-no-space]="_addNoSpaceClass"
           [class.nb-custom-message-reply]="_addReplyClass"
           [class.nb-custom-message-not-reply]="_addNotReplyClass"
           [class.nb-custom-message-full-width]="!_areDefaultStylesEnabled()">
        <ng-container [ngTemplateOutlet]="_getTemplate()"
                      [ngTemplateOutletContext]="_getTemplateContext()">
        </ng-container>
      </div>
    </ng-template>
  `,
                animations: [
                    trigger('flyInOut', [
                        state('in', style({ transform: 'translateX(0)' })),
                        transition('void => *', [
                            style({ transform: 'translateX(-100%)' }),
                            animate(80),
                        ]),
                        transition('* => void', [
                            animate(80, style({ transform: 'translateX(100%)' })),
                        ]),
                    ]),
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: NbCustomMessageService }
];
NbChatMessageComponent.propDecorators = {
    flyInOut: [{ type: HostBinding, args: ['@flyInOut',] }],
    notReply: [{ type: HostBinding, args: ['class.not-reply',] }],
    reply: [{ type: Input }, { type: HostBinding, args: ['class.reply',] }],
    message: [{ type: Input }],
    sender: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }],
    files: [{ type: Input }],
    quote: [{ type: Input }],
    latitude: [{ type: Input }],
    longitude: [{ type: Input }],
    avatar: [{ type: Input }],
    type: [{ type: Input }],
    customMessageData: [{ type: Input }]
};
//# sourceMappingURL=chat-message.component.js.map