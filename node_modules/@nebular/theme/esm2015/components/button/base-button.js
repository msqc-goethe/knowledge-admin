import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, NgZone, Renderer2, } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
import { convertToBoolProperty, firstChildNotComment, lastChildNotComment } from '../helpers';
// tslint:disable-next-line:directive-class-suffix
export class NbButton {
    constructor(renderer, hostElement, cd, zone, statusService) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
        /**
         * Button size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Button status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         */
        this.status = 'basic';
        /**
         * Button shapes: `rectangle`, `round`, `semi-round`
         */
        this.shape = 'rectangle';
        /**
         * Button appearance: `filled`, `outline`, `ghost`, `hero`
         */
        this.appearance = 'filled';
        this._fullWidth = false;
        this._disabled = false;
    }
    /**
     * Sets `filled` appearance
     */
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    /**
     * Sets `outline` appearance
     */
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    /**
     * Sets `ghost` appearance
     */
    get ghost() {
        return this.appearance === 'ghost';
    }
    set ghost(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'ghost';
        }
    }
    /**
     * If set element will fill its container
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    /**
     * Disables the button
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (this.disabled !== convertToBoolProperty(value)) {
            this._disabled = !this.disabled;
            this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
        }
    }
    // issue #794
    get tabbable() {
        if (this.disabled) {
            return '-1';
        }
        if (this.tabIndex == null) {
            return '0';
        }
        return this.tabIndex.toString();
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get round() {
        return this.shape === 'round';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get iconLeft() {
        const el = this.hostElement.nativeElement;
        const icon = this.iconElement;
        return !!(icon && firstChildNotComment(el) === icon);
    }
    get iconRight() {
        const el = this.hostElement.nativeElement;
        const icon = this.iconElement;
        return !!(icon && lastChildNotComment(el) === icon);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    /**
     * @docs-private
     **/
    updateProperties(config) {
        let isPropertyChanged = false;
        for (const key in config) {
            if (config.hasOwnProperty(key) && this[key] !== config[key]) {
                this[key] = config[key];
                isPropertyChanged = true;
            }
        }
        if (isPropertyChanged) {
            this.cd.markForCheck();
        }
    }
    get iconElement() {
        const el = this.hostElement.nativeElement;
        return el.querySelector('nb-icon');
    }
}
NbButton.decorators = [
    { type: Directive }
];
NbButton.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NbStatusService }
];
NbButton.propDecorators = {
    size: [{ type: Input }],
    status: [{ type: Input }],
    shape: [{ type: Input }],
    appearance: [{ type: Input }],
    filled: [{ type: Input }, { type: HostBinding, args: ['class.appearance-filled',] }],
    outline: [{ type: Input }, { type: HostBinding, args: ['class.appearance-outline',] }],
    ghost: [{ type: Input }, { type: HostBinding, args: ['class.appearance-ghost',] }],
    fullWidth: [{ type: Input }, { type: HostBinding, args: ['class.full-width',] }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['attr.aria-disabled',] }, { type: HostBinding, args: ['class.btn-disabled',] }],
    tabIndex: [{ type: Input }],
    tabbable: [{ type: HostBinding, args: ['attr.tabindex',] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    rectangle: [{ type: HostBinding, args: ['class.shape-rectangle',] }],
    round: [{ type: HostBinding, args: ['class.shape-round',] }],
    semiRound: [{ type: HostBinding, args: ['class.shape-semi-round',] }],
    iconLeft: [{ type: HostBinding, args: ['class.icon-start',] }],
    iconRight: [{ type: HostBinding, args: ['class.icon-end',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=base-button.js.map