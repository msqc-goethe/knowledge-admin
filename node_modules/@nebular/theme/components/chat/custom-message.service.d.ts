import { NbChatCustomMessageDirective } from './chat-custom-message.directive';
/**
 * `NbCustomMessageService` is used to store instances of `NbChatCustomMessageDirective`s which
 * were provided in the chat component.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbCustomMessageService {
    protected readonly customMessages: Map<string, NbChatCustomMessageDirective>;
    register(type: string, instance: NbChatCustomMessageDirective): void;
    unregister(type: string): boolean;
    getInstance(type: string): NbChatCustomMessageDirective | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCustomMessageService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbCustomMessageService>;
}

//# sourceMappingURL=custom-message.service.d.ts.map