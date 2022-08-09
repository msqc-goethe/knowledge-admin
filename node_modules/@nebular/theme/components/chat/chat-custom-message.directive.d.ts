import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NbBooleanInput } from '../helpers';
import { NbCustomMessageService } from './custom-message.service';
/**
 * `[nbCustomMessage]` directive should be used as a structural directive or should be applied to the `ng-template`:
 *
 * ```html
 * <div *nbCustomMessage="'my-custom-type'; let data">
 *   <!-- custom message -->
 * </div>
 * ```
 * or
 * ```html
 * <ng-template nbCustomMessage='my-custom-type' let-data>
 *   <!-- custom message -->
 * </ng-template>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbChatCustomMessageDirective implements OnInit, OnDestroy {
    templateRef: TemplateRef<any>;
    protected customMessageService: NbCustomMessageService;
    /**
     * Defines a message type which should rendered with the custom message template.
     * @type {string}
     */
    get nbCustomMessage(): string;
    set nbCustomMessage(value: string);
    protected _type: string;
    get type(): string;
    /**
     * Disables generic message styles, such as round corners, text color, background, etc.,
     * so a custom message could be styled from the ground up.
     *
     * @type {boolean}
     */
    set nbCustomMessageNoStyles(value: boolean);
    get nbCustomMessageNoStyles(): boolean;
    protected _noStyles: boolean;
    static ngAcceptInputType_noStyles: NbBooleanInput;
    get noStyles(): boolean;
    constructor(templateRef: TemplateRef<any>, customMessageService: NbCustomMessageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbChatCustomMessageDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<NbChatCustomMessageDirective, "[nbCustomMessage]", never, { "nbCustomMessage": "nbCustomMessage"; "nbCustomMessageNoStyles": "nbCustomMessageNoStyles"; }, {}, never>;
}

//# sourceMappingURL=chat-custom-message.directive.d.ts.map