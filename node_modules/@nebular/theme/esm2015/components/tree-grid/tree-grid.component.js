/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Attribute, ChangeDetectorRef, Component, ElementRef, HostBinding, Inject, Input, IterableDiffers, Optional, SkipSelf, } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NB_DOCUMENT, NB_WINDOW } from '../../theme.options';
import { NbPlatform } from '../cdk/platform/platform-service';
import { NbDirectionality } from '../cdk/bidi/bidi-service';
import { NB_TABLE_TEMPLATE, NbTable, NB_TABLE_PROVIDERS, NB_COALESCED_STYLE_SCHEDULER, NB_VIEW_REPEATER_STRATEGY, } from '../cdk/table/table.module';
import { NB_STICKY_POSITIONING_LISTENER } from '../cdk/table/type-mappings';
import { NbViewportRulerAdapter } from '../cdk/adapter/viewport-ruler-adapter';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from './data-source/tree-grid-data-source';
import { NB_DEFAULT_ROW_LEVEL } from './data-source/tree-grid.model';
import { NB_TREE_GRID } from './tree-grid-injection-tokens';
import { convertToBoolProperty } from '../helpers';
import { NbColumnsService } from './tree-grid-columns.service';
/**
 * Tree grid component that can be used to display nested rows of data.
 * Supports filtering and sorting.
 * @stacked-example(Showcase, tree-grid/tree-grid-showcase.component)
 *
 * ### Installation
 *
 * Import `NbTreeGridModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTreeGridModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * As the most basic usage you need to define [nbTreeGridRowDef](docs/components/treegrid/api#nbtreegridrowdefdirective)
 * where you should pass columns to display in rows and
 * [nbTreeGridColumnDef](docs/components/treegrid/api#nbtreegridcolumndefdirective) - component containing cell
 * definitions for each column passed to row definition.
 * @stacked-example(Basic, tree-grid/tree-grid-basic.component)
 *
 * `NbTreeGridComponent`'s source input and `NbTreeGridDataSourceBuilder.create` expecting data to be an array of
 * objects with `data`, `children` and `expanded` properties. If your data doesn't match this interface, you can pass
 * getter functions for each property as arguments to `NbTreeGridDataSourceBuilder.create` method.
 * @stacked-example(Custom node structure, tree-grid/tree-grid-custom-node-structure.component)
 *
 * To use sorting you can add `nbSort` directive to table and subscribe to `sort` method. When user click on header,
 * sort event will be emitted. Event object contain clicked column name and desired sort direction.
 * @stacked-example(Sortable, tree-grid/tree-grid-sortable.component)
 *
 * You can use `Data Source Builder` to create `NbTreeGridDataSource` which would have toggle, sort and
 * filter methods. Then you can call this methods to change sort or toggle rows programmatically. Also `nbSort` and
 * `nbFilterInput` directives both support `NbTreeGridDataSource`, so you can pass it directly as an input and
 * directives will trigger sort, toggle themselves.
 * @stacked-example(Data Source Builder, tree-grid/tree-grid-showcase.component)
 *
 * You can create responsive grid by setting `hideOn` and `showOn` inputs of
 * [nbTreeGridColumnDef](docs/components/tree-grid/api#nbtreegridcolumndefdirective) directive.
 * When viewport reaches specified width grid hides or shows columns.
 * @stacked-example(Responsive columns, tree-grid/tree-grid-responsive.component)
 *
 * To customize sort or row toggle icons you can use `nbSortHeaderIcon` and `nbTreeGridRowToggle` directives
 * respectively. `nbSortHeaderIcon` is a structural directive and it's implicit context set to current direction.
 * Also context has three properties: `isAscending`, `isDescending` and `isNone`.
 * @stacked-example(Custom icons, tree-grid/tree-grid-custom-icons.component)
 *
 * By default, row to toggle happens when user clicks anywhere in the row. Also double click expands row deeply.
 * To disable this you can set `[clickToToggle]="false"` input of `nbTreeGridRow`.
 * @stacked-example(Disable click toggle, tree-grid/tree-grid-disable-click-toggle.component)
 *
 * @styles
 *
 * tree-grid-cell-border-width:
 * tree-grid-cell-border-style:
 * tree-grid-cell-border-color:
 * tree-grid-row-min-height:
 * tree-grid-cell-padding:
 * tree-grid-header-background-color:
 * tree-grid-header-text-color:
 * tree-grid-header-text-font-family:
 * tree-grid-header-text-font-size:
 * tree-grid-header-text-font-weight:
 * tree-grid-header-text-line-height:
 * tree-grid-footer-background-color:
 * tree-grid-footer-text-color:
 * tree-grid-footer-text-font-family:
 * tree-grid-footer-text-font-size:
 * tree-grid-footer-text-font-weight:
 * tree-grid-footer-text-line-height:
 * tree-grid-row-background-color:
 * tree-grid-row-even-background-color:
 * tree-grid-row-hover-background-color:
 * tree-grid-row-text-color:
 * tree-grid-row-text-font-family:
 * tree-grid-row-text-font-size:
 * tree-grid-row-text-font-weight:
 * tree-grid-row-text-line-height:
 * tree-grid-sort-header-button-background-color:
 * tree-grid-sort-header-button-border:
 * tree-grid-sort-header-button-padding:
 */
