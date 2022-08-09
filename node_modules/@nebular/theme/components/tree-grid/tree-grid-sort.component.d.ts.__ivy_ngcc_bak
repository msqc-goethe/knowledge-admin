import { EventEmitter, TemplateRef } from '@angular/core';
import { NbBooleanInput, NbNullableInput } from '../helpers';
/** Column definition associated with a `NbSortHeaderDirective`. */
interface NbSortHeaderColumnDef {
    name: string;
}
export interface NbSortRequest {
    column: string;
    direction: NbSortDirection;
}
export interface NbSortable {
    sort(sortRequest: NbSortRequest): any;
}
export declare type NbSortDirectionValues = 'asc' | 'desc' | '';
export declare enum NbSortDirection {
    ASCENDING = "asc",
    DESCENDING = "desc",
    NONE = ""
}
/**
 * Directive triggers sort method of passed object when sort header changes direction
 */
export declare class NbSortDirective {
    sortable: NbSortable;
    static ngAcceptInputType_sortable: NbSortable | NbNullableInput;
    sort: EventEmitter<NbSortRequest>;
    emitSort(sortRequest: NbSortRequest): void;
}
export interface NbSortHeaderIconDirectiveContext {
    $implicit: NbSortDirection;
    isAscending: boolean;
    isDescending: boolean;
    isNone: boolean;
}
/**
 * Directive for headers sort icons. Mark you icon implementation with this structural directive and
 * it'll set template's implicit context with current direction. Context also has `isAscending`,
 * `isDescending` and `isNone` properties.
 */
export declare class NbSortHeaderIconDirective {
}
export declare class NbSortIconComponent {
    direction: NbSortDirection;
    isAscending(): boolean;
    isDescending(): boolean;
    isDirectionSet(): boolean;
}
/**
 * Marks header as sort header so it emitting sort event when clicked.
 */
export declare class NbSortHeaderComponent {
    private sort;
    private columnDef;
    sortIcon: TemplateRef<NbSortHeaderIconDirectiveContext>;
    /**
     * Current sort direction. Possible values: `asc`, `desc`, ``(none)
     * @type {NbSortDirection}
     */
    direction: NbSortDirection;
    static ngAcceptInputType_direction: NbSortDirectionValues;
    private disabledValue;
    /**
     * Disable sort header
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    sortIfEnabled(): void;
    constructor(sort: NbSortDirective, columnDef: NbSortHeaderColumnDef);
    isAscending(): boolean;
    isDescending(): boolean;
    sortData(): void;
    getIconContext(): NbSortHeaderIconDirectiveContext;
    getDisabledAttributeValue(): '' | null;
    private createSortRequest;
    private getNextDirection;
}
export {};
