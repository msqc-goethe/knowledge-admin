import { Injectable, IterableDiffers } from '@angular/core';
import { merge, Subject } from 'rxjs';
export class NbColumnsService {
    constructor(differs) {
        this.differs = differs;
        this.columnHide$ = new Subject();
        this.columnShow$ = new Subject();
    }
    setColumns(columns) {
        if (!this.changesDiffer) {
            this.changesDiffer = this.differs.find(columns || []).create();
        }
        if (this.changesDiffer.diff(columns)) {
            this.allColumns = Array.from(columns);
            this.visibleColumns = Array.from(columns);
        }
    }
    getVisibleColumns() {
        return this.visibleColumns;
    }
    hideColumn(column) {
        const toRemove = this.visibleColumns.indexOf(column);
        if (toRemove > -1) {
            this.visibleColumns.splice(toRemove, 1);
            this.columnHide$.next();
        }
    }
    showColumn(column) {
        if (this.visibleColumns.includes(column)) {
            return;
        }
        this.visibleColumns.splice(this.findInsertIndex(column), 0, column);
        this.columnShow$.next();
    }
    onColumnsChange() {
        return merge(this.columnShow$, this.columnHide$);
    }
    findInsertIndex(column) {
        const initialIndex = this.allColumns.indexOf(column);
        if (initialIndex === 0 || !this.visibleColumns.length) {
            return 0;
        }
        if (initialIndex === this.allColumns.length - 1) {
            return this.visibleColumns.length;
        }
        const leftSiblingIndex = initialIndex - 1;
        for (let i = leftSiblingIndex; i >= 0; i--) {
            const leftSibling = this.allColumns[i];
            const index = this.visibleColumns.indexOf(leftSibling);
            if (index !== -1) {
                return index + 1;
            }
        }
        const rightSiblingIndex = initialIndex + 1;
        for (let i = rightSiblingIndex; i < this.allColumns.length; i++) {
            const rightSibling = this.allColumns[i];
            const index = this.visibleColumns.indexOf(rightSibling);
            if (index !== -1) {
                return index;
            }
        }
        throw new Error(`Can't restore column position.`);
    }
}
NbColumnsService.decorators = [
    { type: Injectable }
];
NbColumnsService.ctorParameters = () => [
    { type: IterableDiffers }
];
//# sourceMappingURL=tree-grid-columns.service.js.map