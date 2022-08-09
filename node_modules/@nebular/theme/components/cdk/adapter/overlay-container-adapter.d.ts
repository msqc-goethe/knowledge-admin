import { NbOverlayContainer } from '../overlay/mapping';
/**
 * Provides nb-layout as overlay container.
 * Container has to be cleared when layout destroys.
 * Another way previous version of the container will be used
 * but it isn't inserted in DOM and exists in memory only.
 * This case important only if you switch between multiple layouts.
 * */
import * as ɵngcc0 from '@angular/core';
export declare class NbOverlayContainerAdapter extends NbOverlayContainer {
    protected container: HTMLElement;
    setContainer(container: HTMLElement): void;
    clearContainer(): void;
    protected _createContainer(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbOverlayContainerAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbOverlayContainerAdapter>;
}

//# sourceMappingURL=overlay-container-adapter.d.ts.map