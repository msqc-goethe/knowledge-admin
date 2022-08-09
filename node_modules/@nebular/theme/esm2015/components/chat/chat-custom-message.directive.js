import { Directive, Input, TemplateRef } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NbCustomMessageService } from './custom-message.service';
function throwCustomMessageTypeIsRequired() {
    throw new Error('[nbCustomMessage]: custom message type is required.');
}
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
export class NbChatCustomMessageDirective {
    constructor(templateRef, customMessageService) {
        this.templateRef = templateRef;
        this.customMessageService = customMessageService;
        this._noStyles = false;
    }
    /**
     * Defines a message type which should rendered with the custom message template.
     * @type {string}
     */
    get nbCustomMessage() {
        return this._type;
    }
    set nbCustomMessage(value) {
        this._type = value;
    }
    get type() {
        return this._type;
    }
    /**
     * Disables generic message styles, such as round corners, text color, background, etc.,
     * so a custom message could be styled from the ground up.
     *
     * @type {boolean}
     */
    set nbCustomMessageNoStyles(value) {
        this._noStyles = convertToBoolProperty(value);
    }
    get nbCustomMessageNoStyles() {
        return this._noStyles;
    }
    get noStyles() {
        return this.nbCustomMessageNoStyles;
    }
    ngOnInit() {
        if (!this._type) {
            throwCustomMessageTypeIsRequired();
        }
        this.customMessageService.register(this.type, this);
    }
    ngOnDestroy() {
        this.customMessageService.unregister(this.type);
    }
}
NbChatCustomMessageDirective.decorators = [
    { type: Directive, args: [{
                selector: `[nbCustomMessage]`,
            },] }
];
NbChatCustomMessageDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: NbCustomMessageService }
];
NbChatCustomMessageDirective.propDecorators = {
    nbCustomMessage: [{ type: Input }],
    nbCustomMessageNoStyles: [{ type: Input }]
};
//# sourceMappingURL=chat-custom-message.directive.js.map