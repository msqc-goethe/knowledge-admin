import { NbGetters, NbTreeGridPresentationNode } from './tree-grid.model';
import * as ɵngcc0 from '@angular/core';
export declare class NbTreeGridDataService<T> {
    private defaultGetters;
    toPresentationNodes<N>(nodes: N[], customGetters?: NbGetters<N, T>, level?: number): NbTreeGridPresentationNode<T>[];
    private mapNodes;
    flattenExpanded(nodes: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    copy(nodes: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbTreeGridDataService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbTreeGridDataService<any>>;
}

//# sourceMappingURL=tree-grid-data.service.d.ts.map