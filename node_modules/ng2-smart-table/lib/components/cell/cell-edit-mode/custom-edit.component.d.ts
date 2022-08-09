import { ComponentFactoryResolver, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
import * as ɵngcc0 from '@angular/core';
export declare class CustomEditComponent extends EditCellDefault implements OnChanges, OnDestroy {
    private resolver;
    customComponent: any;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CustomEditComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CustomEditComponent, "table-cell-custom-editor", never, {}, {}, never, never>;
}

//# sourceMappingURL=custom-edit.component.d.ts.map