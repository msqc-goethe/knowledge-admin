/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NbAccordionItemComponent } from './accordion-item.component';
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbAccordionItemHeaderComponent implements OnInit, OnDestroy {
    private accordionItem;
    private cd;
    get isCollapsed(): boolean;
    get expanded(): boolean;
    get tabbable(): string;
    get disabled(): boolean;
    toggle(): void;
    get state(): string;
    private destroy$;
    constructor(accordionItem: NbAccordionItemComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbAccordionItemHeaderComponent, [{ host: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbAccordionItemHeaderComponent, "nb-accordion-item-header", never, {}, {}, never, ["nb-accordion-item-title", "nb-accordion-item-description", "*"]>;
}

//# sourceMappingURL=accordion-item-header.component.d.ts.map