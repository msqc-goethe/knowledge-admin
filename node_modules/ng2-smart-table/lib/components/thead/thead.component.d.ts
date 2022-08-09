import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import * as ɵngcc0 from '@angular/core';
export declare class Ng2SmartTableTheadComponent implements OnChanges {
    grid: Grid;
    source: DataSource;
    isAllSelected: boolean;
    createConfirm: EventEmitter<any>;
    sort: EventEmitter<any>;
    selectAllRows: EventEmitter<any>;
    create: EventEmitter<any>;
    filter: EventEmitter<any>;
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<Ng2SmartTableTheadComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<Ng2SmartTableTheadComponent, "[ng2-st-thead]", never, { "grid": "grid"; "source": "source"; "isAllSelected": "isAllSelected"; "createConfirm": "createConfirm"; }, { "sort": "sort"; "selectAllRows": "selectAllRows"; "create": "create"; "filter": "filter"; }, never, never>;
}

//# sourceMappingURL=thead.component.d.ts.map