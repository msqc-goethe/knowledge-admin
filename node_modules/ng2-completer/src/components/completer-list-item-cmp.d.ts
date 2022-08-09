import { OnInit } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export interface MatchPart {
    isMatch: boolean;
    text: string;
}
export declare class CompleterListItemCmp implements OnInit {
    text: string;
    searchStr: string;
    matchClass: string;
    type: string;
    parts: MatchPart[];
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CompleterListItemCmp, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CompleterListItemCmp, "completer-list-item", never, { "text": "text"; "searchStr": "searchStr"; "matchClass": "matchClass"; "type": "type"; }, {}, never, never>;
}

//# sourceMappingURL=completer-list-item-cmp.d.ts.map