export class NbTreeGridComponent extends NbTable {
    constructor(dataSourceBuilder, differs, changeDetectorRef, elementRef, role, dir, document, platform, window, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener) {
        super(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener);
        this.dataSourceBuilder = dataSourceBuilder;
        this.window = window;
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
        this.destroy$ = new Subject();
        this.levelPadding = '';
        this.equalColumnsWidthValue = false;
        this.treeClass = true;
        this.platform = platform;
    }
    /**
     * The table's data
     * @param data
     * @type {<T>[] | NbTreeGridDataSource}
     */
    set source(data) {
        if (!data) {
            return;
        }
        if (data instanceof NbTreeGridDataSource) {
            this._source = data;
        }
        else {
            this._source = this.dataSourceBuilder.create(data);
        }
        this.dataSource = this._source;
    }
    /**
     * Make all columns equal width. False by default.
     */
    set equalColumnsWidth(value) {
        this.equalColumnsWidthValue = convertToBoolProperty(value);
    }
    get equalColumnsWidth() {
        return this.equalColumnsWidthValue;
    }
    ngAfterViewInit() {
        this.checkDefsCount();
        const rowsChange$ = merge(this._contentRowDefs.changes, this._contentHeaderRowDefs.changes, this._contentFooterRowDefs.changes);
        rowsChange$.pipe(takeUntil(this.destroy$))
            .subscribe(() => this.checkDefsCount());
        if (this.platform.isBrowser) {
            this.updateVisibleColumns();
            const windowResize$ = fromEvent(this.window, 'resize').pipe(debounceTime(50));
            merge(rowsChange$, this._contentColumnDefs.changes, windowResize$)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.updateVisibleColumns());
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleRow(row, options) {
        const context = this.getRowContext(row);
        this._source.toggle(context.$implicit.data, options);
    }
    toggleCellRow(cell) {
        const context = this.getCellContext(cell);
        this._source.toggle(context.$implicit.data);
    }
    getColumnWidth() {
        if (this.equalColumnsWidth) {
            return `${100 / this.getColumnsCount()}%`;
        }
        return '';
    }
    getCellLevel(cell, columnName) {
        if (this.isFirstColumn(columnName)) {
            return this.getCellContext(cell).$implicit.level;
        }
        return NB_DEFAULT_ROW_LEVEL;
    }
    getRowContext(row) {
        return this.getContextByRowEl(row.elementRef.nativeElement);
    }
    getCellContext(cell) {
        return this.getContextByCellEl(cell.elementRef.nativeElement);
    }
    getContextByCellEl(cellEl) {
        return this.getContextByRowEl(cellEl.parentElement);
    }
    getContextByRowEl(rowEl) {
        const rowsContainer = this._rowOutlet.viewContainer;
        for (let i = 0; i < rowsContainer.length; i++) {
            const rowViewRef = rowsContainer.get(i);
            if (rowViewRef.rootNodes.includes(rowEl)) {
                return rowViewRef.context;
            }
        }
    }
    getColumns() {
        let rowDef;
        if (this._contentHeaderRowDefs.length) {
            rowDef = this._contentHeaderRowDefs.first;
        }
        else {
            rowDef = this._contentRowDefs.first;
        }
        return Array.from(rowDef.getVisibleColumns() || []);
    }
    getColumnsCount() {
        return this.getColumns().length;
    }
    isFirstColumn(columnName) {
        return this.getColumns()[0] === columnName;
    }
    checkDefsCount() {
        if (this._contentRowDefs.length > 1) {
            throw new Error(`Found multiple row definitions`);
        }
        if (this._contentHeaderRowDefs.length > 1) {
            throw new Error(`Found multiple header row definitions`);
        }
        if (this._contentFooterRowDefs.length > 1) {
            throw new Error(`Found multiple footer row definitions`);
        }
    }
    updateVisibleColumns() {
        const width = this.window.innerWidth;
        const columnDefs = this._contentColumnDefs;
        const columnsToHide = columnDefs
            .filter((col) => col.shouldHide(width))
            .map(col => col.name);
        const columnsToShow = columnDefs
            .filter((col) => col.shouldShow(width))
            .map(col => col.name);
        if (!columnsToHide.length && !columnsToShow.length) {
            return;
        }
        const rowDefs = [
            this._contentHeaderRowDefs.first,
            this._contentRowDefs.first,
            this._contentFooterRowDefs.first,
        ].filter(d => !!d);
        for (const rowDef of rowDefs) {
            for (const column of columnsToHide) {
                rowDef.hideColumn(column);
            }
            for (const column of columnsToShow) {
                rowDef.showColumn(column);
            }
        }
    }
}
NbTreeGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'table[nbTreeGrid]',
                template: NB_TABLE_TEMPLATE,
                providers: [
                    { provide: NB_TREE_GRID, useExisting: NbTreeGridComponent },
                    NbColumnsService,
                    ...NB_TABLE_PROVIDERS,
                ],
                styles: [":host{table-layout:fixed;border-spacing:0;border-collapse:collapse;width:100%;max-width:100%;overflow:auto}::ng-deep .nb-tree-grid-cell,::ng-deep .nb-tree-grid-header-cell,::ng-deep .nb-tree-grid-footer-cell{overflow:hidden}\n"]
            },] }
];
NbTreeGridComponent.ctorParameters = () => [
    { type: NbTreeGridDataSourceBuilder },
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: NbDirectionality },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPlatform },
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_VIEW_REPEATER_STRATEGY,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_COALESCED_STYLE_SCHEDULER,] }] },
    { type: NbViewportRulerAdapter },
    { type: undefined, decorators: [{ type: Optional }, { type: SkipSelf }, { type: Inject, args: [NB_STICKY_POSITIONING_LISTENER,] }] }
];
NbTreeGridComponent.propDecorators = {
    source: [{ type: Input, args: ['nbTreeGrid',] }],
    levelPadding: [{ type: Input }],
    equalColumnsWidth: [{ type: Input }],
    treeClass: [{ type: HostBinding, args: ['class.nb-tree-grid',] }]
};
//# sourceMappingURL=tree-grid.component.js.map