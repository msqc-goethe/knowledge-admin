(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('ng2-completer'), require('rxjs/operators'), require('rxjs'), require('lodash'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('ng2-smart-table', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'ng2-completer', 'rxjs/operators', 'rxjs', 'lodash', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng2-smart-table'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ng2Completer, global.rxjs.operators, global.rxjs, global.lodash, global.ng.common.http));
}(this, (function (exports, core, common, forms, ng2Completer, operators, rxjs, lodash, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CellComponent = /** @class */ (function () {
        function CellComponent() {
            this.inputClass = '';
            this.mode = 'inline';
            this.isInEditing = false;
            this.edited = new core.EventEmitter();
        }
        CellComponent.prototype.onEdited = function (event) {
            if (this.isNew) {
                this.grid.create(this.grid.getNewRow(), this.createConfirm);
            }
            else {
                this.grid.save(this.row, this.editConfirm);
            }
        };
        return CellComponent;
    }());
    CellComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-smart-table-cell',
                    template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  "
                },] }
    ];
    CellComponent.propDecorators = {
        grid: [{ type: core.Input }],
        row: [{ type: core.Input }],
        editConfirm: [{ type: core.Input }],
        createConfirm: [{ type: core.Input }],
        isNew: [{ type: core.Input }],
        cell: [{ type: core.Input }],
        inputClass: [{ type: core.Input }],
        mode: [{ type: core.Input }],
        isInEditing: [{ type: core.Input }],
        edited: [{ type: core.Output }]
    };

    var EditCellDefault = /** @class */ (function () {
        function EditCellDefault() {
            this.inputClass = '';
            this.edited = new core.EventEmitter();
        }
        EditCellDefault.prototype.onEdited = function (event) {
            this.edited.next(event);
            return false;
        };
        EditCellDefault.prototype.onStopEditing = function () {
            this.cell.getRow().isInEditing = false;
            return false;
        };
        EditCellDefault.prototype.onClick = function (event) {
            event.stopPropagation();
        };
        return EditCellDefault;
    }());
    EditCellDefault.decorators = [
        { type: core.Component, args: [{
                    template: ''
                },] }
    ];
    EditCellDefault.propDecorators = {
        cell: [{ type: core.Input }],
        inputClass: [{ type: core.Input }],
        edited: [{ type: core.Output }]
    };

    var CustomEditComponent = /** @class */ (function (_super) {
        __extends(CustomEditComponent, _super);
        function CustomEditComponent(resolver) {
            var _this = _super.call(this) || this;
            _this.resolver = resolver;
            return _this;
        }
        CustomEditComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (this.cell && !this.customComponent) {
                var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
                this.customComponent = this.dynamicTarget.createComponent(componentFactory);
                // set @Inputs and @Outputs of custom component
                this.customComponent.instance.cell = this.cell;
                this.customComponent.instance.inputClass = this.inputClass;
                this.customComponent.instance.onStopEditing.subscribe(function () { return _this.onStopEditing(); });
                this.customComponent.instance.onEdited.subscribe(function (event) { return _this.onEdited(event); });
                this.customComponent.instance.onClick.subscribe(function (event) { return _this.onClick(event); });
            }
        };
        CustomEditComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        return CustomEditComponent;
    }(EditCellDefault));
    CustomEditComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-cell-custom-editor',
                    template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
                },] }
    ];
    CustomEditComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver }
    ]; };
    CustomEditComponent.propDecorators = {
        dynamicTarget: [{ type: core.ViewChild, args: ['dynamicTarget', { read: core.ViewContainerRef, static: true },] }]
    };

    var DefaultEditComponent = /** @class */ (function (_super) {
        __extends(DefaultEditComponent, _super);
        function DefaultEditComponent() {
            return _super.call(this) || this;
        }
        DefaultEditComponent.prototype.getEditorType = function () {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
        };
        return DefaultEditComponent;
    }(EditCellDefault));
    DefaultEditComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-cell-default-editor',
                    template: "<div [ngSwitch]=\"getEditorType()\">\n    <select-editor *ngSwitchCase=\"'list'\"\n                   [cell]=\"cell\"\n                   [inputClass]=\"inputClass\"\n                   (onClick)=\"onClick($event)\"\n                   (onEdited)=\"onEdited($event)\"\n                   (onStopEditing)=\"onStopEditing()\">\n    </select-editor>\n\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\"\n                     (onEdited)=\"onEdited($event)\"\n                     (onStopEditing)=\"onStopEditing()\">\n    </textarea-editor>\n\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\">\n    </checkbox-editor>\n\n    <completer-editor *ngSwitchCase=\"'completer'\"\n                      [cell]=\"cell\">\n    </completer-editor>\n\n    <input-editor *ngSwitchDefault\n                  [cell]=\"cell\"\n                  [inputClass]=\"inputClass\"\n                  (onClick)=\"onClick($event)\"\n                  (onEdited)=\"onEdited($event)\"\n                  (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n</div>"
                },] }
    ];
    DefaultEditComponent.ctorParameters = function () { return []; };

    var EditCellComponent = /** @class */ (function () {
        function EditCellComponent() {
            this.inputClass = '';
            this.edited = new core.EventEmitter();
        }
        EditCellComponent.prototype.onEdited = function (event) {
            this.edited.next(event);
            return false;
        };
        EditCellComponent.prototype.getEditorType = function () {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
        };
        return EditCellComponent;
    }());
    EditCellComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-cell-edit-mode',
                    template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    "
                },] }
    ];
    EditCellComponent.propDecorators = {
        cell: [{ type: core.Input }],
        inputClass: [{ type: core.Input }],
        edited: [{ type: core.Output }]
    };

    var DefaultEditor = /** @class */ (function () {
        function DefaultEditor() {
            this.onStopEditing = new core.EventEmitter();
            this.onEdited = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
        }
        return DefaultEditor;
    }());
    DefaultEditor.decorators = [
        { type: core.Component, args: [{
                    template: ''
                },] }
    ];
    DefaultEditor.propDecorators = {
        cell: [{ type: core.Input }],
        inputClass: [{ type: core.Input }],
        onStopEditing: [{ type: core.Output }],
        onEdited: [{ type: core.Output }],
        onClick: [{ type: core.Output }]
    };

    var CheckboxEditorComponent = /** @class */ (function (_super) {
        __extends(CheckboxEditorComponent, _super);
        function CheckboxEditorComponent() {
            return _super.call(this) || this;
        }
        CheckboxEditorComponent.prototype.onChange = function (event) {
            var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
            var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
            this.cell.newValue = event.target.checked ? trueVal : falseVal;
        };
        return CheckboxEditorComponent;
    }(DefaultEditor));
    CheckboxEditorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'checkbox-editor',
                    template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
                    styles: [":host input,:host textarea{line-height:normal;padding:.375em .75em;width:100%}"]
                },] }
    ];
    CheckboxEditorComponent.ctorParameters = function () { return []; };

    var CompleterEditorComponent = /** @class */ (function (_super) {
        __extends(CompleterEditorComponent, _super);
        function CompleterEditorComponent(completerService) {
            var _this = _super.call(this) || this;
            _this.completerService = completerService;
            _this.completerStr = '';
            return _this;
        }
        CompleterEditorComponent.prototype.ngOnInit = function () {
            if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
                var config = this.cell.getColumn().getConfig().completer;
                config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
                config.dataService.descriptionField(config.descriptionField);
            }
        };
        CompleterEditorComponent.prototype.onEditedCompleter = function (event) {
            this.cell.newValue = event.title;
            return false;
        };
        return CompleterEditorComponent;
    }(DefaultEditor));
    CompleterEditorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'completer-editor',
                    template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    "
                },] }
    ];
    CompleterEditorComponent.ctorParameters = function () { return [
        { type: ng2Completer.CompleterService }
    ]; };

    var InputEditorComponent = /** @class */ (function (_super) {
        __extends(InputEditorComponent, _super);
        function InputEditorComponent() {
            return _super.call(this) || this;
        }
        return InputEditorComponent;
    }(DefaultEditor));
    InputEditorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-editor',
                    template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
                    styles: [":host input,:host textarea{line-height:normal;padding:.375em .75em;width:100%}"]
                },] }
    ];
    InputEditorComponent.ctorParameters = function () { return []; };

    var SelectEditorComponent = /** @class */ (function (_super) {
        __extends(SelectEditorComponent, _super);
        function SelectEditorComponent() {
            return _super.call(this) || this;
        }
        return SelectEditorComponent;
    }(DefaultEditor));
    SelectEditorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-editor',
                    template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    "
                },] }
    ];
    SelectEditorComponent.ctorParameters = function () { return []; };

    var TextareaEditorComponent = /** @class */ (function (_super) {
        __extends(TextareaEditorComponent, _super);
        function TextareaEditorComponent() {
            return _super.call(this) || this;
        }
        return TextareaEditorComponent;
    }(DefaultEditor));
    TextareaEditorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'textarea-editor',
                    template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
                    styles: [":host input,:host textarea{line-height:normal;padding:.375em .75em;width:100%}"]
                },] }
    ];
    TextareaEditorComponent.ctorParameters = function () { return []; };

    var CustomViewComponent = /** @class */ (function () {
        function CustomViewComponent(resolver) {
            this.resolver = resolver;
        }
        CustomViewComponent.prototype.ngOnInit = function () {
            if (this.cell && !this.customComponent) {
                this.createCustomComponent();
                this.callOnComponentInit();
                this.patchInstance();
            }
        };
        CustomViewComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        CustomViewComponent.prototype.createCustomComponent = function () {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
        };
        CustomViewComponent.prototype.callOnComponentInit = function () {
            var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
            onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
        };
        CustomViewComponent.prototype.patchInstance = function () {
            Object.assign(this.customComponent.instance, this.getPatch());
        };
        CustomViewComponent.prototype.getPatch = function () {
            return {
                value: this.cell.getValue(),
                rowData: this.cell.getRow().getData()
            };
        };
        return CustomViewComponent;
    }());
    CustomViewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'custom-view-component',
                    template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
                },] }
    ];
    CustomViewComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver }
    ]; };
    CustomViewComponent.propDecorators = {
        cell: [{ type: core.Input }],
        dynamicTarget: [{ type: core.ViewChild, args: ['dynamicTarget', { read: core.ViewContainerRef, static: true },] }]
    };

    var ViewCellComponent = /** @class */ (function () {
        function ViewCellComponent() {
        }
        return ViewCellComponent;
    }());
    ViewCellComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-cell-view-mode',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    "
                },] }
    ];
    ViewCellComponent.propDecorators = {
        cell: [{ type: core.Input }]
    };

    var CELL_COMPONENTS = [
        CellComponent,
        EditCellDefault,
        DefaultEditor,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent,
    ];
    var CellModule = /** @class */ (function () {
        function CellModule() {
        }
        return CellModule;
    }());
    CellModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        ng2Completer.Ng2CompleterModule,
                    ],
                    declarations: __spread(CELL_COMPONENTS),
                    exports: __spread(CELL_COMPONENTS),
                },] }
    ];

    var FilterDefault = /** @class */ (function () {
        function FilterDefault() {
            this.inputClass = '';
            this.filter = new core.EventEmitter();
            this.query = '';
        }
        FilterDefault.prototype.onFilter = function (query) {
            this.source.addFilter({
                field: this.column.id,
                search: query,
                filter: this.column.getFilterFunction(),
            });
        };
        return FilterDefault;
    }());
    FilterDefault.decorators = [
        { type: core.Component, args: [{
                    template: ''
                },] }
    ];
    FilterDefault.propDecorators = {
        column: [{ type: core.Input }],
        source: [{ type: core.Input }],
        inputClass: [{ type: core.Input }],
        filter: [{ type: core.Output }]
    };

    var FilterComponent = /** @class */ (function (_super) {
        __extends(FilterComponent, _super);
        function FilterComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.query = '';
            return _this;
        }
        FilterComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    var filterConf = _this.source.getFilter();
                    if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                        _this.query = '';
                        // add a check for existing filters an set the query if one exists for this column
                        // this covers instances where the filter is set by user code while maintaining existing functionality
                    }
                    else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                        filterConf.filters.forEach(function (k, v) {
                            if (k.field == _this.column.id) {
                                _this.query = k.search;
                            }
                        });
                    }
                });
            }
        };
        return FilterComponent;
    }(FilterDefault));
    FilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-smart-table-filter',
                    template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
                    styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{font-weight:400;line-height:normal;padding:.375em .75em;width:100%}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder,:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
                },] }
    ];

    var DefaultFilterComponent = /** @class */ (function (_super) {
        __extends(DefaultFilterComponent, _super);
        function DefaultFilterComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DefaultFilterComponent;
    }(FilterDefault));
    DefaultFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'default-table-filter',
                    template: "\n    <ng-container [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </ng-container>\n  "
                },] }
    ];
    DefaultFilterComponent.propDecorators = {
        query: [{ type: core.Input }]
    };

    var CustomFilterComponent = /** @class */ (function (_super) {
        __extends(CustomFilterComponent, _super);
        function CustomFilterComponent(resolver) {
            var _this = _super.call(this) || this;
            _this.resolver = resolver;
            return _this;
        }
        CustomFilterComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (this.column && !this.customComponent) {
                var componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
                this.customComponent = this.dynamicTarget.createComponent(componentFactory);
                // set @Inputs and @Outputs of custom component
                this.customComponent.instance.query = this.query;
                this.customComponent.instance.column = this.column;
                this.customComponent.instance.source = this.source;
                this.customComponent.instance.inputClass = this.inputClass;
                this.customComponent.instance.filter.subscribe(function (event) { return _this.onFilter(event); });
            }
            if (this.customComponent) {
                this.customComponent.instance.ngOnChanges(changes);
            }
        };
        CustomFilterComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        return CustomFilterComponent;
    }(FilterDefault));
    CustomFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'custom-table-filter',
                    template: "<ng-template #dynamicTarget></ng-template>"
                },] }
    ];
    CustomFilterComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver }
    ]; };
    CustomFilterComponent.propDecorators = {
        query: [{ type: core.Input }],
        dynamicTarget: [{ type: core.ViewChild, args: ['dynamicTarget', { read: core.ViewContainerRef, static: true },] }]
    };

    var DefaultFilter = /** @class */ (function () {
        function DefaultFilter() {
            this.delay = 300;
            this.filter = new core.EventEmitter();
        }
        DefaultFilter.prototype.ngOnDestroy = function () {
            if (this.changesSubscription) {
                this.changesSubscription.unsubscribe();
            }
        };
        DefaultFilter.prototype.setFilter = function () {
            this.filter.emit(this.query);
        };
        return DefaultFilter;
    }());
    DefaultFilter.decorators = [
        { type: core.Component, args: [{
                    template: ''
                },] }
    ];
    DefaultFilter.propDecorators = {
        query: [{ type: core.Input }],
        inputClass: [{ type: core.Input }],
        column: [{ type: core.Input }],
        filter: [{ type: core.Output }]
    };

    var CheckboxFilterComponent = /** @class */ (function (_super) {
        __extends(CheckboxFilterComponent, _super);
        function CheckboxFilterComponent() {
            var _this = _super.call(this) || this;
            _this.filterActive = false;
            _this.inputControl = new forms.FormControl();
            return _this;
        }
        CheckboxFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.changesSubscription = this.inputControl.valueChanges
                .pipe(operators.debounceTime(this.delay))
                .subscribe(function (checked) {
                _this.filterActive = true;
                var trueVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().true) || true;
                var falseVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().false) || false;
                _this.query = checked ? trueVal : falseVal;
                _this.setFilter();
            });
        };
        CheckboxFilterComponent.prototype.resetFilter = function (event) {
            event.preventDefault();
            this.query = '';
            this.inputControl.setValue(false, { emitEvent: false });
            this.filterActive = false;
            this.setFilter();
        };
        return CheckboxFilterComponent;
    }(DefaultFilter));
    CheckboxFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'checkbox-filter',
                    template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  "
                },] }
    ];
    CheckboxFilterComponent.ctorParameters = function () { return []; };

    var CompleterFilterComponent = /** @class */ (function (_super) {
        __extends(CompleterFilterComponent, _super);
        function CompleterFilterComponent(completerService) {
            var _this = _super.call(this) || this;
            _this.completerService = completerService;
            _this.completerContent = new rxjs.Subject();
            return _this;
        }
        CompleterFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            var config = this.column.getFilterConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
            this.changesSubscription = this.completerContent
                .pipe(operators.map(function (ev) { return (ev && ev.title) || ev || ''; }), operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (search) {
                _this.query = search;
                _this.setFilter();
            });
        };
        CompleterFilterComponent.prototype.inputTextChanged = function (event) {
            // workaround to trigger the search event when the home/end buttons are clicked
            // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
            // so here it gets called manually
            if (event === '') {
                this.completerContent.next(event);
            }
        };
        return CompleterFilterComponent;
    }(DefaultFilter));
    CompleterFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'completer-filter',
                    template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  "
                },] }
    ];
    CompleterFilterComponent.ctorParameters = function () { return [
        { type: ng2Completer.CompleterService }
    ]; };

    var InputFilterComponent = /** @class */ (function (_super) {
        __extends(InputFilterComponent, _super);
        function InputFilterComponent() {
            var _this = _super.call(this) || this;
            _this.inputControl = new forms.FormControl();
            return _this;
        }
        InputFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.query) {
                this.inputControl.setValue(this.query);
            }
            this.inputControl.valueChanges
                .pipe(operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (value) {
                _this.query = _this.inputControl.value;
                _this.setFilter();
            });
        };
        InputFilterComponent.prototype.ngOnChanges = function (changes) {
            if (changes.query) {
                this.inputControl.setValue(this.query);
            }
        };
        return InputFilterComponent;
    }(DefaultFilter));
    InputFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-filter',
                    template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  "
                },] }
    ];
    InputFilterComponent.ctorParameters = function () { return []; };

    var SelectFilterComponent = /** @class */ (function (_super) {
        __extends(SelectFilterComponent, _super);
        function SelectFilterComponent() {
            return _super.call(this) || this;
        }
        SelectFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.inputControl.valueChanges
                .pipe(operators.skip(1), operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (value) { return _this.setFilter(); });
        };
        return SelectFilterComponent;
    }(DefaultFilter));
    SelectFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-filter',
                    template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  "
                },] }
    ];
    SelectFilterComponent.ctorParameters = function () { return []; };
    SelectFilterComponent.propDecorators = {
        inputControl: [{ type: core.ViewChild, args: ['inputControl', { read: forms.NgControl, static: true },] }]
    };

    var FILTER_COMPONENTS = [
        FilterDefault,
        DefaultFilter,
        FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent,
    ];
    var FilterModule = /** @class */ (function () {
        function FilterModule() {
        }
        return FilterModule;
    }());
    FilterModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        ng2Completer.Ng2CompleterModule,
                    ],
                    declarations: __spread(FILTER_COMPONENTS),
                    exports: __spread(FILTER_COMPONENTS),
                },] }
    ];

    var PagerComponent = /** @class */ (function () {
        function PagerComponent() {
            this.perPageSelect = [];
            this.changePage = new core.EventEmitter();
            this.count = 0;
        }
        PagerComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    _this.page = _this.source.getPaging().page;
                    _this.perPage = _this.source.getPaging().perPage;
                    _this.currentPerPage = _this.perPage;
                    _this.count = _this.source.count();
                    if (_this.isPageOutOfBounce()) {
                        _this.source.setPage(--_this.page);
                    }
                    _this.processPageChange(dataChanges);
                    _this.initPages();
                });
            }
        };
        /**
         * We change the page here depending on the action performed against data source
         * if a new element was added to the end of the table - then change the page to the last
         * if a new element was added to the beginning of the table - then to the first page
         * @param changes
         */
        PagerComponent.prototype.processPageChange = function (changes) {
            if (changes['action'] === 'prepend') {
                this.source.setPage(1);
            }
            if (changes['action'] === 'append') {
                this.source.setPage(this.getLast());
            }
        };
        PagerComponent.prototype.shouldShow = function () {
            return this.source.count() > this.perPage;
        };
        PagerComponent.prototype.paginate = function (page) {
            this.source.setPage(page);
            this.page = page;
            this.changePage.emit({ page: page });
            return false;
        };
        PagerComponent.prototype.next = function () {
            return this.paginate(this.getPage() + 1);
        };
        PagerComponent.prototype.prev = function () {
            return this.paginate(this.getPage() - 1);
        };
        PagerComponent.prototype.getPage = function () {
            return this.page;
        };
        PagerComponent.prototype.getPages = function () {
            return this.pages;
        };
        PagerComponent.prototype.getLast = function () {
            return Math.ceil(this.count / this.perPage);
        };
        PagerComponent.prototype.isPageOutOfBounce = function () {
            return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
        };
        PagerComponent.prototype.initPages = function () {
            var pagesCount = this.getLast();
            var showPagesCount = 4;
            showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
            this.pages = [];
            if (this.shouldShow()) {
                var middleOne = Math.ceil(showPagesCount / 2);
                middleOne = this.page >= middleOne ? this.page : middleOne;
                var lastOne = middleOne + Math.floor(showPagesCount / 2);
                lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
                var firstOne = lastOne - showPagesCount + 1;
                for (var i = firstOne; i <= lastOne; i++) {
                    this.pages.push(i);
                }
            }
        };
        PagerComponent.prototype.onChangePerPage = function (event) {
            if (this.currentPerPage) {
                if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                    this.source.getPaging().perPage = null;
                }
                else {
                    this.source.getPaging().perPage = this.currentPerPage * 1;
                    this.source.refresh();
                }
                this.initPages();
            }
        };
        return PagerComponent;
    }());
    PagerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-smart-table-pager',
                    template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
                    styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host label,:host select{margin:1rem 0 1rem 1rem}:host label{line-height:2.5rem}"]
                },] }
    ];
    PagerComponent.propDecorators = {
        source: [{ type: core.Input }],
        perPageSelect: [{ type: core.Input }],
        changePage: [{ type: core.Output }]
    };

    var PagerModule = /** @class */ (function () {
        function PagerModule() {
        }
        return PagerModule;
    }());
    PagerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                    ],
                    declarations: [
                        PagerComponent,
                    ],
                    exports: [
                        PagerComponent,
                    ],
                },] }
    ];

    var Ng2SmartTableTbodyComponent = /** @class */ (function () {
        function Ng2SmartTableTbodyComponent() {
            this.save = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
            this.edit = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.custom = new core.EventEmitter();
            this.edited = new core.EventEmitter();
            this.userSelectRow = new core.EventEmitter();
            this.editRowSelect = new core.EventEmitter();
            this.multipleSelectRow = new core.EventEmitter();
            this.rowHover = new core.EventEmitter();
        }
        Object.defineProperty(Ng2SmartTableTbodyComponent.prototype, "tableColumnsCount", {
            get: function () {
                var actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
                return this.grid.getColumns().length + actionColumns;
            },
            enumerable: false,
            configurable: true
        });
        Ng2SmartTableTbodyComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.mode = this.grid.getSetting('mode');
            this.editInputClass = this.grid.getSetting('edit.inputClass');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.noDataMessage = this.grid.getSetting('noDataMessage');
        };
        Ng2SmartTableTbodyComponent.prototype.getVisibleCells = function (cells) {
            return (cells || []).filter(function (cell) { return !cell.getColumn().hide; });
        };
        return Ng2SmartTableTbodyComponent;
    }());
    Ng2SmartTableTbodyComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng2-st-tbody]',
                    template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of getVisibleCells(row.cells)\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n",
                    styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-create-cancel a:first-child,:host ::ng-deep ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
                },] }
    ];
    Ng2SmartTableTbodyComponent.propDecorators = {
        grid: [{ type: core.Input }],
        source: [{ type: core.Input }],
        deleteConfirm: [{ type: core.Input }],
        editConfirm: [{ type: core.Input }],
        rowClassFunction: [{ type: core.Input }],
        save: [{ type: core.Output }],
        cancel: [{ type: core.Output }],
        edit: [{ type: core.Output }],
        delete: [{ type: core.Output }],
        custom: [{ type: core.Output }],
        edited: [{ type: core.Output }],
        userSelectRow: [{ type: core.Output }],
        editRowSelect: [{ type: core.Output }],
        multipleSelectRow: [{ type: core.Output }],
        rowHover: [{ type: core.Output }]
    };

    var TbodyCreateCancelComponent = /** @class */ (function () {
        function TbodyCreateCancelComponent() {
        }
        TbodyCreateCancelComponent.prototype.onSave = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.grid.save(this.row, this.editConfirm);
        };
        TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.row.isInEditing = false;
        };
        TbodyCreateCancelComponent.prototype.ngOnChanges = function () {
            this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
            this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
        };
        return TbodyCreateCancelComponent;
    }());
    TbodyCreateCancelComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-st-tbody-create-cancel',
                    template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  "
                },] }
    ];
    TbodyCreateCancelComponent.propDecorators = {
        grid: [{ type: core.Input }],
        row: [{ type: core.Input }],
        editConfirm: [{ type: core.Input }]
    };

    var TbodyEditDeleteComponent = /** @class */ (function () {
        function TbodyEditDeleteComponent() {
            this.edit = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.editRowSelect = new core.EventEmitter();
        }
        TbodyEditDeleteComponent.prototype.onEdit = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.editRowSelect.emit(this.row);
            if (this.grid.getSetting('mode') === 'external') {
                this.edit.emit({
                    data: this.row.getData(),
                    source: this.source,
                });
            }
            else {
                this.grid.edit(this.row);
            }
        };
        TbodyEditDeleteComponent.prototype.onDelete = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.grid.getSetting('mode') === 'external') {
                this.delete.emit({
                    data: this.row.getData(),
                    source: this.source,
                });
            }
            else {
                this.grid.delete(this.row, this.deleteConfirm);
            }
        };
        TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
            this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
        };
        return TbodyEditDeleteComponent;
    }());
    TbodyEditDeleteComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-st-tbody-edit-delete',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  "
                },] }
    ];
    TbodyEditDeleteComponent.propDecorators = {
        grid: [{ type: core.Input }],
        row: [{ type: core.Input }],
        source: [{ type: core.Input }],
        deleteConfirm: [{ type: core.Input }],
        editConfirm: [{ type: core.Input }],
        edit: [{ type: core.Output }],
        delete: [{ type: core.Output }],
        editRowSelect: [{ type: core.Output }]
    };

    var TbodyCustomComponent = /** @class */ (function () {
        function TbodyCustomComponent() {
            this.custom = new core.EventEmitter();
        }
        TbodyCustomComponent.prototype.onCustom = function (action, event) {
            event.preventDefault();
            event.stopPropagation();
            this.custom.emit({
                action: action.name,
                data: this.row.getData(),
                source: this.source
            });
        };
        return TbodyCustomComponent;
    }());
    TbodyCustomComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-st-tbody-custom',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
                },] }
    ];
    TbodyCustomComponent.propDecorators = {
        grid: [{ type: core.Input }],
        row: [{ type: core.Input }],
        source: [{ type: core.Input }],
        custom: [{ type: core.Output }]
    };

    var TBODY_COMPONENTS = [
        TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent
    ];
    var TBodyModule = /** @class */ (function () {
        function TBodyModule() {
        }
        return TBodyModule;
    }());
    TBodyModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        CellModule,
                    ],
                    declarations: __spread(TBODY_COMPONENTS),
                    exports: __spread(TBODY_COMPONENTS),
                },] }
    ];

    var Ng2SmartTableTheadComponent = /** @class */ (function () {
        function Ng2SmartTableTheadComponent() {
            this.sort = new core.EventEmitter();
            this.selectAllRows = new core.EventEmitter();
            this.create = new core.EventEmitter();
            this.filter = new core.EventEmitter();
        }
        Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        };
        return Ng2SmartTableTheadComponent;
    }());
    Ng2SmartTableTheadComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng2-st-thead]',
                    template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\n                            class=\"ng2-smart-titles\"\n                            [grid]=\"grid\"\n                            [isAllSelected]=\"isAllSelected\"\n                            [source]=\"source\"\n                            (sort)=\"sort.emit($event)\"\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\n                              class=\"ng2-smart-filters\"\n                              [grid]=\"grid\"\n                              [source]=\"source\"\n                              (create)=\"create.emit($event)\"\n                              (filter)=\"filter.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\n                          [grid]=\"grid\"\n                          [createConfirm]=\"createConfirm\">\n</tr>\n"
                },] }
    ];
    Ng2SmartTableTheadComponent.propDecorators = {
        grid: [{ type: core.Input }],
        source: [{ type: core.Input }],
        isAllSelected: [{ type: core.Input }],
        createConfirm: [{ type: core.Input }],
        sort: [{ type: core.Output }],
        selectAllRows: [{ type: core.Output }],
        create: [{ type: core.Output }],
        filter: [{ type: core.Output }]
    };

    var ActionsComponent = /** @class */ (function () {
        function ActionsComponent() {
            this.create = new core.EventEmitter();
        }
        ActionsComponent.prototype.ngOnChanges = function () {
            this.createButtonContent = this.grid.getSetting('add.createButtonContent');
            this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
        };
        return ActionsComponent;
    }());
    ActionsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-st-actions',
                    template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  "
                },] }
    ];
    ActionsComponent.propDecorators = {
        grid: [{ type: core.Input }],
        create: [{ type: core.Output }]
    };

    var ActionsTitleComponent = /** @class */ (function () {
        function ActionsTitleComponent(ref) {
            this.ref = ref;
        }
        ActionsTitleComponent.prototype.ngAfterViewInit = function () {
            this.ref.nativeElement.classList.add('ng2-smart-actions');
        };
        ActionsTitleComponent.prototype.ngOnChanges = function () {
            this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
        };
        return ActionsTitleComponent;
    }());
    ActionsTitleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng2-st-actions-title]',
                    template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  "
                },] }
    ];
    ActionsTitleComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ActionsTitleComponent.propDecorators = {
        grid: [{ type: core.Input }]
    };

    var AddButtonComponent = /** @class */ (function () {
        function AddButtonComponent(ref) {
            this.ref = ref;
            this.create = new core.EventEmitter();
        }
        AddButtonComponent.prototype.ngAfterViewInit = function () {
            this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
        };
        AddButtonComponent.prototype.ngOnChanges = function () {
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
        };
        AddButtonComponent.prototype.onAdd = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.grid.getSetting('mode') === 'external') {
                this.create.emit({
                    source: this.source,
                });
            }
            else {
                this.grid.createFormShown = true;
            }
        };
        return AddButtonComponent;
    }());
    AddButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng2-st-add-button]',
                    template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  "
                },] }
    ];
    AddButtonComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    AddButtonComponent.propDecorators = {
        grid: [{ type: core.Input }],
        source: [{ type: core.Input }],
        create: [{ type: core.Output }]
    };

    var CheckboxSelectAllComponent = /** @class */ (function () {
        function CheckboxSelectAllComponent() {
        }
        return CheckboxSelectAllComponent;
    }());
    CheckboxSelectAllComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng2-st-checkbox-select-all]',
                    template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  "
                },] }
    ];
    CheckboxSelectAllComponent.propDecorators = {
        grid: [{ type: core.Input }],
        source: [{ type: core.Input }],
        isAllSelected: [{ type: core.Input }]
    };

    var ColumnTitleComponent = /** @class */ (function () {
        function ColumnTitleComponent() {
            this.sort = new core.EventEmitter();
        }
        return ColumnTitleComponent;
    }());
    ColumnTitleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-st-column-title',
                    template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  "
                },] }
    ];
    ColumnTitleComponent.propDecorators = {
        column: [{ type: core.Input }],
        source: [{ type: core.Input }],
        sort: [{ type: core.Output }]
    };

    var TitleComponent = /** @class */ (function () {
        function TitleComponent() {
            this.currentDirection = '';
            this.sort = new core.EventEmitter();
        }
        TitleComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    var sortConf = _this.source.getSort();
                    if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                        _this.currentDirection = sortConf[0]['direction'];
                    }
                    else {
                        _this.currentDirection = '';
                    }
                    sortConf.forEach(function (fieldConf) {
                    });
                });
            }
        };
        TitleComponent.prototype._sort = function (event) {
            event.preventDefault();
            this.changeSortDirection();
            this.source.setSort([
                {
                    field: this.column.id,
                    direction: this.currentDirection,
                    compare: this.column.getCompareFunction(),
                },
            ]);
            this.sort.emit(null);
        };
        TitleComponent.prototype.changeSortDirection = function () {
            if (this.currentDirection) {
                var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
                this.currentDirection = newDirection;
            }
            else {
                this.currentDirection = this.column.sortDirection;
            }
            return this.currentDirection;
        };
        return TitleComponent;
    }());
    TitleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-smart-table-title',
                    template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
                    styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{border:4px solid transparent;border-bottom-color:rgba(0,0,0,.3);content:\"\";display:inline-block;height:0;margin-bottom:2px;width:0}a.sort.desc:after{margin-bottom:-2px;transform:rotate(-180deg)}"]
                },] }
    ];
    TitleComponent.propDecorators = {
        column: [{ type: core.Input }],
        source: [{ type: core.Input }],
        sort: [{ type: core.Output }]
    };

    var TheadFitlersRowComponent = /** @class */ (function () {
        function TheadFitlersRowComponent() {
            this.create = new core.EventEmitter();
            this.filter = new core.EventEmitter();
        }
        TheadFitlersRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.filterInputClass = this.grid.getSetting('filter.inputClass');
        };
        TheadFitlersRowComponent.prototype.getVisibleColumns = function (columns) {
            return (columns || []).filter(function (column) { return !column.hide; });
        };
        return TheadFitlersRowComponent;
    }());
    TheadFitlersRowComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng2-st-thead-filters-row]',
                    template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of getVisibleColumns(grid.getColumns())\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  "
                },] }
    ];
    TheadFitlersRowComponent.propDecorators = {
        grid: [{ type: core.Input }],
        source: [{ type: core.Input }],
        create: [{ type: core.Output }],
        filter: [{ type: core.Output }]
    };

    var TheadFormRowComponent = /** @class */ (function () {
        function TheadFormRowComponent() {
            this.create = new core.EventEmitter();
        }
        TheadFormRowComponent.prototype.onCreate = function (event) {
            event.stopPropagation();
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        };
        TheadFormRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.addInputClass = this.grid.getSetting('add.inputClass');
        };
        TheadFormRowComponent.prototype.getVisibleCells = function (cells) {
            return (cells || []).filter(function (cell) { return !cell.getColumn().hide; });
        };
        return TheadFormRowComponent;
    }());
    TheadFormRowComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng2-st-thead-form-row]',
                    template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of getVisibleCells(grid.getNewRow().getCells())\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  "
                },] }
    ];
    TheadFormRowComponent.propDecorators = {
        grid: [{ type: core.Input }],
        row: [{ type: core.Input }],
        createConfirm: [{ type: core.Input }],
        create: [{ type: core.Output }]
    };

    var TheadTitlesRowComponent = /** @class */ (function () {
        function TheadTitlesRowComponent() {
            this.sort = new core.EventEmitter();
            this.selectAllRows = new core.EventEmitter();
        }
        TheadTitlesRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
        };
        TheadTitlesRowComponent.prototype.getVisibleColumns = function (columns) {
            return (columns || []).filter(function (column) { return !column.hide; });
        };
        return TheadTitlesRowComponent;
    }());
    TheadTitlesRowComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng2-st-thead-titles-row]',
                    template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of getVisibleColumns(grid.getColumns())\"\n        class=\"ng2-smart-th {{ column.id }}\"\n        [ngClass]=\"column.class\"\n        [style.width]=\"column.width\">\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  "
                },] }
    ];
    TheadTitlesRowComponent.propDecorators = {
        grid: [{ type: core.Input }],
        isAllSelected: [{ type: core.Input }],
        source: [{ type: core.Input }],
        sort: [{ type: core.Output }],
        selectAllRows: [{ type: core.Output }]
    };

    var THEAD_COMPONENTS = [
        ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent,
    ];
    var THeadModule = /** @class */ (function () {
        function THeadModule() {
        }
        return THeadModule;
    }());
    THeadModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        FilterModule,
                        CellModule,
                    ],
                    declarations: __spread(THEAD_COMPONENTS),
                    exports: __spread(THEAD_COMPONENTS),
                },] }
    ];

    /**
     * Extending object that entered in first argument.
     *
     * Returns extended object or false if have no target object or incorrect type.
     *
     * If you wish to clone source object (without modify it), just use empty new
     * object as first argument, like this:
     *   deepExtend({}, yourObj_1, [yourObj_N]);
     */
    var deepExtend = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        if (arguments.length < 1 || typeof arguments[0] !== 'object') {
            return false;
        }
        if (arguments.length < 2) {
            return arguments[0];
        }
        var target = arguments[0];
        // convert arguments to array and cut off target object
        var args = Array.prototype.slice.call(arguments, 1);
        var val, src;
        args.forEach(function (obj) {
            // skip argument if it is array or isn't object
            if (typeof obj !== 'object' || Array.isArray(obj)) {
                return;
            }
            Object.keys(obj).forEach(function (key) {
                src = target[key]; // source value
                val = obj[key]; // new value
                // recursion prevention
                if (val === target) {
                    return;
                    /**
                     * if new value isn't object then just overwrite by new value
                     * instead of extending.
                     */
                }
                else if (typeof val !== 'object' || val === null) {
                    target[key] = val;
                    return;
                    // just clone arrays (and recursive clone objects inside)
                }
                else if (Array.isArray(val)) {
                    target[key] = lodash.cloneDeep(val);
                    return;
                    // overwrite by new value if source isn't object or array
                }
                else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                    target[key] = deepExtend({}, val);
                    return;
                    // source value and new value is objects both, extending...
                }
                else {
                    target[key] = deepExtend(src, val);
                    return;
                }
            });
        });
        return target;
    };
    var Deferred = /** @class */ (function () {
        function Deferred() {
            var _this = this;
            this.promise = new Promise(function (resolve, reject) {
                _this.resolve = resolve;
                _this.reject = reject;
            });
        }
        return Deferred;
    }());
    // getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
    function getDeepFromObject(object, name, defaultValue) {
        if (object === void 0) { object = {}; }
        var keys = name.split('.');
        // clone the object
        var level = deepExtend({}, object);
        keys.forEach(function (k) {
            if (level && typeof level[k] !== 'undefined') {
                level = level[k];
            }
        });
        return typeof level === 'undefined' ? defaultValue : level;
    }
    function getPageForRowIndex(index, perPage) {
        // we need to add 1 to convert 0-based index to 1-based page number.
        return Math.floor(index / perPage) + 1;
    }

    function prepareValue(value) { return value; }
    var Cell = /** @class */ (function () {
        function Cell(value, row, column, dataSet) {
            this.value = value;
            this.row = row;
            this.column = column;
            this.dataSet = dataSet;
            this.newValue = '';
            this.newValue = value;
        }
        Cell.prototype.getColumn = function () {
            return this.column;
        };
        Cell.prototype.getRow = function () {
            return this.row;
        };
        Cell.prototype.getValue = function () {
            var valid = this.column.getValuePrepareFunction() instanceof Function;
            var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
            return prepare.call(null, this.value, this.row.getData(), this);
        };
        Cell.prototype.setValue = function (value) {
            this.newValue = value;
        };
        Cell.prototype.getId = function () {
            return this.getColumn().id;
        };
        Cell.prototype.getTitle = function () {
            return this.getColumn().title;
        };
        Cell.prototype.isEditable = function () {
            if (this.getRow().index === -1) {
                return this.getColumn().isAddable;
            }
            else {
                return this.getColumn().isEditable;
            }
        };
        return Cell;
    }());
    Cell.PREPARE = prepareValue;

    var Row = /** @class */ (function () {
        function Row(index, data, _dataSet) {
            this.index = index;
            this.data = data;
            this._dataSet = _dataSet;
            this.isSelected = false;
            this.isInEditing = false;
            this.cells = [];
            this.process();
        }
        Row.prototype.getCell = function (column) {
            return this.cells.find(function (el) { return el.getColumn() === column; });
        };
        Row.prototype.getCells = function () {
            return this.cells;
        };
        Row.prototype.getData = function () {
            return this.data;
        };
        Row.prototype.getIsSelected = function () {
            return this.isSelected;
        };
        Row.prototype.getNewData = function () {
            var values = Object.assign({}, this.data);
            this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
            return values;
        };
        Row.prototype.setData = function (data) {
            this.data = data;
            this.process();
        };
        Row.prototype.process = function () {
            var _this = this;
            this.cells = [];
            this._dataSet.getColumns().forEach(function (column) {
                var cell = _this.createCell(column);
                _this.cells.push(cell);
            });
        };
        Row.prototype.createCell = function (column) {
            var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
            var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
            return new Cell(value, this, column, this._dataSet);
        };
        return Row;
    }());

    var Column = /** @class */ (function () {
        function Column(id, settings, dataSet) {
            this.id = id;
            this.settings = settings;
            this.dataSet = dataSet;
            this.title = '';
            this.type = '';
            this.class = '';
            this.width = '';
            this.hide = false;
            this.isSortable = false;
            this.isEditable = true;
            this.isAddable = true;
            this.isFilterable = false;
            this.sortDirection = '';
            this.defaultSortDirection = '';
            this.editor = { type: '', config: {}, component: null };
            this.filter = { type: '', config: {}, component: null };
            this.renderComponent = null;
            this.process();
        }
        Column.prototype.getOnComponentInitFunction = function () {
            return this.onComponentInitFunction;
        };
        Column.prototype.getCompareFunction = function () {
            return this.compareFunction;
        };
        Column.prototype.getValuePrepareFunction = function () {
            return this.valuePrepareFunction;
        };
        Column.prototype.getFilterFunction = function () {
            return this.filterFunction;
        };
        Column.prototype.getConfig = function () {
            return this.editor && this.editor.config;
        };
        Column.prototype.getFilterType = function () {
            return this.filter && this.filter.type;
        };
        Column.prototype.getFilterConfig = function () {
            return this.filter && this.filter.config;
        };
        Column.prototype.process = function () {
            this.title = this.settings['title'];
            this.class = this.settings['class'];
            this.width = this.settings['width'];
            this.hide = !!this.settings['hide'];
            this.type = this.prepareType();
            this.editor = this.settings['editor'];
            this.filter = this.settings['filter'];
            this.renderComponent = this.settings['renderComponent'];
            this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
            this.defaultSortDirection = ['asc', 'desc']
                .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
            this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
            this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
            this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
            this.sortDirection = this.prepareSortDirection();
            this.compareFunction = this.settings['compareFunction'];
            this.valuePrepareFunction = this.settings['valuePrepareFunction'];
            this.filterFunction = this.settings['filterFunction'];
            this.onComponentInitFunction = this.settings['onComponentInitFunction'];
        };
        Column.prototype.prepareType = function () {
            return this.settings['type'] || this.determineType();
        };
        Column.prototype.prepareSortDirection = function () {
            return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
        };
        Column.prototype.determineType = function () {
            // TODO: determine type by data
            return 'text';
        };
        return Column;
    }());

    var DataSet = /** @class */ (function () {
        function DataSet(data, columnSettings) {
            if (data === void 0) { data = []; }
            this.columnSettings = columnSettings;
            this.data = [];
            this.columns = [];
            this.rows = [];
            this.createColumns(columnSettings);
            this.setData(data);
            this.createNewRow();
        }
        DataSet.prototype.setData = function (data) {
            this.data = data;
            this.createRows();
        };
        DataSet.prototype.getColumns = function () {
            return this.columns;
        };
        DataSet.prototype.getRows = function () {
            return this.rows;
        };
        DataSet.prototype.getFirstRow = function () {
            return this.rows[0];
        };
        DataSet.prototype.getLastRow = function () {
            return this.rows[this.rows.length - 1];
        };
        DataSet.prototype.findRowByData = function (data) {
            return this.rows.find(function (row) { return row.getData() === data; });
        };
        DataSet.prototype.deselectAll = function () {
            this.rows.forEach(function (row) {
                row.isSelected = false;
            });
            // we need to clear selectedRow field because no one row selected
            this.selectedRow = undefined;
        };
        DataSet.prototype.selectRow = function (row) {
            var previousIsSelected = row.isSelected;
            this.deselectAll();
            row.isSelected = !previousIsSelected;
            this.selectedRow = row;
            return this.selectedRow;
        };
        DataSet.prototype.multipleSelectRow = function (row) {
            row.isSelected = !row.isSelected;
            this.selectedRow = row;
            return this.selectedRow;
        };
        DataSet.prototype.selectPreviousRow = function () {
            if (this.rows.length > 0) {
                var index = this.selectedRow ? this.selectedRow.index : 0;
                if (index > this.rows.length - 1) {
                    index = this.rows.length - 1;
                }
                this.selectRow(this.rows[index]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.selectFirstRow = function () {
            if (this.rows.length > 0) {
                this.selectRow(this.rows[0]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.selectLastRow = function () {
            if (this.rows.length > 0) {
                this.selectRow(this.rows[this.rows.length - 1]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.selectRowByIndex = function (index) {
            var rowsLength = this.rows.length;
            if (rowsLength === 0) {
                return;
            }
            if (!index) {
                this.selectFirstRow();
                return this.selectedRow;
            }
            if (index > 0 && index < rowsLength) {
                this.selectRow(this.rows[index]);
                return this.selectedRow;
            }
            // we need to deselect all rows if we got an incorrect index
            this.deselectAll();
        };
        DataSet.prototype.willSelectFirstRow = function () {
            this.willSelect = 'first';
        };
        DataSet.prototype.willSelectLastRow = function () {
            this.willSelect = 'last';
        };
        DataSet.prototype.select = function (selectedRowIndex) {
            if (this.getRows().length === 0) {
                return;
            }
            if (this.willSelect) {
                if (this.willSelect === 'first') {
                    this.selectFirstRow();
                }
                if (this.willSelect === 'last') {
                    this.selectLastRow();
                }
                this.willSelect = '';
            }
            else {
                this.selectRowByIndex(selectedRowIndex);
            }
            return this.selectedRow;
        };
        DataSet.prototype.createNewRow = function () {
            this.newRow = new Row(-1, {}, this);
            this.newRow.isInEditing = true;
        };
        /**
         * Create columns by mapping from the settings
         * @param settings
         * @private
         */
        DataSet.prototype.createColumns = function (settings) {
            for (var id in settings) {
                if (settings.hasOwnProperty(id)) {
                    this.columns.push(new Column(id, settings[id], this));
                }
            }
        };
        /**
         * Create rows based on current data prepared in data source
         * @private
         */
        DataSet.prototype.createRows = function () {
            var _this = this;
            this.rows = [];
            this.data.forEach(function (el, index) {
                _this.rows.push(new Row(index, el, _this));
            });
        };
        return DataSet;
    }());

    var Grid = /** @class */ (function () {
        function Grid(source, settings) {
            this.createFormShown = false;
            this.onSelectRowSource = new rxjs.Subject();
            this.onDeselectRowSource = new rxjs.Subject();
            this.setSettings(settings);
            this.setSource(source);
        }
        Grid.prototype.detach = function () {
            if (this.sourceOnChangedSubscription) {
                this.sourceOnChangedSubscription.unsubscribe();
            }
            if (this.sourceOnUpdatedSubscription) {
                this.sourceOnUpdatedSubscription.unsubscribe();
            }
        };
        Grid.prototype.showActionColumn = function (position) {
            return this.isCurrentActionsPosition(position) && this.isActionsVisible();
        };
        Grid.prototype.isCurrentActionsPosition = function (position) {
            return position == this.getSetting('actions.position');
        };
        Grid.prototype.isActionsVisible = function () {
            return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
        };
        Grid.prototype.isMultiSelectVisible = function () {
            return this.getSetting('selectMode') === 'multi';
        };
        Grid.prototype.getNewRow = function () {
            return this.dataSet.newRow;
        };
        Grid.prototype.setSettings = function (settings) {
            this.settings = settings;
            this.dataSet = new DataSet([], this.getSetting('columns'));
            if (this.source) {
                this.source.refresh();
            }
        };
        Grid.prototype.getDataSet = function () {
            return this.dataSet;
        };
        Grid.prototype.setSource = function (source) {
            var _this = this;
            this.source = this.prepareSource(source);
            this.detach();
            this.sourceOnChangedSubscription = this.source.onChanged().subscribe(function (changes) { return _this.processDataChange(changes); });
            this.sourceOnUpdatedSubscription = this.source.onUpdated().subscribe(function (data) {
                var changedRow = _this.dataSet.findRowByData(data);
                changedRow.setData(data);
            });
        };
        Grid.prototype.getSetting = function (name, defaultValue) {
            return getDeepFromObject(this.settings, name, defaultValue);
        };
        Grid.prototype.getColumns = function () {
            return this.dataSet.getColumns();
        };
        Grid.prototype.getRows = function () {
            return this.dataSet.getRows();
        };
        Grid.prototype.selectRow = function (row) {
            this.dataSet.selectRow(row);
        };
        Grid.prototype.multipleSelectRow = function (row) {
            this.dataSet.multipleSelectRow(row);
        };
        Grid.prototype.onSelectRow = function () {
            return this.onSelectRowSource.asObservable();
        };
        Grid.prototype.onDeselectRow = function () {
            return this.onDeselectRowSource.asObservable();
        };
        Grid.prototype.edit = function (row) {
            row.isInEditing = true;
        };
        Grid.prototype.create = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
                newData = newData ? newData : row.getNewData();
                if (deferred.resolve.skipAdd) {
                    _this.createFormShown = false;
                }
                else {
                    _this.source.prepend(newData).then(function () {
                        _this.createFormShown = false;
                        _this.dataSet.createNewRow();
                    });
                }
            }).catch(function (err) {
                // doing nothing
            });
            if (this.getSetting('add.confirmCreate')) {
                confirmEmitter.emit({
                    newData: row.getNewData(),
                    source: this.source,
                    confirm: deferred,
                });
            }
            else {
                deferred.resolve();
            }
        };
        Grid.prototype.save = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
                newData = newData ? newData : row.getNewData();
                if (deferred.resolve.skipEdit) {
                    row.isInEditing = false;
                }
                else {
                    _this.source.update(row.getData(), newData).then(function () {
                        row.isInEditing = false;
                    });
                }
            }).catch(function (err) {
                // doing nothing
            });
            if (this.getSetting('edit.confirmSave')) {
                confirmEmitter.emit({
                    data: row.getData(),
                    newData: row.getNewData(),
                    source: this.source,
                    confirm: deferred,
                });
            }
            else {
                deferred.resolve();
            }
        };
        Grid.prototype.delete = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function () {
                _this.source.remove(row.getData());
            }).catch(function (err) {
                // doing nothing
            });
            if (this.getSetting('delete.confirmDelete')) {
                confirmEmitter.emit({
                    data: row.getData(),
                    source: this.source,
                    confirm: deferred,
                });
            }
            else {
                deferred.resolve();
            }
        };
        Grid.prototype.processDataChange = function (changes) {
            if (this.shouldProcessChange(changes)) {
                this.dataSet.setData(changes['elements']);
                if (this.getSetting('selectMode') !== 'multi') {
                    var row = this.determineRowToSelect(changes);
                    if (row) {
                        this.onSelectRowSource.next(row);
                    }
                    else {
                        this.onDeselectRowSource.next(null);
                    }
                }
            }
        };
        Grid.prototype.shouldProcessChange = function (changes) {
            if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
                return true;
            }
            else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
                return true;
            }
            return false;
        };
        /**
         * @breaking-change 1.8.0
         * Need to add `| null` in return type
         *
         * TODO: move to selectable? Separate directive
         */
        Grid.prototype.determineRowToSelect = function (changes) {
            if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
                return this.dataSet.select(this.getRowIndexToSelect());
            }
            if (this.shouldSkipSelection()) {
                return null;
            }
            if (changes['action'] === 'remove') {
                if (changes['elements'].length === 0) {
                    // we have to store which one to select as the data will be reloaded
                    this.dataSet.willSelectLastRow();
                }
                else {
                    return this.dataSet.selectPreviousRow();
                }
            }
            if (changes['action'] === 'append') {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            }
            if (changes['action'] === 'add') {
                return this.dataSet.selectFirstRow();
            }
            if (changes['action'] === 'update') {
                return this.dataSet.selectFirstRow();
            }
            if (changes['action'] === 'prepend') {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectFirstRow();
            }
            return null;
        };
        Grid.prototype.prepareSource = function (source) {
            var initialSource = this.getInitialSort();
            if (initialSource && initialSource['field'] && initialSource['direction']) {
                source.setSort([initialSource], false);
            }
            if (this.getSetting('pager.display') === true) {
                source.setPaging(this.getPageToSelect(source), this.getSetting('pager.perPage'), false);
            }
            source.refresh();
            return source;
        };
        Grid.prototype.getInitialSort = function () {
            var sortConf = {};
            this.getColumns().forEach(function (column) {
                if (column.isSortable && column.defaultSortDirection) {
                    sortConf['field'] = column.id;
                    sortConf['direction'] = column.defaultSortDirection;
                    sortConf['compare'] = column.getCompareFunction();
                }
            });
            return sortConf;
        };
        Grid.prototype.getSelectedRows = function () {
            return this.dataSet.getRows()
                .filter(function (r) { return r.isSelected; });
        };
        Grid.prototype.selectAllRows = function (status) {
            this.dataSet.getRows()
                .forEach(function (r) { return r.isSelected = status; });
        };
        Grid.prototype.getFirstRow = function () {
            return this.dataSet.getFirstRow();
        };
        Grid.prototype.getLastRow = function () {
            return this.dataSet.getLastRow();
        };
        Grid.prototype.getSelectionInfo = function () {
            var switchPageToSelectedRowPage = this.getSetting('switchPageToSelectedRowPage');
            var selectedRowIndex = Number(this.getSetting('selectedRowIndex', 0)) || 0;
            var _a = this.getSetting('pager'), perPage = _a.perPage, page = _a.page;
            return { perPage: perPage, page: page, selectedRowIndex: selectedRowIndex, switchPageToSelectedRowPage: switchPageToSelectedRowPage };
        };
        Grid.prototype.getRowIndexToSelect = function () {
            var _a = this.getSelectionInfo(), switchPageToSelectedRowPage = _a.switchPageToSelectedRowPage, selectedRowIndex = _a.selectedRowIndex, perPage = _a.perPage;
            var dataAmount = this.source.count();
            /**
             * source - contains all table data
             * dataSet - contains data for current page
             * selectedRowIndex - contains index for data in all data
             *
             * because of that, we need to count index for a specific row in page
             * if
             * `switchPageToSelectedRowPage` - we need to change page automatically
             * `selectedRowIndex < dataAmount && selectedRowIndex >= 0` - index points to existing data
             * (if index points to non-existing data and we calculate index for current page - we will get wrong selected row.
             *  if we return index witch not points to existing data - no line will be highlighted)
             */
            return (switchPageToSelectedRowPage &&
                selectedRowIndex < dataAmount &&
                selectedRowIndex >= 0) ?
                selectedRowIndex % perPage :
                selectedRowIndex;
        };
        Grid.prototype.getPageToSelect = function (source) {
            var _a = this.getSelectionInfo(), switchPageToSelectedRowPage = _a.switchPageToSelectedRowPage, selectedRowIndex = _a.selectedRowIndex, perPage = _a.perPage, page = _a.page;
            var pageToSelect = Math.max(1, page);
            if (switchPageToSelectedRowPage && selectedRowIndex >= 0) {
                pageToSelect = getPageForRowIndex(selectedRowIndex, perPage);
            }
            var maxPageAmount = Math.ceil(source.count() / perPage);
            return maxPageAmount ? Math.min(pageToSelect, maxPageAmount) : pageToSelect;
        };
        Grid.prototype.shouldSkipSelection = function () {
            /**
             * For backward compatibility when using `selectedRowIndex` with non-number values - ignored.
             *
             * Therefore, in order to select a row after some changes,
             * the `selectedRowIndex` value must be invalid or >= 0 (< 0 means that no row is selected).
             *
             * `Number(value)` returns `NaN` on all invalid cases, and comparisons with `NaN` always return `false`.
             *
             * !!! We should skip a row only in cases when `selectedRowIndex` < 0
             * because when < 0 all lines must be deselected
             */
            var selectedRowIndex = Number(this.getSetting('selectedRowIndex'));
            return selectedRowIndex < 0;
        };
        return Grid;
    }());

    var DataSource = /** @class */ (function () {
        function DataSource() {
            this.onChangedSource = new rxjs.Subject();
            this.onAddedSource = new rxjs.Subject();
            this.onUpdatedSource = new rxjs.Subject();
            this.onRemovedSource = new rxjs.Subject();
        }
        DataSource.prototype.refresh = function () {
            this.emitOnChanged('refresh');
        };
        DataSource.prototype.load = function (data) {
            this.emitOnChanged('load');
            return Promise.resolve();
        };
        DataSource.prototype.onChanged = function () {
            return this.onChangedSource.asObservable();
        };
        DataSource.prototype.onAdded = function () {
            return this.onAddedSource.asObservable();
        };
        DataSource.prototype.onUpdated = function () {
            return this.onUpdatedSource.asObservable();
        };
        DataSource.prototype.onRemoved = function () {
            return this.onRemovedSource.asObservable();
        };
        DataSource.prototype.prepend = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('prepend');
            return Promise.resolve();
        };
        DataSource.prototype.append = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('append');
            return Promise.resolve();
        };
        DataSource.prototype.add = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('add');
            return Promise.resolve();
        };
        DataSource.prototype.remove = function (element) {
            this.emitOnRemoved(element);
            this.emitOnChanged('remove');
            return Promise.resolve();
        };
        DataSource.prototype.update = function (element, values) {
            this.emitOnUpdated(element);
            this.emitOnChanged('update');
            return Promise.resolve();
        };
        DataSource.prototype.empty = function () {
            this.emitOnChanged('empty');
            return Promise.resolve();
        };
        DataSource.prototype.setSort = function (conf, doEmit) {
            if (doEmit) {
                this.emitOnChanged('sort');
            }
        };
        DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
            if (doEmit) {
                this.emitOnChanged('filter');
            }
        };
        DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
            if (doEmit) {
                this.emitOnChanged('filter');
            }
        };
        DataSource.prototype.setPaging = function (page, perPage, doEmit) {
            if (doEmit) {
                this.emitOnChanged('paging');
            }
        };
        DataSource.prototype.setPage = function (page, doEmit) {
            if (doEmit) {
                this.emitOnChanged('page');
            }
        };
        DataSource.prototype.emitOnRemoved = function (element) {
            this.onRemovedSource.next(element);
        };
        DataSource.prototype.emitOnUpdated = function (element) {
            this.onUpdatedSource.next(element);
        };
        DataSource.prototype.emitOnAdded = function (element) {
            this.onAddedSource.next(element);
        };
        DataSource.prototype.emitOnChanged = function (action) {
            var _this = this;
            this.getElements().then(function (elements) { return _this.onChangedSource.next({
                action: action,
                elements: elements,
                paging: _this.getPaging(),
                filter: _this.getFilter(),
                sort: _this.getSort(),
            }); });
        };
        return DataSource;
    }());

    function compareValues(direction, a, b) {
        if (a < b) {
            return -1 * direction;
        }
        if (a > b) {
            return direction;
        }
        return 0;
    }
    var LocalSorter = /** @class */ (function () {
        function LocalSorter() {
        }
        LocalSorter.sort = function (data, field, direction, customCompare) {
            var dir = (direction === 'asc') ? 1 : -1;
            var compare = customCompare ? customCompare : compareValues;
            return data.sort(function (a, b) {
                return compare.call(null, dir, a[field], b[field]);
            });
        };
        return LocalSorter;
    }());

    function filterValues(value, search) {
        return value.toString().toLowerCase().includes(search.toString().toLowerCase());
    }
    var LocalFilter = /** @class */ (function () {
        function LocalFilter() {
        }
        LocalFilter.filter = function (data, field, search, customFilter) {
            var filter = customFilter ? customFilter : filterValues;
            return data.filter(function (el) {
                var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
                return filter.call(null, value, search);
            });
        };
        return LocalFilter;
    }());

    var LocalPager = /** @class */ (function () {
        function LocalPager() {
        }
        LocalPager.paginate = function (data, page, perPage) {
            return data.slice(perPage * (page - 1), perPage * page);
        };
        return LocalPager;
    }());

    var LocalDataSource = /** @class */ (function (_super) {
        __extends(LocalDataSource, _super);
        function LocalDataSource(data) {
            if (data === void 0) { data = []; }
            var _this = _super.call(this) || this;
            _this.data = [];
            _this.filteredAndSorted = [];
            _this.sortConf = [];
            _this.filterConf = {
                filters: [],
                andOperator: true,
            };
            _this.pagingConf = {};
            _this.data = data;
            return _this;
        }
        LocalDataSource.prototype.load = function (data) {
            this.data = data;
            return _super.prototype.load.call(this, data);
        };
        LocalDataSource.prototype.prepend = function (element) {
            this.reset(true);
            this.data.unshift(element);
            return _super.prototype.prepend.call(this, element);
        };
        LocalDataSource.prototype.append = function (element) {
            this.reset(true);
            this.data.push(element);
            return _super.prototype.append.call(this, element);
        };
        LocalDataSource.prototype.add = function (element) {
            this.data.push(element);
            return _super.prototype.add.call(this, element);
        };
        LocalDataSource.prototype.remove = function (element) {
            this.data = this.data.filter(function (el) { return el !== element; });
            return _super.prototype.remove.call(this, element);
        };
        LocalDataSource.prototype.update = function (element, values) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.find(element).then(function (found) {
                    found = deepExtend(found, values);
                    _super.prototype.update.call(_this, found, values).then(resolve).catch(reject);
                }).catch(reject);
            });
        };
        LocalDataSource.prototype.find = function (element) {
            var found = this.data.find(function (el) { return el === element; });
            if (found) {
                return Promise.resolve(found);
            }
            return Promise.reject(new Error('Element was not found in the dataset'));
        };
        LocalDataSource.prototype.getElements = function () {
            var data = this.data.slice(0);
            return Promise.resolve(this.prepareData(data));
        };
        LocalDataSource.prototype.getFilteredAndSorted = function () {
            var data = this.data.slice(0);
            this.prepareData(data);
            return Promise.resolve(this.filteredAndSorted);
        };
        LocalDataSource.prototype.getAll = function () {
            var data = this.data.slice(0);
            return Promise.resolve(data);
        };
        LocalDataSource.prototype.reset = function (silent) {
            if (silent === void 0) { silent = false; }
            if (silent) {
                this.filterConf = {
                    filters: [],
                    andOperator: true,
                };
                this.sortConf = [];
                this.pagingConf['page'] = 1;
            }
            else {
                this.setFilter([], true, false);
                this.setSort([], false);
                this.setPage(1);
            }
        };
        LocalDataSource.prototype.empty = function () {
            this.data = [];
            return _super.prototype.empty.call(this);
        };
        LocalDataSource.prototype.count = function () {
            return this.filteredAndSorted.length;
        };
        /**
         *
         * Array of conf objects
         * [
         *  {field: string, direction: asc|desc|null, compare: Function|null},
         * ]
         * @param conf
         * @param doEmit
         * @returns {LocalDataSource}
         */
        LocalDataSource.prototype.setSort = function (conf, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            if (conf !== null) {
                conf.forEach(function (fieldConf) {
                    if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                        throw new Error('Sort configuration object is not valid');
                    }
                });
                this.sortConf = conf;
            }
            _super.prototype.setSort.call(this, conf, doEmit);
            return this;
        };
        /**
         *
         * Array of conf objects
         * [
         *  {field: string, search: string, filter: Function|null},
         * ]
         * @param conf
         * @param andOperator
         * @param doEmit
         * @returns {LocalDataSource}
         */
        LocalDataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
            var _this = this;
            if (andOperator === void 0) { andOperator = true; }
            if (doEmit === void 0) { doEmit = true; }
            if (conf && conf.length > 0) {
                conf.forEach(function (fieldConf) {
                    _this.addFilter(fieldConf, andOperator, false);
                });
            }
            else {
                this.filterConf = {
                    filters: [],
                    andOperator: true,
                };
            }
            this.filterConf.andOperator = andOperator;
            this.pagingConf['page'] = 1;
            _super.prototype.setFilter.call(this, conf, andOperator, doEmit);
            return this;
        };
        LocalDataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
            var _this = this;
            if (andOperator === void 0) { andOperator = true; }
            if (doEmit === void 0) { doEmit = true; }
            if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
                throw new Error('Filter configuration object is not valid');
            }
            var found = false;
            this.filterConf.filters.forEach(function (currentFieldConf, index) {
                if (currentFieldConf['field'] === fieldConf['field']) {
                    _this.filterConf.filters[index] = fieldConf;
                    found = true;
                }
            });
            if (!found) {
                this.filterConf.filters.push(fieldConf);
            }
            this.filterConf.andOperator = andOperator;
            _super.prototype.addFilter.call(this, fieldConf, andOperator, doEmit);
            return this;
        };
        LocalDataSource.prototype.setPaging = function (page, perPage, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            this.pagingConf['page'] = page;
            this.pagingConf['perPage'] = perPage;
            _super.prototype.setPaging.call(this, page, perPage, doEmit);
            return this;
        };
        LocalDataSource.prototype.setPage = function (page, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            this.pagingConf['page'] = page;
            _super.prototype.setPage.call(this, page, doEmit);
            return this;
        };
        LocalDataSource.prototype.getSort = function () {
            return this.sortConf;
        };
        LocalDataSource.prototype.getFilter = function () {
            return this.filterConf;
        };
        LocalDataSource.prototype.getPaging = function () {
            return this.pagingConf;
        };
        LocalDataSource.prototype.prepareData = function (data) {
            data = this.filter(data);
            data = this.sort(data);
            this.filteredAndSorted = data.slice(0);
            return this.paginate(data);
        };
        LocalDataSource.prototype.sort = function (data) {
            if (this.sortConf) {
                this.sortConf.forEach(function (fieldConf) {
                    data = LocalSorter
                        .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
                });
            }
            return data;
        };
        // TODO: refactor?
        LocalDataSource.prototype.filter = function (data) {
            if (this.filterConf.filters) {
                if (this.filterConf.andOperator) {
                    this.filterConf.filters.forEach(function (fieldConf) {
                        if (fieldConf['search'].length > 0) {
                            data = LocalFilter
                                .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                        }
                    });
                }
                else {
                    var mergedData_1 = [];
                    this.filterConf.filters.forEach(function (fieldConf) {
                        if (fieldConf['search'].length > 0) {
                            mergedData_1 = mergedData_1.concat(LocalFilter
                                .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                        }
                    });
                    // remove non unique items
                    data = mergedData_1.filter(function (elem, pos, arr) {
                        return arr.indexOf(elem) === pos;
                    });
                }
            }
            return data;
        };
        LocalDataSource.prototype.paginate = function (data) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
                data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
            }
            return data;
        };
        return LocalDataSource;
    }(DataSource));

    var Ng2SmartTableComponent = /** @class */ (function () {
        function Ng2SmartTableComponent() {
            this.settings = {};
            this.rowSelect = new core.EventEmitter();
            this.rowDeselect = new core.EventEmitter();
            this.userRowSelect = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.edit = new core.EventEmitter();
            this.create = new core.EventEmitter();
            this.custom = new core.EventEmitter();
            this.deleteConfirm = new core.EventEmitter();
            this.editConfirm = new core.EventEmitter();
            this.createConfirm = new core.EventEmitter();
            this.rowHover = new core.EventEmitter();
            this.defaultSettings = {
                mode: 'inline',
                selectMode: 'single',
                /**
                 * Points to an element in all data
                 *
                 * when < 0 all lines must be deselected
                 */
                selectedRowIndex: 0,
                switchPageToSelectedRowPage: false,
                hideHeader: false,
                hideSubHeader: false,
                actions: {
                    columnTitle: 'Actions',
                    add: true,
                    edit: true,
                    delete: true,
                    custom: [],
                    position: 'left',
                },
                filter: {
                    inputClass: '',
                },
                edit: {
                    inputClass: '',
                    editButtonContent: 'Edit',
                    saveButtonContent: 'Update',
                    cancelButtonContent: 'Cancel',
                    confirmSave: false,
                },
                add: {
                    inputClass: '',
                    addButtonContent: 'Add New',
                    createButtonContent: 'Create',
                    cancelButtonContent: 'Cancel',
                    confirmCreate: false,
                },
                delete: {
                    deleteButtonContent: 'Delete',
                    confirmDelete: false,
                },
                attr: {
                    id: '',
                    class: '',
                },
                noDataMessage: 'No data found',
                columns: {},
                pager: {
                    display: true,
                    page: 1,
                    perPage: 10,
                },
                rowClassFunction: function () { return ''; },
            };
            this.isAllSelected = false;
            this.destroyed$ = new rxjs.Subject();
        }
        Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
            if (this.grid) {
                if (changes['settings']) {
                    this.grid.setSettings(this.prepareSettings());
                }
                if (changes['source']) {
                    this.source = this.prepareSource();
                    this.grid.setSource(this.source);
                }
            }
            else {
                this.initGrid();
            }
            this.tableId = this.grid.getSetting('attr.id');
            this.tableClass = this.grid.getSetting('attr.class');
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
            this.isPagerDisplay = this.grid.getSetting('pager.display');
            this.isPagerDisplay = this.grid.getSetting('pager.display');
            this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
            this.rowClassFunction = this.grid.getSetting('rowClassFunction');
        };
        Ng2SmartTableComponent.prototype.ngOnDestroy = function () {
            this.destroyed$.next();
        };
        Ng2SmartTableComponent.prototype.selectRow = function (index, switchPageToSelectedRowPage) {
            if (switchPageToSelectedRowPage === void 0) { switchPageToSelectedRowPage = this.grid.getSetting('switchPageToSelectedRowPage'); }
            if (!this.grid) {
                return;
            }
            this.grid.settings.selectedRowIndex = index;
            if (this.isIndexOutOfRange(index)) {
                // we need to deselect all rows if we got an incorrect index
                this.deselectAllRows();
                return;
            }
            if (switchPageToSelectedRowPage) {
                var source = this.source;
                var paging = source.getPaging();
                var page = getPageForRowIndex(index, paging.perPage);
                index = index % paging.perPage;
                this.grid.settings.selectedRowIndex = index;
                if (page !== paging.page) {
                    source.setPage(page);
                    return;
                }
            }
            var row = this.grid.getRows()[index];
            if (row) {
                this.onSelectRow(row);
            }
            else {
                // we need to deselect all rows if we got an incorrect index
                this.deselectAllRows();
            }
        };
        Ng2SmartTableComponent.prototype.deselectAllRows = function () {
            this.grid.dataSet.deselectAll();
            this.emitDeselectRow(null);
        };
        Ng2SmartTableComponent.prototype.editRowSelect = function (row) {
            if (this.grid.getSetting('selectMode') === 'multi') {
                this.onMultipleSelectRow(row);
            }
            else {
                this.onSelectRow(row);
            }
        };
        Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
            if (this.grid.getSetting('selectMode') !== 'multi') {
                this.grid.selectRow(row);
                this.emitUserSelectRow(row);
                this.emitSelectRow(row);
            }
        };
        Ng2SmartTableComponent.prototype.onRowHover = function (row) {
            this.rowHover.emit(row);
        };
        Ng2SmartTableComponent.prototype.multipleSelectRow = function (row) {
            this.grid.multipleSelectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        };
        Ng2SmartTableComponent.prototype.onSelectAllRows = function ($event) {
            this.isAllSelected = !this.isAllSelected;
            this.grid.selectAllRows(this.isAllSelected);
            this.emitUserSelectRow(null);
            this.emitSelectRow(null);
        };
        Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
            this.grid.selectRow(row);
            this.emitSelectRow(row);
        };
        Ng2SmartTableComponent.prototype.onMultipleSelectRow = function (row) {
            this.emitSelectRow(row);
        };
        Ng2SmartTableComponent.prototype.initGrid = function () {
            this.source = this.prepareSource();
            this.grid = new Grid(this.source, this.prepareSettings());
            this.subscribeToOnSelectRow();
            this.subscribeToOnDeselectRow();
        };
        Ng2SmartTableComponent.prototype.prepareSource = function () {
            if (this.source instanceof DataSource) {
                return this.source;
            }
            else if (this.source instanceof Array) {
                return new LocalDataSource(this.source);
            }
            return new LocalDataSource();
        };
        Ng2SmartTableComponent.prototype.prepareSettings = function () {
            return deepExtend({}, this.defaultSettings, this.settings);
        };
        Ng2SmartTableComponent.prototype.changePage = function ($event) {
            this.resetAllSelector();
        };
        Ng2SmartTableComponent.prototype.sort = function ($event) {
            this.resetAllSelector();
        };
        Ng2SmartTableComponent.prototype.filter = function ($event) {
            this.resetAllSelector();
        };
        Ng2SmartTableComponent.prototype.resetAllSelector = function () {
            this.isAllSelected = false;
        };
        Ng2SmartTableComponent.prototype.emitUserSelectRow = function (row) {
            var selectedRows = this.grid.getSelectedRows();
            this.userRowSelect.emit({
                data: row ? row.getData() : null,
                isSelected: row ? row.getIsSelected() : null,
                source: this.source,
                selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) { return r.getData(); }) : [],
            });
        };
        Ng2SmartTableComponent.prototype.emitSelectRow = function (row) {
            var data = {
                data: row ? row.getData() : null,
                isSelected: row ? row.getIsSelected() : null,
                source: this.source,
            };
            this.rowSelect.emit(data);
            if (!(row === null || row === void 0 ? void 0 : row.isSelected)) {
                this.rowDeselect.emit(data);
            }
        };
        Ng2SmartTableComponent.prototype.emitDeselectRow = function (row) {
            this.rowDeselect.emit({
                data: row ? row.getData() : null,
                isSelected: row ? row.getIsSelected() : null,
                source: this.source,
            });
        };
        Ng2SmartTableComponent.prototype.isIndexOutOfRange = function (index) {
            var _a;
            var dataAmount = (_a = this.source) === null || _a === void 0 ? void 0 : _a.count();
            return index < 0 || (typeof dataAmount === 'number' && index >= dataAmount);
        };
        Ng2SmartTableComponent.prototype.subscribeToOnSelectRow = function () {
            var _this = this;
            if (this.onSelectRowSubscription) {
                this.onSelectRowSubscription.unsubscribe();
            }
            this.onSelectRowSubscription = this.grid.onSelectRow()
                .pipe(operators.takeUntil(this.destroyed$))
                .subscribe(function (row) {
                _this.emitSelectRow(row);
            });
        };
        Ng2SmartTableComponent.prototype.subscribeToOnDeselectRow = function () {
            var _this = this;
            if (this.onDeselectRowSubscription) {
                this.onDeselectRowSubscription.unsubscribe();
            }
            this.onDeselectRowSubscription = this.grid.onDeselectRow()
                .pipe(operators.takeUntil(this.destroyed$))
                .subscribe(function (row) {
                _this.emitDeselectRow(row);
            });
        };
        return Ng2SmartTableComponent;
    }());
    Ng2SmartTableComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng2-smart-table',
                    template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [isAllSelected]=\"isAllSelected\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows($event)\"\n                      (sort)=\"sort($event)\"\n                      (filter)=\"filter($event)\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userSelectRow)=\"onUserSelectRow($event)\"\n                      (editRowSelect)=\"editRowSelect($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\n                      (rowHover)=\"onRowHover($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\"\n                        (changePage)=\"changePage($event)\">\n</ng2-smart-table-pager>\n",
                    styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{border-collapse:collapse;border-spacing:0;display:table;line-height:1.5em;max-width:100%;overflow:auto;width:100%;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
                },] }
    ];
    Ng2SmartTableComponent.propDecorators = {
        source: [{ type: core.Input }],
        settings: [{ type: core.Input }],
        rowSelect: [{ type: core.Output }],
        rowDeselect: [{ type: core.Output }],
        userRowSelect: [{ type: core.Output }],
        delete: [{ type: core.Output }],
        edit: [{ type: core.Output }],
        create: [{ type: core.Output }],
        custom: [{ type: core.Output }],
        deleteConfirm: [{ type: core.Output }],
        editConfirm: [{ type: core.Output }],
        createConfirm: [{ type: core.Output }],
        rowHover: [{ type: core.Output }]
    };

    var Ng2SmartTableModule = /** @class */ (function () {
        function Ng2SmartTableModule() {
        }
        return Ng2SmartTableModule;
    }());
    Ng2SmartTableModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        CellModule,
                        FilterModule,
                        PagerModule,
                        TBodyModule,
                        THeadModule,
                    ],
                    declarations: [
                        Ng2SmartTableComponent,
                    ],
                    exports: [
                        Ng2SmartTableComponent,
                    ],
                },] }
    ];

    var ServerSourceConf = /** @class */ (function () {
        function ServerSourceConf(_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.endPoint, endPoint = _c === void 0 ? '' : _c, _d = _b.sortFieldKey, sortFieldKey = _d === void 0 ? '' : _d, _e = _b.sortDirKey, sortDirKey = _e === void 0 ? '' : _e, _f = _b.pagerPageKey, pagerPageKey = _f === void 0 ? '' : _f, _g = _b.pagerLimitKey, pagerLimitKey = _g === void 0 ? '' : _g, _h = _b.filterFieldKey, filterFieldKey = _h === void 0 ? '' : _h, _j = _b.totalKey, totalKey = _j === void 0 ? '' : _j, _k = _b.dataKey, dataKey = _k === void 0 ? '' : _k;
            this.endPoint = endPoint ? endPoint : '';
            this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
            this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
            this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
            this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
            this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
            this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
            this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
        }
        return ServerSourceConf;
    }());
    ServerSourceConf.SORT_FIELD_KEY = '_sort';
    ServerSourceConf.SORT_DIR_KEY = '_order';
    ServerSourceConf.PAGER_PAGE_KEY = '_page';
    ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
    ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
    ServerSourceConf.TOTAL_KEY = 'x-total-count';
    ServerSourceConf.DATA_KEY = '';

    var ServerDataSource = /** @class */ (function (_super) {
        __extends(ServerDataSource, _super);
        function ServerDataSource(http, conf) {
            if (conf === void 0) { conf = {}; }
            var _this = _super.call(this) || this;
            _this.http = http;
            _this.lastRequestCount = 0;
            _this.conf = new ServerSourceConf(conf);
            if (!_this.conf.endPoint) {
                throw new Error('At least endPoint must be specified as a configuration of the server data source.');
            }
            return _this;
        }
        ServerDataSource.prototype.count = function () {
            return this.lastRequestCount;
        };
        ServerDataSource.prototype.getElements = function () {
            var _this = this;
            return this.requestElements()
                .pipe(operators.map(function (res) {
                _this.lastRequestCount = _this.extractTotalFromResponse(res);
                _this.data = _this.extractDataFromResponse(res);
                return _this.data;
            })).toPromise();
        };
        /**
         * Extracts array of data from server response
         * @param res
         * @returns {any}
         */
        ServerDataSource.prototype.extractDataFromResponse = function (res) {
            var rawData = res.body;
            var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
            if (data instanceof Array) {
                return data;
            }
            throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
        };
        /**
         * Extracts total rows count from the server response
         * Looks for the count in the heders first, then in the response body
         * @param res
         * @returns {any}
         */
        ServerDataSource.prototype.extractTotalFromResponse = function (res) {
            if (res.headers.has(this.conf.totalKey)) {
                return +res.headers.get(this.conf.totalKey);
            }
            else {
                var rawData = res.body;
                return getDeepFromObject(rawData, this.conf.totalKey, 0);
            }
        };
        ServerDataSource.prototype.requestElements = function () {
            var httpParams = this.createRequesParams();
            return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
        };
        ServerDataSource.prototype.createRequesParams = function () {
            var httpParams = new http.HttpParams();
            httpParams = this.addSortRequestParams(httpParams);
            httpParams = this.addFilterRequestParams(httpParams);
            return this.addPagerRequestParams(httpParams);
        };
        ServerDataSource.prototype.addSortRequestParams = function (httpParams) {
            var _this = this;
            if (this.sortConf) {
                this.sortConf.forEach(function (fieldConf) {
                    httpParams = httpParams.set(_this.conf.sortFieldKey, fieldConf.field);
                    httpParams = httpParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
                });
            }
            return httpParams;
        };
        ServerDataSource.prototype.addFilterRequestParams = function (httpParams) {
            var _this = this;
            if (this.filterConf.filters) {
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search']) {
                        httpParams = httpParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                    }
                });
            }
            return httpParams;
        };
        ServerDataSource.prototype.addPagerRequestParams = function (httpParams) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
                httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
                httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
            }
            return httpParams;
        };
        return ServerDataSource;
    }(LocalDataSource));

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Cell = Cell;
    exports.DefaultEditor = DefaultEditor;
    exports.DefaultFilter = DefaultFilter;
    exports.LocalDataSource = LocalDataSource;
    exports.Ng2SmartTableComponent = Ng2SmartTableComponent;
    exports.Ng2SmartTableModule = Ng2SmartTableModule;
    exports.ServerDataSource = ServerDataSource;
    exports.ɵa = CellModule;
    exports.ɵb = CellComponent;
    exports.ɵba = TbodyEditDeleteComponent;
    exports.ɵbb = TbodyCustomComponent;
    exports.ɵbc = Ng2SmartTableTbodyComponent;
    exports.ɵbd = THeadModule;
    exports.ɵbe = ActionsComponent;
    exports.ɵbf = ActionsTitleComponent;
    exports.ɵbg = AddButtonComponent;
    exports.ɵbh = CheckboxSelectAllComponent;
    exports.ɵbi = ColumnTitleComponent;
    exports.ɵbj = TitleComponent;
    exports.ɵbk = TheadFitlersRowComponent;
    exports.ɵbl = TheadFormRowComponent;
    exports.ɵbm = TheadTitlesRowComponent;
    exports.ɵbn = Ng2SmartTableTheadComponent;
    exports.ɵbo = Row;
    exports.ɵbp = DataSet;
    exports.ɵbq = DataSource;
    exports.ɵc = EditCellDefault;
    exports.ɵd = CustomEditComponent;
    exports.ɵe = DefaultEditComponent;
    exports.ɵf = EditCellComponent;
    exports.ɵg = CheckboxEditorComponent;
    exports.ɵh = CompleterEditorComponent;
    exports.ɵi = InputEditorComponent;
    exports.ɵj = SelectEditorComponent;
    exports.ɵk = TextareaEditorComponent;
    exports.ɵl = CustomViewComponent;
    exports.ɵm = ViewCellComponent;
    exports.ɵn = FilterModule;
    exports.ɵo = FilterDefault;
    exports.ɵp = FilterComponent;
    exports.ɵq = DefaultFilterComponent;
    exports.ɵr = CustomFilterComponent;
    exports.ɵs = CheckboxFilterComponent;
    exports.ɵt = CompleterFilterComponent;
    exports.ɵu = InputFilterComponent;
    exports.ɵv = SelectFilterComponent;
    exports.ɵw = PagerModule;
    exports.ɵx = PagerComponent;
    exports.ɵy = TBodyModule;
    exports.ɵz = TbodyCreateCancelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-smart-table.umd.js.map
