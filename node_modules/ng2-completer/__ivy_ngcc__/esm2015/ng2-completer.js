/**
 * @license ng2-completer
 * MIT license
 */
import { EventEmitter, Injectable, Output, Directive, HostListener, Host, ElementRef, NgZone, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef, Renderer2, Component, forwardRef, ViewChild, NgModule } from '@angular/core';
import { Subject, Observable, timer } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { __decorate, __metadata, __param } from 'tslib';
import { HttpClient } from '@angular/common/http';
import { NgModel, NG_VALUE_ACCESSOR, FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from '@angular/common';

function CompleterListItemCmp_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const part_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", part_r1.isMatch ? ctx_r0.matchClass : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(part_r1.text);
} }
const _c0 = function (a0, a1) { return { "completer-title": a0, "completer-description": a1 }; };
const _c1 = ["ctrInput"];
function CompleterCmp_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7._textSearching);
} }
function CompleterCmp_div_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8._textNoResults);
} }
function CompleterCmp_div_3_div_1_div_3_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 21);
} if (rf & 2) {
    const item_r10 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("src", item_r10.image, ɵngcc0.ɵɵsanitizeUrl);
} }
function CompleterCmp_div_3_div_1_div_3_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 22);
} }
function CompleterCmp_div_3_div_1_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵtemplate(1, CompleterCmp_div_3_div_1_div_3_div_2_img_1_Template, 1, 1, "img", 19);
    ɵngcc0.ɵɵtemplate(2, CompleterCmp_div_3_div_1_div_3_div_2_div_2_Template, 1, 0, "div", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r10.image != "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r10.image === "");
} }
function CompleterCmp_div_3_div_1_div_3_completer_list_item_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "completer-list-item", 23);
} if (rf & 2) {
    const item_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("text", item_r10.description)("matchClass", ctx_r13.matchClass)("searchStr", ctx_r13.searchStr)("type", "description");
} }
const _c2 = function (a0) { return { "completer-item-text-image": a0 }; };
function CompleterCmp_div_3_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵtemplate(2, CompleterCmp_div_3_div_1_div_3_div_2_Template, 3, 2, "div", 14);
    ɵngcc0.ɵɵelementStart(3, "div", 15);
    ɵngcc0.ɵɵelement(4, "completer-list-item", 16);
    ɵngcc0.ɵɵtemplate(5, CompleterCmp_div_3_div_1_div_3_completer_list_item_5_Template, 1, 4, "completer-list-item", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const rowIndex_r11 = ctx.index;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ctrRow", rowIndex_r11)("dataItem", item_r10);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r10.image || item_r10.image === "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(9, _c2, item_r10.image || item_r10.image === ""));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("text", item_r10.title)("matchClass", ctx_r9.matchClass)("searchStr", ctx_r9.searchStr)("type", "title");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r10.description && item_r10.description != "");
} }
function CompleterCmp_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, CompleterCmp_div_3_div_1_div_1_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵtemplate(2, CompleterCmp_div_3_div_1_div_2_Template, 2, 1, "div", 8);
    ɵngcc0.ɵɵtemplate(3, CompleterCmp_div_3_div_1_div_3_Template, 6, 11, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext();
    const searchActive_r3 = ctx_r19.searching;
    const items_r2 = ctx_r19.results;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", searchActive_r3 && ctx_r6.displaySearching);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !searchActive_r3 && (!items_r2 || (items_r2 == null ? null : items_r2.length) === 0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", items_r2);
} }
function CompleterCmp_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtemplate(1, CompleterCmp_div_3_div_1_Template, 4, 3, "div", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r2 = ctx.results;
    const searchActive_r3 = ctx.searching;
    const isInitialized_r4 = ctx.searchInitialized;
    const isOpen_r5 = ctx.isOpen;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", isInitialized_r4 && isOpen_r5 && ((items_r2 == null ? null : items_r2.length) > 0 || ctx_r1.displayNoResults && !searchActive_r3 || searchActive_r3 && ctx_r1.displaySearching));
} }
const MAX_CHARS = 524288; // the default max length per the html maxlength attribute
const MIN_SEARCH_LENGTH = 3;
const PAUSE = 10;
const TEXT_SEARCHING = "Searching...";
const TEXT_NO_RESULTS = "No results found";
const CLEAR_TIMEOUT = 50;
function isNil(value) {
    return typeof value === "undefined" || value === null;
}

class CompleterBaseData extends Subject {
    constructor() {
        super();
        this._searchFields = null;
        this._titleField = null;
        this._descriptionField = undefined;
        this._imageField = undefined;
    }
    cancel() {
        return;
    }
    searchFields(searchFields) {
        this._searchFields = searchFields;
        return this;
    }
    titleField(titleField) {
        this._titleField = titleField;
        return this;
    }
    descriptionField(descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    }
    imageField(imageField) {
        this._imageField = imageField;
        return this;
    }
    convertToItem(data) {
        let image = null;
        let formattedText;
        let formattedDesc = null;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (typeof formattedText !== "string") {
            formattedText = JSON.stringify(formattedText);
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (isNil(formattedText)) {
            return null;
        }
        return {
            description: formattedDesc,
            image,
            originalObject: data,
            title: formattedText
        };
    }
    extractMatches(data, term) {
        let matches = [];
        const searchFields = this._searchFields ? this._searchFields.split(",") : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== "") {
            matches = data.filter((item) => {
                const values = searchFields ? this.extractBySearchFields(searchFields, item) : [item];
                return values.some((value) => value
                    .toString()
                    .toLowerCase()
                    .indexOf(term.toString().toLowerCase()) >= 0);
            });
        }
        else {
            matches = data;
        }
        return matches;
    }
    extractTitle(item) {
        // split title fields and run extractValue for each and join with ' '
        if (!this._titleField) {
            return "";
        }
        return this._titleField.split(",")
            .map((field) => {
            return this.extractValue(item, field);
        })
            .reduce((acc, titlePart) => acc ? `${acc} ${titlePart}` : titlePart);
    }
    extractValue(obj, key) {
        let keys;
        let result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (key of keys) {
                if (result) {
                    result = result[key];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    }
    processResults(matches) {
        let i;
        const results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                const item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    }
    extractBySearchFields(searchFields, item) {
        return searchFields
            .map((searchField) => this.extractValue(item, searchField)).filter((value) => !!value);
    }
}

class LocalData extends CompleterBaseData {
    constructor() {
        super();
        this.dataSourceChange = new EventEmitter();
        this._data = [];
        this.savedTerm = null;
    }
    data(data) {
        if (data instanceof Observable) {
            const data$ = data;
            data$
                .pipe(catchError(() => []))
                .subscribe((res) => {
                this._data = res;
                if (this.savedTerm) {
                    this.search(this.savedTerm);
                }
                this.dataSourceChange.emit();
            });
        }
        else {
            this._data = data;
        }
        this.dataSourceChange.emit();
        return this;
    }
    search(term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            const matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    }
    convertToItem(data) {
        return super.convertToItem(data);
    }
}

class RemoteData extends CompleterBaseData {
    constructor(http) {
        super();
        this.http = http;
        this.dataSourceChange = new EventEmitter();
        this._remoteUrl = null;
        this.remoteSearch = null;
        this._urlFormater = null;
        this._dataField = null;
    }
    remoteUrl(remoteUrl) {
        this._remoteUrl = remoteUrl;
        this.dataSourceChange.emit();
        return this;
    }
    urlFormater(urlFormater) {
        this._urlFormater = urlFormater;
    }
    dataField(dataField) {
        this._dataField = dataField;
    }
    requestOptions(requestOptions) {
        this._requestOptions = requestOptions;
    }
    search(term) {
        this.cancel();
        // let params = {};
        let url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        this.remoteSearch = this.http
            .get(url, Object.assign({}, this._requestOptions))
            .pipe(map((data) => {
            const matches = this.extractValue(data, this._dataField);
            return this.extractMatches(matches, term);
        }), catchError(() => []))
            .subscribe((matches) => {
            const results = this.processResults(matches);
            this.next(results);
        });
    }
    cancel() {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    }
    convertToItem(data) {
        return super.convertToItem(data);
    }
}

let LocalDataFactory = class LocalDataFactory {
    create() {
        return new LocalData();
    }
};
LocalDataFactory.ɵfac = function LocalDataFactory_Factory(t) { return new (t || LocalDataFactory)(); };
LocalDataFactory.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: LocalDataFactory, factory: function (t) { return LocalDataFactory.ɵfac(t); } });

