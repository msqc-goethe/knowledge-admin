import { ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import { ViewCell } from './view-cell';
import * as ɵngcc0 from '@angular/core';
export declare class CustomViewComponent implements OnInit, OnDestroy {
    private resolver;
    customComponent: any;
    cell: Cell;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected createCustomComponent(): void;
    protected callOnComponentInit(): void;
    protected patchInstance(): void;
    protected getPatch(): ViewCell;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CustomViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CustomViewComponent, "custom-view-component", never, { "cell": "cell"; }, {}, never, never>;
}

//# sourceMappingURL=custom-view.component.d.ts.map