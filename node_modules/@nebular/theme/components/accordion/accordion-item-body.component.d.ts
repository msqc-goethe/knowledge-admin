/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { NbAccordionItemComponent } from './accordion-item.component';
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbAccordionItemBodyComponent implements OnInit, OnDestroy {
    private accordionItem;
    private cd;
    private destroy$;
    constructor(accordionItem: NbAccordionItemComponent, cd: ChangeDetectorRef);
    get state(): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbAccordionItemBodyComponent, [{ host: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbAccordionItemBodyComponent, "nb-accordion-item-body", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=accordion-item-body.component.d.ts.map