/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '../../services/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbResetPasswordComponent {
    protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    user: any;
    constructor(service: NbAuthService, options: {}, cd: ChangeDetectorRef, router: Router);
    resetPass(): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbResetPasswordComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbResetPasswordComponent, "nb-reset-password-page", never, {}, {}, never, never>;
}

//# sourceMappingURL=reset-password.component.d.ts.map