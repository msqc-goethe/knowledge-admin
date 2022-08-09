/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbDialogConfig } from './dialog-config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './dialog-container';
import * as ɵngcc2 from '../shared/shared.module';
import * as ɵngcc3 from '../cdk/overlay/overlay.module';
export declare class NbDialogModule {
    static forRoot(dialogConfig?: Partial<NbDialogConfig>): ModuleWithProviders<NbDialogModule>;
    static forChild(dialogConfig?: Partial<NbDialogConfig>): ModuleWithProviders<NbDialogModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbDialogModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<NbDialogModule, [typeof ɵngcc1.NbDialogContainerComponent], [typeof ɵngcc2.NbSharedModule, typeof ɵngcc3.NbOverlayModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<NbDialogModule>;
}

//# sourceMappingURL=dialog.module.d.ts.map