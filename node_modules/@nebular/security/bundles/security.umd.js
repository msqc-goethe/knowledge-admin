(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/operators'), require('rxjs')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/operators', 'rxjs'], factory) :
	(factory((global.nb = global.nb || {}, global.nb.security = global.nb.security || {}),global.ng.core,global.ng.common,global.Rx.operators,global.Rx));
}(this, (function (exports,_angular_core,_angular_common,rxjs_operators,rxjs) { 'use strict';

var NB_SECURITY_OPTIONS_TOKEN = new _angular_core.InjectionToken('Nebular Security Options');

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var shallowObjectClone = function (o) { return Object.assign({}, o); };
var ɵ0 = shallowObjectClone;
var shallowArrayClone = function (a) { return Object.assign([], a); };
var ɵ1 = shallowArrayClone;
var popParent = function (abilities) {
    var parent = abilities['parent'];
    delete abilities['parent'];
    return parent;
};
var ɵ2 = popParent;
/**
 * Common acl service.
 */
var NbAclService = /** @class */ (function () {
    function NbAclService(settings) {
        if (settings === void 0) { settings = {}; }
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
    NbAclService.prototype.setAccessControl = function (list) {
        for (var _i = 0, _a = Object.entries(list); _i < _a.length; _i++) {
            var _b = _a[_i], role = _b[0], value = _b[1];
            var abilities = shallowObjectClone(value);
            var parent_1 = popParent(abilities);
            this.register(role, parent_1, abilities);
        }
    };
    /**
     * Register a new role with a list of abilities (permission/resources combinations)
     * @param {string} role
     * @param {string} parent
     * @param {[permission: string]: string|string[]} abilities
     */
    NbAclService.prototype.register = function (role, parent, abilities) {
        if (parent === void 0) { parent = null; }
        if (abilities === void 0) { abilities = {}; }
        this.validateRole(role);
        this.state[role] = {
            parent: parent,
        };
        for (var _i = 0, _a = Object.entries(abilities); _i < _a.length; _i++) {
            var _b = _a[_i], permission = _b[0], value = _b[1];
            var resources = typeof value === 'string' ? [value] : value;
            this.allow(role, permission, shallowArrayClone(resources));
        }
    };
    /**
     * Allow a permission for specific resources to a role
     * @param {string} role
     * @param {string} permission
     * @param {string | string[]} resource
     */
    NbAclService.prototype.allow = function (role, permission, resource) {
        this.validateRole(role);
        if (!this.getRole(role)) {
            this.register(role, null, {});
        }
        resource = typeof resource === 'string' ? [resource] : resource;
        var resources = shallowArrayClone(this.getRoleResources(role, permission));
        resources = resources.concat(resource);
        this.state[role][permission] = resources
            .filter(function (item, pos) { return resources.indexOf(item) === pos; });
    };
    /**
     * Check whether the role has a permission to a resource
     * @param {string} role
     * @param {string} permission
     * @param {string} resource
     * @returns {boolean}
     */
    NbAclService.prototype.can = function (role, permission, resource) {
        this.validateResource(resource);
        var parentRole = this.getRoleParent(role);
        var parentCan = parentRole && this.can(this.getRoleParent(role), permission, resource);
        return parentCan || this.exactCan(role, permission, resource);
    };
    NbAclService.prototype.getRole = function (role) {
        return this.state[role];
    };
    NbAclService.prototype.validateRole = function (role) {
        if (!role) {
            throw new Error('NbAclService: role name cannot be empty');
        }
    };
    NbAclService.prototype.validateResource = function (resource) {
        if (!resource || [NbAclService.ANY_RESOURCE].includes(resource)) {
            throw new Error("NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method");
        }
    };
    NbAclService.prototype.exactCan = function (role, permission, resource) {
        var resources = this.getRoleResources(role, permission);
        return resources.includes(resource) || resources.includes(NbAclService.ANY_RESOURCE);
    };
    NbAclService.prototype.getRoleResources = function (role, permission) {
        return this.getRoleAbilities(role)[permission] || [];
    };
    NbAclService.prototype.getRoleAbilities = function (role) {
        var abilities = shallowObjectClone(this.state[role] || {});
        popParent(shallowObjectClone(this.state[role] || {}));
        return abilities;
    };
    NbAclService.prototype.getRoleParent = function (role) {
        return this.state[role] ? this.state[role]['parent'] : null;
    };
    NbAclService.ANY_RESOURCE = '*';
    NbAclService.decorators = [
        { type: _angular_core.Injectable }
    ];
    NbAclService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [NB_SECURITY_OPTIONS_TOKEN,] }] }
    ]; };
    return NbAclService;
}());

