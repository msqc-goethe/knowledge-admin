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
export class NbResetPasswordComponent {
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
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.strategy = this.getConfigValue('forms.resetPassword.strategy');
    }
    resetPass() {
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.resetPassword(this.strategy, this.user).subscribe((result) => {
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
NbResetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-reset-password-page',
                template: "<h1 id=\"title\" class=\"title\">Change password</h1>\n<p class=\"sub-title\">Please set a new password</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">New Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           class=\"first\"\n           placeholder=\"New Password\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contains\n        from {{getConfigValue('forms.validation.password.minLength')}}\n        to {{getConfigValue('forms.validation.password.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"label\" for=\"input-re-password\">Confirm Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           type=\"password\"\n           class=\"last\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.touched\n               ? (rePass.invalid || password.value != rePass.value ? 'danger' : 'success')\n               : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.invalid && rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          status=\"primary\"\n          fullWidth\n          size=\"large\"\n          [disabled]=\"submitted || !resetPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Change password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a class=\"text-link\" routerLink=\"../register\">Register</a></p>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .form-group:last-of-type{margin-bottom:3rem}\n"]
            },] }
];
NbResetPasswordComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];
//# sourceMappingURL=reset-password.component.js.map