import { Component, ElementRef, HostBinding, Inject, TemplateRef, Renderer2, ViewChild, Input, } from '@angular/core';
import { NbFocusTrapFactoryService } from '../cdk/a11y/focus-trap';
import { NbComponentPortal, NbTemplatePortal } from '../cdk/overlay/mapping';
import { NbOverlayContainerComponent } from '../cdk/overlay/overlay-container';
import { NB_WINDOW_CONTENT, NbWindowConfig, NbWindowState, NB_WINDOW_CONTEXT } from './window.options';
import { NbWindowRef } from './window-ref';
export class NbWindowComponent {
    constructor(content, context, windowRef, config, focusTrapFactory, elementRef, renderer) {
        this.content = content;
        this.context = context;
        this.windowRef = windowRef;
        this.config = config;
        this.focusTrapFactory = focusTrapFactory;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get isFullScreen() {
        return this.windowRef.state === NbWindowState.FULL_SCREEN;
    }
    get maximized() {
        return this.windowRef.state === NbWindowState.MAXIMIZED;
    }
    get minimized() {
        return this.windowRef.state === NbWindowState.MINIMIZED;
    }
    get showMinimize() {
        return this.config.buttons.minimize;
    }
    get showMaximize() {
        return this.config.buttons.maximize;
    }
    get showFullScreen() {
        return this.config.buttons.fullScreen;
    }
    ngOnInit() {
        this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        this.focusTrap.blurPreviouslyFocusedElement();
        this.focusTrap.focusInitialElement();
        if (this.config.windowClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.config.windowClass);
        }
    }
    ngAfterViewChecked() {
        if (!this.overlayContainer || this.overlayContainer.isAttached) {
            return;
        }
        if (this.content instanceof TemplateRef) {
            this.attachTemplate();
        }
        else {
            this.attachComponent();
        }
    }
    ngOnDestroy() {
        if (this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
        this.close();
    }
    minimize() {
        if (this.windowRef.state === NbWindowState.MINIMIZED) {
            this.windowRef.toPreviousState();
        }
        else {
            this.windowRef.minimize();
        }
    }
    maximize() {
        this.windowRef.maximize();
    }
    fullScreen() {
        this.windowRef.fullScreen();
    }
    maximizeOrFullScreen() {
        if (this.windowRef.state === NbWindowState.MINIMIZED && this.showMaximize) {
            this.maximize();
        }
        else {
            this.fullScreen();
        }
    }
    close() {
        this.windowRef.close();
    }
    attachTemplate() {
        this.overlayContainer
            .attachTemplatePortal(new NbTemplatePortal(this.content, null, this.context));
    }
    attachComponent() {
        const portal = new NbComponentPortal(this.content, null, null, this.cfr);
        const ref = this.overlayContainer.attachComponentPortal(portal, this.context);
        ref.changeDetectorRef.detectChanges();
    }
}
NbWindowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-window',
                template: `
    <nb-card>
      <nb-card-header>
        <div cdkFocusInitial class="title" tabindex="-1">{{ config.title }}</div>

        <div class="buttons">
          <ng-container *ngIf="showMinimize">
            <button nbButton ghost (click)="minimize()">
              <nb-icon icon="minus-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showMaximize">
            <button nbButton ghost *ngIf="isFullScreen" (click)="maximize()">
              <nb-icon icon="collapse-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showFullScreen">
            <button nbButton ghost *ngIf="minimized || maximized" (click)="maximizeOrFullScreen()">
              <nb-icon icon="expand-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <button nbButton ghost (click)="close()">
            <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
          </button>
        </div>
      </nb-card-header>
      <nb-card-body *ngIf="maximized || isFullScreen">
        <nb-overlay-container></nb-overlay-container>
      </nb-card-body>
    </nb-card>
  `,
                styles: [":host{flex:1 0 auto;min-width:20rem}:host nb-card{margin:0}:host nb-card-header{display:flex;justify-content:space-between;align-items:center;overflow:hidden}:host .title{flex:1 0 auto;margin-right:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .buttons{width:9.5rem;display:flex;justify-content:flex-end}:host .buttons [nbButton]{flex:0 0 3rem}:host(.full-screen){position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}:host(.maximized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.minimized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0;height:auto}:host(.minimized) nb-card nb-card-header{border-bottom:none}\n"]
            },] }
];
NbWindowComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW_CONTENT,] }] },
    { type: Object, decorators: [{ type: Inject, args: [NB_WINDOW_CONTEXT,] }] },
    { type: NbWindowRef },
    { type: NbWindowConfig },
    { type: NbFocusTrapFactoryService },
    { type: ElementRef },
    { type: Renderer2 }
];
NbWindowComponent.propDecorators = {
    cfr: [{ type: Input }],
    isFullScreen: [{ type: HostBinding, args: ['class.full-screen',] }],
    maximized: [{ type: HostBinding, args: ['class.maximized',] }],
    minimized: [{ type: HostBinding, args: ['class.minimized',] }],
    overlayContainer: [{ type: ViewChild, args: [NbOverlayContainerComponent,] }]
};
//# sourceMappingURL=window.component.js.map