var NbRoleProvider = /** @class */ (function () {
    function NbRoleProvider() {
    }
    return NbRoleProvider;
}());

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
var NbAccessChecker = /** @class */ (function () {
    function NbAccessChecker(roleProvider, acl) {
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
    NbAccessChecker.prototype.isGranted = function (permission, resource) {
        var _this = this;
        return this.roleProvider.getRole()
            .pipe(rxjs_operators.map(function (role) { return Array.isArray(role) ? role : [role]; }), rxjs_operators.map(function (roles) {
            return roles.some(function (role) { return _this.acl.can(role, permission, resource); });
        }));
    };
    NbAccessChecker.decorators = [
        { type: _angular_core.Injectable }
    ];
    NbAccessChecker.ctorParameters = function () { return [
        { type: NbRoleProvider },
        { type: NbAclService }
    ]; };
    return NbAccessChecker;
}());

var NbIsGrantedDirective = /** @class */ (function () {
    function NbIsGrantedDirective(templateRef, viewContainer, accessChecker) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.accessChecker = accessChecker;
        this.destroy$ = new rxjs.Subject();
        this.hasView = false;
    }
    Object.defineProperty(NbIsGrantedDirective.prototype, "nbIsGranted", {
        set: function (_a) {
            var _this = this;
            var permission = _a[0], resource = _a[1];
            this.accessChecker.isGranted(permission, resource)
                .pipe(rxjs_operators.takeUntil(this.destroy$))
                .subscribe(function (can) {
                if (can && !_this.hasView) {
                    _this.viewContainer.createEmbeddedView(_this.templateRef);
                    _this.hasView = true;
                }
                else if (!can && _this.hasView) {
                    _this.viewContainer.clear();
                    _this.hasView = false;
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    NbIsGrantedDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NbIsGrantedDirective.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[nbIsGranted]' },] }
    ];
    NbIsGrantedDirective.ctorParameters = function () { return [
        { type: _angular_core.TemplateRef },
        { type: _angular_core.ViewContainerRef },
        { type: NbAccessChecker }
    ]; };
    NbIsGrantedDirective.propDecorators = {
        nbIsGranted: [{ type: _angular_core.Input }]
    };
    return NbIsGrantedDirective;
}());

var NbSecurityModule = /** @class */ (function () {
    function NbSecurityModule() {
    }
    NbSecurityModule.forRoot = function (nbSecurityOptions) {
        return {
            ngModule: NbSecurityModule,
            providers: [
                { provide: NB_SECURITY_OPTIONS_TOKEN, useValue: nbSecurityOptions },
                NbAclService,
                NbAccessChecker,
            ],
        };
    };
    NbSecurityModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                    ],
                    declarations: [
                        NbIsGrantedDirective,
                    ],
                    exports: [
                        NbIsGrantedDirective,
                    ],
                },] }
    ];
    return NbSecurityModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

exports.NB_SECURITY_OPTIONS_TOKEN = NB_SECURITY_OPTIONS_TOKEN;
exports.NbSecurityModule = NbSecurityModule;
exports.NbAclService = NbAclService;
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
exports.ɵ2 = ɵ2;
exports.NbAccessChecker = NbAccessChecker;
exports.NbRoleProvider = NbRoleProvider;
exports.NbIsGrantedDirective = NbIsGrantedDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
