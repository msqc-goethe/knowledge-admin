/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export class NbBaseCalendarRangeCell {
    get hasRange() {
        return !!(this.selectedValue && this.selectedValue.start && this.selectedValue.end);
    }
}
//# sourceMappingURL=base-calendar-range-cell.js.map