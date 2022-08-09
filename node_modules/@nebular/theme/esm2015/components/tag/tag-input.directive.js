/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgZone, Output, Renderer2, } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { NbStatusService } from '../../services/status.service';
import { NbFocusMonitor } from '../cdk/a11y/a11y.module';
import { ENTER } from '../cdk/keycodes/keycodes';
import { NbFormFieldControl } from '../form-field/form-field-control';
import { NbInputDirective } from '../input/input.directive';
/**
 *
 * `[nbTagInput]` directive connects input with a `nb-tag-list` component.
 *
 * @stacked-example(Tag Input, tag/tag-input.component)
 *
 * @additional-example(Tag Input with Autocomplete, tag/tag-input-with-autocomplete.component)
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
 */
export class NbTagInputDirective extends NbInputDirective {
    constructor(_hostElement, focusMonitor, renderer, zone, statusService) {
        super(_hostElement, focusMonitor, renderer, zone, statusService);
        this._hostElement = _hostElement;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this.keyDown$ = new Subject();
        /**
         * Controls which keys should trigger tag add event.
         */
        this.separatorKeys = [ENTER];
        /**
         * Emits when a tag need to be added.
         */
        this.tagAdd = new EventEmitter();
        this.nbTagInputClass = true;
    }
    get _value() {
        return this._hostElement.nativeElement.value;
    }
    _onKeydown(event) {
        this.keyDown$.next(event);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.keyDown$
            .pipe(filter(({ keyCode }) => this.isSeparatorKey(keyCode)), map(() => this._value), takeUntil(this.destroy$))
            .subscribe((value) => this.tagAdd.emit({ value, input: this._hostElement }));
    }
    isSeparatorKey(keyCode) {
        return this.separatorKeys.includes(keyCode);
    }
}
NbTagInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbTagInput]',
                exportAs: 'nbTagInput',
                providers: [
                    { provide: NbFormFieldControl, useExisting: NbTagInputDirective },
                ],
            },] }
];
NbTagInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbFocusMonitor },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbStatusService }
];
NbTagInputDirective.propDecorators = {
    separatorKeys: [{ type: Input }],
    tagAdd: [{ type: Output }],
    nbTagInputClass: [{ type: HostBinding, args: ['class.nb-tag-input',] }],
    _onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=tag-input.directive.js.map