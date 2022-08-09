import { NbSortRequest } from '../tree-grid-sort.component';
import { NbTreeGridPresentationNode } from './tree-grid.model';
/**
 * Service used to sort tree grid data. Uses Array.prototype.sort method.
 * If you need custom sorting, you can extend this service and override comparator or whole sort method.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbTreeGridSortService<T> {
    sort(request: NbSortRequest, data: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    protected comparator(request: NbSortRequest, na: NbTreeGridPresentationNode<T>, nb: NbTreeGridPresentationNode<T>): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbTreeGridSortService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbTreeGridSortService<any>>;
}

//# sourceMappingURL=tree-grid-sort.service.d.ts.map