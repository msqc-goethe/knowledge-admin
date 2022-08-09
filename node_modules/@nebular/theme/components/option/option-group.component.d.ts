import { AfterContentInit, OnDestroy, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import { NbOptionComponent } from './option.component';
/**
 * NbOptionGroupComponent
 *
 * @styles
 *
 * option-group-text-color:
 * option-group-tiny-start-padding:
 * option-group-small-start-padding:
 * option-group-medium-start-padding:
 * option-group-large-start-padding:
 * option-group-giant-start-padding:
 **/
import * as ɵngcc0 from '@angular/core';
export declare class NbOptionGroupComponent implements AfterContentInit, OnDestroy {
    protected destroy$: Subject<void>;
    title: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    get disabledAttribute(): '' | null;
    options: QueryList<NbOptionComponent<any>>;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Sets disabled state for each option to current group disabled state.
     */
    protected updateOptionsDisabledState(): void;
    /**
     * Updates options disabled state after promise resolution.
     * This way change detection will be triggered after options state updated.
     * Use this method when updating options during change detection run (e.g. QueryList.changes, lifecycle hooks).
     */
    protected asyncUpdateOptionsDisabledState(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbOptionGroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbOptionGroupComponent, "nb-option-group", never, { "disabled": "disabled"; "title": "title"; }, {}, ["options"], ["nb-option, ng-container"]>;
}

//# sourceMappingURL=option-group.component.d.ts.map