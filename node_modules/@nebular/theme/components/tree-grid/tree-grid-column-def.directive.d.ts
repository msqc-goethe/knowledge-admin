import { OnChanges } from '@angular/core';
import { NbColumnDefDirective } from '../cdk/table/cell';
/**
 * Column definition for the tree-grid.
 * Defines a set of cells available for a table column.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbTreeGridColumnDefDirective extends NbColumnDefDirective implements OnChanges {
    /**
     * Column name
     */
    get name(): string;
    set name(value: string);
    private hideOnValue;
    /**
     * Amount of pixels of viewport at which column should be hidden.
     * type number
     */
    get hideOn(): number | null;
    set hideOn(value: number | null);
    private showOnValue;
    /**
     * Amount of pixels of viewport at which column should be shown.
     * type number
     */
    get showOn(): number | null;
    set showOn(value: number | null);
    ngOnChanges(): void;
    shouldHide(width: number): boolean;
    shouldShow(width: number): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbTreeGridColumnDefDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<NbTreeGridColumnDefDirective, "[nbTreeGridColumnDef]", never, { "name": "nbTreeGridColumnDef"; "hideOn": "hideOn"; "showOn": "showOn"; }, {}, never>;
}

//# sourceMappingURL=tree-grid-column-def.directive.d.ts.map