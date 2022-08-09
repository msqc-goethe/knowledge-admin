// Imports
import { Component, Input, Output, ViewChild, EventEmitter, NgZone, forwardRef, ContentChildren, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CKButtonDirective } from './ckbutton.directive';
import { CKGroupDirective } from './ckgroup.directive';
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
export class CKEditorComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NrZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1YsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLFVBQVUsRUFHVixlQUFlLEdBR2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXZEOzs7O0dBSUc7QUFZSCxNQUFNLE9BQU8saUJBQWlCO0lBeUI1Qjs7T0FFRztJQUNILFlBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBdkJ0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBT3BDLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFPdUIsQ0FBQztJQUVwQyxJQUFJLEtBQUs7UUFDUCxP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QUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7O1lBN0JDLE1BQU07OztxQkErQkwsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBRUwsTUFBTTsyQkFDTixNQUFNO29CQUNOLE1BQU07bUJBQ04sTUFBTTtvQkFDTixNQUFNO3lCQUNOLE1BQU07Z0NBQ04sTUFBTTtpQ0FDTixNQUFNO29CQUNOLE1BQU07bUJBQ04sTUFBTTttQkFFTixTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs2QkFFbkMsZUFBZSxTQUFDLGlCQUFpQjs0QkFDakMsZUFBZSxTQUFDLGdCQUFnQjtvQkFjaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIE5nWm9uZSxcbiAgZm9yd2FyZFJlZixcbiAgUXVlcnlMaXN0LFxuICBBZnRlclZpZXdJbml0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENLQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9ja2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ0tHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vY2tncm91cC5kaXJlY3RpdmUnO1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG4vKipcbiAqIENLRWRpdG9yIGNvbXBvbmVudFxuICogVXNhZ2UgOlxuICogIDxja2VkaXRvciBbKG5nTW9kZWwpXT1cImRhdGFcIiBbY29uZmlnXT1cInsuLi59XCIgZGVib3VuY2U9XCI1MDBcIj48L2NrZWRpdG9yPlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja2VkaXRvcicsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ0tFZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgdGVtcGxhdGU6IGA8dGV4dGFyZWEgI2hvc3Q+PC90ZXh0YXJlYT5gLFxufSlcbmV4cG9ydCBjbGFzcyBDS0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVib3VuY2U6IHN0cmluZztcblxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZWRpdG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjb250ZW50RG9tID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZmlsZVVwbG9hZFJlcXVlc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaWxlVXBsb2FkUmVzcG9uc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwYXN0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnaG9zdCcsIHsgc3RhdGljOiBmYWxzZSB9KSBob3N0OiBhbnk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihDS0J1dHRvbkRpcmVjdGl2ZSkgdG9vbGJhckJ1dHRvbnM6IFF1ZXJ5TGlzdDxDS0J1dHRvbkRpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oQ0tHcm91cERpcmVjdGl2ZSkgdG9vbGJhckdyb3VwczogUXVlcnlMaXN0PENLR3JvdXBEaXJlY3RpdmU+O1xuXG4gIF92YWx1ZSA9ICcnO1xuICBpbnN0YW5jZTogYW55O1xuICBkZWJvdW5jZVRpbWVvdXQ6IGFueTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodikge1xuICAgIGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMucmVhZG9ubHkgJiYgdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSZWFkT25seShjaGFuZ2VzLnJlYWRvbmx5LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cm95XG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCB2aWV3IGluaXRcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNrZWRpdG9ySW5pdCh0aGlzLmNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IHZpZXcgY2hlY2tlZFxuICAgKi9cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuY2tlZGl0b3JJbml0KHRoaXMuY29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWx1ZSB1cGRhdGUgcHJvY2Vzc1xuICAgKi9cbiAgdXBkYXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENLRWRpdG9yIGluaXRcbiAgICovXG4gIGNrZWRpdG9ySW5pdChjb25maWc6IGFueSkge1xuICAgIGlmICh0eXBlb2YgQ0tFRElUT1IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NLRWRpdG9yIDQueCBpcyBtaXNzaW5nIChodHRwOi8vY2tlZGl0b3IuY29tLyknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2hlY2sgdGV4dGFyZWEgZXhpc3RzXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZSB8fCAhdGhpcy5kb2N1bWVudENvbnRhaW5zKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIGNvbmZpZy5yZWFkT25seSA9IHRoaXMucmVhZG9ubHk7XG4gICAgICB9XG4gICAgICAvLyBDS0VkaXRvciByZXBsYWNlIHRleHRhcmVhXG4gICAgICB0aGlzLmluc3RhbmNlID0gQ0tFRElUT1IucmVwbGFjZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh0aGlzLnZhbHVlKTtcblxuICAgICAgLy8gbGlzdGVuIGZvciBpbnN0YW5jZVJlYWR5IGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdpbnN0YW5jZVJlYWR5JywgKGV2dDogYW55KSA9PiB7XG4gICAgICAgIC8vIGlmIHZhbHVlIGhhcyBjaGFuZ2VkIHdoaWxlIGluc3RhbmNlIGxvYWRpbmdcbiAgICAgICAgLy8gdXBkYXRlIGluc3RhbmNlIHdpdGggY3VycmVudCBjb21wb25lbnQgdmFsdWVcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZ2V0RGF0YSgpICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXREYXRhKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VuZCB0aGUgZXZ0IHRvIHRoZSBFdmVudEVtaXR0ZXJcbiAgICAgICAgdGhpcy5yZWFkeS5lbWl0KGV2dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ0tFZGl0b3IgY2hhbmdlIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZ0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgLy8gRGVib3VuY2UgdXBkYXRlXG4gICAgICAgICAgaWYgKHRoaXMuZGVib3VuY2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9LCBwYXJzZUludCh0aGlzLmRlYm91bmNlKSk7XG5cbiAgICAgICAgICAgIC8vIExpdmUgdXBkYXRlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9yaWdpbmFsIGNrZWRpdG9yIGV2ZW50IGRpc3BhdGNoXG4gICAgICAgIHRoaXMuZWRpdG9yQ2hhbmdlLmVtaXQoZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDS0VkaXRvciBibHVyIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdibHVyJywgKGV2dDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuYmx1ci5lbWl0KGV2dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ0tFZGl0b3IgZm9jdXMgZXZlbnRcbiAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzJywgKGV2dDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZm9jdXMuZW1pdChldnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENLRWRpdG9yIGNvbnRlbnREb20gZXZlbnRcbiAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NvbnRlbnREb20nLCAoZXZ0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZW50RG9tLmVtaXQoZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDS0VkaXRvciBmaWxlVXBsb2FkUmVxdWVzdCBldmVudFxuICAgICAgdGhpcy5pbnN0YW5jZS5vbignZmlsZVVwbG9hZFJlcXVlc3QnLCAoZXZ0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkUmVxdWVzdC5lbWl0KGV2dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ0tFZGl0b3IgZmlsZVVwbG9hZFJlc3BvbnNlIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdmaWxlVXBsb2FkUmVzcG9uc2UnLCAoZXZ0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkUmVzcG9uc2UuZW1pdChldnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENLRWRpdG9yIHBhc3RlIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwYXN0ZScsIChldnQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnBhc3RlLmVtaXQoZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDS0VkaXRvciBkcm9wIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdkcm9wJywgKGV2dDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZHJvcC5lbWl0KGV2dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIFRvb2xiYXIgR3JvdXBzIHRvIEVkaXRvci4gVGhpcyB3aWxsIGFsc28gYWRkIEJ1dHRvbnMgd2l0aGluIGdyb3Vwcy5cbiAgICAgIHRoaXMudG9vbGJhckdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICBncm91cC5pbml0aWFsaXplKHRoaXMpO1xuICAgICAgfSk7XG4gICAgICAvLyBBZGQgVG9vbGJhciBCdXR0b25zIHRvIEVkaXRvci5cbiAgICAgIHRoaXMudG9vbGJhckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5pbml0aWFsaXplKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh2YWx1ZSk7XG4gIH1cbiAgb25DaGFuZ2UoXzogYW55KSB7fVxuICBvblRvdWNoZWQoKSB7fVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBwcml2YXRlIGRvY3VtZW50Q29udGFpbnMobm9kZTogTm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jb250YWlucyA/IGRvY3VtZW50LmNvbnRhaW5zKG5vZGUpIDogZG9jdW1lbnQuYm9keS5jb250YWlucyhub2RlKTtcbiAgfVxufVxuIl19