/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export interface NbChatMessageFileIconPreview {
    url: string;
    icon: string;
}
export interface NbChatMessageFileImagePreview {
    url: string;
    type: string;
}
export declare type NbChatMessageFile = NbChatMessageFileIconPreview | NbChatMessageFileImagePreview;
/**
 * Chat message component.
 */
export declare class NbChatMessageFileComponent {
    protected cd: ChangeDetectorRef;
    protected domSanitizer: DomSanitizer;
    readyFiles: any[];
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message send date format, default 'shortTime'
     * @type {string}
     */
    dateFormat: string;
    /**
     * Message file path
     * @type {Date}
     */
    set files(files: NbChatMessageFile[]);
    constructor(cd: ChangeDetectorRef, domSanitizer: DomSanitizer);
    isImage(file: NbChatMessageFile): boolean;
}
