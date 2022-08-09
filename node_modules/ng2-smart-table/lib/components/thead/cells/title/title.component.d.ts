import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
import * as ɵngcc0 from '@angular/core';
export declare class TitleComponent implements OnChanges {
    currentDirection: string;
    column: Column;
    source: DataSource;
    sort: EventEmitter<any>;
    protected dataChangedSub: Subscription;
    ngOnChanges(changes: SimpleChanges): void;
    _sort(event: any): void;
    changeSortDirection(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TitleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TitleComponent, "ng2-smart-table-title", never, { "column": "column"; "source": "source"; }, { "sort": "sort"; }, never, never>;
}

//# sourceMappingURL=title.component.d.ts.map