import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import * as ɵngcc0 from '@angular/core';
export declare class CheckboxFilterComponent extends DefaultFilter implements OnInit {
    filterActive: boolean;
    inputControl: FormControl;
    constructor();
    ngOnInit(): void;
    resetFilter(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CheckboxFilterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CheckboxFilterComponent, "checkbox-filter", never, {}, {}, never, never>;
}

//# sourceMappingURL=checkbox-filter.component.d.ts.map