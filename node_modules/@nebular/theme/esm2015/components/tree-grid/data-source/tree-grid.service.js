/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
export class NbTreeGridService {
    expand(data, row, options = {}) {
        const node = this.find(data, row);
        node.expanded = true;
        if (options.deep && node.hasChildren()) {
            node.children.forEach((n) => this.expand(data, n.data, options));
        }
    }
    collapse(data, row, options = {}) {
        const node = this.find(data, row);
        node.expanded = false;
        if (options.deep && node.hasChildren()) {
            node.children.forEach((n) => this.collapse(data, n.data, options));
        }
    }
    toggle(data, row, options = {}) {
        const node = this.find(data, row);
        if (node.expanded) {
            this.collapse(data, row, options);
        }
        else {
            this.expand(data, row, options);
        }
    }
    find(data, row) {
        const toCheck = [...data];
        for (const node of toCheck) {
            if (node.data === row) {
                return node;
            }
            if (node.hasChildren()) {
                toCheck.push(...node.children);
            }
        }
    }
}
NbTreeGridService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=tree-grid.service.js.map