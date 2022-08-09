/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { NbComponentPortal } from '../cdk/overlay/mapping';
import { NbOverlayService, patch } from '../cdk/overlay/overlay-service';
import { NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbPositionHelper } from '../cdk/overlay/position-helper';
import { NbToastrContainerComponent } from './toastr-container.component';
import { NB_TOASTR_CONFIG, NbToastrConfig } from './toastr-config';
import { NB_DOCUMENT } from '../../theme.options';
export class NbToastRef {
    constructor(toastContainer, toast) {
        this.toastContainer = toastContainer;
        this.toast = toast;
    }
    close() {
        this.toastContainer.destroy(this.toast);
    }
}
export class NbToastContainer {
    constructor(position, containerRef, positionHelper) {
        this.position = position;
        this.containerRef = containerRef;
        this.positionHelper = positionHelper;
        this.toasts = [];
        this.toastDuplicateCompareFunc = (t1, t2) => {
            return t1.message === t2.message
                && t1.title === t2.title
                && t1.config.status === t2.config.status;
        };
    }
    get nativeElement() {
        return this.containerRef.location.nativeElement;
    }
    attach(toast) {
        if (toast.config.preventDuplicates && this.isDuplicate(toast)) {
            return;
        }
        this.removeToastIfLimitReached(toast);
        const toastComponent = this.attachToast(toast);
        if (toast.config.destroyByClick) {
            this.subscribeOnClick(toastComponent, toast);
        }
        if (toast.config.duration) {
            this.setDestroyTimeout(toast);
        }
        this.prevToast = toast;
        return new NbToastRef(this, toast);
    }
    destroy(toast) {
        if (this.prevToast === toast) {
            this.prevToast = null;
        }
        this.toasts = this.toasts.filter(t => t !== toast);
        this.updateContainer();
    }
    isDuplicate(toast) {
        return toast.config.duplicatesBehaviour === 'previous'
            ? this.isDuplicatePrevious(toast)
            : this.isDuplicateAmongAll(toast);
    }
    isDuplicatePrevious(toast) {
        return this.prevToast && this.toastDuplicateCompareFunc(this.prevToast, toast);
    }
    isDuplicateAmongAll(toast) {
        return this.toasts.some(t => this.toastDuplicateCompareFunc(t, toast));
    }
    removeToastIfLimitReached(toast) {
        if (!toast.config.limit || this.toasts.length < toast.config.limit) {
            return;
        }
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            this.toasts.pop();
        }
        else {
            this.toasts.shift();
        }
    }
    attachToast(toast) {
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            return this.attachToTop(toast);
        }
        else {
            return this.attachToBottom(toast);
        }
    }
    attachToTop(toast) {
        this.toasts.unshift(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.first;
    }
    attachToBottom(toast) {
        this.toasts.push(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.last;
    }
    setDestroyTimeout(toast) {
        setTimeout(() => this.destroy(toast), toast.config.duration);
    }
    subscribeOnClick(toastComponent, toast) {
        toastComponent.destroy.subscribe(() => this.destroy(toast));
    }
    updateContainer() {
        patch(this.containerRef, { content: this.toasts, position: this.position });
    }
}
export class NbToastrContainerRegistry {
    constructor(overlay, positionBuilder, positionHelper, cfr, document) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.positionHelper = positionHelper;
        this.cfr = cfr;
        this.document = document;
        this.overlays = new Map();
    }
    get(position) {
        const logicalPosition = this.positionHelper.toLogicalPosition(position);
        const overlayWithContainer = this.overlays.get(logicalPosition);
        if (!overlayWithContainer || !this.existsInDom(overlayWithContainer.toastrContainer)) {
            if (overlayWithContainer) {
                overlayWithContainer.overlayRef.dispose();
            }
            this.instantiateContainer(logicalPosition);
        }
        return this.overlays.get(logicalPosition).toastrContainer;
    }
    instantiateContainer(position) {
        const toastrOverlayWithContainer = this.createContainer(position);
        this.overlays.set(position, toastrOverlayWithContainer);
    }
    createContainer(position) {
        const positionStrategy = this.positionBuilder.global().position(position);
        const ref = this.overlay.create({ positionStrategy });
        this.addClassToOverlayHost(ref);
        const containerRef = ref.attach(new NbComponentPortal(NbToastrContainerComponent, null, null, this.cfr));
        return {
            overlayRef: ref,
            toastrContainer: new NbToastContainer(position, containerRef, this.positionHelper),
        };
    }
    addClassToOverlayHost(overlayRef) {
        overlayRef.hostElement.classList.add('toastr-overlay-container');
    }
    existsInDom(toastContainer) {
        return this.document.body.contains(toastContainer.nativeElement);
    }
}
NbToastrContainerRegistry.decorators = [
    { type: Injectable }
];
NbToastrContainerRegistry.ctorParameters = () => [
    { type: NbOverlayService },
    { type: NbPositionBuilderService },
    { type: NbPositionHelper },
    { type: ComponentFactoryResolver },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
/**
 * The `NbToastrService` provides a capability to build toast notifications.
 *
 * @stacked-example(Showcase, toastr/toastr-showcase.component)
 *
 * `NbToastrService.show(message, title, config)` accepts three params, title and config are optional.
 *
 * ### Installation
 *
 * Import `NbToastrModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToastrModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * Calling `NbToastrService.show(...)` will render new toast and return `NbToastrRef` with
 * help of which you may close newly created toast by calling `close` method.
 *
 * ```ts
 * const toastRef: NbToastRef = this.toastrService.show(...);
 * toastRef.close();
 * ```
 *
 * Config accepts following options:
 *
 * `position` - determines where on the screen toast will be rendered.
 * Default is `top-end`.
 *
 * @stacked-example(Position, toastr/toastr-positions.component)
 *
 * `status` - coloring and icon of the toast.
 * Default is `basic`.
 *
 * @stacked-example(Status, toastr/toastr-statuses.component)
 *
 * `duration` - the time after which the toast will be destroyed.
 * `0` means endless toast, that may be destroyed by click only.
 * Default is 3000 ms.
 *
 * @stacked-example(Duration, toastr/toastr-duration.component)
 *
 * `destroyByClick` - provides a capability to destroy toast by click.
 * Default is true.
 *
 * @stacked-example(Destroy by click, toastr/toastr-destroy-by-click.component)
 *
 * `preventDuplicates` - don't create new toast if it has the same title, message and status.
 * Default is false.
 *
 * @stacked-example(Prevent duplicates, toastr/toastr-prevent-duplicates.component)
 *
 * `duplicatesBehaviour` - determines how to treat the toasts duplication.
 * Compare with the previous message `previous`
 * or with all visible messages `all`.
 *
 * @stacked-example(Prevent duplicates behaviour , toastr/toastr-prevent-duplicates-behaviour.component)
 *
 * `limit` - the number of visible toasts in the toast container. The number of toasts is unlimited by default.
 *
 * @stacked-example(Prevent duplicates behaviour , toastr/toastr-limit.component)
 *
 * `hasIcon` - if true then render toast icon.
 * `icon` - you can pass icon class that will be applied into the toast.
 *
 * @stacked-example(Has icon, toastr/toastr-icon.component)
 * */
export class NbToastrService {
    constructor(globalConfig, containerRegistry) {
        this.globalConfig = globalConfig;
        this.containerRegistry = containerRegistry;
    }
    /**
     * Shows toast with message, title and user config.
     * */
    show(message, title, userConfig) {
        const config = new NbToastrConfig(Object.assign(Object.assign({}, this.globalConfig), userConfig));
        const container = this.containerRegistry.get(config.position);
        const toast = { message, title, config };
        return container.attach(toast);
    }
    /**
     * Shows success toast with message, title and user config.
     * */
    success(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'success' }));
    }
    /**
     * Shows info toast with message, title and user config.
     * */
    info(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'info' }));
    }
    /**
     * Shows warning toast with message, title and user config.
     * */
    warning(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'warning' }));
    }
    /**
     * Shows primary toast with message, title and user config.
     * */
    primary(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'primary' }));
    }
    /**
     * Shows danger toast with message, title and user config.
     * */
    danger(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'danger' }));
    }
    /**
     * Shows default toast with message, title and user config.
     * */
    default(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'basic' }));
    }
    /**
     * Shows control toast with message, title and user config.
     * */
    control(message, title, config) {
        return this.default(message, title, Object.assign(Object.assign({}, config), { status: 'control' }));
    }
}
NbToastrService.decorators = [
    { type: Injectable }
];
NbToastrService.ctorParameters = () => [
    { type: NbToastrConfig, decorators: [{ type: Inject, args: [NB_TOASTR_CONFIG,] }] },
    { type: NbToastrContainerRegistry }
];
//# sourceMappingURL=toastr.service.js.map