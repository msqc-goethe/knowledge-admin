import { EventEmitter } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
import * as ɵngcc0 from '@angular/core';
export declare class FilterDefault {
    column: Column;
    source: DataSource;
    inputClass: string;
    filter: EventEmitter<any>;
    query: string;
    onFilter(query: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FilterDefault, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<FilterDefault, "ng-component", never, { "inputClass": "inputClass"; "column": "column"; "source": "source"; }, { "filter": "filter"; }, never, never>;
}

//# sourceMappingURL=filter-default.d.ts.map