import { OnChanges, SimpleChanges } from '@angular/core';
import { FilterDefault } from './filter-default';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class FilterComponent extends FilterDefault implements OnChanges {
    query: string;
    protected dataChangedSub: Subscription;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FilterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<FilterComponent, "ng2-smart-table-filter", never, {}, {}, never, never>;
}

//# sourceMappingURL=filter.component.d.ts.map