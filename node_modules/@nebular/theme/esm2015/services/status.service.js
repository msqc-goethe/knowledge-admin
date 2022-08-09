/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
export class NbStatusService {
    constructor() {
        this.coreStatuses = ['basic', 'primary', 'info', 'warning', 'danger', 'control'];
    }
    isCoreStatus(status) {
        return this.coreStatuses.includes(status);
    }
    isCustomStatus(status) {
        if (this.isValidStatusString(status)) {
            return !this.isCoreStatus(status);
        }
        return false;
    }
    getStatusClass(status) {
        if (this.isValidStatusString(status)) {
            return `status-${status}`;
        }
        return undefined;
    }
    isValidStatusString(status) {
        return typeof status === 'string' && status.length > 0;
    }
}
NbStatusService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=status.service.js.map