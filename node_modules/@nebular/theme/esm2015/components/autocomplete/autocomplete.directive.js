/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, Directive, ElementRef, forwardRef, HostBinding, HostListener, Input, Renderer2, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { filter, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { NbTrigger, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { ENTER, ESCAPE } from '../cdk/keycodes/keycodes';
import { NbAdjustment, NbPosition, NbPositionBuilderService, } from '../cdk/overlay/overlay-position';
import { NbActiveDescendantKeyManagerFactoryService, NbKeyManagerActiveItemMode, } from '../cdk/a11y/descendant-key-manager';
import { convertToBoolProperty } from '../helpers';
/**
 * The `NbAutocompleteDirective` provides a capability to expand input with
 * `NbAutocompleteComponent` overlay containing options to select and fill input with.
 *
 * @stacked-example(Showcase, autocomplete/autocomplete-showcase.component)
 *
 * ### Installation
 *
 * Import `NbAutocompleteModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAutocompleteModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * You can bind control with form controls or ngModel.
 *
 * @stacked-example(Autocomplete form binding, autocomplete/autocomplete-form.component)
 *
 * Options in the autocomplete may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, autocomplete/autocomplete-group.component)
 *
 * Autocomplete may change selected option value via provided function.
 *
 * @stacked-example(Custom display, autocomplete/autocomplete-custom-display.component)
 *
 * Also, autocomplete may make first option in option list active automatically.
 *
 * @stacked-example(Active first, autocomplete/autocomplete-active-first.component)
 *
 * */
export class NbAutocompleteDirective {
    constructor(hostRef, overlay, cd, triggerStrategyBuilder, positionBuilder, activeDescendantKeyManagerFactory, renderer) {
        this.hostRef = hostRef;
        this.overlay = overlay;
        this.cd = cd;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.positionBuilder = positionBuilder;
        this.activeDescendantKeyManagerFactory = activeDescendantKeyManagerFactory;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this._onChange = () => { };
        this._onTouched = () => { };
        /**
         * Determines options overlay offset (in pixels).
         **/
        this.overlayOffset = 8;
        this._focusInputOnValueChange = true;
        /**
         * Determines options overlay scroll strategy.
         **/
        this.scrollStrategy = 'block';
        this.role = 'combobox';
        this.ariaAutocomplete = 'list';
        this.hasPopup = 'true';
    }
    /**
     * Determines is autocomplete overlay opened.
     * */
    get isOpen() {
        return this.overlayRef && this.overlayRef.hasAttached();
    }
    /**
     * Determines is autocomplete overlay closed.
     * */
    get isClosed() {
        return !this.isOpen;
    }
    /**
     * Provides autocomplete component.
     * */
    get autocomplete() {
        return this._autocomplete;
    }
    set autocomplete(autocomplete) {
        this._autocomplete = autocomplete;
    }
    /**
     * Determines if the input will be focused when the control value is changed
     * */
    get focusInputOnValueChange() {
        return this._focusInputOnValueChange;
    }
    set focusInputOnValueChange(value) {
        this._focusInputOnValueChange = convertToBoolProperty(value);
    }
    get top() {
        return this.isOpen && this.autocomplete.options.length && this.autocomplete.overlayPosition === NbPosition.TOP;
    }
    get bottom() {
        return this.isOpen && this.autocomplete.options.length && this.autocomplete.overlayPosition === NbPosition.BOTTOM;
    }
    get ariaExpanded() {
        return this.isOpen && this.isOpen.toString();
    }
    get ariaOwns() {
        return this.isOpen ? this.autocomplete.id : null;
    }
    get ariaActiveDescendant() {
        return (this.isOpen && this.keyManager.activeItem) ? this.keyManager.activeItem.id : null;
    }
    ngAfterViewInit() {
        this.triggerStrategy = this.createTriggerStrategy();
        this.subscribeOnTriggers();
    }
    ngOnDestroy() {
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
        if (this.positionStrategy) {
            this.positionStrategy.dispose();
        }
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    handleInput() {
        const currentValue = this.hostRef.nativeElement.value;
        this._onChange(currentValue);
        this.setHostInputValue(this.getDisplayValue(currentValue));
        this.show();
    }
    handleKeydown() {
        this.show();
    }
    handleBlur() {
        this._onTouched();
    }
    show() {
        if (this.isClosed) {
            this.attachToOverlay();
            this.setActiveItem();
        }
    }
    hide() {
        if (this.isOpen) {
            this.overlayRef.detach();
            // Need to update class via @HostBinding
            this.cd.markForCheck();
        }
    }
    writeValue(value) {
        this.handleInputValueUpdate(value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(disabled) {
        this.renderer.setProperty(this.hostRef.nativeElement, 'disabled', disabled);
    }
    subscribeOnOptionClick() {
        /**
         * If the user changes provided options list in the runtime we have to handle this
         * and resubscribe on options selection changes event.
         * Otherwise, the user will not be able to select new options.
         * */
        this.autocomplete.options.changes
            .pipe(tap(() => this.setActiveItem()), startWith(this.autocomplete.options), switchMap((options) => {
            return merge(...options.map(option => option.click));
        }), takeUntil(this.destroy$))
            .subscribe((clickedOption) => this.handleInputValueUpdate(clickedOption.value));
    }
    subscribeOnPositionChange() {
        this.positionStrategy.positionChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((position) => {
            this.autocomplete.overlayPosition = position;
            this.cd.detectChanges();
        });
    }
    getActiveItem() {
        return this.keyManager.activeItem;
    }
    setupAutocomplete() {
        this.autocomplete.setHost(this.customOverlayHost || this.hostRef);
    }
    getDisplayValue(value) {
        const displayFn = this.autocomplete.handleDisplayFn;
        return displayFn ? displayFn(value) : value;
    }
    getContainer() {
        return this.overlayRef && this.isOpen && {
            location: {
                nativeElement: this.overlayRef.overlayElement,
            },
        };
    }
    handleInputValueUpdate(value) {
        if (value === undefined || value === null) {
            return;
        }
        this.setHostInputValue(value);
        this._onChange(value);
        if (this.focusInputOnValueChange) {
            this.hostRef.nativeElement.focus();
        }
        this.autocomplete.emitSelected(value);
        this.hide();
    }
    subscribeOnTriggers() {
        this.triggerStrategy.show$
            .pipe(filter(() => this.isClosed))
            .subscribe(() => this.show());
        this.triggerStrategy.hide$
            .pipe(filter(() => this.isOpen))
            .subscribe(() => this.hide());
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(() => this.getContainer())
            .build();
    }
    createKeyManager() {
        this.keyManager = this.activeDescendantKeyManagerFactory
            .create(this.autocomplete.options);
    }
    setHostInputValue(value) {
        this.hostRef.nativeElement.value = this.getDisplayValue(value);
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.customOverlayHost || this.hostRef)
            .position(NbPosition.BOTTOM)
            .offset(this.overlayOffset)
            .adjustment(NbAdjustment.VERTICAL);
    }
    subscribeOnOverlayKeys() {
        this.overlayRef.keydownEvents()
            .pipe(takeUntil(this.destroy$))
            .subscribe((event) => {
            if (event.keyCode === ESCAPE && this.isOpen) {
                event.preventDefault();
                this.hostRef.nativeElement.focus();
                this.hide();
            }
            else if (event.keyCode === ENTER) {
                event.preventDefault();
                const activeItem = this.getActiveItem();
                if (!activeItem) {
                    return;
                }
                this.handleInputValueUpdate(activeItem.value);
            }
            else {
                this.keyManager.onKeydown(event);
            }
        });
    }
    setActiveItem() {
        // If autocomplete has activeFirst input set to true,
        // keyManager set first option active, otherwise - reset active option.
        const mode = this.autocomplete.activeFirst
            ? NbKeyManagerActiveItemMode.FIRST_ACTIVE
            : NbKeyManagerActiveItemMode.RESET_ACTIVE;
        this.keyManager.setActiveItem(mode);
        this.cd.detectChanges();
    }
    attachToOverlay() {
        if (!this.overlayRef) {
            this.setupAutocomplete();
            this.initOverlay();
        }
        this.overlayRef.attach(this.autocomplete.portal);
    }
    createOverlay() {
        const scrollStrategy = this.createScrollStrategy();
        this.overlayRef = this.overlay.create({ positionStrategy: this.positionStrategy, scrollStrategy, panelClass: this.autocomplete.optionsPanelClass });
    }
    initOverlay() {
        this.positionStrategy = this.createPositionStrategy();
        this.createKeyManager();
        this.subscribeOnPositionChange();
        this.subscribeOnOptionClick();
        this.checkOverlayVisibility();
        this.createOverlay();
        this.subscribeOnOverlayKeys();
    }
    checkOverlayVisibility() {
        this.autocomplete.options.changes
            .pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (!this.autocomplete.options.length) {
                this.hide();
            }
        });
    }
    createScrollStrategy() {
        return this.overlay.scrollStrategies[this.scrollStrategy]();
    }
}
NbAutocompleteDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbAutocomplete]',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbAutocompleteDirective),
                        multi: true,
                    }],
            },] }
];
NbAutocompleteDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbOverlayService },
    { type: ChangeDetectorRef },
    { type: NbTriggerStrategyBuilderService },
    { type: NbPositionBuilderService },
    { type: NbActiveDescendantKeyManagerFactoryService },
    { type: Renderer2 }
];
NbAutocompleteDirective.propDecorators = {
    autocomplete: [{ type: Input, args: ['nbAutocomplete',] }],
    overlayOffset: [{ type: Input }],
    focusInputOnValueChange: [{ type: Input }],
    scrollStrategy: [{ type: Input }],
    customOverlayHost: [{ type: Input }],
    top: [{ type: HostBinding, args: ['class.nb-autocomplete-position-top',] }],
    bottom: [{ type: HostBinding, args: ['class.nb-autocomplete-position-bottom',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    ariaAutocomplete: [{ type: HostBinding, args: ['attr.aria-autocomplete',] }],
    hasPopup: [{ type: HostBinding, args: ['attr.haspopup',] }],
    ariaExpanded: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    ariaOwns: [{ type: HostBinding, args: ['attr.aria-owns',] }],
    ariaActiveDescendant: [{ type: HostBinding, args: ['attr.aria-activedescendant',] }],
    handleInput: [{ type: HostListener, args: ['input',] }],
    handleKeydown: [{ type: HostListener, args: ['keydown.arrowDown',] }, { type: HostListener, args: ['keydown.arrowUp',] }],
    handleBlur: [{ type: HostListener, args: ['blur',] }]
};
//# sourceMappingURL=autocomplete.directive.js.map