/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Inject, PLATFORM_ID, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NB_WINDOW } from '../../theme.options';
import { NbCellDirective, NbFooterCellDirective, NbHeaderCellDirective } from '../cdk/table/cell';
import { NbCdkCell, NbCdkFooterCell, NbCdkHeaderCell } from '../cdk/table/type-mappings';
import { NB_TREE_GRID } from './tree-grid-injection-tokens';
import { NbTreeGridColumnDefDirective } from './tree-grid-column-def.directive';
import { NB_DEFAULT_ROW_LEVEL } from './data-source/tree-grid.model';
import { NbColumnsService } from './tree-grid-columns.service';
export class NbTreeGridCellDirective extends NbCellDirective {
    constructor(columnDef, elementRef, tree, platformId, window, sanitizer, directionService, columnService, cd) {
        super(columnDef, elementRef);
        this.platformId = platformId;
        this.window = window;
        this.sanitizer = sanitizer;
        this.directionService = directionService;
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.initialLeftPadding = '';
        this.initialRightPadding = '';
        this.tree = tree;
        this.columnDef = columnDef;
        this.elementRef = elementRef;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        if (this.latestWidth) {
            return this.latestWidth;
        }
        return null;
    }
    get leftPadding() {
        if (this.directionService.isLtr()) {
            return this.getStartPadding();
        }
        return null;
    }
    get rightPadding() {
        if (this.directionService.isRtl()) {
            return this.getStartPadding();
        }
        return null;
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            const style = this.window.getComputedStyle(this.elementRef.nativeElement);
            this.initialLeftPadding = style.paddingLeft;
            this.initialRightPadding = style.paddingRight;
        }
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleRow() {
        this.tree.toggleCellRow(this);
    }
    get initialStartPadding() {
        return this.directionService.isLtr()
            ? this.initialLeftPadding
            : this.initialRightPadding;
    }
    getStartPadding() {
        const rowLevel = this.tree.getCellLevel(this, this.columnDef.name);
        if (rowLevel === NB_DEFAULT_ROW_LEVEL) {
            return null;
        }
        const nestingLevel = rowLevel + 1;
        let padding = '';
        if (this.tree.levelPadding) {
            padding = `calc(${this.tree.levelPadding} * ${nestingLevel})`;
        }
        else if (this.initialStartPadding) {
            padding = `calc(${this.initialStartPadding} * ${nestingLevel})`;
        }
        if (!padding) {
            return null;
        }
        return this.sanitizer.bypassSecurityTrustStyle(padding);
    }
}
NbTreeGridCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td[nbTreeGridCell]',
                host: {
                    'class': 'nb-tree-grid-cell',
                    'role': 'gridcell',
                },
                providers: [{ provide: NbCdkCell, useExisting: NbTreeGridCellDirective }],
            },] }
];
NbTreeGridCellDirective.ctorParameters = () => [
    { type: NbTreeGridColumnDefDirective },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NB_TREE_GRID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] },
    { type: DomSanitizer },
    { type: NbLayoutDirectionService },
    { type: NbColumnsService },
    { type: ChangeDetectorRef }
];
NbTreeGridCellDirective.propDecorators = {
    columnWidth: [{ type: HostBinding, args: ['style.width',] }],
    leftPadding: [{ type: HostBinding, args: ['style.padding-left',] }],
    rightPadding: [{ type: HostBinding, args: ['style.padding-right',] }]
};
export class NbTreeGridHeaderCellDirective extends NbHeaderCellDirective {
    constructor(columnDef, elementRef, tree, columnService, cd) {
        super(columnDef, elementRef);
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.tree = tree;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        return this.latestWidth || null;
    }
    ngOnInit() {
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTreeGridHeaderCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'th[nbTreeGridHeaderCell]',
                host: {
                    'class': 'nb-tree-grid-header-cell',
                    'role': 'columnheader',
                },
                providers: [{ provide: NbCdkHeaderCell, useExisting: NbTreeGridHeaderCellDirective }],
            },] }
];
NbTreeGridHeaderCellDirective.ctorParameters = () => [
    { type: NbTreeGridColumnDefDirective },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NB_TREE_GRID,] }] },
    { type: NbColumnsService },
    { type: ChangeDetectorRef }
];
NbTreeGridHeaderCellDirective.propDecorators = {
    columnWidth: [{ type: HostBinding, args: ['style.width',] }]
};
export class NbTreeGridFooterCellDirective extends NbFooterCellDirective {
    constructor(columnDef, elementRef, tree, columnService, cd) {
        super(columnDef, elementRef);
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.tree = tree;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        return this.latestWidth || null;
    }
    ngOnInit() {
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTreeGridFooterCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td[nbTreeGridFooterCell]',
                host: {
                    'class': 'nb-tree-grid-footer-cell',
                    'role': 'gridcell',
                },
                providers: [{ provide: NbCdkFooterCell, useExisting: NbTreeGridFooterCellDirective }],
            },] }
];
NbTreeGridFooterCellDirective.ctorParameters = () => [
    { type: NbTreeGridColumnDefDirective },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NB_TREE_GRID,] }] },
    { type: NbColumnsService },
    { type: ChangeDetectorRef }
];
NbTreeGridFooterCellDirective.propDecorators = {
    columnWidth: [{ type: HostBinding, args: ['style.width',] }]
};
//# sourceMappingURL=tree-grid-cell.component.js.map