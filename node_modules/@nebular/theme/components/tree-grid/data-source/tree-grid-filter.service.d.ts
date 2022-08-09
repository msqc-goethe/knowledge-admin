import { NbTreeGridPresentationNode } from './tree-grid.model';
/**
 * Service used to filter tree grid data. Searched searchString in all object values.
 * If you need custom filter, you can extend this service and override filterPredicate or whole filter method.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbTreeGridFilterService<T> {
    filter(query: string, data: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    protected filterPredicate(data: T, searchQuery: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbTreeGridFilterService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbTreeGridFilterService<any>>;
}

//# sourceMappingURL=tree-grid-filter.service.d.ts.map