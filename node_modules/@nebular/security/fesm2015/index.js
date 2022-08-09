import { Directive, Inject, Injectable, InjectionToken, Input, NgModule, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

const NB_SECURITY_OPTIONS_TOKEN = new InjectionToken('Nebular Security Options');

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const shallowObjectClone = (o) => Object.assign({}, o);
const ɵ0 = shallowObjectClone;
const shallowArrayClone = (a) => Object.assign([], a);
const ɵ1 = shallowArrayClone;
const popParent = (abilities) => {
    const parent = abilities['parent'];
    delete abilities['parent'];
    return parent;
};
const ɵ2 = popParent;
/**
 * Common acl service.
 */
class NbAclService {
    constructor(settings = {}) {
        this.settings = settings;
        this.state = {};
        if (settings.accessControl) {
            this.setAccessControl(settings.accessControl);
        }
    }
    /**
     * Set/Reset ACL list
     * @param {NbAccessControl} list
     */
    setAccessControl(list) {
        for (const [role, value] of Object.entries(list)) {
            const abilities = shallowObjectClone(value);
            const parent = popParent(abilities);
            this.register(role, parent, abilities);
        }
    }
    /**
     * Register a new role with a list of abilities (permission/resources combinations)
     * @param {string} role
     * @param {string} parent
     * @param {[permission: string]: string|string[]} abilities
     */
    register(role, parent = null, abilities = {}) {
        this.validateRole(role);
        this.state[role] = {
            parent: parent,
        };
        for (const [permission, value] of Object.entries(abilities)) {
            const resources = typeof value === 'string' ? [value] : value;
            this.allow(role, permission, shallowArrayClone(resources));
        }
    }
    /**
     * Allow a permission for specific resources to a role
     * @param {string} role
     * @param {string} permission
     * @param {string | string[]} resource
     */
    allow(role, permission, resource) {
        this.validateRole(role);
        if (!this.getRole(role)) {
            this.register(role, null, {});
        }
        resource = typeof resource === 'string' ? [resource] : resource;
        let resources = shallowArrayClone(this.getRoleResources(role, permission));
        resources = resources.concat(resource);
        this.state[role][permission] = resources
            .filter((item, pos) => resources.indexOf(item) === pos);
    }
    /**
     * Check whether the role has a permission to a resource
     * @param {string} role
     * @param {string} permission
     * @param {string} resource
     * @returns {boolean}
     */
    can(role, permission, resource) {
        this.validateResource(resource);
        const parentRole = this.getRoleParent(role);
        const parentCan = parentRole && this.can(this.getRoleParent(role), permission, resource);
        return parentCan || this.exactCan(role, permission, resource);
    }
    getRole(role) {
        return this.state[role];
    }
    validateRole(role) {
        if (!role) {
            throw new Error('NbAclService: role name cannot be empty');
        }
    }
    validateResource(resource) {
        if (!resource || [NbAclService.ANY_RESOURCE].includes(resource)) {
            throw new Error(`NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method`);
        }
    }
    exactCan(role, permission, resource) {
        const resources = this.getRoleResources(role, permission);
        return resources.includes(resource) || resources.includes(NbAclService.ANY_RESOURCE);
    }
    getRoleResources(role, permission) {
        return this.getRoleAbilities(role)[permission] || [];
    }
    getRoleAbilities(role) {
        const abilities = shallowObjectClone(this.state[role] || {});
        popParent(shallowObjectClone(this.state[role] || {}));
        return abilities;
    }
    getRoleParent(role) {
        return this.state[role] ? this.state[role]['parent'] : null;
    }
}
NbAclService.ANY_RESOURCE = '*';
NbAclService.decorators = [
    { type: Injectable }
];
NbAclService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_SECURITY_OPTIONS_TOKEN,] }] }
];

class NbRoleProvider {
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Access checker service.
 *
 * Injects `NbRoleProvider` to determine current user role, and checks access permissions using `NbAclService`
 */
class NbAccessChecker {
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

class NbIsGrantedDirective {
    constructor(templateRef, viewContainer, accessChecker) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.accessChecker = accessChecker;
        this.destroy$ = new Subject();
        this.hasView = false;
    }
    set nbIsGranted([permission, resource]) {
        this.accessChecker.isGranted(permission, resource)
            .pipe(takeUntil(this.destroy$))
            .subscribe((can) => {
            if (can && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            }
            else if (!can && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbIsGrantedDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbIsGranted]' },] }
];
NbIsGrantedDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: NbAccessChecker }
];
NbIsGrantedDirective.propDecorators = {
    nbIsGranted: [{ type: Input }]
};

class NbSecurityModule {
    static forRoot(nbSecurityOptions) {
        return {
            ngModule: NbSecurityModule,
            providers: [
                { provide: NB_SECURITY_OPTIONS_TOKEN, useValue: nbSecurityOptions },
                NbAclService,
                NbAccessChecker,
            ],
        };
    }
}
NbSecurityModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    NbIsGrantedDirective,
                ],
                exports: [
                    NbIsGrantedDirective,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NB_SECURITY_OPTIONS_TOKEN, NbSecurityModule, NbAclService, ɵ0, ɵ1, ɵ2, NbAccessChecker, NbRoleProvider, NbIsGrantedDirective };
