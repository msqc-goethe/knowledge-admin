(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng2-ckeditor', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng2-ckeditor'] = {}, global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (exports, core, common, forms) { 'use strict';

    /**
     * CKGroup component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
     *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
     *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
     *      </ckbutton>
     *   </ckeditor>
     */
    var CKButtonDirective = /** @class */ (function () {
        function CKButtonDirective() {
            this.click = new core.EventEmitter();
        }
        CKButtonDirective.prototype.initialize = function (editor) {
            var _this = this;
            editor.instance.addCommand(this.command, {
                exec: function (evt) {
                    _this.click.emit(evt);
                },
            });
            editor.instance.ui.addButton(this.name, {
                label: this.label,
                command: this.command,
                toolbar: this.toolbar,
                icon: this.icon,
            });
        };
        CKButtonDirective.prototype.ngOnInit = function () {
            if (!this.name)
                throw new Error('Attribute "name" is required on <ckbutton>');
            if (!this.command)
                throw new Error('Attribute "command" is required on <ckbutton>');
        };
        return CKButtonDirective;
    }());
    CKButtonDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ckbutton',
                },] }
    ];
    CKButtonDirective.propDecorators = {
        click: [{ type: core.Output }],
        label: [{ type: core.Input }],
        command: [{ type: core.Input }],
        toolbar: [{ type: core.Input }],
        name: [{ type: core.Input }],
        icon: [{ type: core.Input }]
    };

    /**
     * CKGroup component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
     *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
     *          .
     *          .
     *      </ckgroup>
     *   </ckeditor>
     */
    var CKGroupDirective = /** @class */ (function () {
        function CKGroupDirective() {
        }
        CKGroupDirective.prototype.ngAfterContentInit = function () {
            var _this = this;
            // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
            this.toolbarButtons.forEach(function (button) { return (button.toolbar = _this.name); });
        };
        CKGroupDirective.prototype.initialize = function (editor) {
            editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
            // Initialize each button within ckgroup
            this.toolbarButtons.forEach(function (button) {
                button.initialize(editor);
            });
        };
        return CKGroupDirective;
    }());
    CKGroupDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ckgroup',
                },] }
    ];
    CKGroupDirective.propDecorators = {
        name: [{ type: core.Input }],
        previous: [{ type: core.Input }],
        subgroupOf: [{ type: core.Input }],
        toolbarButtons: [{ type: core.ContentChildren, args: [CKButtonDirective,] }]
    };

    // Imports
    /**
     * CKEditor component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
     */
    var CKEditorComponent = /** @class */ (function () {
        /**
         * Constructor
         */
        function CKEditorComponent(zone) {
            this.zone = zone;
            this.change = new core.EventEmitter();
            this.editorChange = new core.EventEmitter();
            this.ready = new core.EventEmitter();
            this.blur = new core.EventEmitter();
            this.focus = new core.EventEmitter();
            this.contentDom = new core.EventEmitter();
            this.fileUploadRequest = new core.EventEmitter();
            this.fileUploadResponse = new core.EventEmitter();
            this.paste = new core.EventEmitter();
            this.drop = new core.EventEmitter();
            this._value = '';
        }
        Object.defineProperty(CKEditorComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                if (v !== this._value) {
                    this._value = v;
                    this.onChange(v);
                }
            },
            enumerable: false,
            configurable: true
        });
        CKEditorComponent.prototype.ngOnChanges = function (changes) {
            if (changes.readonly && this.instance) {
                this.instance.setReadOnly(changes.readonly.currentValue);
            }
        };
        /**
         * On component destroy
         */
        CKEditorComponent.prototype.ngOnDestroy = function () {
            if (this.instance) {
                this.instance.removeAllListeners();
                CKEDITOR.instances[this.instance.name].destroy();
                this.instance.destroy();
                this.instance = null;
            }
        };
        /**
         * On component view init
         */
        CKEditorComponent.prototype.ngAfterViewInit = function () {
            this.ckeditorInit(this.config || {});
        };
        /**
         * On component view checked
         */
        CKEditorComponent.prototype.ngAfterViewChecked = function () {
            this.ckeditorInit(this.config || {});
        };
        /**
         * Value update process
         */
        CKEditorComponent.prototype.updateValue = function (value) {
            var _this = this;
            this.zone.run(function () {
                _this.value = value;
                _this.onChange(value);
                _this.onTouched();
                _this.change.emit(value);
            });
        };
        /**
         * CKEditor init
         */
        CKEditorComponent.prototype.ckeditorInit = function (config) {
            var _this = this;
            if (typeof CKEDITOR === 'undefined') {
                console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
            }
            else {
                // Check textarea exists
                if (this.instance || !this.documentContains(this.host.nativeElement)) {
                    return;
                }
                if (this.readonly) {
                    config.readOnly = this.readonly;
                }
                // CKEditor replace textarea
                this.instance = CKEDITOR.replace(this.host.nativeElement, config);
                // Set initial value
                this.instance.setData(this.value);
                // listen for instanceReady event
                this.instance.on('instanceReady', function (evt) {
                    // if value has changed while instance loading
                    // update instance with current component value
                    if (_this.instance.getData() !== _this.value) {
                        _this.instance.setData(_this.value);
                    }
                    // send the evt to the EventEmitter
                    _this.ready.emit(evt);
                });
                // CKEditor change event
                this.instance.on('change', function (evt) {
                    _this.onTouched();
                    var value = _this.instance.getData();
                    if (_this.value !== value) {
                        // Debounce update
                        if (_this.debounce) {
                            if (_this.debounceTimeout)
                                clearTimeout(_this.debounceTimeout);
                            _this.debounceTimeout = setTimeout(function () {
                                _this.updateValue(value);
                                _this.debounceTimeout = null;
                            }, parseInt(_this.debounce));
                            // Live update
                        }
                        else {
                            _this.updateValue(value);
                        }
                    }
                    // Original ckeditor event dispatch
                    _this.editorChange.emit(evt);
                });
                // CKEditor blur event
                this.instance.on('blur', function (evt) {
                    _this.blur.emit(evt);
                });
                // CKEditor focus event
                this.instance.on('focus', function (evt) {
                    _this.focus.emit(evt);
                });
                // CKEditor contentDom event
                this.instance.on('contentDom', function (evt) {
                    _this.contentDom.emit(evt);
                });
                // CKEditor fileUploadRequest event
                this.instance.on('fileUploadRequest', function (evt) {
                    _this.fileUploadRequest.emit(evt);
                });
                // CKEditor fileUploadResponse event
                this.instance.on('fileUploadResponse', function (evt) {
                    _this.fileUploadResponse.emit(evt);
                });
                // CKEditor paste event
                this.instance.on('paste', function (evt) {
                    _this.paste.emit(evt);
                });
                // CKEditor drop event
                this.instance.on('drop', function (evt) {
                    _this.drop.emit(evt);
                });
                // Add Toolbar Groups to Editor. This will also add Buttons within groups.
                this.toolbarGroups.forEach(function (group) {
                    group.initialize(_this);
                });
                // Add Toolbar Buttons to Editor.
                this.toolbarButtons.forEach(function (button) {
                    button.initialize(_this);
                });
            }
        };
        /**
         * Implements ControlValueAccessor
         */
        CKEditorComponent.prototype.writeValue = function (value) {
            this._value = value;
            if (this.instance)
                this.instance.setData(value);
        };
        CKEditorComponent.prototype.onChange = function (_) { };
        CKEditorComponent.prototype.onTouched = function () { };
        CKEditorComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CKEditorComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CKEditorComponent.prototype.documentContains = function (node) {
            return document.contains ? document.contains(node) : document.body.contains(node);
        };
        return CKEditorComponent;
    }());
    CKEditorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ckeditor',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return CKEditorComponent; }),
                            multi: true,
                        },
                    ],
                    template: "<textarea #host></textarea>"
                },] }
    ];
    CKEditorComponent.ctorParameters = function () { return [
        { type: core.NgZone }
    ]; };
    CKEditorComponent.propDecorators = {
        config: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        debounce: [{ type: core.Input }],
        change: [{ type: core.Output }],
        editorChange: [{ type: core.Output }],
        ready: [{ type: core.Output }],
        blur: [{ type: core.Output }],
        focus: [{ type: core.Output }],
        contentDom: [{ type: core.Output }],
        fileUploadRequest: [{ type: core.Output }],
        fileUploadResponse: [{ type: core.Output }],
        paste: [{ type: core.Output }],
        drop: [{ type: core.Output }],
        host: [{ type: core.ViewChild, args: ['host', { static: false },] }],
        toolbarButtons: [{ type: core.ContentChildren, args: [CKButtonDirective,] }],
        toolbarGroups: [{ type: core.ContentChildren, args: [CKGroupDirective,] }],
        value: [{ type: core.Input }]
    };

    /**
     * CKEditorModule
     */
    var CKEditorModule = /** @class */ (function () {
        function CKEditorModule() {
        }
        return CKEditorModule;
    }());
    CKEditorModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
                    exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CKEditorModule = CKEditorModule;
    exports.ɵa = CKEditorComponent;
    exports.ɵb = CKButtonDirective;
    exports.ɵc = CKGroupDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-ckeditor.umd.js.map
