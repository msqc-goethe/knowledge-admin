/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NB_DEFAULT_ROW_LEVEL, NbTreeGridPresentationNode } from './tree-grid.model';
export class NbTreeGridDataService {
    constructor() {
        this.defaultGetters = {
            dataGetter: node => node.data,
            childrenGetter: d => d.children || undefined,
            expandedGetter: d => !!d.expanded,
        };
    }
    toPresentationNodes(nodes, customGetters, level = NB_DEFAULT_ROW_LEVEL) {
        const getters = Object.assign(Object.assign({}, this.defaultGetters), customGetters);
        return this.mapNodes(nodes, getters, level);
    }
    mapNodes(nodes, getters, level) {
        const { dataGetter, childrenGetter, expandedGetter } = getters;
        return nodes.map(node => {
            const childrenNodes = childrenGetter(node);
            let children;
            if (childrenNodes) {
                children = this.toPresentationNodes(childrenNodes, getters, level + 1);
            }
            return new NbTreeGridPresentationNode(dataGetter(node), children, expandedGetter(node), level);
        });
    }
    flattenExpanded(nodes) {
        return nodes.reduce((res, node) => {
            res.push(node);
            if (node.expanded && node.hasChildren()) {
                res.push(...this.flattenExpanded(node.children));
            }
            return res;
        }, []);
    }
    copy(nodes) {
        return nodes.map((node) => {
            let children;
            if (node.hasChildren()) {
                children = this.copy(node.children);
            }
            return new NbTreeGridPresentationNode(node.data, children, node.expanded, node.level);
        });
    }
}
NbTreeGridDataService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=tree-grid-data.service.js.map