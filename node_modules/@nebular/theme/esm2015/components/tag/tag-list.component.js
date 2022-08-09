/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgZone, Output, Renderer2, } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { filter, finalize, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbStatusService } from '../../services/status.service';
import { NbFocusMonitor } from '../cdk/a11y/a11y.module';
import { NbActiveDescendantKeyManagerFactoryService, } from '../cdk/a11y/descendant-key-manager';
import { BACKSPACE, DELETE, SPACE } from '../cdk/keycodes/keycodes';
import { convertToBoolProperty } from '../helpers';
import { NbAutocompleteDirective } from '../autocomplete/autocomplete.directive';
import { NbTagComponent } from './tag.component';
import { NbTagInputDirective } from './tag-input.directive';
/**
 *
 * `nb-tag-list` component displays a list of `nb-tag` components.
 *
 * @stacked-example(Tag List Showcase, tag/tag-showcase.component)
 *
 * @styles
 *
 * tag-list-tiny-tag-offset:
 * tag-list-small-tag-offset:
 * tag-list-medium-tag-offset:
 * tag-list-large-tag-offset:
 * tag-list-giant-tag-offset:
 * tag-list-with-input-tiny-padding:
 * tag-list-with-input-small-padding:
 * tag-list-with-input-medium-padding:
 * tag-list-with-input-large-padding:
 * tag-list-with-input-giant-padding:
 * tag-list-with-input-rectangle-border-radius:
 * tag-list-with-input-semi-round-border-radius:
 * tag-list-with-input-round-border-radius:
 */
