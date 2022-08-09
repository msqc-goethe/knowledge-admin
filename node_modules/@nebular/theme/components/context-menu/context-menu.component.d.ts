/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbMenuItem } from '../../components/menu/menu.service';
import { NbPositionedContainerComponent, NbRenderableContainer } from '../cdk/overlay/overlay-container';
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-background-color:
 * context-menu-border-color:
 * context-menu-border-style:
 * context-menu-border-width:
 * context-menu-border-radius:
 * context-menu-text-align:
 * context-menu-min-width:
 * context-menu-max-width:
 * context-menu-shadow:
 * */
import * as ɵngcc0 from '@angular/core';
export declare class NbContextMenuComponent extends NbPositionedContainerComponent implements NbRenderableContainer {
    items: NbMenuItem[];
    tag: string;
    context: {
        items: NbMenuItem[];
        tag?: string;
    };
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbContextMenuComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbContextMenuComponent, "nb-context-menu", never, { "items": "items"; "context": "context"; "tag": "tag"; }, {}, never, never>;
}

//# sourceMappingURL=context-menu.component.d.ts.map