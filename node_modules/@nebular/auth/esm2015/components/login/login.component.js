/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';
import { NbAuthService } from '../../services/auth.service';
export class NbLoginComponent {
    constructor(service, options = {}, cd, router) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.socialLinks = [];
        this.rememberMe = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.rememberMe = this.getConfigValue('forms.login.rememberMe');
    }
    login() {
        this.errors = [];
        this.messages = [];
        this.submitted = true;
        this.service.authenticate(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return getDeepFromObject(this.options, key, null);
    }
}
NbLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-login',
                template: "<h1 id=\"title\" class=\"title\">Login</h1>\n<p class=\"sub-title\">Hello! Log in with your email.</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           name=\"email\"\n           id=\"input-email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email address\"\n           fieldSize=\"large\"\n           autofocus\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\" for=\"input-password\">Password:</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"../request-password\">Forgot Password?</a>\n    </span>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           name=\"password\"\n           type=\"password\"\n           id=\"input-password\"\n           placeholder=\"Password\"\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched \">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Log In\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  Don't have an account? <a class=\"text-link\" routerLink=\"../register\">Register</a>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbLoginComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];
//# sourceMappingURL=login.component.js.map