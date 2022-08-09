import { EventEmitter } from "@angular/core";
import { CompleterItem } from "../components/completer-item";
import * as ɵngcc0 from '@angular/core';
export interface CompleterList {
    search(term: string): void;
    open(): void;
    isOpen(open: boolean): void;
    clear(): void;
}
export interface CompleterDropdown {
    clear(): void;
    selectCurrent(): void;
    nextRow(): void;
    prevRow(): void;
    highlightRow(index: number | null): void;
}
export declare class CtrCompleter {
    selected: EventEmitter<CompleterItem | null>;
    highlighted: EventEmitter<CompleterItem | null>;
    opened: EventEmitter<boolean>;
    dataSourceChange: EventEmitter<void>;
    private list;
    private dropdown;
    private _hasHighlighted;
    private _hasSelected;
    private _cancelBlur;
    private _isOpen;
    private _autoHighlightIndex;
    registerList(list: CompleterList): void;
    registerDropdown(dropdown: CompleterDropdown | null): void;
    onHighlighted(item: CompleterItem | null): void;
    onSelected(item: CompleterItem | null, clearList?: boolean): void;
    onDataSourceChange(): void;
    search(term: string): void;
    clear(): void;
    selectCurrent(): void;
    nextRow(): void;
    prevRow(): void;
    hasHighlighted(): boolean;
    cancelBlur(cancel: boolean): void;
    isCancelBlur(): boolean;
    open(): void;
    get isOpen(): boolean;
    set isOpen(open: boolean);
    get autoHighlightIndex(): number | null;
    set autoHighlightIndex(index: number | null);
    get hasSelected(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CtrCompleter, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<CtrCompleter, "[ctrCompleter]", never, {}, { "selected": "selected"; "highlighted": "highlighted"; "opened": "opened"; "dataSourceChange": "dataSourceChange"; }, never>;
}

//# sourceMappingURL=ctr-completer.d.ts.map