/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbComponentOrCustomStatus } from '../component-status';
import { NbComponentSize } from '../component-size';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare abstract class NbFormFieldControl {
    status$: Observable<NbComponentOrCustomStatus>;
    size$: Observable<NbComponentSize>;
    focused$: Observable<boolean>;
    disabled$: Observable<boolean>;
    fullWidth$: Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbFormFieldControl, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbFormFieldControl>;
}
export declare class NbFormFieldControlConfig {
    supportsPrefix: boolean;
    supportsSuffix: boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbFormFieldControlConfig, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbFormFieldControlConfig>;
}
export interface NbFormControlState {
    status: NbComponentOrCustomStatus;
    size: NbComponentSize;
    fullWidth: boolean;
    focused: boolean;
    disabled: boolean;
}

//# sourceMappingURL=form-field-control.d.ts.map