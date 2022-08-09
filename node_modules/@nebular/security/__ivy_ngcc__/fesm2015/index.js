import { Directive, Inject, Injectable, InjectionToken, Input, NgModule, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
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
NbAclService.ɵfac = function NbAclService_Factory(t) { return new (t || NbAclService)(ɵngcc0.ɵɵinject(NB_SECURITY_OPTIONS_TOKEN, 8)); };
NbAclService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbAclService, factory: NbAclService.ɵfac });
NbAclService.ANY_RESOURCE = '*';
NbAclService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_SECURITY_OPTIONS_TOKEN,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAclService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NB_SECURITY_OPTIONS_TOKEN]
            }] }]; }, null); })();

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
NbAccessChecker.ɵfac = function NbAccessChecker_Factory(t) { return new (t || NbAccessChecker)(ɵngcc0.ɵɵinject(NbRoleProvider), ɵngcc0.ɵɵinject(NbAclService)); };
NbAccessChecker.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbAccessChecker, factory: NbAccessChecker.ɵfac });
NbAccessChecker.ctorParameters = () => [
    { type: NbRoleProvider },
    { type: NbAclService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAccessChecker, [{
        type: Injectable
    }], function () { return [{ type: NbRoleProvider }, { type: NbAclService }]; }, null); })();

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
NbIsGrantedDirective.ɵfac = function NbIsGrantedDirective_Factory(t) { return new (t || NbIsGrantedDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(NbAccessChecker)); };
NbIsGrantedDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NbIsGrantedDirective, selectors: [["", "nbIsGranted", ""]], inputs: { nbIsGranted: "nbIsGranted" } });
NbIsGrantedDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: NbAccessChecker }
];
NbIsGrantedDirective.propDecorators = {
    nbIsGranted: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbIsGrantedDirective, [{
        type: Directive,
        args: [{ selector: '[nbIsGranted]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ViewContainerRef }, { type: NbAccessChecker }]; }, { nbIsGranted: [{
            type: Input
        }] }); })();

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
NbSecurityModule.ɵfac = function NbSecurityModule_Factory(t) { return new (t || NbSecurityModule)(); };
NbSecurityModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NbSecurityModule });
NbSecurityModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbSecurityModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    NbIsGrantedDirective,
                ],
                exports: [
                    NbIsGrantedDirective,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NbSecurityModule, { declarations: function () { return [NbIsGrantedDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NbIsGrantedDirective]; } }); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NB_SECURITY_OPTIONS_TOKEN, NbSecurityModule, NbAclService, ɵ0, ɵ1, ɵ2, NbAccessChecker, NbRoleProvider, NbIsGrantedDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrSEFBQztBQUNELGdDQUdFO0FBQ0Y7QUFDQTtBQUNBOzs7Ozs7OztrQ0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7MkhBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O2dHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2lMQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O29CQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dTQWFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbnB1dCwgTmdNb2R1bGUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBOQl9TRUNVUklUWV9PUFRJT05TX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuKCdOZWJ1bGFyIFNlY3VyaXR5IE9wdGlvbnMnKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuY29uc3Qgc2hhbGxvd09iamVjdENsb25lID0gKG8pID0+IE9iamVjdC5hc3NpZ24oe30sIG8pO1xuY29uc3QgybUwID0gc2hhbGxvd09iamVjdENsb25lO1xuY29uc3Qgc2hhbGxvd0FycmF5Q2xvbmUgPSAoYSkgPT4gT2JqZWN0LmFzc2lnbihbXSwgYSk7XG5jb25zdCDJtTEgPSBzaGFsbG93QXJyYXlDbG9uZTtcbmNvbnN0IHBvcFBhcmVudCA9IChhYmlsaXRpZXMpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBhYmlsaXRpZXNbJ3BhcmVudCddO1xuICAgIGRlbGV0ZSBhYmlsaXRpZXNbJ3BhcmVudCddO1xuICAgIHJldHVybiBwYXJlbnQ7XG59O1xuY29uc3QgybUyID0gcG9wUGFyZW50O1xuLyoqXG4gKiBDb21tb24gYWNsIHNlcnZpY2UuXG4gKi9cbmNsYXNzIE5iQWNsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7fSkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgaWYgKHNldHRpbmdzLmFjY2Vzc0NvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWNjZXNzQ29udHJvbChzZXR0aW5ncy5hY2Nlc3NDb250cm9sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQvUmVzZXQgQUNMIGxpc3RcbiAgICAgKiBAcGFyYW0ge05iQWNjZXNzQ29udHJvbH0gbGlzdFxuICAgICAqL1xuICAgIHNldEFjY2Vzc0NvbnRyb2wobGlzdCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtyb2xlLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobGlzdCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFiaWxpdGllcyA9IHNoYWxsb3dPYmplY3RDbG9uZSh2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBwb3BQYXJlbnQoYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZSwgcGFyZW50LCBhYmlsaXRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHJvbGUgd2l0aCBhIGxpc3Qgb2YgYWJpbGl0aWVzIChwZXJtaXNzaW9uL3Jlc291cmNlcyBjb21iaW5hdGlvbnMpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJvbGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50XG4gICAgICogQHBhcmFtIHtbcGVybWlzc2lvbjogc3RyaW5nXTogc3RyaW5nfHN0cmluZ1tdfSBhYmlsaXRpZXNcbiAgICAgKi9cbiAgICByZWdpc3Rlcihyb2xlLCBwYXJlbnQgPSBudWxsLCBhYmlsaXRpZXMgPSB7fSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlUm9sZShyb2xlKTtcbiAgICAgICAgdGhpcy5zdGF0ZVtyb2xlXSA9IHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IFtwZXJtaXNzaW9uLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYWJpbGl0aWVzKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IFt2YWx1ZV0gOiB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYWxsb3cocm9sZSwgcGVybWlzc2lvbiwgc2hhbGxvd0FycmF5Q2xvbmUocmVzb3VyY2VzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxsb3cgYSBwZXJtaXNzaW9uIGZvciBzcGVjaWZpYyByZXNvdXJjZXMgdG8gYSByb2xlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJvbGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVybWlzc2lvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IHJlc291cmNlXG4gICAgICovXG4gICAgYWxsb3cocm9sZSwgcGVybWlzc2lvbiwgcmVzb3VyY2UpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJvbGUocm9sZSk7XG4gICAgICAgIGlmICghdGhpcy5nZXRSb2xlKHJvbGUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGUsIG51bGwsIHt9KTtcbiAgICAgICAgfVxuICAgICAgICByZXNvdXJjZSA9IHR5cGVvZiByZXNvdXJjZSA9PT0gJ3N0cmluZycgPyBbcmVzb3VyY2VdIDogcmVzb3VyY2U7XG4gICAgICAgIGxldCByZXNvdXJjZXMgPSBzaGFsbG93QXJyYXlDbG9uZSh0aGlzLmdldFJvbGVSZXNvdXJjZXMocm9sZSwgcGVybWlzc2lvbikpO1xuICAgICAgICByZXNvdXJjZXMgPSByZXNvdXJjZXMuY29uY2F0KHJlc291cmNlKTtcbiAgICAgICAgdGhpcy5zdGF0ZVtyb2xlXVtwZXJtaXNzaW9uXSA9IHJlc291cmNlc1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSwgcG9zKSA9PiByZXNvdXJjZXMuaW5kZXhPZihpdGVtKSA9PT0gcG9zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGUgcm9sZSBoYXMgYSBwZXJtaXNzaW9uIHRvIGEgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcm9sZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2FuKHJvbGUsIHBlcm1pc3Npb24sIHJlc291cmNlKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXNvdXJjZShyZXNvdXJjZSk7XG4gICAgICAgIGNvbnN0IHBhcmVudFJvbGUgPSB0aGlzLmdldFJvbGVQYXJlbnQocm9sZSk7XG4gICAgICAgIGNvbnN0IHBhcmVudENhbiA9IHBhcmVudFJvbGUgJiYgdGhpcy5jYW4odGhpcy5nZXRSb2xlUGFyZW50KHJvbGUpLCBwZXJtaXNzaW9uLCByZXNvdXJjZSk7XG4gICAgICAgIHJldHVybiBwYXJlbnRDYW4gfHwgdGhpcy5leGFjdENhbihyb2xlLCBwZXJtaXNzaW9uLCByZXNvdXJjZSk7XG4gICAgfVxuICAgIGdldFJvbGUocm9sZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtyb2xlXTtcbiAgICB9XG4gICAgdmFsaWRhdGVSb2xlKHJvbGUpIHtcbiAgICAgICAgaWYgKCFyb2xlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05iQWNsU2VydmljZTogcm9sZSBuYW1lIGNhbm5vdCBiZSBlbXB0eScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhbGlkYXRlUmVzb3VyY2UocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSB8fCBbTmJBY2xTZXJ2aWNlLkFOWV9SRVNPVVJDRV0uaW5jbHVkZXMocmVzb3VyY2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5iQWNsU2VydmljZTogY2Fubm90IHVzZSBlbXB0eSBvciBidWxrICcqJyByZXNvdXJjZSBwbGFjZWhvbGRlciB3aXRoICdjYW4nIG1ldGhvZGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4YWN0Q2FuKHJvbGUsIHBlcm1pc3Npb24sIHJlc291cmNlKSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IHRoaXMuZ2V0Um9sZVJlc291cmNlcyhyb2xlLCBwZXJtaXNzaW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlcy5pbmNsdWRlcyhyZXNvdXJjZSkgfHwgcmVzb3VyY2VzLmluY2x1ZGVzKE5iQWNsU2VydmljZS5BTllfUkVTT1VSQ0UpO1xuICAgIH1cbiAgICBnZXRSb2xlUmVzb3VyY2VzKHJvbGUsIHBlcm1pc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Um9sZUFiaWxpdGllcyhyb2xlKVtwZXJtaXNzaW9uXSB8fCBbXTtcbiAgICB9XG4gICAgZ2V0Um9sZUFiaWxpdGllcyhyb2xlKSB7XG4gICAgICAgIGNvbnN0IGFiaWxpdGllcyA9IHNoYWxsb3dPYmplY3RDbG9uZSh0aGlzLnN0YXRlW3JvbGVdIHx8IHt9KTtcbiAgICAgICAgcG9wUGFyZW50KHNoYWxsb3dPYmplY3RDbG9uZSh0aGlzLnN0YXRlW3JvbGVdIHx8IHt9KSk7XG4gICAgICAgIHJldHVybiBhYmlsaXRpZXM7XG4gICAgfVxuICAgIGdldFJvbGVQYXJlbnQocm9sZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtyb2xlXSA/IHRoaXMuc3RhdGVbcm9sZV1bJ3BhcmVudCddIDogbnVsbDtcbiAgICB9XG59XG5OYkFjbFNlcnZpY2UuQU5ZX1JFU09VUkNFID0gJyonO1xuTmJBY2xTZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH1cbl07XG5OYkFjbFNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkJfU0VDVVJJVFlfT1BUSU9OU19UT0tFTixdIH1dIH1cbl07XG5cbmNsYXNzIE5iUm9sZVByb3ZpZGVyIHtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBBY2Nlc3MgY2hlY2tlciBzZXJ2aWNlLlxuICpcbiAqIEluamVjdHMgYE5iUm9sZVByb3ZpZGVyYCB0byBkZXRlcm1pbmUgY3VycmVudCB1c2VyIHJvbGUsIGFuZCBjaGVja3MgYWNjZXNzIHBlcm1pc3Npb25zIHVzaW5nIGBOYkFjbFNlcnZpY2VgXG4gKi9cbmNsYXNzIE5iQWNjZXNzQ2hlY2tlciB7XG4gICAgY29uc3RydWN0b3Iocm9sZVByb3ZpZGVyLCBhY2wpIHtcbiAgICAgICAgdGhpcy5yb2xlUHJvdmlkZXIgPSByb2xlUHJvdmlkZXI7XG4gICAgICAgIHRoaXMuYWNsID0gYWNsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciBhY2Nlc3MgaXMgZ3JhbnRlZCBvciBub3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8Ym9vbGVhbj59XG4gICAgICovXG4gICAgaXNHcmFudGVkKHBlcm1pc3Npb24sIHJlc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvbGVQcm92aWRlci5nZXRSb2xlKClcbiAgICAgICAgICAgIC5waXBlKG1hcCgocm9sZSkgPT4gQXJyYXkuaXNBcnJheShyb2xlKSA/IHJvbGUgOiBbcm9sZV0pLCBtYXAoKHJvbGVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcm9sZXMuc29tZShyb2xlID0+IHRoaXMuYWNsLmNhbihyb2xlLCBwZXJtaXNzaW9uLCByZXNvdXJjZSkpO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuTmJBY2Nlc3NDaGVja2VyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH1cbl07XG5OYkFjY2Vzc0NoZWNrZXIuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBOYlJvbGVQcm92aWRlciB9LFxuICAgIHsgdHlwZTogTmJBY2xTZXJ2aWNlIH1cbl07XG5cbmNsYXNzIE5iSXNHcmFudGVkRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgYWNjZXNzQ2hlY2tlcikge1xuICAgICAgICB0aGlzLnRlbXBsYXRlUmVmID0gdGVtcGxhdGVSZWY7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXI7XG4gICAgICAgIHRoaXMuYWNjZXNzQ2hlY2tlciA9IGFjY2Vzc0NoZWNrZXI7XG4gICAgICAgIHRoaXMuZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0IG5iSXNHcmFudGVkKFtwZXJtaXNzaW9uLCByZXNvdXJjZV0pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NDaGVja2VyLmlzR3JhbnRlZChwZXJtaXNzaW9uLCByZXNvdXJjZSlcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGNhbikgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbiAmJiAhdGhpcy5oYXNWaWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1ZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWNhbiAmJiB0aGlzLmhhc1ZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cbn1cbk5iSXNHcmFudGVkRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW25iSXNHcmFudGVkXScgfSxdIH1cbl07XG5OYklzR3JhbnRlZERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IFRlbXBsYXRlUmVmIH0sXG4gICAgeyB0eXBlOiBWaWV3Q29udGFpbmVyUmVmIH0sXG4gICAgeyB0eXBlOiBOYkFjY2Vzc0NoZWNrZXIgfVxuXTtcbk5iSXNHcmFudGVkRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgIG5iSXNHcmFudGVkOiBbeyB0eXBlOiBJbnB1dCB9XVxufTtcblxuY2xhc3MgTmJTZWN1cml0eU1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QobmJTZWN1cml0eU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOYlNlY3VyaXR5TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBOQl9TRUNVUklUWV9PUFRJT05TX1RPS0VOLCB1c2VWYWx1ZTogbmJTZWN1cml0eU9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICBOYkFjbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgTmJBY2Nlc3NDaGVja2VyLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5OYlNlY3VyaXR5TW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICBOYklzR3JhbnRlZERpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgTmJJc0dyYW50ZWREaXJlY3RpdmUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXSB9XG5dO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0IHsgTkJfU0VDVVJJVFlfT1BUSU9OU19UT0tFTiwgTmJTZWN1cml0eU1vZHVsZSwgTmJBY2xTZXJ2aWNlLCDJtTAsIMm1MSwgybUyLCBOYkFjY2Vzc0NoZWNrZXIsIE5iUm9sZVByb3ZpZGVyLCBOYklzR3JhbnRlZERpcmVjdGl2ZSB9O1xuIl19