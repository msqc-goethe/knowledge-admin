/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '../../services/auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbLogoutComponent implements OnInit {
    protected service: NbAuthService;
    protected options: {};
    protected router: Router;
    redirectDelay: number;
    strategy: string;
    constructor(service: NbAuthService, options: {}, router: Router);
    ngOnInit(): void;
    logout(strategy: string): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbLogoutComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbLogoutComponent, "nb-logout", never, {}, {}, never, never>;
}

//# sourceMappingURL=logout.component.d.ts.map