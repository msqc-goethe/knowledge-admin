import { Injectable } from '@angular/core';
/**
 * `NbCustomMessageService` is used to store instances of `NbChatCustomMessageDirective`s which
 * were provided in the chat component.
 */
export class NbCustomMessageService {
    constructor() {
        this.customMessages = new Map();
    }
    register(type, instance) {
        this.customMessages.set(type, instance);
    }
    unregister(type) {
        return this.customMessages.delete(type);
    }
    getInstance(type) {
        return this.customMessages.get(type);
    }
}
NbCustomMessageService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=custom-message.service.js.map