/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NbRoleProvider } from './role.provider';
import { NbAclService } from './acl.service';
import { map } from 'rxjs/operators';
/**
 * Access checker service.
 *
 * Injects `NbRoleProvider` to determine current user role, and checks access permissions using `NbAclService`
 */
export class NbAccessChecker {
    constructor(roleProvider, acl) {
        this.roleProvider = roleProvider;
        this.acl = acl;
    }
    /**
     * Checks whether access is granted or not
     *
     * @param {string} permission
     * @param {string} resource
     * @returns {Observable<boolean>}
     */
    isGranted(permission, resource) {
        return this.roleProvider.getRole()
            .pipe(map((role) => Array.isArray(role) ? role : [role]), map((roles) => {
            return roles.some(role => this.acl.can(role, permission, resource));
        }));
    }
}
NbAccessChecker.decorators = [
    { type: Injectable }
];
NbAccessChecker.ctorParameters = () => [
    { type: NbRoleProvider },
    { type: NbAclService }
];
//# sourceMappingURL=access-checker.service.js.map