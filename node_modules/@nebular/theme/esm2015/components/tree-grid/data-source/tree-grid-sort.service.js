/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NbSortDirection } from '../tree-grid-sort.component';
/**
 * Service used to sort tree grid data. Uses Array.prototype.sort method.
 * If you need custom sorting, you can extend this service and override comparator or whole sort method.
 */
export class NbTreeGridSortService {
    sort(request, data) {
        if (!request) {
            return data;
        }
        const sorted = data.sort((na, nb) => this.comparator(request, na, nb));
        for (const node of data) {
            if (node.children) {
                node.children = this.sort(request, node.children);
            }
        }
        return sorted;
    }
    comparator(request, na, nb) {
        const key = request.column;
        const dir = request.direction;
        const a = na.data[key];
        const b = nb.data[key];
        let res = 0;
        if (a > b) {
            res = 1;
        }
        if (a < b) {
            res = -1;
        }
        return dir === NbSortDirection.ASCENDING ? res : res * -1;
    }
}
NbTreeGridSortService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=tree-grid-sort.service.js.map