/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const NB_DEFAULT_ROW_LEVEL = 0;
/**
 * Implicit context of cells and rows
 */
export class NbTreeGridPresentationNode {
    constructor(
    /**
     * Data object associated with row
     */
    data, children, 
    /**
     * Row expand state
     */
    expanded, level) {
        this.data = data;
        this.children = children;
        this.expanded = expanded;
        this.level = level;
    }
    /**
     * True if row has child rows
     */
    hasChildren() {
        return !!this.children && !!this.children.length;
    }
}
//# sourceMappingURL=tree-grid.model.js.map