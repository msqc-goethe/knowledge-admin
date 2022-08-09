import { NbTreeGridPresentationNode } from './tree-grid.model';
import * as ɵngcc0 from '@angular/core';
export interface NbToggleOptions {
    deep?: boolean;
}
export declare class NbTreeGridService<T> {
    expand(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    collapse(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    toggle(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    private find;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbTreeGridService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbTreeGridService<any>>;
}

//# sourceMappingURL=tree-grid.service.d.ts.map