/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Chat message component.
 */
export class NbChatMessageFileComponent {
    constructor(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
    }
    /**
     * Message file path
     * @type {Date}
     */
    set files(files) {
        this.readyFiles = (files || []).map((file) => {
            const isImage = this.isImage(file);
            return Object.assign(Object.assign({}, file), { urlStyle: isImage && this.domSanitizer.bypassSecurityTrustStyle(`url(${file.url})`), isImage: isImage });
        });
        this.cd.detectChanges();
    }
    isImage(file) {
        const type = file.type;
        if (type) {
            return ['image/png', 'image/jpeg', 'image/gif'].includes(type);
        }
        return false;
    }
}
NbChatMessageFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message-file',
                template: `
    <nb-chat-message-text [sender]="sender" [date]="date" [dateFormat]="dateFormat" [message]="message">
      {{ message }}
    </nb-chat-message-text>

    <ng-container *ngIf="readyFiles?.length > 1">
      <div class="message-content-group">
        <a *ngFor="let file of readyFiles" [href]="file.url" target="_blank">
          <nb-icon [icon]="file.icon" *ngIf="!file.urlStyle && file.icon"></nb-icon>
          <div *ngIf="file.urlStyle" [style.background-image]="file.urlStyle"></div>
        </a>
      </div>
    </ng-container>

    <ng-container *ngIf="readyFiles?.length === 1">
      <a [href]="readyFiles[0].url" target="_blank">
        <nb-icon [icon]="readyFiles[0].icon" *ngIf="!readyFiles[0].urlStyle && readyFiles[0].icon"></nb-icon>
        <div *ngIf="readyFiles[0].urlStyle" [style.background-image]="readyFiles[0].urlStyle"></div>
      </a>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageFileComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DomSanitizer }
];
NbChatMessageFileComponent.propDecorators = {
    message: [{ type: Input }],
    sender: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }],
    files: [{ type: Input }]
};
//# sourceMappingURL=chat-message-file.component.js.map