export class NbTagListComponent {
    constructor(hostElement, cd, renderer, zone, focusMonitor, activeDescendantKeyManagerFactory, directionService, statusService) {
        this.hostElement = hostElement;
        this.cd = cd;
        this.renderer = renderer;
        this.zone = zone;
        this.focusMonitor = focusMonitor;
        this.activeDescendantKeyManagerFactory = activeDescendantKeyManagerFactory;
        this.directionService = directionService;
        this.statusService = statusService;
        this.destroy$ = new Subject();
        this.keyDown$ = new Subject();
        this.tagClick$ = new Subject();
        this.focused = false;
        /**
         * Controls tags offset.
         */
        this.size = 'medium';
        this.tabIndex = 0;
        this.role = 'listbox';
        this._multiple = false;
        this.activeTagId = null;
        /**
         * Emits when tag need to be removed (whether because of click on the remove button
         * or when `delete` or `backspace` key pressed).
         */
        this.tagRemove = new EventEmitter();
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = convertToBoolProperty(value);
    }
    get _hasInput() {
        return !!this.tagInput;
    }
    get _isFocused() {
        return this.focused;
    }
    get _isFullWidth() {
        var _a;
        return !!((_a = this.tagInput) === null || _a === void 0 ? void 0 : _a.fullWidth);
    }
    get _inputClasses() {
        if (this._hasInput) {
            return [
                `shape-${this.tagInput.shape}`,
                `size-${this.tagInput.fieldSize}`,
                this.statusService.getStatusClass(this.tagInput.status),
            ];
        }
        return [`size-${this.size}`];
    }
    _onKeydown(event) {
        this.keyDown$.next(event);
    }
    _onClick({ target }) {
        const clickedTag = this.tags.find((tag) => tag._hostElement.nativeElement === target);
        if (clickedTag) {
            this.tagClick$.next(clickedTag);
        }
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.hostElement, true)
            .pipe(map(origin => !!origin), finalize(() => this.focusMonitor.stopMonitoring(this.hostElement)), takeUntil(this.destroy$))
            .subscribe((isFocused) => this.onFocusChange(isFocused));
    }
    ngAfterContentInit() {
        this.initKeyManager();
        this.setAutocompleteCustomHost();
    }
    ngAfterViewInit() {
        this.listenToLayoutDirectionChange();
        this.listenListKeyDown();
        this.listenInputKeyDown();
        this.listenTagClick();
        this.listenTagRemove();
        this.listenTagDestroy();
        this.listenActiveTagChange();
        this.listenNoTags();
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    initKeyManager() {
        this.keyManager = this.activeDescendantKeyManagerFactory
            .create(this.tags)
            .withHorizontalOrientation(this.directionService.getDirection())
            .withWrap();
    }
    listenToLayoutDirectionChange() {
        this.directionService.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((direction) => this.keyManager.withHorizontalOrientation(direction));
    }
    listenListKeyDown() {
        const tagListKeyDown$ = this.keyDown$
            .pipe(filter(({ target }) => target === this.hostElement.nativeElement));
        const activeTagKeyDown$ = tagListKeyDown$
            .pipe(filter(() => !!this.keyManager.activeItem));
        tagListKeyDown$
            .pipe(takeUntil(this.destroy$))
            .subscribe((event) => this.keyManager.onKeydown(event));
        activeTagKeyDown$
            .pipe(filter(({ keyCode }) => keyCode === SPACE), takeUntil(this.destroy$))
            .subscribe((event) => {
            this.toggleTag(this.keyManager.activeItem);
            // Prevents page scroll.
            event.preventDefault();
        });
        activeTagKeyDown$
            .pipe(filter(({ keyCode }) => this.isBackspaceOrDelete(keyCode)), map(() => this.keyManager.activeItem), takeUntil(this.destroy$))
            .subscribe((tagToRemove) => tagToRemove._remove());
    }
    listenInputKeyDown() {
        const inputKeyDown$ = this.keyDown$
            .pipe(filter(({ target }) => { var _a; return target === ((_a = this.tagInput) === null || _a === void 0 ? void 0 : _a._hostElement.nativeElement); }));
        inputKeyDown$
            .pipe(filter(({ keyCode }) => {
            return this.tagInput._value === '' && this.isBackspaceOrDelete(keyCode) && this.tags.length > 0;
        }), takeUntil(this.destroy$))
            .subscribe(() => {
            this.hostElement.nativeElement.focus();
            this.keyManager.setLastItemActive();
            this.cd.markForCheck();
        });
    }
    listenTagClick() {
        this.tagClick$
            .pipe(takeUntil(this.destroy$))
            .subscribe((clickedTag) => {
            this.toggleTag(clickedTag);
            this.keyManager.setActiveItem(clickedTag);
        });
    }
    listenTagRemove() {
        this.tags.changes
            .pipe(startWith(this.tags), switchMap((tags) => merge(...tags.map((tag) => tag.remove))), takeUntil(this.destroy$))
            .subscribe((tagToRemove) => this.tagRemove.emit(tagToRemove));
    }
    listenTagDestroy() {
        this.tags.changes
            .pipe(startWith(this.tags), switchMap((tags) => merge(...tags.map((tag) => tag.destroy$))), filter((destroyedTag) => destroyedTag === this.keyManager.activeItem), map((destroyedTag) => destroyedTag === this.tags.last), takeUntil(this.destroy$))
            .subscribe((isLastTagDestroyed) => {
            if (isLastTagDestroyed) {
                this.keyManager.setPreviousItemActive();
            }
            else {
                this.keyManager.setNextItemActive();
            }
        });
    }
    listenNoTags() {
        this.tags.changes
            .pipe(startWith(this.tags), filter((tags) => tags.length === 0), takeUntil(this.destroy$))
            .subscribe(() => this.focusInputIfActive());
    }
    listenActiveTagChange() {
        this.keyManager.change
            .pipe(map(() => { var _a; return (_a = this.keyManager.activeItem) === null || _a === void 0 ? void 0 : _a._id; }), takeUntil(this.destroy$))
            .subscribe((activeTagId) => {
            this.activeTagId = activeTagId;
            this.cd.markForCheck();
        });
    }
    onFocusChange(isFocused) {
        var _a;
        this.focused = isFocused;
        this.cd.markForCheck();
        if (!isFocused || ((_a = this.tagInput) === null || _a === void 0 ? void 0 : _a.focused$.value)) {
            this.keyManager.setActiveItem(-1);
            return;
        }
        // Focus input when focusing tag list without tags. Otherwise select first tag.
        if (this.tags.length === 0 && this._hasInput) {
            this.focusInput();
        }
        else {
            this.keyManager.setFirstItemActive();
        }
    }
    isBackspaceOrDelete(keyCode) {
        return keyCode === BACKSPACE || keyCode === DELETE;
    }
    setAutocompleteCustomHost() {
        if (this.autocompleteDirective) {
            this.autocompleteDirective.customOverlayHost = this.hostElement;
        }
    }
    toggleTag(tagToToggle) {
        tagToToggle._toggleSelection();
        if (tagToToggle.selected && !this.multiple) {
            this.tags.forEach((tag) => {
                if (tag !== tagToToggle) {
                    tag.selected = false;
                }
            });
        }
    }
    focusInput() {
        if (this._hasInput) {
            this.tagInput._hostElement.nativeElement.focus();
        }
    }
    focusInputIfActive() {
        if (this._isFocused) {
            this.focusInput();
        }
    }
}
NbTagListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tag-list',
                template: `
    <div class="nb-tag-list-tags-wrapper">
      <ng-content select="nb-tag, input[nbTagInput]"></ng-content>
    </div>
  `,
                exportAs: 'nbTagList',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbTagListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbFocusMonitor },
    { type: NbActiveDescendantKeyManagerFactoryService },
    { type: NbLayoutDirectionService },
    { type: NbStatusService }
];
NbTagListComponent.propDecorators = {
    tags: [{ type: ContentChildren, args: [NbTagComponent,] }],
    tagInput: [{ type: ContentChild, args: [NbTagInputDirective,] }],
    autocompleteDirective: [{ type: ContentChild, args: [NbAutocompleteDirective,] }],
    size: [{ type: Input }],
    tabIndex: [{ type: Input }, { type: HostBinding, args: ['attr.tabindex',] }],
    role: [{ type: Input }, { type: HostBinding, args: ['attr.role',] }],
    multiple: [{ type: Input }, { type: HostBinding, args: ['attr.aria-multiselectable',] }],
    activeTagId: [{ type: HostBinding, args: ['attr.aria-activedescendant',] }],
    tagRemove: [{ type: Output }],
    _hasInput: [{ type: HostBinding, args: ['class.nb-tag-list-with-input',] }],
    _isFocused: [{ type: HostBinding, args: ['class.focus',] }],
    _isFullWidth: [{ type: HostBinding, args: ['class.input-full-width',] }],
    _inputClasses: [{ type: HostBinding, args: ['class',] }],
    _onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    _onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=tag-list.component.js.map