import { AfterViewInit, ElementRef, OnDestroy, NgZone } from "@angular/core";
import { CompleterItem } from "../components/completer-item";
import { CtrCompleter, CompleterDropdown } from "./ctr-completer";
import * as ɵngcc0 from '@angular/core';
export interface CtrRowElement {
    setHighlighted(selected: boolean): void;
    getNativeElement(): any;
    getDataItem(): CompleterItem | null;
}
export declare class CtrRowItem {
    row: CtrRowElement;
    index: number;
    constructor(row: CtrRowElement, index: number);
}
export declare class CtrDropdown implements CompleterDropdown, OnDestroy, AfterViewInit {
    private completer;
    private el;
    private zone;
    private rows;
    private currHighlighted;
    private isScrollOn;
    private _rowMouseDown;
    constructor(completer: CtrCompleter, el: ElementRef, zone: NgZone);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onMouseDown(event: any): void;
    registerRow(row: CtrRowItem): void;
    unregisterRow(rowIndex: number): void;
    highlightRow(index: number | null): void;
    clear(): void;
    onSelected(item: CompleterItem | null): void;
    rowMouseDown(): void;
    selectCurrent(): void;
    nextRow(): void;
    prevRow(): void;
    private dropdownScrollTopTo;
    private dropdownRowTop;
    private dropdownHeight;
    private dropdownRowOffsetHeight;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CtrDropdown, [{ host: true; }, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<CtrDropdown, "[ctrDropdown]", never, {}, {}, never>;
}

//# sourceMappingURL=ctr-dropdown.d.ts.map