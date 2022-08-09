import { EventEmitter, AfterViewInit, ElementRef, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as ɵngcc0 from '@angular/core';
export declare class AddButtonComponent implements AfterViewInit, OnChanges {
    private ref;
    grid: Grid;
    source: DataSource;
    create: EventEmitter<any>;
    isActionAdd: boolean;
    addNewButtonContent: string;
    constructor(ref: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    onAdd(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AddButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<AddButtonComponent, "[ng2-st-add-button]", never, { "grid": "grid"; "source": "source"; }, { "create": "create"; }, never, never>;
}

//# sourceMappingURL=add-button.component.d.ts.map