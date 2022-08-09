import { NbStatusService } from '../../services/status.service';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbRenderableContainer } from '../cdk/overlay/overlay-container';
import { NbPosition } from '../cdk/overlay/overlay-position';
import { NbIconConfig } from '../icon/icon.component';
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-icon-height:
 * tooltip-icon-width:
 * tooltip-max-width:
 * tooltip-basic-background-color:
 * tooltip-basic-border-color:
 * tooltip-basic-text-color:
 * tooltip-primary-background-color:
 * tooltip-primary-border-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-border-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-border-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-border-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-border-color:
 * tooltip-danger-text-color:
 * tooltip-control-background-color:
 * tooltip-control-border-color:
 * tooltip-control-text-color:
 * tooltip-shadow:
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbTooltipComponent implements NbRenderableContainer {
    protected statusService: NbStatusService;
    content: string;
    /**
     * Popover position relatively host element.
     * */
    position: NbPosition;
    get binding(): string;
    get show(): boolean;
    context: {
        icon?: string | NbIconConfig;
        status?: NbComponentOrCustomStatus;
    };
    get statusClass(): string;
    constructor(statusService: NbStatusService);
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbTooltipComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbTooltipComponent, "nb-tooltip", never, { "position": "position"; "context": "context"; "content": "content"; }, {}, never, never>;
}

//# sourceMappingURL=tooltip.component.d.ts.map