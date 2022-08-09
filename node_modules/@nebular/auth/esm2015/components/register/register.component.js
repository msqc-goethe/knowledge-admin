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
export class NbRegisterComponent {
    constructor(service, options = {}, cd, router) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.strategy = this.getConfigValue('forms.register.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    register() {
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.strategy, this.user).subscribe((result) => {
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
NbRegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-register',
                template: "<h1 id=\"title\" class=\"title\">Register</h1>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"register()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">Full name:</label>\n    <input nbInput\n           [(ngModel)]=\"user.fullName\"\n           #fullName=\"ngModel\"\n           id=\"input-name\"\n           name=\"fullName\"\n           placeholder=\"Full name\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"fullName.dirty ? (fullName.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.fullName.required')\"\n           [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n           [attr.aria-invalid]=\"fullName.invalid && fullName.touched ? true : null\">\n    <ng-container *ngIf=\"fullName.invalid && fullName.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.required\">\n        Full name is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.minlength || fullName.errors?.maxlength\">\n        Full name should contains\n        from {{getConfigValue('forms.validation.fullName.minLength')}}\n        to {{getConfigValue('forms.validation.fullName.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+..+\"\n           placeholder=\"Email address\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           placeholder=\"Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-re-password\">Repeat password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           type=\"password\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.dirty ? (rePass.invalid || password.value != rePass.value  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.invalid && rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\" *ngIf=\"getConfigValue('forms.register.terms')\">\n    <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n      Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n    </nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Register\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  Already have an account? <a class=\"text-link\" routerLink=\"../login\">Log in</a>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .title{margin-bottom:2rem}\n"]
            },] }
];
NbRegisterComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];
//# sourceMappingURL=register.component.js.map