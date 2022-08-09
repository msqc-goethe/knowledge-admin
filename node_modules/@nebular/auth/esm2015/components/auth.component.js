/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NbAuthService } from '../services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class NbAuthComponent {
    // showcase of how to use the onAuthenticationChange method
    constructor(auth, location) {
        this.auth = auth;
        this.location = location;
        this.destroy$ = new Subject();
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((authenticated) => {
            this.authenticated = authenticated;
        });
    }
    back() {
        this.location.back();
        return false;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbAuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-auth',
                template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link back-link" aria-label="Back">
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"]
            },] }
];
NbAuthComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: Location }
];
//# sourceMappingURL=auth.component.js.map