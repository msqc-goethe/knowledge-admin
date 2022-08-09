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
export class NbRequestPasswordComponent {
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
        this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
        this.strategy = this.getConfigValue('forms.requestPassword.strategy');
    }
    requestPass() {
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.requestPassword(this.strategy, this.user).subscribe((result) => {
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
NbRequestPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-request-password-page',
                template: "<h1 id=\"title\" class=\"title\">Forgot Password</h1>\n<p class=\"sub-title\">Enter your email address and we\u2019ll send a link to reset your password</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Enter your email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email address\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !requestPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Request password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a routerLink=\"../register\" class=\"text-link\">Register</a></p>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .form-group:last-of-type{margin-bottom:3rem}\n"]
            },] }
];
NbRequestPasswordComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];
//# sourceMappingURL=request-password.component.js.map