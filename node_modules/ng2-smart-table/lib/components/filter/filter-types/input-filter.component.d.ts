import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import * as ɵngcc0 from '@angular/core';
export declare class InputFilterComponent extends DefaultFilter implements OnInit, OnChanges {
    inputControl: FormControl;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<InputFilterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<InputFilterComponent, "input-filter", never, {}, {}, never, never>;
}

//# sourceMappingURL=input-filter.component.d.ts.map