/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbToastrConfig } from './toastr-config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './toastr-container.component';
import * as ɵngcc2 from './toast.component';
import * as ɵngcc3 from '../shared/shared.module';
import * as ɵngcc4 from '../cdk/overlay/overlay.module';
import * as ɵngcc5 from '../icon/icon.module';
export declare class NbToastrModule {
    static forRoot(toastrConfig?: Partial<NbToastrConfig>): ModuleWithProviders<NbToastrModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbToastrModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<NbToastrModule, [typeof ɵngcc1.NbToastrContainerComponent, typeof ɵngcc2.NbToastComponent], [typeof ɵngcc3.NbSharedModule, typeof ɵngcc4.NbOverlayModule, typeof ɵngcc5.NbIconModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<NbToastrModule>;
}

//# sourceMappingURL=toastr.module.d.ts.map