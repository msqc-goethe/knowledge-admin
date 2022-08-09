import { ChangeDetectorRef, OnInit, TemplateRef, ViewContainerRef, NgZone } from "@angular/core";
import { CompleterItem } from "../components/completer-item";
import { CompleterData } from "../services/completer-data";
import { CompleterList, CtrCompleter } from "./ctr-completer";
import * as ɵngcc0 from '@angular/core';
export declare class CtrListContext {
    results: CompleterItem[] | null;
    searching: boolean;
    searchInitialized: boolean;
    isOpen: boolean;
    constructor(results: CompleterItem[] | null, searching: boolean, searchInitialized: boolean, isOpen: boolean);
}
export declare class CtrList implements OnInit, CompleterList {
    private completer;
    private templateRef;
    private viewContainer;
    private cd;
    private zone;
    ctrListMinSearchLength: number;
    ctrListPause: number;
    ctrListAutoMatch: boolean;
    ctrListAutoHighlight: boolean;
    ctrListDisplaySearching: boolean;
    private _dataService;
    private term;
    private searchTimer;
    private clearTimer;
    private ctx;
    private _initialValue;
    private viewRef;
    constructor(completer: CtrCompleter, templateRef: TemplateRef<CtrListContext>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef, zone: NgZone);
    ngOnInit(): void;
    set dataService(newService: CompleterData);
    set initialValue(value: any);
    search(term: string): void;
    clear(): void;
    open(): void;
    isOpen(open: boolean): void;
    private _clear;
    private searchTimerComplete;
    private refreshTemplate;
    private getBestMatchIndex;
    private dataServiceSubscribe;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CtrList, [{ host: true; }, null, null, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<CtrList, "[ctrList]", never, { "ctrListMinSearchLength": "ctrListMinSearchLength"; "ctrListPause": "ctrListPause"; "ctrListAutoMatch": "ctrListAutoMatch"; "ctrListAutoHighlight": "ctrListAutoHighlight"; "ctrListDisplaySearching": "ctrListDisplaySearching"; "dataService": "ctrList"; "initialValue": "ctrListInitialValue"; }, {}, never>;
}

//# sourceMappingURL=ctr-list.d.ts.map