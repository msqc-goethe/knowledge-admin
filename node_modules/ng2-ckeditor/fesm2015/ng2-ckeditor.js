import { EventEmitter, Directive, Output, Input, ContentChildren, Component, forwardRef, NgZone, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
class CKButtonDirective {
    constructor() {
        this.click = new EventEmitter();
    }
    initialize(editor) {
        editor.instance.addCommand(this.command, {
            exec: (evt) => {
                this.click.emit(evt);
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    }
    ngOnInit() {
        if (!this.name)
            throw new Error('Attribute "name" is required on <ckbutton>');
        if (!this.command)
            throw new Error('Attribute "command" is required on <ckbutton>');
    }
}
CKButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ckbutton',
            },] }
];
CKButtonDirective.propDecorators = {
    click: [{ type: Output }],
    label: [{ type: Input }],
    command: [{ type: Input }],
    toolbar: [{ type: Input }],
    name: [{ type: Input }],
    icon: [{ type: Input }]
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
class CKGroupDirective {
    ngAfterContentInit() {
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach((button) => (button.toolbar = this.name));
    }
    initialize(editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach((button) => {
            button.initialize(editor);
        });
    }
}
CKGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ckgroup',
            },] }
];
CKGroupDirective.propDecorators = {
    name: [{ type: Input }],
    previous: [{ type: Input }],
    subgroupOf: [{ type: Input }],
    toolbarButtons: [{ type: ContentChildren, args: [CKButtonDirective,] }]
};

// Imports
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
class CKEditorComponent {
    /**
     * Constructor
     */
    constructor(zone) {
        this.zone = zone;
        this.change = new EventEmitter();
        this.editorChange = new EventEmitter();
        this.ready = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.contentDom = new EventEmitter();
        this.fileUploadRequest = new EventEmitter();
        this.fileUploadResponse = new EventEmitter();
        this.paste = new EventEmitter();
        this.drop = new EventEmitter();
        this._value = '';
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    ngOnChanges(changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    }
    /**
     * On component destroy
     */
    ngOnDestroy() {
        if (this.instance) {
            this.instance.removeAllListeners();
            CKEDITOR.instances[this.instance.name].destroy();
            this.instance.destroy();
            this.instance = null;
        }
    }
    /**
     * On component view init
     */
    ngAfterViewInit() {
        this.ckeditorInit(this.config || {});
    }
    /**
     * On component view checked
     */
    ngAfterViewChecked() {
        this.ckeditorInit(this.config || {});
    }
    /**
     * Value update process
     */
    updateValue(value) {
        this.zone.run(() => {
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }
    /**
     * CKEditor init
     */
    ckeditorInit(config) {
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
            this.instance.on('instanceReady', (evt) => {
                // if value has changed while instance loading
                // update instance with current component value
                if (this.instance.getData() !== this.value) {
                    this.instance.setData(this.value);
                }
                // send the evt to the EventEmitter
                this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', (evt) => {
                this.onTouched();
                let value = this.instance.getData();
                if (this.value !== value) {
                    // Debounce update
                    if (this.debounce) {
                        if (this.debounceTimeout)
                            clearTimeout(this.debounceTimeout);
                        this.debounceTimeout = setTimeout(() => {
                            this.updateValue(value);
                            this.debounceTimeout = null;
                        }, parseInt(this.debounce));
                        // Live update
                    }
                    else {
                        this.updateValue(value);
                    }
                }
                // Original ckeditor event dispatch
                this.editorChange.emit(evt);
            });
            // CKEditor blur event
            this.instance.on('blur', (evt) => {
                this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', (evt) => {
                this.focus.emit(evt);
            });
            // CKEditor contentDom event
            this.instance.on('contentDom', (evt) => {
                this.contentDom.emit(evt);
            });
            // CKEditor fileUploadRequest event
            this.instance.on('fileUploadRequest', (evt) => {
                this.fileUploadRequest.emit(evt);
            });
            // CKEditor fileUploadResponse event
            this.instance.on('fileUploadResponse', (evt) => {
                this.fileUploadResponse.emit(evt);
            });
            // CKEditor paste event
            this.instance.on('paste', (evt) => {
                this.paste.emit(evt);
            });
            // CKEditor drop event
            this.instance.on('drop', (evt) => {
                this.drop.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach((group) => {
                group.initialize(this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach((button) => {
                button.initialize(this);
            });
        }
    }
    /**
     * Implements ControlValueAccessor
     */
    writeValue(value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    }
    onChange(_) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    documentContains(node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    }
}
CKEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ckeditor',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CKEditorComponent),
                        multi: true,
                    },
                ],
                template: `<textarea #host></textarea>`
            },] }
];
CKEditorComponent.ctorParameters = () => [
    { type: NgZone }
];
CKEditorComponent.propDecorators = {
    config: [{ type: Input }],
    readonly: [{ type: Input }],
    debounce: [{ type: Input }],
    change: [{ type: Output }],
    editorChange: [{ type: Output }],
    ready: [{ type: Output }],
    blur: [{ type: Output }],
    focus: [{ type: Output }],
    contentDom: [{ type: Output }],
    fileUploadRequest: [{ type: Output }],
    fileUploadResponse: [{ type: Output }],
    paste: [{ type: Output }],
    drop: [{ type: Output }],
    host: [{ type: ViewChild, args: ['host', { static: false },] }],
    toolbarButtons: [{ type: ContentChildren, args: [CKButtonDirective,] }],
    toolbarGroups: [{ type: ContentChildren, args: [CKGroupDirective,] }],
    value: [{ type: Input }]
};

/**
 * CKEditorModule
 */
class CKEditorModule {
}
CKEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
                exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CKEditorModule, CKEditorComponent as ɵa, CKButtonDirective as ɵb, CKGroupDirective as ɵc };
//# sourceMappingURL=ng2-ckeditor.js.map
