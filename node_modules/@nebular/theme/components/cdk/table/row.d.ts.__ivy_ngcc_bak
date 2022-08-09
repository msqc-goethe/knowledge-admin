import { CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkCellOutlet, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet } from '@angular/cdk/table';
export declare class NbDataRowOutletDirective extends DataRowOutlet {
}
export declare class NbHeaderRowOutletDirective extends HeaderRowOutlet {
}
export declare class NbFooterRowOutletDirective extends FooterRowOutlet {
}
export declare class NbNoDataRowOutletDirective extends NoDataRowOutlet {
}
export declare class NbCellOutletDirective extends CdkCellOutlet {
}
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export declare class NbHeaderRowDefDirective extends CdkHeaderRowDef {
    columns: Iterable<string>;
    sticky: boolean;
}
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export declare class NbFooterRowDefDirective extends CdkFooterRowDef {
    columns: Iterable<string>;
    sticky: boolean;
}
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export declare class NbRowDefDirective<T> extends CdkRowDef<T> {
    columns: Iterable<string>;
    when: (index: number, rowData: T) => boolean;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class NbHeaderRowComponent extends CdkHeaderRow {
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class NbFooterRowComponent extends CdkFooterRow {
}
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export declare class NbRowComponent extends CdkRow {
}