let RemoteDataFactory = class RemoteDataFactory {
    constructor(http) {
        this.http = http;
    }
    create() {
        return new RemoteData(this.http);
    }
};
RemoteDataFactory.ɵfac = function RemoteDataFactory_Factory(t) { return new (t || RemoteDataFactory)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient)); };
RemoteDataFactory.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: RemoteDataFactory, factory: function (t) { return RemoteDataFactory.ɵfac(t); } });
RemoteDataFactory = __decorate([ __metadata("design:paramtypes", [HttpClient])
], RemoteDataFactory);

let CompleterService = class CompleterService {
    constructor(localDataFactory, // Using any instead of () => LocalData because of AoT errors
    remoteDataFactory // Using any instead of () => LocalData because of AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    local(data, searchFields = "", titleField = "") {
        const localData = this.localDataFactory.create();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    }
    remote(url, searchFields = "", titleField = "") {
        const remoteData = this.remoteDataFactory.create();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    }
};
CompleterService.ɵfac = function CompleterService_Factory(t) { return new (t || CompleterService)(ɵngcc0.ɵɵinject(LocalDataFactory), ɵngcc0.ɵɵinject(RemoteDataFactory // Using any instead of () => LocalData because of AoT errors
)); };
CompleterService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: CompleterService, factory: function (t) { return CompleterService.ɵfac(t); } });
CompleterService = __decorate([ __metadata("design:paramtypes", [LocalDataFactory,
        RemoteDataFactory // Using any instead of () => LocalData because of AoT errors
    ])
], CompleterService);

