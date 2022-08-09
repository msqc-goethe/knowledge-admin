import { Component, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { NbCdkFooterRow, NbCdkHeaderRow, NbCdkRow } from '../cdk/table/type-mappings';
import { NbFooterRowComponent, NbHeaderRowComponent, NbRowComponent } from '../cdk/table/row';
import { NB_TREE_GRID } from './tree-grid-injection-tokens';
export const NB_ROW_DOUBLE_CLICK_DELAY = 200;
/**
 * Cells container. Adds the right class and role.
 */
export class NbTreeGridRowComponent extends NbRowComponent {
    constructor(tree, elementRef) {
        super();
        this.elementRef = elementRef;
        this.doubleClick$ = new Subject();
        /**
         * Time to wait for second click to expand row deeply.
         * 200ms by default.
         */
        this.doubleClickDelay = NB_ROW_DOUBLE_CLICK_DELAY;
        /**
         * Toggle row on click. Enabled by default.
         */
        this.clickToToggle = true;
        this.tree = tree;
    }
    toggleIfEnabledNode() {
        if (!this.clickToToggle) {
            return;
        }
        timer(NB_ROW_DOUBLE_CLICK_DELAY)
            .pipe(take(1), takeUntil(this.doubleClick$))
            .subscribe(() => this.tree.toggleRow(this));
    }
    toggleIfEnabledNodeDeep() {
        if (!this.clickToToggle) {
            return;
        }
        this.doubleClick$.next();
        this.tree.toggleRow(this, { deep: true });
    }
    ngOnDestroy() {
        this.doubleClick$.complete();
    }
}
NbTreeGridRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[nbTreeGridRow]',
                template: `<ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-tree-grid-row',
                    'role': 'row',
                },
                providers: [{ provide: NbCdkRow, useExisting: NbTreeGridRowComponent }]
            },] }
];
NbTreeGridRowComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_TREE_GRID,] }] },
    { type: ElementRef }
];
NbTreeGridRowComponent.propDecorators = {
    doubleClickDelay: [{ type: Input }],
    clickToToggle: [{ type: Input }],
    toggleIfEnabledNode: [{ type: HostListener, args: ['click',] }],
    toggleIfEnabledNodeDeep: [{ type: HostListener, args: ['dblclick',] }]
};
export class NbTreeGridHeaderRowComponent extends NbHeaderRowComponent {
}
NbTreeGridHeaderRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[nbTreeGridHeaderRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-tree-grid-header-row',
                    'role': 'row',
                },
                providers: [{ provide: NbCdkHeaderRow, useExisting: NbTreeGridHeaderRowComponent }]
            },] }
];
export class NbTreeGridFooterRowComponent extends NbFooterRowComponent {
}
NbTreeGridFooterRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[nbTreeGridFooterRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-tree-grid-footer-row',
                    'role': 'row',
                },
                providers: [{ provide: NbCdkFooterRow, useExisting: NbTreeGridFooterRowComponent }]
            },] }
];
//# sourceMappingURL=tree-grid-row.component.js.map