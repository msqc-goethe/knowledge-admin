/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbComponentOrCustomStatus, NbComponentStatus } from '../components/component-status';
import * as ɵngcc0 from '@angular/core';
export declare class NbStatusService {
    readonly coreStatuses: NbComponentStatus[];
    isCoreStatus(status: NbComponentOrCustomStatus): boolean;
    isCustomStatus(status: NbComponentOrCustomStatus): boolean;
    getStatusClass(status: NbComponentOrCustomStatus): string | undefined;
    protected isValidStatusString(status: NbComponentOrCustomStatus): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbStatusService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbStatusService>;
}

//# sourceMappingURL=status.service.d.ts.map