let CtrCompleter = class CtrCompleter {
    constructor() {
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.opened = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.list = null;
        this.dropdown = null;
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
        this._autoHighlightIndex = null;
    }
    registerList(list) {
        this.list = list;
    }
    registerDropdown(dropdown) {
        this.dropdown = dropdown;
    }
    onHighlighted(item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    }
    onSelected(item, clearList = true) {
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    }
    onDataSourceChange() {
        if (this.hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        this.dataSourceChange.emit();
    }
    search(term) {
        if (this._hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    }
    clear() {
        this._hasHighlighted = false;
        this.isOpen = false;
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
    }
    selectCurrent() {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    }
    nextRow() {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    }
    prevRow() {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    }
    hasHighlighted() {
        return this._hasHighlighted;
    }
    cancelBlur(cancel) {
        this._cancelBlur = cancel;
    }
    isCancelBlur() {
        return this._cancelBlur;
    }
    open() {
        if (!this._isOpen && !!this.list) {
            this.isOpen = true;
            this.list.open();
        }
    }
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(open) {
        this._isOpen = open;
        this.opened.emit(this._isOpen);
        if (this.list) {
            this.list.isOpen(open);
        }
    }
    get autoHighlightIndex() {
        return this._autoHighlightIndex;
    }
    set autoHighlightIndex(index) {
        this._autoHighlightIndex = index;
        if (this.dropdown) {
            this.dropdown.highlightRow(this._autoHighlightIndex);
        }
    }
    get hasSelected() {
        return this._hasSelected;
    }
};
CtrCompleter.ɵfac = function CtrCompleter_Factory(t) { return new (t || CtrCompleter)(); };
CtrCompleter.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: CtrCompleter, selectors: [["", "ctrCompleter", ""]], outputs: { selected: "selected", highlighted: "highlighted", opened: "opened", dataSourceChange: "dataSourceChange" } });
__decorate([
    Output(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "selected", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "highlighted", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "opened", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "dataSourceChange", void 0);

class CtrRowItem {
    constructor(row, index) {
        this.row = row;
        this.index = index;
    }
}
let CtrDropdown = class CtrDropdown {
    constructor(completer, el, zone) {
        this.completer = completer;
        this.el = el;
        this.zone = zone;
        this.rows = [];
        this.isScrollOn = false;
        this._rowMouseDown = false;
        this.completer.registerDropdown(this);
    }
    ngOnDestroy() {
        this.completer.registerDropdown(null);
    }
    ngAfterViewInit() {
        const css = getComputedStyle(this.el.nativeElement);
        const autoHighlightIndex = this.completer.autoHighlightIndex;
        this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";
        if (autoHighlightIndex) {
            this.zone.run(() => {
                this.highlightRow(autoHighlightIndex);
            });
        }
    }
    onMouseDown(event) {
        // Support for canceling blur on IE (issue #158)
        if (!this._rowMouseDown) {
            this.completer.cancelBlur(true);
            this.zone.run(() => {
                this.completer.cancelBlur(false);
            });
        }
        else {
            this._rowMouseDown = false;
        }
    }
    registerRow(row) {
        const arrIndex = this.rows.findIndex(_row => _row.index === row.index);
        if (arrIndex >= 0) {
            this.rows[arrIndex] = row;
        }
        else {
            this.rows.push(row);
        }
    }
    unregisterRow(rowIndex) {
        const arrIndex = this.rows.findIndex(_row => _row.index === rowIndex);
        this.rows.splice(arrIndex, 1);
        if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
            this.highlightRow(null);
        }
    }
    highlightRow(index) {
        const highlighted = this.rows.find(row => row.index === index);
        if (isNil(index) || index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(null);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            const rowTop = this.dropdownRowTop();
            if (!rowTop) {
                return;
            }
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                const row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                    }
                }
            }
        }
    }
    clear() {
        this.rows = [];
    }
    onSelected(item) {
        this.completer.onSelected(item);
    }
    rowMouseDown() {
        this._rowMouseDown = true;
    }
    selectCurrent() {
        if (!!this.currHighlighted && !!this.currHighlighted.row) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    }
    nextRow() {
        let nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    }
    prevRow() {
        let nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    }
    dropdownScrollTopTo(offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    }
    dropdownRowTop() {
        if (!this.currHighlighted) {
            return;
        }
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
    }
    dropdownHeight() {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
    }
    dropdownRowOffsetHeight(row) {
        const css = getComputedStyle(row.parentElement);
        return row.parentElement.offsetHeight +
            parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
    }
};
CtrDropdown.ɵfac = function CtrDropdown_Factory(t) { return new (t || CtrDropdown)(ɵngcc0.ɵɵdirectiveInject(CtrCompleter, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CtrDropdown.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: CtrDropdown, selectors: [["", "ctrDropdown", ""]], hostBindings: function CtrDropdown_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function CtrDropdown_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } } });
__decorate([
    HostListener("mousedown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrDropdown.prototype, "onMouseDown", null);
CtrDropdown = __decorate([ __param(0, Host()),
    __metadata("design:paramtypes", [CtrCompleter, ElementRef, NgZone])
], CtrDropdown);

// keyboard events
const KEY_DW = 40;
const KEY_RT = 39;
const KEY_UP = 38;
const KEY_LF = 37;
const KEY_ES = 27;
const KEY_EN = 13;
const KEY_TAB = 9;
const KEY_BK = 8;
const KEY_SH = 16;
const KEY_CL = 20;
const KEY_F1 = 112;
const KEY_F12 = 123;
let CtrInput = class CtrInput {
    constructor(completer, ngModel, el) {
        this.completer = completer;
        this.ngModel = ngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.ngModelChange = new EventEmitter();
        this._searchStr = "";
        this._displayStr = "";
        this.blurTimer = null;
        this.completer.selected.subscribe((item) => {
            if (!item) {
                return;
            }
            if (this.clearSelected) {
                this.searchStr = "";
            }
            else {
                this.searchStr = item.title;
            }
            this.ngModelChange.emit(this.searchStr);
        });
        this.completer.highlighted.subscribe((item) => {
            if (this.fillHighlighted) {
                if (item) {
                    this._displayStr = item.title;
                    this.ngModelChange.emit(item.title);
                }
                else {
                    this._displayStr = this.searchStr;
                    this.ngModelChange.emit(this.searchStr);
                }
            }
        });
        this.completer.dataSourceChange.subscribe(() => {
            this.completer.search(this.searchStr);
        });
        if (this.ngModel.valueChanges) {
            this.ngModel.valueChanges.subscribe((value) => {
                if (!isNil(value) && this._displayStr !== value) {
                    if (this.searchStr !== value) {
                        this.completer.search(value);
                    }
                    this.searchStr = value;
                }
            });
        }
    }
    keyupHandler(event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            if (this.completer.isOpen) {
                this.restoreSearchValue();
                this.completer.clear();
                event.stopPropagation();
                event.preventDefault();
            }
        }
    }
    pasteHandler(event) {
        this.completer.open();
    }
    keydownHandler(event) {
        const keyCode = event.keyCode || event.which;
        if (keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (keyCode === KEY_BK) {
            this.completer.open();
        }
        else if (keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
            if (this.completer.isOpen) {
                event.stopPropagation();
            }
        }
        else {
            if (keyCode !== 0 && keyCode !== KEY_SH && keyCode !== KEY_CL &&
                (keyCode <= KEY_F1 || keyCode >= KEY_F12) &&
                !event.ctrlKey && !event.metaKey && !event.altKey) {
                this.completer.open();
            }
        }
    }
    onBlur(event) {
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(() => {
                // get the focus back
                this.el.nativeElement.focus();
            }, 0);
            return;
        }
        if (this.completer.isOpen) {
            this.blurTimer = timer(200).pipe(take(1)).subscribe(() => this.doBlur());
        }
    }
    onfocus() {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.selectOnFocus) {
            this.el.nativeElement.select();
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    }
    onClick(event) {
        if (this.selectOnClick) {
            this.el.nativeElement.select();
        }
        if (this.openOnClick) {
            if (this.completer.isOpen) {
                this.completer.clear();
            }
            else {
                this.completer.open();
            }
        }
    }
    get searchStr() {
        return this._searchStr;
    }
    set searchStr(term) {
        this._searchStr = term;
        this._displayStr = term;
    }
    handleSelection() {
        if (this.completer.hasHighlighted()) {
            this._searchStr = "";
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
            }
            this.completer.clear();
        }
    }
    restoreSearchValue() {
        if (this.fillHighlighted) {
            if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    }
    doBlur() {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
            }
            else {
                this.restoreSearchValue();
            }
        }
        this.completer.clear();
    }
};
CtrInput.ɵfac = function CtrInput_Factory(t) { return new (t || CtrInput)(ɵngcc0.ɵɵdirectiveInject(CtrCompleter, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgModel), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CtrInput.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: CtrInput, selectors: [["", "ctrInput", ""]], hostBindings: function CtrInput_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keyup", function CtrInput_keyup_HostBindingHandler($event) { return ctx.keyupHandler($event); })("paste", function CtrInput_paste_HostBindingHandler($event) { return ctx.pasteHandler($event); })("keydown", function CtrInput_keydown_HostBindingHandler($event) { return ctx.keydownHandler($event); })("blur", function CtrInput_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("focus", function CtrInput_focus_HostBindingHandler() { return ctx.onfocus(); })("click", function CtrInput_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { clearSelected: "clearSelected", clearUnselected: "clearUnselected", overrideSuggested: "overrideSuggested", fillHighlighted: "fillHighlighted", openOnFocus: "openOnFocus", openOnClick: "openOnClick", selectOnClick: "selectOnClick", selectOnFocus: "selectOnFocus" }, outputs: { ngModelChange: "ngModelChange" } });
__decorate([
    Input("clearSelected"),
    __metadata("design:type", Object)
], CtrInput.prototype, "clearSelected", void 0);
__decorate([
    Input("clearUnselected"),
    __metadata("design:type", Object)
], CtrInput.prototype, "clearUnselected", void 0);
__decorate([
    Input("overrideSuggested"),
    __metadata("design:type", Object)
], CtrInput.prototype, "overrideSuggested", void 0);
__decorate([
    Input("fillHighlighted"),
    __metadata("design:type", Object)
], CtrInput.prototype, "fillHighlighted", void 0);
__decorate([
    Input("openOnFocus"),
    __metadata("design:type", Object)
], CtrInput.prototype, "openOnFocus", void 0);
__decorate([
    Input("openOnClick"),
    __metadata("design:type", Object)
], CtrInput.prototype, "openOnClick", void 0);
__decorate([
    Input("selectOnClick"),
    __metadata("design:type", Object)
], CtrInput.prototype, "selectOnClick", void 0);
__decorate([
    Input("selectOnFocus"),
    __metadata("design:type", Object)
], CtrInput.prototype, "selectOnFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CtrInput.prototype, "ngModelChange", void 0);
__decorate([
    HostListener("keyup", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "keyupHandler", null);
__decorate([
    HostListener("paste", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "pasteHandler", null);
__decorate([
    HostListener("keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "keydownHandler", null);
__decorate([
    HostListener("blur", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "onBlur", null);
__decorate([
    HostListener("focus", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "onfocus", null);
__decorate([
    HostListener("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "onClick", null);
CtrInput = __decorate([ __param(0, Host()),
    __metadata("design:paramtypes", [CtrCompleter, NgModel, ElementRef])
], CtrInput);

class CtrListContext {
    constructor(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
}
let CtrList = class CtrList {
    constructor(completer, templateRef, viewContainer, cd, zone) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.zone = zone;
        this.ctrListMinSearchLength = MIN_SEARCH_LENGTH;
        this.ctrListPause = PAUSE;
        this.ctrListAutoMatch = false;
        this.ctrListAutoHighlight = false;
        this.ctrListDisplaySearching = true;
        this._dataService = null;
        // private results: CompleterItem[] = [];
        this.term = null;
        // private searching = false;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.viewRef = null;
    }
    ngOnInit() {
        this.completer.registerList(this);
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    }
    set dataService(newService) {
        this._dataService = newService;
        this.dataServiceSubscribe();
    }
    set initialValue(value) {
        if (this._dataService &&
            typeof this._dataService.convertToItem === "function") {
            this.zone.run(() => {
                const initialItem = this._dataService && this._dataService.convertToItem(value);
                if (initialItem) {
                    this.completer.onSelected(initialItem, false);
                }
            });
        }
        else if (!this._dataService) {
            this._initialValue = value;
        }
    }
    search(term) {
        if (!isNil(term) &&
            term.length >= this.ctrListMinSearchLength &&
            this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                if (this.ctrListDisplaySearching) {
                    this.ctx.results = [];
                }
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = timer(this.ctrListPause)
                .pipe(take(1))
                .subscribe(() => {
                this.searchTimerComplete(term);
            });
        }
        else if (!isNil(term) && term.length < this.ctrListMinSearchLength) {
            this.clear();
            this.term = "";
        }
    }
    clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = timer(CLEAR_TIMEOUT)
            .pipe(take(1))
            .subscribe(() => {
            this._clear();
        });
    }
    open() {
        if (!this.ctx.searchInitialized) {
            this.search("");
        }
        this.refreshTemplate();
    }
    isOpen(open) {
        this.ctx.isOpen = open;
    }
    _clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
        this.viewRef = null;
    }
    searchTimerComplete(term) {
        // Begin the search
        if (isNil(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        if (this._dataService) {
            this._dataService.search(term);
        }
    }
    refreshTemplate() {
        // create the template if it doesn't exist
        if (!this.viewRef) {
            this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        else if (!this.viewRef.destroyed) {
            // refresh the template
            this.viewRef.context.isOpen = this.ctx.isOpen;
            this.viewRef.context.results = this.ctx.results;
            this.viewRef.context.searching = this.ctx.searching;
            this.viewRef.context.searchInitialized = this.ctx.searchInitialized;
            this.viewRef.detectChanges();
        }
        this.cd.markForCheck();
    }
    getBestMatchIndex() {
        if (!this.ctx.results || !this.term) {
            return null;
        }
        // First try to find the exact term
        let bestMatch = this.ctx.results.findIndex((item) => item.title.toLowerCase() === this.term.toLocaleLowerCase());
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex((item) => item.title.toLowerCase().startsWith(this.term.toLocaleLowerCase()));
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex((item) => item.title.toLowerCase().includes(this.term.toLocaleLowerCase()));
        }
        return bestMatch < 0 ? null : bestMatch;
    }
    dataServiceSubscribe() {
        if (this._dataService) {
            this._dataService.subscribe((results) => {
                this.ctx.searchInitialized = true;
                this.ctx.searching = false;
                this.ctx.results = results;
                if (this.ctrListAutoMatch &&
                    results &&
                    results.length === 1 &&
                    results[0].title &&
                    !isNil(this.term) &&
                    results[0].title.toLocaleLowerCase() ===
                        this.term.toLocaleLowerCase()) {
                    // Do automatch
                    this.completer.onSelected(results[0]);
                    return;
                }
                this.refreshTemplate();
                if (this.ctrListAutoHighlight) {
                    this.completer.autoHighlightIndex = this.getBestMatchIndex();
                }
            }, (error) => {
                // tslint:disable-next-line:no-console
                console.error(error);
                // tslint:disable-next-line:no-console
                console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
                return [];
            });
            if (this._dataService.dataSourceChange) {
                this._dataService.dataSourceChange.subscribe(() => {
                    this.term = null;
                    this.ctx.searchInitialized = false;
                    this.ctx.searching = false;
                    this.ctx.results = [];
                    this.refreshTemplate();
                    this.completer.onDataSourceChange();
                });
            }
        }
    }
};
CtrList.ɵfac = function CtrList_Factory(t) { return new (t || CtrList)(ɵngcc0.ɵɵdirectiveInject(CtrCompleter, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CtrList.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: CtrList, selectors: [["", "ctrList", ""]], inputs: { ctrListMinSearchLength: "ctrListMinSearchLength", ctrListPause: "ctrListPause", ctrListAutoMatch: "ctrListAutoMatch", ctrListAutoHighlight: "ctrListAutoHighlight", ctrListDisplaySearching: "ctrListDisplaySearching", dataService: ["ctrList", "dataService"], initialValue: ["ctrListInitialValue", "initialValue"] } });
__decorate([
    Input(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListMinSearchLength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListPause", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListAutoMatch", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListAutoHighlight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListDisplaySearching", void 0);
__decorate([
    Input("ctrList"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CtrList.prototype, "dataService", null);
__decorate([
    Input("ctrListInitialValue"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CtrList.prototype, "initialValue", null);
CtrList = __decorate([ __param(0, Host()),
    __metadata("design:paramtypes", [CtrCompleter,
        TemplateRef,
        ViewContainerRef,
        ChangeDetectorRef,
        NgZone])
], CtrList);

let CtrRow = class CtrRow {
    constructor(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
        this._rowIndex = 0;
        this._item = null;
    }
    ngOnDestroy() {
        if (this._rowIndex) {
            this.dropdown.unregisterRow(this._rowIndex);
        }
    }
    set ctrRow(index) {
        this._rowIndex = index;
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
    }
    set dataItem(item) {
        this._item = item;
    }
    onClick(event) {
        this.dropdown.onSelected(this._item);
    }
    onMouseEnter(event) {
        this.dropdown.highlightRow(this._rowIndex);
    }
    onMouseDown(event) {
        this.dropdown.rowMouseDown();
    }
    setHighlighted(selected) {
        this.selected = selected;
        if (this.selected) {
            this.renderer.addClass(this.el.nativeElement, "completer-selected-row");
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, "completer-selected-row");
        }
    }
    getNativeElement() {
        return this.el.nativeElement;
    }
    getDataItem() {
        return this._item;
    }
};
CtrRow.ɵfac = function CtrRow_Factory(t) { return new (t || CtrRow)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(CtrDropdown, 1)); };
CtrRow.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: CtrRow, selectors: [["", "ctrRow", ""]], hostBindings: function CtrRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CtrRow_click_HostBindingHandler($event) { return ctx.onClick($event); })("mouseenter", function CtrRow_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event); })("mousedown", function CtrRow_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } }, inputs: { ctrRow: "ctrRow", dataItem: "dataItem" } });
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CtrRow.prototype, "ctrRow", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CtrRow.prototype, "dataItem", null);
__decorate([
    HostListener("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrRow.prototype, "onClick", null);
__decorate([
    HostListener("mouseenter", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrRow.prototype, "onMouseEnter", null);
__decorate([
    HostListener("mousedown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrRow.prototype, "onMouseDown", null);
CtrRow = __decorate([ __param(2, Host()),
    __metadata("design:paramtypes", [ElementRef, Renderer2, CtrDropdown])
], CtrRow);

let CompleterListItemCmp = class CompleterListItemCmp {
    constructor() {
        this.text = "";
        this.searchStr = "";
        this.matchClass = "";
        this.type = "";
        this.parts = [];
    }
    ngOnInit() {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        const matchStr = this.text.toLowerCase();
        let matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        let startIndex = 0;
        while (matchPos >= 0) {
            const matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                const matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    }
};
CompleterListItemCmp.ɵfac = function CompleterListItemCmp_Factory(t) { return new (t || CompleterListItemCmp)(); };
CompleterListItemCmp.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CompleterListItemCmp, selectors: [["completer-list-item"]], inputs: { text: "text", searchStr: "searchStr", matchClass: "matchClass", type: "type" }, decls: 2, vars: 5, consts: [[1, "completer-list-item-holder", 3, "ngClass"], ["class", "completer-list-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "completer-list-item", 3, "ngClass"]], template: function CompleterListItemCmp_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtemplate(1, CompleterListItemCmp_span_1_Template, 2, 2, "span", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c0, ctx.type === "title", ctx.type === "description"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.parts);
    } }, directives: [ɵngcc3.NgClass, ɵngcc3.NgForOf], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "searchStr", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "matchClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "type", void 0);

const noop = () => {
    return;
};
const COMPLETER_CONTROL_VALUE_ACCESSOR = {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CompleterCmp),
};
let CompleterCmp = class CompleterCmp {
    constructor(completerService, cdr) {
        this.completerService = completerService;
        this.cdr = cdr;
        this.inputName = "";
        this.inputId = "";
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.autoHighlight = false;
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.blurEvent = new EventEmitter();
        this.click = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.opened = new EventEmitter();
        this.keyup = new EventEmitter();
        this.keydown = new EventEmitter();
        this.control = new FormControl("");
        this.displaySearching = true;
        this.displayNoResults = true;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._searchStr = "";
    }
    get value() { return this.searchStr; }
    ;
    set value(v) {
        if (v !== this.searchStr) {
            this.searchStr = v;
        }
        // Propagate the change in any case
        this._onChangeCallback(v);
    }
    get searchStr() {
        return this._searchStr;
    }
    set searchStr(value) {
        if (typeof value === "string" || isNil(value)) {
            this._searchStr = value;
        }
        else {
            this._searchStr = JSON.stringify(value);
        }
    }
    ngAfterViewInit() {
        if (this.autofocus) {
            this._focus = true;
        }
        if (!this.completer) {
            return;
        }
        this.completer.selected.subscribe((item) => {
            this.selected.emit(item);
        });
        this.completer.highlighted.subscribe((item) => {
            this.highlighted.emit(item);
        });
        this.completer.opened.subscribe((isOpen) => {
            this._open = isOpen;
            this.opened.emit(isOpen);
        });
    }
    ngAfterViewChecked() {
        if (this._focus) {
            setTimeout(() => {
                if (!!this.ctrInput) {
                    this.ctrInput.nativeElement.focus();
                    this._focus = false;
                }
            }, 0);
        }
    }
    onTouched() {
        this._onTouchedCallback();
    }
    writeValue(value) {
        this.searchStr = value;
    }
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    setDisabledState(isDisabled) {
        this.disableInput = isDisabled;
    }
    set datasource(source) {
        if (source) {
            if (source instanceof Array) {
                this.dataService = this.completerService.local(source);
            }
            else if (typeof (source) === "string") {
                this.dataService = this.completerService.remote(source);
            }
            else {
                this.dataService = source;
            }
        }
    }
    set textNoResults(text) {
        if (this._textNoResults !== text) {
            this._textNoResults = text;
            this.displayNoResults = !!this._textNoResults && this._textNoResults !== "false";
        }
    }
    set textSearching(text) {
        if (this._textSearching !== text) {
            this._textSearching = text;
            this.displaySearching = !!this._textSearching && this._textSearching !== "false";
        }
    }
    onBlur() {
        this.blurEvent.emit();
        this.onTouched();
        this.cdr.detectChanges();
    }
    onFocus() {
        this.focusEvent.emit();
        this.onTouched();
    }
    onClick(event) {
        this.click.emit(event);
        this.onTouched();
    }
    onKeyup(event) {
        this.keyup.emit(event);
        event.stopPropagation();
    }
    onKeydown(event) {
        this.keydown.emit(event);
        event.stopPropagation();
    }
    onChange(value) {
        this.value = value;
    }
    open() {
        if (!this.completer) {
            return;
        }
        this.completer.open();
    }
    close() {
        if (!this.completer) {
            return;
        }
        this.completer.clear();
    }
    focus() {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    }
    blur() {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.blur();
        }
        else {
            this._focus = false;
        }
    }
    isOpen() {
        return this._open;
    }
};
CompleterCmp.ɵfac = function CompleterCmp_Factory(t) { return new (t || CompleterCmp)(ɵngcc0.ɵɵdirectiveInject(CompleterService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
CompleterCmp.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CompleterCmp, selectors: [["ng2-completer"]], viewQuery: function CompleterCmp_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CtrCompleter, 5);
        ɵngcc0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.completer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ctrInput = _t.first);
    } }, inputs: { inputName: "inputName", inputId: "inputId", pause: "pause", minSearchLength: "minSearchLength", maxChars: "maxChars", overrideSuggested: "overrideSuggested", clearSelected: "clearSelected", clearUnselected: "clearUnselected", fillHighlighted: "fillHighlighted", placeholder: "placeholder", autoMatch: "autoMatch", disableInput: "disableInput", autofocus: "autofocus", openOnFocus: "openOnFocus", openOnClick: "openOnClick", selectOnClick: "selectOnClick", selectOnFocus: "selectOnFocus", autoHighlight: "autoHighlight", datasource: "datasource", dataService: "dataService", textNoResults: "textNoResults", textSearching: "textSearching", matchClass: "matchClass", fieldTabindex: "fieldTabindex", inputClass: "inputClass", initialValue: "initialValue" }, outputs: { selected: "selected", highlighted: "highlighted", blurEvent: "blur", click: "click", focusEvent: "focus", opened: "opened", keyup: "keyup", keydown: "keydown" }, features: [ɵngcc0.ɵɵProvidersFeature([COMPLETER_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 23, consts: [["ctrCompleter", "", 1, "completer-holder"], ["type", "search", "ctrInput", "", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", 1, "completer-input", 3, "ngClass", "ngModel", "placeholder", "tabindex", "disabled", "clearSelected", "clearUnselected", "overrideSuggested", "openOnFocus", "fillHighlighted", "openOnClick", "selectOnClick", "selectOnFocus", "ngModelChange", "blur", "focus", "keyup", "keydown", "click"], ["ctrInput", ""], ["class", "completer-dropdown-holder", 4, "ctrList", "ctrListMinSearchLength", "ctrListPause", "ctrListAutoMatch", "ctrListInitialValue", "ctrListAutoHighlight", "ctrListDisplaySearching"], [1, "completer-dropdown-holder"], ["class", "completer-dropdown", "ctrDropdown", "", 4, "ngIf"], ["ctrDropdown", "", 1, "completer-dropdown"], ["class", "completer-searching", 4, "ngIf"], ["class", "completer-no-results", 4, "ngIf"], ["class", "completer-row-wrapper", 4, "ngFor", "ngForOf"], [1, "completer-searching"], [1, "completer-no-results"], [1, "completer-row-wrapper"], [1, "completer-row", 3, "ctrRow", "dataItem"], ["class", "completer-image-holder", 4, "ngIf"], [1, "completer-item-text", 3, "ngClass"], [1, "completer-title", 3, "text", "matchClass", "searchStr", "type"], ["class", "completer-description", 3, "text", "matchClass", "searchStr", "type", 4, "ngIf"], [1, "completer-image-holder"], ["class", "completer-image", 3, "src", 4, "ngIf"], ["class", "completer-image-default", 4, "ngIf"], [1, "completer-image", 3, "src"], [1, "completer-image-default"], [1, "completer-description", 3, "text", "matchClass", "searchStr", "type"]], template: function CompleterCmp_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function CompleterCmp_Template_input_ngModelChange_1_listener($event) { return ctx.searchStr = $event; })("ngModelChange", function CompleterCmp_Template_input_ngModelChange_1_listener($event) { return ctx.onChange($event); })("blur", function CompleterCmp_Template_input_blur_1_listener() { return ctx.onBlur(); })("focus", function CompleterCmp_Template_input_focus_1_listener() { return ctx.onFocus(); })("keyup", function CompleterCmp_Template_input_keyup_1_listener($event) { return ctx.onKeyup($event); })("keydown", function CompleterCmp_Template_input_keydown_1_listener($event) { return ctx.onKeydown($event); })("click", function CompleterCmp_Template_input_click_1_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, CompleterCmp_div_3_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.searchStr)("placeholder", ctx.placeholder)("tabindex", ctx.fieldTabindex)("disabled", ctx.disableInput)("clearSelected", ctx.clearSelected)("clearUnselected", ctx.clearUnselected)("overrideSuggested", ctx.overrideSuggested)("openOnFocus", ctx.openOnFocus)("fillHighlighted", ctx.fillHighlighted)("openOnClick", ctx.openOnClick)("selectOnClick", ctx.selectOnClick)("selectOnFocus", ctx.selectOnFocus);
        ɵngcc0.ɵɵattribute("id", ctx.inputId.length > 0 ? ctx.inputId : null)("name", ctx.inputName)("maxlength", ctx.maxChars);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ctrList", ctx.dataService)("ctrListMinSearchLength", ctx.minSearchLength)("ctrListPause", ctx.pause)("ctrListAutoMatch", ctx.autoMatch)("ctrListInitialValue", ctx.initialValue)("ctrListAutoHighlight", ctx.autoHighlight)("ctrListDisplaySearching", ctx.displaySearching);
    } }, directives: [CtrCompleter, ɵngcc2.DefaultValueAccessor, CtrInput, ɵngcc3.NgClass, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc2.MaxLengthValidator, CtrList, ɵngcc3.NgIf, CtrDropdown, ɵngcc3.NgForOf, CtrRow, CompleterListItemCmp], styles: [".completer-dropdown[_ngcontent-%COMP%] {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row[_ngcontent-%COMP%] {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row[_ngcontent-%COMP%] {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .completer-image-default[_ngcontent-%COMP%] {\n        width: 16px;\n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder[_ngcontent-%COMP%] {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image[_ngcontent-%COMP%] {\n        float: right;\n        width: 90%;\n    }"] });
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "dataService", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "inputName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CompleterCmp.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "pause", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "minSearchLength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "maxChars", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "overrideSuggested", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "clearSelected", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "clearUnselected", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "fillHighlighted", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "matchClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "fieldTabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "autoMatch", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "disableInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "inputClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "autofocus", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "openOnFocus", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "openOnClick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "selectOnClick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "selectOnFocus", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "initialValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "autoHighlight", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "selected", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "highlighted", void 0);
__decorate([
    Output("blur"),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "blurEvent", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "click", void 0);
__decorate([
    Output("focus"),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "focusEvent", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "opened", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CompleterCmp.prototype, "keyup", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CompleterCmp.prototype, "keydown", void 0);
__decorate([
    ViewChild(CtrCompleter, { static: false }),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "completer", void 0);
__decorate([
    ViewChild("ctrInput", { static: false }),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "ctrInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CompleterCmp.prototype, "datasource", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CompleterCmp.prototype, "textNoResults", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CompleterCmp.prototype, "textSearching", null);
CompleterCmp = __decorate([ __metadata("design:paramtypes", [CompleterService, ChangeDetectorRef])
], CompleterCmp);

var Ng2CompleterModule_1;
const providers = [
    CompleterService,
    LocalDataFactory,
    RemoteDataFactory
];
let Ng2CompleterModule = Ng2CompleterModule_1 = class Ng2CompleterModule {
    static forRoot() {
        return {
            ngModule: Ng2CompleterModule_1,
            providers
        };
    }
    static forChild() {
        return {
            ngModule: Ng2CompleterModule_1,
            providers
        };
    }
};
Ng2CompleterModule.ɵfac = function Ng2CompleterModule_Factory(t) { return new (t || Ng2CompleterModule)(); };
Ng2CompleterModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: Ng2CompleterModule });
Ng2CompleterModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: providers, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LocalDataFactory, [{
        type: Injectable
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RemoteDataFactory, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CompleterService, [{
        type: Injectable
    }], function () { return [{ type: LocalDataFactory }, { type: RemoteDataFactory // Using any instead of () => LocalData because of AoT errors
     }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CtrCompleter, [{
        type: Directive,
        args: [{
                selector: "[ctrCompleter]"
            }]
    }], function () { return []; }, { selected: [{
            type: Output
        }], highlighted: [{
            type: Output
        }], opened: [{
            type: Output
        }], dataSourceChange: [{
            type: Output
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CtrDropdown, [{
        type: Directive,
        args: [{
                selector: "[ctrDropdown]"
            }]
    }], function () { return [{ type: CtrCompleter, decorators: [{
                type: Host
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onMouseDown: [{
            type: HostListener,
            args: ["mousedown", ["$event"]]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CtrInput, [{
        type: Directive,
        args: [{
                selector: "[ctrInput]"
            }]
    }], function () { return [{ type: CtrCompleter, decorators: [{
                type: Host
            }] }, { type: ɵngcc2.NgModel }, { type: ɵngcc0.ElementRef }]; }, { clearSelected: [{
            type: Input,
            args: ["clearSelected"]
        }], clearUnselected: [{
            type: Input,
            args: ["clearUnselected"]
        }], overrideSuggested: [{
            type: Input,
            args: ["overrideSuggested"]
        }], fillHighlighted: [{
            type: Input,
            args: ["fillHighlighted"]
        }], openOnFocus: [{
            type: Input,
            args: ["openOnFocus"]
        }], openOnClick: [{
            type: Input,
            args: ["openOnClick"]
        }], selectOnClick: [{
            type: Input,
            args: ["selectOnClick"]
        }], selectOnFocus: [{
            type: Input,
            args: ["selectOnFocus"]
        }], ngModelChange: [{
            type: Output
        }], keyupHandler: [{
            type: HostListener,
            args: ["keyup", ["$event"]]
        }], pasteHandler: [{
            type: HostListener,
            args: ["paste", ["$event"]]
        }], keydownHandler: [{
            type: HostListener,
            args: ["keydown", ["$event"]]
        }], onBlur: [{
            type: HostListener,
            args: ["blur", ["$event"]]
        }], onfocus: [{
            type: HostListener,
            args: ["focus", []]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CtrList, [{
        type: Directive,
        args: [{
                selector: "[ctrList]"
            }]
    }], function () { return [{ type: CtrCompleter, decorators: [{
                type: Host
            }] }, { type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { ctrListMinSearchLength: [{
            type: Input
        }], ctrListPause: [{
            type: Input
        }], ctrListAutoMatch: [{
            type: Input
        }], ctrListAutoHighlight: [{
            type: Input
        }], ctrListDisplaySearching: [{
            type: Input
        }], dataService: [{
            type: Input,
            args: ["ctrList"]
        }], initialValue: [{
            type: Input,
            args: ["ctrListInitialValue"]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CtrRow, [{
        type: Directive,
        args: [{
                selector: "[ctrRow]"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: CtrDropdown, decorators: [{
                type: Host
            }] }]; }, { ctrRow: [{
            type: Input
        }], dataItem: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }], onMouseEnter: [{
            type: HostListener,
            args: ["mouseenter", ["$event"]]
        }], onMouseDown: [{
            type: HostListener,
            args: ["mousedown", ["$event"]]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CompleterListItemCmp, [{
        type: Component,
        args: [{
                selector: "completer-list-item",
                template: `<span class="completer-list-item-holder" [ngClass]= "{'completer-title': type === 'title', 'completer-description': type === 'description'}" >
        <span class="completer-list-item" *ngFor="let part of parts" [ngClass]= "part.isMatch ? matchClass : null">{{part.text}}</span>
    </span>`
            }]
    }], function () { return []; }, { text: [{
            type: Input
        }], searchStr: [{
            type: Input
        }], matchClass: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CompleterCmp, [{
        type: Component,
        args: [{
                selector: "ng2-completer",
                template: `
        <div class="completer-holder" ctrCompleter>
            <input #ctrInput [attr.id]="inputId.length > 0 ? inputId : null" type="search"
                class="completer-input" ctrInput [ngClass]="inputClass"
                [(ngModel)]="searchStr" (ngModelChange)="onChange($event)"
                [attr.name]="inputName" [placeholder]="placeholder"
                [attr.maxlength]="maxChars" [tabindex]="fieldTabindex" [disabled]="disableInput"
                [clearSelected]="clearSelected" [clearUnselected]="clearUnselected"
                [overrideSuggested]="overrideSuggested" [openOnFocus]="openOnFocus" [fillHighlighted]="fillHighlighted"
                [openOnClick]="openOnClick" [selectOnClick]="selectOnClick" [selectOnFocus]="selectOnFocus"
                (blur)="onBlur()" (focus)="onFocus()" (keyup)="onKeyup($event)"
                (keydown)="onKeydown($event)" (click)="onClick($event)"
                autocomplete="off" autocorrect="off" autocapitalize="off" />

            <div class="completer-dropdown-holder"
                *ctrList="dataService;
                    minSearchLength: minSearchLength;
                    pause: pause;
                    autoMatch: autoMatch;
                    initialValue: initialValue;
                    autoHighlight: autoHighlight;
                    displaySearching: displaySearching;
                    let items = results;
                    let searchActive = searching;
                    let isInitialized = searchInitialized;
                    let isOpen = isOpen;">
                <div class="completer-dropdown" ctrDropdown
                    *ngIf="isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))">
                    <div *ngIf="searchActive && displaySearching" class="completer-searching">{{ _textSearching }}</div>
                    <div *ngIf="!searchActive && (!items || items?.length === 0)"
                    class="completer-no-results">{{ _textNoResults }}</div>
                    <div class="completer-row-wrapper" *ngFor="let item of items; let rowIndex=index">
                        <div class="completer-row" [ctrRow]="rowIndex" [dataItem]="item">
                            <div *ngIf="item.image || item.image === ''" class="completer-image-holder">
                                <img *ngIf="item.image != ''" src="{{item.image}}" class="completer-image" />
                                <div *ngIf="item.image === ''" class="completer-image-default"></div>
                            </div>
                            <div class="completer-item-text"
                            [ngClass]="{'completer-item-text-image': item.image || item.image === '' }">
                                <completer-list-item
                                class="completer-title" [text]="item.title" [matchClass]="matchClass"
                                [searchStr]="searchStr" [type]="'title'"></completer-list-item>
                                <completer-list-item *ngIf="item.description && item.description != ''"
                                class="completer-description" [text]="item.description"
                                    [matchClass]="matchClass" [searchStr]="searchStr" [type]="'description'">
                                </completer-list-item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
                styles: [`
    .completer-dropdown {
        border-color: #ececec;
        border-width: 1px;
        border-style: solid;
        border-radius: 2px;
        width: 250px;
        padding: 6px;
        cursor: pointer;
        z-index: 9999;
        position: absolute;
        margin-top: -6px;
        background-color: #ffffff;
    }

    .completer-row {
        padding: 5px;
        color: #000000;
        margin-bottom: 4px;
        clear: both;
        display: inline-block;
        width: 103%;
    }

    .completer-selected-row {
        background-color: lightblue;
        color: #ffffff;
    }

    .completer-description {
        font-size: 14px;
    }

    .completer-image-default {
        width: 16px;
        height: 16px;
        background-image: url("demo/res/img/default.png");
    }

    .completer-image-holder {
        float: left;
        width: 10%;
    }
    .completer-item-text-image {
        float: right;
        width: 90%;
    }
    `],
                providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: CompleterService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { inputName: [{
            type: Input
        }], inputId: [{
            type: Input
        }], pause: [{
            type: Input
        }], minSearchLength: [{
            type: Input
        }], maxChars: [{
            type: Input
        }], overrideSuggested: [{
            type: Input
        }], clearSelected: [{
            type: Input
        }], clearUnselected: [{
            type: Input
        }], fillHighlighted: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], autoMatch: [{
            type: Input
        }], disableInput: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], openOnFocus: [{
            type: Input
        }], openOnClick: [{
            type: Input
        }], selectOnClick: [{
            type: Input
        }], selectOnFocus: [{
            type: Input
        }], autoHighlight: [{
            type: Input
        }], selected: [{
            type: Output
        }], highlighted: [{
            type: Output
        }], blurEvent: [{
            type: Output,
            args: ["blur"]
        }], click: [{
            type: Output
        }], focusEvent: [{
            type: Output,
            args: ["focus"]
        }], opened: [{
            type: Output
        }], keyup: [{
            type: Output
        }], keydown: [{
            type: Output
        }], datasource: [{
            type: Input
        }], dataService: [{
            type: Input
        }], textNoResults: [{
            type: Input
        }], textSearching: [{
            type: Input
        }], matchClass: [{
            type: Input
        }], fieldTabindex: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], initialValue: [{
            type: Input
        }], completer: [{
            type: ViewChild,
            args: [CtrCompleter, { static: false }]
        }], ctrInput: [{
            type: ViewChild,
            args: ["ctrInput", { static: false }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(Ng2CompleterModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CompleterListItemCmp,
                    CtrCompleter,
                    CtrDropdown,
                    CtrInput,
                    CtrList,
                    CtrRow,
                    CompleterCmp
                ],
                exports: [
                    CompleterListItemCmp,
                    CtrCompleter,
                    CtrDropdown,
                    CtrInput,
                    CtrList,
                    CtrRow,
                    CompleterCmp
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                providers
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(Ng2CompleterModule, { declarations: function () { return [CompleterListItemCmp, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterCmp]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [CompleterListItemCmp, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterCmp]; } }); })();

export { CompleterCmp, CompleterListItemCmp, CompleterService, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, LocalData, LocalDataFactory, Ng2CompleterModule, RemoteData, RemoteDataFactory, CtrListContext as ɵa, CompleterBaseData as ɵb };

//# sourceMappingURL=ng2-completer.js.map