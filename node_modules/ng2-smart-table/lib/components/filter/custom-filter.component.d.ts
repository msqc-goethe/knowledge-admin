import { ComponentFactoryResolver, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FilterDefault } from './filter-default';
import * as ɵngcc0 from '@angular/core';
export declare class CustomFilterComponent extends FilterDefault implements OnChanges, OnDestroy {
    private resolver;
    query: string;
    customComponent: any;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CustomFilterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CustomFilterComponent, "custom-table-filter", never, { "query": "query"; }, {}, never, never>;
}

//# sourceMappingURL=custom-filter.component.d.ts.map