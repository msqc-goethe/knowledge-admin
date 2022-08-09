import { ElementRef, EventEmitter } from "@angular/core";
import { NgModel } from "@angular/forms";
import { CtrCompleter } from "./ctr-completer";
import * as ɵngcc0 from '@angular/core';
export declare class CtrInput {
    private completer;
    private ngModel;
    private el;
    clearSelected: boolean;
    clearUnselected: boolean;
    overrideSuggested: boolean;
    fillHighlighted: boolean;
    openOnFocus: boolean;
    openOnClick: boolean;
    selectOnClick: boolean;
    selectOnFocus: boolean;
    ngModelChange: EventEmitter<any>;
    private _searchStr;
    private _displayStr;
    private blurTimer;
    constructor(completer: CtrCompleter, ngModel: NgModel, el: ElementRef);
    keyupHandler(event: any): void;
    pasteHandler(event: any): void;
    keydownHandler(event: any): void;
    onBlur(event: any): void;
    onfocus(): void;
    onClick(event: any): void;
    get searchStr(): string;
    set searchStr(term: string);
    private handleSelection;
    private restoreSearchValue;
    private doBlur;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CtrInput, [{ host: true; }, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<CtrInput, "[ctrInput]", never, { "clearSelected": "clearSelected"; "clearUnselected": "clearUnselected"; "overrideSuggested": "overrideSuggested"; "fillHighlighted": "fillHighlighted"; "openOnFocus": "openOnFocus"; "openOnClick": "openOnClick"; "selectOnClick": "selectOnClick"; "selectOnFocus": "selectOnFocus"; }, { "ngModelChange": "ngModelChange"; }, never>;
}

//# sourceMappingURL=ctr-input.d.ts.map