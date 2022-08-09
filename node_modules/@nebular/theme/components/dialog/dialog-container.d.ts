/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentRef, ElementRef, EmbeddedViewRef, OnDestroy, OnInit } from '@angular/core';
import { NbComponentPortal, NbPortalOutletDirective, NbTemplatePortal } from '../cdk/overlay/mapping';
import { NbFocusTrap, NbFocusTrapFactoryService } from '../cdk/a11y/focus-trap';
import { NbDialogConfig } from './dialog-config';
/**
 * Container component for each dialog.
 * All the dialogs will be attached to it.
 * // TODO add animations
 * */
import * as ɵngcc0 from '@angular/core';
export declare class NbDialogContainerComponent implements OnInit, OnDestroy {
    protected config: NbDialogConfig;
    protected elementRef: ElementRef;
    protected focusTrapFactory: NbFocusTrapFactoryService;
    portalOutlet: NbPortalOutletDirective;
    protected focusTrap: NbFocusTrap;
    constructor(config: NbDialogConfig, elementRef: ElementRef, focusTrapFactory: NbFocusTrapFactoryService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    attachComponentPortal<T>(portal: NbComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: NbTemplatePortal<C>): EmbeddedViewRef<C>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbDialogContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbDialogContainerComponent, "nb-dialog-container", never, {}, {}, never, never>;
}

//# sourceMappingURL=dialog-container.d.ts.map