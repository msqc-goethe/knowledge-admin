import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injectable, InjectionToken, Injector, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NB_WINDOW, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { catchError, delay, filter, map, share, switchMap, takeUntil } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@angular/router';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@nebular/theme';
import * as ɵngcc5 from '@angular/forms';

const _c0 = ["*"];
function NbLoginComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 26);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r10 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(error_r10);
} }
function NbLoginComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nb-alert", 22);
    ɵngcc0.ɵɵelementStart(1, "p", 23);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3, "Oh snap!");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 24);
    ɵngcc0.ɵɵtemplate(5, NbLoginComponent_nb_alert_4_li_5_Template, 2, 1, "li", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.errors);
} }
function NbLoginComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 26);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r12 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(message_r12);
} }
function NbLoginComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nb-alert", 27);
    ɵngcc0.ɵɵelementStart(1, "p", 23);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3, "Hooray!");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 24);
    ɵngcc0.ɵɵtemplate(5, NbLoginComponent_nb_alert_5_li_5_Template, 2, 1, "li", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function NbLoginComponent_ng_container_13_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 29);
    ɵngcc0.ɵɵtext(1, " Email is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbLoginComponent_ng_container_13_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 29);
    ɵngcc0.ɵɵtext(1, " Email should be the real one! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbLoginComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbLoginComponent_ng_container_13_p_1_Template, 2, 0, "p", 28);
    ɵngcc0.ɵɵtemplate(2, NbLoginComponent_ng_container_13_p_2_Template, 2, 0, "p", 28);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
} }
function NbLoginComponent_ng_container_22_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 29);
    ɵngcc0.ɵɵtext(1, " Password is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbLoginComponent_ng_container_22_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 29);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" Password should contain from ", ctx_r16.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r16.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function NbLoginComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbLoginComponent_ng_container_22_p_1_Template, 2, 0, "p", 28);
    ɵngcc0.ɵɵtemplate(2, NbLoginComponent_ng_container_22_p_2_Template, 2, 2, "p", 28);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(21);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r5.errors == null ? null : _r5.errors.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (_r5.errors == null ? null : _r5.errors.minlength) || (_r5.errors == null ? null : _r5.errors.maxlength));
} }
function NbLoginComponent_nb_checkbox_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nb-checkbox", 30);
    ɵngcc0.ɵɵlistener("ngModelChange", function NbLoginComponent_nb_checkbox_24_Template_nb_checkbox_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.user.rememberMe = $event; });
    ɵngcc0.ɵɵtext(1, "Remember me");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r7.user.rememberMe);
} }
function NbLoginComponent_section_27_ng_container_3_a_1_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nb-icon", 39);
} if (rf & 2) {
    const socialLink_r20 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("icon", socialLink_r20.icon);
} }
function NbLoginComponent_section_27_ng_container_3_a_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const socialLink_r20 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵtextInterpolate(socialLink_r20.title);
} }
function NbLoginComponent_section_27_ng_container_3_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 36);
    ɵngcc0.ɵɵtemplate(1, NbLoginComponent_section_27_ng_container_3_a_1_nb_icon_1_Template, 1, 1, "nb-icon", 37);
    ɵngcc0.ɵɵtemplate(2, NbLoginComponent_section_27_ng_container_3_a_1_ng_template_2_Template, 1, 1, "ng-template", null, 38, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r24 = ɵngcc0.ɵɵreference(3);
    const socialLink_r20 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("with-icon", socialLink_r20.icon);
    ɵngcc0.ɵɵproperty("routerLink", socialLink_r20.link);
    ɵngcc0.ɵɵattribute("target", socialLink_r20.target)("class", socialLink_r20.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", socialLink_r20.icon)("ngIfElse", _r24);
} }
function NbLoginComponent_section_27_ng_container_3_a_2_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nb-icon", 39);
} if (rf & 2) {
    const socialLink_r20 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("icon", socialLink_r20.icon);
} }
function NbLoginComponent_section_27_ng_container_3_a_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const socialLink_r20 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵtextInterpolate(socialLink_r20.title);
} }
function NbLoginComponent_section_27_ng_container_3_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a");
    ɵngcc0.ɵɵtemplate(1, NbLoginComponent_section_27_ng_container_3_a_2_nb_icon_1_Template, 1, 1, "nb-icon", 37);
    ɵngcc0.ɵɵtemplate(2, NbLoginComponent_section_27_ng_container_3_a_2_ng_template_2_Template, 1, 1, "ng-template", null, 38, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r30 = ɵngcc0.ɵɵreference(3);
    const socialLink_r20 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("with-icon", socialLink_r20.icon);
    ɵngcc0.ɵɵattribute("href", socialLink_r20.url, ɵngcc0.ɵɵsanitizeUrl)("target", socialLink_r20.target)("class", socialLink_r20.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", socialLink_r20.icon)("ngIfElse", _r30);
} }
function NbLoginComponent_section_27_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbLoginComponent_section_27_ng_container_3_a_1_Template, 4, 7, "a", 34);
    ɵngcc0.ɵɵtemplate(2, NbLoginComponent_section_27_ng_container_3_a_2_Template, 4, 7, "a", 35);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const socialLink_r20 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", socialLink_r20.link);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", socialLink_r20.url);
} }
function NbLoginComponent_section_27_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "section", 31);
    ɵngcc0.ɵɵtext(1, " or enter with: ");
    ɵngcc0.ɵɵelementStart(2, "div", 32);
    ɵngcc0.ɵɵtemplate(3, NbLoginComponent_section_27_ng_container_3_Template, 3, 2, "ng-container", 33);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r8.socialLinks);
} }
function NbRegisterComponent_nb_alert_2_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 28);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r14 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(error_r14);
} }
function NbRegisterComponent_nb_alert_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nb-alert", 24);
    ɵngcc0.ɵɵelementStart(1, "p", 25);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3, "Oh snap!");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 26);
    ɵngcc0.ɵɵtemplate(5, NbRegisterComponent_nb_alert_2_li_5_Template, 2, 1, "li", 27);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.errors);
} }
function NbRegisterComponent_nb_alert_3_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 28);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r16 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(message_r16);
} }
function NbRegisterComponent_nb_alert_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nb-alert", 29);
    ɵngcc0.ɵɵelementStart(1, "p", 25);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3, "Hooray!");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 26);
    ɵngcc0.ɵɵtemplate(5, NbRegisterComponent_nb_alert_3_li_5_Template, 2, 1, "li", 27);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function NbRegisterComponent_ng_container_11_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 31);
    ɵngcc0.ɵɵtext(1, " Full name is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbRegisterComponent_ng_container_11_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 31);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" Full name should contains from ", ctx_r18.getConfigValue("forms.validation.fullName.minLength"), " to ", ctx_r18.getConfigValue("forms.validation.fullName.maxLength"), " characters ");
} }
function NbRegisterComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbRegisterComponent_ng_container_11_p_1_Template, 2, 0, "p", 30);
    ɵngcc0.ɵɵtemplate(2, NbRegisterComponent_ng_container_11_p_2_Template, 2, 2, "p", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(10);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (_r3.errors == null ? null : _r3.errors.minlength) || (_r3.errors == null ? null : _r3.errors.maxlength));
} }
function NbRegisterComponent_ng_container_17_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 31);
    ɵngcc0.ɵɵtext(1, " Email is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbRegisterComponent_ng_container_17_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 31);
    ɵngcc0.ɵɵtext(1, " Email should be the real one! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbRegisterComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbRegisterComponent_ng_container_17_p_1_Template, 2, 0, "p", 30);
    ɵngcc0.ɵɵtemplate(2, NbRegisterComponent_ng_container_17_p_2_Template, 2, 0, "p", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(16);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r5.errors == null ? null : _r5.errors.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r5.errors == null ? null : _r5.errors.pattern);
} }
function NbRegisterComponent_ng_container_23_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 31);
    ɵngcc0.ɵɵtext(1, " Password is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbRegisterComponent_ng_container_23_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 31);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" Password should contain from ", ctx_r22.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r22.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function NbRegisterComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbRegisterComponent_ng_container_23_p_1_Template, 2, 0, "p", 30);
    ɵngcc0.ɵɵtemplate(2, NbRegisterComponent_ng_container_23_p_2_Template, 2, 2, "p", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r7 = ɵngcc0.ɵɵreference(22);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r7.errors == null ? null : _r7.errors.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (_r7.errors == null ? null : _r7.errors.minlength) || (_r7.errors == null ? null : _r7.errors.maxlength));
} }
function NbRegisterComponent_ng_container_29_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 31);
    ɵngcc0.ɵɵtext(1, " Password confirmation is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbRegisterComponent_ng_container_29_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 31);
    ɵngcc0.ɵɵtext(1, " Password does not match the confirm password. ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbRegisterComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbRegisterComponent_ng_container_29_p_1_Template, 2, 0, "p", 30);
    ɵngcc0.ɵɵtemplate(2, NbRegisterComponent_ng_container_29_p_2_Template, 2, 0, "p", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r9 = ɵngcc0.ɵɵreference(28);
    const _r7 = ɵngcc0.ɵɵreference(22);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r9.errors == null ? null : _r9.errors.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r7.value != _r9.value && !(_r9.errors == null ? null : _r9.errors.required));
} }
function NbRegisterComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 32);
    ɵngcc0.ɵɵelementStart(1, "nb-checkbox", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function NbRegisterComponent_div_30_Template_nb_checkbox_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.user.terms = $event; });
    ɵngcc0.ɵɵtext(2, " Agree to ");
    ɵngcc0.ɵɵelementStart(3, "a", 34);
    ɵngcc0.ɵɵelementStart(4, "strong");
    ɵngcc0.ɵɵtext(5, "Terms & Conditions");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r11.user.terms)("required", ctx_r11.getConfigValue("forms.register.terms"));
} }
function NbRegisterComponent_section_33_ng_container_3_a_1_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nb-icon", 43);
} if (rf & 2) {
    const socialLink_r28 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("icon", socialLink_r28.icon);
} }
function NbRegisterComponent_section_33_ng_container_3_a_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const socialLink_r28 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵtextInterpolate(socialLink_r28.title);
} }
function NbRegisterComponent_section_33_ng_container_3_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 40);
    ɵngcc0.ɵɵtemplate(1, NbRegisterComponent_section_33_ng_container_3_a_1_nb_icon_1_Template, 1, 1, "nb-icon", 41);
    ɵngcc0.ɵɵtemplate(2, NbRegisterComponent_section_33_ng_container_3_a_1_ng_template_2_Template, 1, 1, "ng-template", null, 42, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r32 = ɵngcc0.ɵɵreference(3);
    const socialLink_r28 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("with-icon", socialLink_r28.icon);
    ɵngcc0.ɵɵproperty("routerLink", socialLink_r28.link);
    ɵngcc0.ɵɵattribute("target", socialLink_r28.target)("class", socialLink_r28.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", socialLink_r28.icon)("ngIfElse", _r32);
} }
function NbRegisterComponent_section_33_ng_container_3_a_2_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nb-icon", 43);
} if (rf & 2) {
    const socialLink_r28 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("icon", socialLink_r28.icon);
} }
function NbRegisterComponent_section_33_ng_container_3_a_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const socialLink_r28 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵtextInterpolate(socialLink_r28.title);
} }
function NbRegisterComponent_section_33_ng_container_3_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a");
    ɵngcc0.ɵɵtemplate(1, NbRegisterComponent_section_33_ng_container_3_a_2_nb_icon_1_Template, 1, 1, "nb-icon", 41);
    ɵngcc0.ɵɵtemplate(2, NbRegisterComponent_section_33_ng_container_3_a_2_ng_template_2_Template, 1, 1, "ng-template", null, 42, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r38 = ɵngcc0.ɵɵreference(3);
    const socialLink_r28 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("with-icon", socialLink_r28.icon);
    ɵngcc0.ɵɵattribute("href", socialLink_r28.url, ɵngcc0.ɵɵsanitizeUrl)("target", socialLink_r28.target)("class", socialLink_r28.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", socialLink_r28.icon)("ngIfElse", _r38);
} }
function NbRegisterComponent_section_33_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbRegisterComponent_section_33_ng_container_3_a_1_Template, 4, 7, "a", 38);
    ɵngcc0.ɵɵtemplate(2, NbRegisterComponent_section_33_ng_container_3_a_2_Template, 4, 7, "a", 39);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const socialLink_r28 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", socialLink_r28.link);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", socialLink_r28.url);
} }
function NbRegisterComponent_section_33_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "section", 35);
    ɵngcc0.ɵɵtext(1, " or enter with: ");
    ɵngcc0.ɵɵelementStart(2, "div", 36);
    ɵngcc0.ɵɵtemplate(3, NbRegisterComponent_section_33_ng_container_3_Template, 3, 2, "ng-container", 37);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r12.socialLinks);
} }
function NbRequestPasswordComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r6 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(error_r6);
} }
function NbRequestPasswordComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nb-alert", 15);
    ɵngcc0.ɵɵelementStart(1, "p", 16);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3, "Oh snap!");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 17);
    ɵngcc0.ɵɵtemplate(5, NbRequestPasswordComponent_nb_alert_4_li_5_Template, 2, 1, "li", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.errors);
} }
function NbRequestPasswordComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r8 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(message_r8);
} }
function NbRequestPasswordComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nb-alert", 20);
    ɵngcc0.ɵɵelementStart(1, "p", 16);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3, "Hooray!");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 17);
    ɵngcc0.ɵɵtemplate(5, NbRequestPasswordComponent_nb_alert_5_li_5_Template, 2, 1, "li", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function NbRequestPasswordComponent_ng_container_13_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 22);
    ɵngcc0.ɵɵtext(1, " Email is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbRequestPasswordComponent_ng_container_13_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 22);
    ɵngcc0.ɵɵtext(1, " Email should be the real one! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbRequestPasswordComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbRequestPasswordComponent_ng_container_13_p_1_Template, 2, 0, "p", 21);
    ɵngcc0.ɵɵtemplate(2, NbRequestPasswordComponent_ng_container_13_p_2_Template, 2, 0, "p", 21);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
} }
function NbResetPasswordComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 23);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r8 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(error_r8);
} }
function NbResetPasswordComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nb-alert", 19);
    ɵngcc0.ɵɵelementStart(1, "p", 20);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3, "Oh snap!");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 21);
    ɵngcc0.ɵɵtemplate(5, NbResetPasswordComponent_nb_alert_4_li_5_Template, 2, 1, "li", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.errors);
} }
function NbResetPasswordComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 23);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(message_r10);
} }
function NbResetPasswordComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nb-alert", 24);
    ɵngcc0.ɵɵelementStart(1, "p", 20);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3, "Hooray!");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "ul", 21);
    ɵngcc0.ɵɵtemplate(5, NbResetPasswordComponent_nb_alert_5_li_5_Template, 2, 1, "li", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function NbResetPasswordComponent_ng_container_13_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 26);
    ɵngcc0.ɵɵtext(1, " Password is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbResetPasswordComponent_ng_container_13_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 26);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" Password should contains from ", ctx_r12.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r12.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function NbResetPasswordComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbResetPasswordComponent_ng_container_13_p_1_Template, 2, 0, "p", 25);
    ɵngcc0.ɵɵtemplate(2, NbResetPasswordComponent_ng_container_13_p_2_Template, 2, 2, "p", 25);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (_r3.errors == null ? null : _r3.errors.minlength) || (_r3.errors == null ? null : _r3.errors.maxlength));
} }
function NbResetPasswordComponent_ng_container_19_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 26);
    ɵngcc0.ɵɵtext(1, " Password confirmation is required! ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbResetPasswordComponent_ng_container_19_p_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 26);
    ɵngcc0.ɵɵtext(1, " Password does not match the confirm password. ");
    ɵngcc0.ɵɵelementEnd();
} }
function NbResetPasswordComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NbResetPasswordComponent_ng_container_19_p_1_Template, 2, 0, "p", 25);
    ɵngcc0.ɵɵtemplate(2, NbResetPasswordComponent_ng_container_19_p_2_Template, 2, 0, "p", 25);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(18);
    const _r3 = ɵngcc0.ɵɵreference(12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r5.invalid && (_r5.errors == null ? null : _r5.errors.required));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r3.value != _r5.value && !(_r5.errors == null ? null : _r5.errors.required));
} }
const _c1 = "[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type{margin-bottom:3rem}";
const socialLinks = [];
const defaultAuthOptions = {
    strategies: [],
    forms: {
        login: {
            redirectDelay: 500,
            strategy: 'email',
            rememberMe: true,
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks, // social links at the bottom of a page
        },
        register: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },
        requestPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        resetPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        logout: {
            redirectDelay: 500,
            strategy: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
    },
};
const NB_AUTH_OPTIONS = new InjectionToken('Nebular Auth Options');
const NB_AUTH_USER_OPTIONS = new InjectionToken('Nebular User Auth Options');
const NB_AUTH_STRATEGIES = new InjectionToken('Nebular Auth Strategies');
const NB_AUTH_TOKENS = new InjectionToken('Nebular Auth Tokens');
const NB_AUTH_INTERCEPTOR_HEADER = new InjectionToken('Nebular Simple Interceptor Header');
const NB_AUTH_TOKEN_INTERCEPTOR_FILTER = new InjectionToken('Nebular Interceptor Filter');

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
                // custom cloning and overwrite for specific objects
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
function isSpecificValue(val) {
    return (val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('cloneSpecificValue: Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    const clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object || {});
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
        else {
            level = undefined;
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function urlBase64Decode(str) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}
function b64decode(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
    str = String(str).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
    }
    for (
    // initialize result and counters
    let bc = 0, bs, buffer, idx = 0; 
    // get next character
    buffer = str.charAt(idx++); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

class NbAuthToken {
    constructor() {
        this.payload = null;
    }
    getName() {
        return this.constructor.NAME;
    }
    getPayload() {
        return this.payload;
    }
}
class NbAuthTokenNotFoundError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class NbAuthIllegalTokenError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class NbAuthEmptyTokenError extends NbAuthIllegalTokenError {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class NbAuthIllegalJWTTokenError extends NbAuthIllegalTokenError {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
function nbAuthCreateToken(tokenClass, token, ownerStrategyName, createdAt) {
    return new tokenClass(token, ownerStrategyName, createdAt);
}
function decodeJwtPayload(payload) {
    if (payload.length === 0) {
        throw new NbAuthEmptyTokenError('Cannot extract from an empty payload.');
    }
    const parts = payload.split('.');
    if (parts.length !== 3) {
        throw new NbAuthIllegalJWTTokenError(`The payload ${payload} is not valid JWT payload and must consist of three parts.`);
    }
    let decoded;
    try {
        decoded = urlBase64Decode(parts[1]);
    }
    catch (e) {
        throw new NbAuthIllegalJWTTokenError(`The payload ${payload} is not valid JWT payload and cannot be parsed.`);
    }
    if (!decoded) {
        throw new NbAuthIllegalJWTTokenError(`The payload ${payload} is not valid JWT payload and cannot be decoded.`);
    }
    return JSON.parse(decoded);
}
/**
 * Wrapper for simple (text) token
 */
class NbAuthSimpleToken extends NbAuthToken {
    constructor(token, ownerStrategyName, createdAt) {
        super();
        this.token = token;
        this.ownerStrategyName = ownerStrategyName;
        this.createdAt = createdAt;
        try {
            this.parsePayload();
        }
        catch (err) {
            if (!(err instanceof NbAuthTokenNotFoundError)) {
                // token is present but has got a problem, including illegal
                throw err;
            }
        }
        this.createdAt = this.prepareCreatedAt(createdAt);
    }
    parsePayload() {
        this.payload = null;
    }
    prepareCreatedAt(date) {
        return date ? date : new Date();
    }
    /**
     * Returns the token's creation date
     * @returns {Date}
     */
    getCreatedAt() {
        return this.createdAt;
    }
    /**
     * Returns the token value
     * @returns string
     */
    getValue() {
        return this.token;
    }
    getOwnerStrategyName() {
        return this.ownerStrategyName;
    }
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    isValid() {
        return !!this.getValue();
    }
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    toString() {
        return !!this.token ? this.token : '';
    }
}
NbAuthSimpleToken.NAME = 'nb:auth:simple:token';
/**
 * Wrapper for JWT token with additional methods.
 */
class NbAuthJWTToken extends NbAuthSimpleToken {
    /**
     * for JWT token, the iat (issued at) field of the token payload contains the creation Date
     */
    prepareCreatedAt(date) {
        const decoded = this.getPayload();
        return decoded && decoded.iat ? new Date(Number(decoded.iat) * 1000) : super.prepareCreatedAt(date);
    }
    /**
     * Returns payload object
     * @returns any
     */
    parsePayload() {
        if (!this.token) {
            throw new NbAuthTokenNotFoundError('Token not found. ');
        }
        this.payload = decodeJwtPayload(this.token);
    }
    /**
     * Returns expiration date
     * @returns Date
     */
    getTokenExpDate() {
        const decoded = this.getPayload();
        if (decoded && !decoded.hasOwnProperty('exp')) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp); // 'cause jwt token are set in seconds
        return date;
    }
    /**
     * Is data expired
     * @returns {boolean}
     */
    isValid() {
        return super.isValid() && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    }
}
NbAuthJWTToken.NAME = 'nb:auth:jwt:token';
const prepareOAuth2Token = (data) => {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        }
        catch (e) { }
    }
    return data;
};
const ɵ0 = prepareOAuth2Token;
/**
 * Wrapper for OAuth2 token whose access_token is a JWT Token
 */
class NbAuthOAuth2Token extends NbAuthSimpleToken {
    constructor(data = {}, ownerStrategyName, createdAt) {
        // we may get it as string when retrieving from a storage
        super(prepareOAuth2Token(data), ownerStrategyName, createdAt);
    }
    /**
     * Returns the token value
     * @returns string
     */
    getValue() {
        return this.token.access_token;
    }
    /**
     * Returns the refresh token
     * @returns string
     */
    getRefreshToken() {
        return this.token.refresh_token;
    }
    /**
     *  put refreshToken in the token payload
      * @param refreshToken
     */
    setRefreshToken(refreshToken) {
        this.token.refresh_token = refreshToken;
    }
    /**
     * Parses token payload
     * @returns any
     */
    parsePayload() {
        if (!this.token) {
            throw new NbAuthTokenNotFoundError('Token not found.');
        }
        else {
            if (!Object.keys(this.token).length) {
                throw new NbAuthEmptyTokenError('Cannot extract payload from an empty token.');
            }
        }
        this.payload = this.token;
    }
    /**
     * Returns the token type
     * @returns string
     */
    getType() {
        return this.token.token_type;
    }
    /**
     * Is data expired
     * @returns {boolean}
     */
    isValid() {
        return super.isValid() && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    }
    /**
     * Returns expiration date
     * @returns Date
     */
    getTokenExpDate() {
        if (!this.token.hasOwnProperty('expires_in')) {
            return null;
        }
        return new Date(this.createdAt.getTime() + Number(this.token.expires_in) * 1000);
    }
    /**
     * Convert to string
     * @returns {string}
     */
    toString() {
        return JSON.stringify(this.token);
    }
}
NbAuthOAuth2Token.NAME = 'nb:auth:oauth2:token';
/**
 * Wrapper for OAuth2 token embedding JWT tokens
 */
class NbAuthOAuth2JWTToken extends NbAuthOAuth2Token {
    parsePayload() {
        super.parsePayload();
        this.parseAccessTokenPayload();
    }
    parseAccessTokenPayload() {
        const accessToken = this.getValue();
        if (!accessToken) {
            throw new NbAuthTokenNotFoundError('access_token key not found.');
        }
        this.accessTokenPayload = decodeJwtPayload(accessToken);
    }
    /**
     * Returns access token payload
     * @returns any
     */
    getAccessTokenPayload() {
        return this.accessTokenPayload;
    }
    /**
     * for Oauth2 JWT token, the iat (issued at) field of the access_token payload
     */
    prepareCreatedAt(date) {
        const payload = this.accessTokenPayload;
        return payload && payload.iat ? new Date(Number(payload.iat) * 1000) : super.prepareCreatedAt(date);
    }
    /**
     * Is token valid
     * @returns {boolean}
     */
    isValid() {
        return this.accessTokenPayload && super.isValid();
    }
    /**
     * Returns expiration date :
     * - exp if set,
     * - super.getExpDate() otherwise
     * @returns Date
     */
    getTokenExpDate() {
        if (this.accessTokenPayload && this.accessTokenPayload.hasOwnProperty('exp')) {
            const date = new Date(0);
            date.setUTCSeconds(this.accessTokenPayload.exp);
            return date;
        }
        else {
            return super.getTokenExpDate();
        }
    }
}
NbAuthOAuth2JWTToken.NAME = 'nb:auth:oauth2:jwt:token';

const NB_AUTH_FALLBACK_TOKEN = new InjectionToken('Nebular Auth Options');
/**
 * Creates a token parcel which could be stored/restored
 */
class NbAuthTokenParceler {
    constructor(fallbackClass, tokenClasses) {
        this.fallbackClass = fallbackClass;
        this.tokenClasses = tokenClasses;
    }
    wrap(token) {
        return JSON.stringify({
            name: token.getName(),
            ownerStrategyName: token.getOwnerStrategyName(),
            createdAt: token.getCreatedAt().getTime(),
            value: token.toString(),
        });
    }
    unwrap(value) {
        let tokenClass = this.fallbackClass;
        let tokenValue = '';
        let tokenOwnerStrategyName = '';
        let tokenCreatedAt = null;
        const tokenPack = this.parseTokenPack(value);
        if (tokenPack) {
            tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
            tokenValue = tokenPack.value;
            tokenOwnerStrategyName = tokenPack.ownerStrategyName;
            tokenCreatedAt = new Date(Number(tokenPack.createdAt));
        }
        return nbAuthCreateToken(tokenClass, tokenValue, tokenOwnerStrategyName, tokenCreatedAt);
    }
    // TODO: this could be moved to a separate token registry
    getClassByName(name) {
        return this.tokenClasses.find((tokenClass) => tokenClass.NAME === name);
    }
    parseTokenPack(value) {
        try {
            return JSON.parse(value);
        }
        catch (e) { }
        return null;
    }
}
NbAuthTokenParceler.ɵfac = function NbAuthTokenParceler_Factory(t) { return new (t || NbAuthTokenParceler)(ɵngcc0.ɵɵinject(NB_AUTH_FALLBACK_TOKEN), ɵngcc0.ɵɵinject(NB_AUTH_TOKENS)); };
NbAuthTokenParceler.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbAuthTokenParceler, factory: NbAuthTokenParceler.ɵfac });
NbAuthTokenParceler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_FALLBACK_TOKEN,] }] },
    { type: Array, decorators: [{ type: Inject, args: [NB_AUTH_TOKENS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAuthTokenParceler, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [NB_AUTH_FALLBACK_TOKEN]
            }] }, { type: Array, decorators: [{
                type: Inject,
                args: [NB_AUTH_TOKENS]
            }] }]; }, null); })();

class NbTokenStorage {
}
/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
class NbTokenLocalStorage extends NbTokenStorage {
    constructor(parceler) {
        super();
        this.parceler = parceler;
        this.key = 'auth_app_token';
    }
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    get() {
        const raw = localStorage.getItem(this.key);
        return this.parceler.unwrap(raw);
    }
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    set(token) {
        const raw = this.parceler.wrap(token);
        localStorage.setItem(this.key, raw);
    }
    /**
     * Clears token from localStorage
     */
    clear() {
        localStorage.removeItem(this.key);
    }
}
NbTokenLocalStorage.ɵfac = function NbTokenLocalStorage_Factory(t) { return new (t || NbTokenLocalStorage)(ɵngcc0.ɵɵinject(NbAuthTokenParceler)); };
NbTokenLocalStorage.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbTokenLocalStorage, factory: NbTokenLocalStorage.ɵfac });
NbTokenLocalStorage.ctorParameters = () => [
    { type: NbAuthTokenParceler }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbTokenLocalStorage, [{
        type: Injectable
    }], function () { return [{ type: NbAuthTokenParceler }]; }, null); })();

/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
class NbTokenService {
    constructor(tokenStorage) {
        this.tokenStorage = tokenStorage;
        this.token$ = new BehaviorSubject(null);
        this.publishStoredToken();
    }
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    tokenChange() {
        return this.token$
            .pipe(filter(value => !!value), share());
    }
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    set(token) {
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return of(null);
    }
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    get() {
        const token = this.tokenStorage.get();
        return of(token);
    }
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    clear() {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return of(null);
    }
    publishStoredToken() {
        this.token$.next(this.tokenStorage.get());
    }
}
NbTokenService.ɵfac = function NbTokenService_Factory(t) { return new (t || NbTokenService)(ɵngcc0.ɵɵinject(NbTokenStorage)); };
NbTokenService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbTokenService, factory: NbTokenService.ɵfac });
NbTokenService.ctorParameters = () => [
    { type: NbTokenStorage }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbTokenService, [{
        type: Injectable
    }], function () { return [{ type: NbTokenStorage }]; }, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
class NbAuthService {
    constructor(tokenService, strategies) {
        this.tokenService = tokenService;
        this.strategies = strategies;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    getToken() {
        return this.tokenService.get();
    }
    /**
     * Returns true if auth token is present in the token storage
     * @returns {Observable<boolean>}
     */
    isAuthenticated() {
        return this.getToken()
            .pipe(map((token) => token.isValid()));
    }
    /**
     * Returns true if valid auth token is present in the token storage.
     * If not, calls the strategy refreshToken, and returns isAuthenticated() if success, false otherwise
     * @returns {Observable<boolean>}
     */
    isAuthenticatedOrRefresh() {
        return this.getToken()
            .pipe(switchMap(token => {
            if (token.getValue() && !token.isValid()) {
                return this.refreshToken(token.getOwnerStrategyName(), token)
                    .pipe(switchMap(res => {
                    if (res.isSuccess()) {
                        return this.isAuthenticated();
                    }
                    else {
                        return of(false);
                    }
                }));
            }
            else {
                return of(token.isValid());
            }
        }));
    }
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    onTokenChange() {
        return this.tokenService.tokenChange();
    }
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    onAuthenticationChange() {
        return this.onTokenChange()
            .pipe(map((token) => token.isValid()));
    }
    /**
     * Authenticates with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    authenticate(strategyName, data) {
        return this.getStrategy(strategyName).authenticate(data)
            .pipe(switchMap((result) => {
            return this.processResultToken(result);
        }));
    }
    /**
     * Registers with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    register(strategyName, data) {
        return this.getStrategy(strategyName).register(data)
            .pipe(switchMap((result) => {
            return this.processResultToken(result);
        }));
    }
    /**
     * Sign outs with the selected strategy
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param strategyName
     * @returns {Observable<NbAuthResult>}
     */
    logout(strategyName) {
        return this.getStrategy(strategyName).logout()
            .pipe(switchMap((result) => {
            if (result.isSuccess()) {
                this.tokenService.clear()
                    .pipe(map(() => result));
            }
            return of(result);
        }));
    }
    /**
     * Sends forgot password request to the selected strategy
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    requestPassword(strategyName, data) {
        return this.getStrategy(strategyName).requestPassword(data);
    }
    /**
     * Tries to reset password with the selected strategy
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    resetPassword(strategyName, data) {
        return this.getStrategy(strategyName).resetPassword(data);
    }
    /**
     * Sends a refresh token request
     * Stores received token in the token storage
     *
     * Example:
     * refreshToken('email', {token: token})
     *
     * @param {string} strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    refreshToken(strategyName, data) {
        return this.getStrategy(strategyName).refreshToken(data)
            .pipe(switchMap((result) => {
            return this.processResultToken(result);
        }));
    }
    /**
     * Get registered strategy by name
     *
     * Example:
     * getStrategy('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    getStrategy(strategyName) {
        const found = this.strategies.find((strategy) => strategy.getName() === strategyName);
        if (!found) {
            throw new TypeError(`There is no Auth Strategy registered under '${strategyName}' name`);
        }
        return found;
    }
    processResultToken(result) {
        if (result.isSuccess() && result.getToken()) {
            return this.tokenService.set(result.getToken())
                .pipe(map((token) => {
                return result;
            }));
        }
        return of(result);
    }
}
NbAuthService.ɵfac = function NbAuthService_Factory(t) { return new (t || NbAuthService)(ɵngcc0.ɵɵinject(NbTokenService), ɵngcc0.ɵɵinject(NB_AUTH_STRATEGIES)); };
NbAuthService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbAuthService, factory: NbAuthService.ɵfac });
NbAuthService.ctorParameters = () => [
    { type: NbTokenService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_STRATEGIES,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAuthService, [{
        type: Injectable
    }], function () { return [{ type: NbTokenService }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_AUTH_STRATEGIES]
            }] }]; }, null); })();

class NbAuthStrategy {
    // we should keep this any and validation should be done in `register` method instead
    // otherwise it won't be possible to pass an empty object
    setOptions(options) {
        this.options = deepExtend({}, this.defaultOptions, options);
    }
    getOption(key) {
        return getDeepFromObject(this.options, key, null);
    }
    createToken(value, failWhenInvalidToken) {
        const token = nbAuthCreateToken(this.getOption('token.class'), value, this.getName());
        // At this point, nbAuthCreateToken failed with NbAuthIllegalTokenError which MUST be intercepted by strategies
        // Or token is created. It MAY be created even if backend did not return any token, in this case it is !Valid
        if (failWhenInvalidToken && !token.isValid()) {
            // If we require a valid token (i.e. isValid), then we MUST throw NbAuthIllegalTokenError so that the strategies
            // intercept it
            throw new NbAuthIllegalTokenError('Token is empty or invalid.');
        }
        return token;
    }
    getName() {
        return this.getOption('name');
    }
    createFailResponse(data) {
        return new HttpResponse({ body: {}, status: 401 });
    }
    createSuccessResponse(data) {
        return new HttpResponse({ body: {}, status: 200 });
    }
    getActionEndpoint(action) {
        const actionEndpoint = this.getOption(`${action}.endpoint`);
        const baseEndpoint = this.getOption('baseEndpoint');
        return actionEndpoint ? baseEndpoint + actionEndpoint : '';
    }
}

class NbAuthResult {
    // TODO: better pass object
    constructor(success, response, redirect, errors, messages, token = null) {
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        this.token = token;
    }
    getResponse() {
        return this.response;
    }
    getToken() {
        return this.token;
    }
    getRedirect() {
        return this.redirect;
    }
    getErrors() {
        return this.errors.filter(val => !!val);
    }
    getMessages() {
        return this.messages.filter(val => !!val);
    }
    isSuccess() {
        return this.success;
    }
    isFailure() {
        return !this.success;
    }
}

class NbAuthStrategyOptions {
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.token = {
            class: NbAuthSimpleToken,
        };
        this.delay = 1000;
        this.alwaysFail = false;
    }
}
const dummyStrategyOptions = new NbDummyAuthStrategyOptions();

/**
 * Dummy auth strategy. Could be useful for auth setup when backend is not available yet.
 *
 *
 * Strategy settings.
 *
 * ```ts
 * export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
 *   name = 'dummy';
 *   token = {
 *     class: NbAuthSimpleToken,
 *   };
 *   delay? = 1000;
 *   alwaysFail? = false;
 * }
 * ```
 */
class NbDummyAuthStrategy extends NbAuthStrategy {
    constructor() {
        super(...arguments);
        this.defaultOptions = dummyStrategyOptions;
    }
    static setup(options) {
        return [NbDummyAuthStrategy, options];
    }
    authenticate(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    register(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    requestPassword(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    resetPassword(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    logout(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    refreshToken(data) {
        return of(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    createDummyResult(data) {
        if (this.getOption('alwaysFail')) {
            return new NbAuthResult(false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        try {
            const token = this.createToken('test token', true);
            return new NbAuthResult(true, this.createSuccessResponse(data), '/', [], ['Successfully logged in.'], token);
        }
        catch (err) {
            return new NbAuthResult(false, this.createFailResponse(data), null, [err.message]);
        }
    }
}
NbDummyAuthStrategy.ɵfac = /*@__PURE__*/ function () { let ɵNbDummyAuthStrategy_BaseFactory; return function NbDummyAuthStrategy_Factory(t) { return (ɵNbDummyAuthStrategy_BaseFactory || (ɵNbDummyAuthStrategy_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NbDummyAuthStrategy)))(t || NbDummyAuthStrategy); }; }();
NbDummyAuthStrategy.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbDummyAuthStrategy, factory: NbDummyAuthStrategy.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbDummyAuthStrategy, [{
        type: Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbOAuth2ResponseType;
(function (NbOAuth2ResponseType) {
    NbOAuth2ResponseType["CODE"] = "code";
    NbOAuth2ResponseType["TOKEN"] = "token";
})(NbOAuth2ResponseType || (NbOAuth2ResponseType = {}));
// TODO: client_credentials
var NbOAuth2GrantType;
(function (NbOAuth2GrantType) {
    NbOAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    NbOAuth2GrantType["PASSWORD"] = "password";
    NbOAuth2GrantType["REFRESH_TOKEN"] = "refresh_token";
})(NbOAuth2GrantType || (NbOAuth2GrantType = {}));
var NbOAuth2ClientAuthMethod;
(function (NbOAuth2ClientAuthMethod) {
    NbOAuth2ClientAuthMethod["NONE"] = "none";
    NbOAuth2ClientAuthMethod["BASIC"] = "basic";
    NbOAuth2ClientAuthMethod["REQUEST_BODY"] = "request-body";
})(NbOAuth2ClientAuthMethod || (NbOAuth2ClientAuthMethod = {}));
class NbOAuth2AuthStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.baseEndpoint = '';
        this.clientId = '';
        this.clientSecret = '';
        this.clientAuthMethod = NbOAuth2ClientAuthMethod.NONE;
        this.redirect = {
            success: '/',
            failure: null,
        };
        this.defaultErrors = ['Something went wrong, please try again.'];
        this.defaultMessages = ['You have been successfully authenticated.'];
        this.authorize = {
            endpoint: 'authorize',
            responseType: NbOAuth2ResponseType.CODE,
            requireValidToken: true,
        };
        this.token = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
            requireValidToken: true,
            class: NbAuthOAuth2Token,
        };
        this.refresh = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.REFRESH_TOKEN,
            requireValidToken: true,
        };
    }
}
const auth2StrategyOptions = new NbOAuth2AuthStrategyOptions();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * OAuth2 authentication strategy.
 *
 * Strategy settings:
 *
 * ```ts
 * export enum NbOAuth2ResponseType {
 *   CODE = 'code',
 *   TOKEN = 'token',
 * }
 *
 * export enum NbOAuth2GrantType {
 *   AUTHORIZATION_CODE = 'authorization_code',
 *   PASSWORD = 'password',
 *   REFRESH_TOKEN = 'refresh_token',
 * }
 *
 * export class NbOAuth2AuthStrategyOptions {
 *   name: string;
 *   baseEndpoint?: string = '';
 *   clientId: string = '';
 *   clientSecret: string = '';
 *   clientAuthMethod: string = NbOAuth2ClientAuthMethod.NONE;
 *   redirect?: { success?: string; failure?: string } = {
 *     success: '/',
 *     failure: null,
 *   };
 *   defaultErrors?: any[] = ['Something went wrong, please try again.'];
 *   defaultMessages?: any[] = ['You have been successfully authenticated.'];
 *   authorize?: {
 *     endpoint?: string;
 *     redirectUri?: string;
 *     responseType?: string;
 *     requireValidToken: true,
 *     scope?: string;
 *     state?: string;
 *     params?: { [key: string]: string };
 *   } = {
 *     endpoint: 'authorize',
 *     responseType: NbOAuth2ResponseType.CODE,
 *   };
 *   token?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     requireValidToken: true,
 *     redirectUri?: string;
 *     scope?: string;
 *     class: NbAuthTokenClass,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
 *     class: NbAuthOAuth2Token,
 *   };
 *   refresh?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     scope?: string;
 *     requireValidToken: true,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.REFRESH_TOKEN,
 *   };
 * }
 * ```
 *
 */
class NbOAuth2AuthStrategy extends NbAuthStrategy {
    constructor(http, route, window) {
        super();
        this.http = http;
        this.route = route;
        this.window = window;
        this.redirectResultHandlers = {
            [NbOAuth2ResponseType.CODE]: () => {
                return of(this.route.snapshot.queryParams).pipe(switchMap((params) => {
                    if (params.code) {
                        return this.requestToken(params.code);
                    }
                    return of(new NbAuthResult(false, params, this.getOption('redirect.failure'), this.getOption('defaultErrors'), []));
                }));
            },
            [NbOAuth2ResponseType.TOKEN]: () => {
                const module = 'authorize';
                const requireValidToken = this.getOption(`${module}.requireValidToken`);
                return of(this.route.snapshot.fragment).pipe(map(fragment => this.parseHashAsQueryParams(fragment)), map((params) => {
                    if (!params.error) {
                        return new NbAuthResult(true, params, this.getOption('redirect.success'), [], this.getOption('defaultMessages'), this.createToken(params, requireValidToken));
                    }
                    return new NbAuthResult(false, params, this.getOption('redirect.failure'), this.getOption('defaultErrors'), []);
                }), catchError(err => {
                    const errors = [];
                    if (err instanceof NbAuthIllegalTokenError) {
                        errors.push(err.message);
                    }
                    else {
                        errors.push('Something went wrong.');
                    }
                    return of(new NbAuthResult(false, err, this.getOption('redirect.failure'), errors));
                }));
            },
        };
        this.redirectResults = {
            [NbOAuth2ResponseType.CODE]: () => {
                return of(this.route.snapshot.queryParams).pipe(map((params) => !!(params && (params.code || params.error))));
            },
            [NbOAuth2ResponseType.TOKEN]: () => {
                return of(this.route.snapshot.fragment).pipe(map(fragment => this.parseHashAsQueryParams(fragment)), map((params) => !!(params && (params.access_token || params.error))));
            },
        };
        this.defaultOptions = auth2StrategyOptions;
    }
    static setup(options) {
        return [NbOAuth2AuthStrategy, options];
    }
    get responseType() {
        return this.getOption('authorize.responseType');
    }
    get clientAuthMethod() {
        return this.getOption('clientAuthMethod');
    }
    authenticate(data) {
        if (this.getOption('token.grantType') === NbOAuth2GrantType.PASSWORD) {
            return this.passwordToken(data.email, data.password);
        }
        else {
            return this.isRedirectResult()
                .pipe(switchMap((result) => {
                if (!result) {
                    this.authorizeRedirect();
                    return of(new NbAuthResult(true));
                }
                return this.getAuthorizationResult();
            }));
        }
    }
    getAuthorizationResult() {
        const redirectResultHandler = this.redirectResultHandlers[this.responseType];
        if (redirectResultHandler) {
            return redirectResultHandler.call(this);
        }
        throw new Error(`'${this.responseType}' responseType is not supported,
                      only 'token' and 'code' are supported now`);
    }
    refreshToken(token) {
        const module = 'refresh';
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        let headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildRefreshRequestData(token), { headers: headers })
            .pipe(map((res) => {
            return new NbAuthResult(true, res, this.getOption('redirect.success'), [], this.getOption('defaultMessages'), this.createRefreshedToken(res, token, requireValidToken));
        }), catchError((res) => this.handleResponseError(res)));
    }
    passwordToken(username, password) {
        const module = 'token';
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        let headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildPasswordRequestData(username, password), { headers: headers })
            .pipe(map((res) => {
            return new NbAuthResult(true, res, this.getOption('redirect.success'), [], this.getOption('defaultMessages'), this.createToken(res, requireValidToken));
        }), catchError((res) => this.handleResponseError(res)));
    }
    authorizeRedirect() {
        this.window.location.href = this.buildRedirectUrl();
    }
    isRedirectResult() {
        return this.redirectResults[this.responseType].call(this);
    }
    requestToken(code) {
        const module = 'token';
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        let headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildCodeRequestData(code), { headers: headers })
            .pipe(map((res) => {
            return new NbAuthResult(true, res, this.getOption('redirect.success'), [], this.getOption('defaultMessages'), this.createToken(res, requireValidToken));
        }), catchError((res) => this.handleResponseError(res)));
    }
    buildCodeRequestData(code) {
        const params = {
            grant_type: this.getOption('token.grantType'),
            code: code,
            redirect_uri: this.getOption('token.redirectUri'),
            client_id: this.getOption('clientId'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    }
    buildRefreshRequestData(token) {
        const params = {
            grant_type: this.getOption('refresh.grantType'),
            refresh_token: token.getRefreshToken(),
            scope: this.getOption('refresh.scope'),
            client_id: this.getOption('clientId'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    }
    buildPasswordRequestData(username, password) {
        const params = {
            grant_type: this.getOption('token.grantType'),
            username: username,
            password: password,
            scope: this.getOption('token.scope'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    }
    buildAuthHeader() {
        if (this.clientAuthMethod === NbOAuth2ClientAuthMethod.BASIC) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return new HttpHeaders({
                    'Authorization': 'Basic ' + btoa(this.getOption('clientId') + ':' + this.getOption('clientSecret')),
                });
            }
            else {
                throw Error('For basic client authentication method, please provide both clientId & clientSecret.');
            }
        }
    }
    cleanParams(params) {
        Object.entries(params)
            .forEach(([key, val]) => !val && delete params[key]);
        return params;
    }
    addCredentialsToParams(params) {
        if (this.clientAuthMethod === NbOAuth2ClientAuthMethod.REQUEST_BODY) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return Object.assign(Object.assign({}, params), { client_id: this.getOption('clientId'), client_secret: this.getOption('clientSecret') });
            }
            else {
                throw Error('For request body client authentication method, please provide both clientId & clientSecret.');
            }
        }
        return params;
    }
    handleResponseError(res) {
        let errors = [];
        if (res instanceof HttpErrorResponse) {
            if (res.error.error_description) {
                errors.push(res.error.error_description);
            }
            else {
                errors = this.getOption('defaultErrors');
            }
        }
        else if (res instanceof NbAuthIllegalTokenError) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        
        return of(new NbAuthResult(false, res, this.getOption('redirect.failure'), errors, []));
    }
    buildRedirectUrl() {
        const params = Object.assign({ response_type: this.getOption('authorize.responseType'), client_id: this.getOption('clientId'), redirect_uri: this.getOption('authorize.redirectUri'), scope: this.getOption('authorize.scope'), state: this.getOption('authorize.state') }, this.getOption('authorize.params'));
        const endpoint = this.getActionEndpoint('authorize');
        const query = this.urlEncodeParameters(this.cleanParams(params));
        return `${endpoint}?${query}`;
    }
    parseHashAsQueryParams(hash) {
        return hash ? hash.split('&').reduce((acc, part) => {
            const item = part.split('=');
            acc[item[0]] = decodeURIComponent(item[1]);
            return acc;
        }, {}) : {};
    }
    urlEncodeParameters(params) {
        return Object.keys(params).map((k) => {
            return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
        }).join('&');
    }
    createRefreshedToken(res, existingToken, requireValidToken) {
        const refreshedToken = this.createToken(res, requireValidToken);
        if (!refreshedToken.getRefreshToken() && existingToken.getRefreshToken()) {
            refreshedToken.setRefreshToken(existingToken.getRefreshToken());
        }
        return refreshedToken;
    }
    register(data) {
        throw new Error('`register` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    }
    requestPassword(data) {
        throw new Error('`requestPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    }
    resetPassword(data = {}) {
        throw new Error('`resetPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    }
    logout() {
        return of(new NbAuthResult(true));
    }
}
NbOAuth2AuthStrategy.ɵfac = function NbOAuth2AuthStrategy_Factory(t) { return new (t || NbOAuth2AuthStrategy)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient), ɵngcc0.ɵɵinject(ɵngcc2.ActivatedRoute), ɵngcc0.ɵɵinject(NB_WINDOW)); };
NbOAuth2AuthStrategy.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbOAuth2AuthStrategy, factory: NbOAuth2AuthStrategy.ɵfac });
NbOAuth2AuthStrategy.ctorParameters = () => [
    { type: HttpClient },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbOAuth2AuthStrategy, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc2.ActivatedRoute }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_WINDOW]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.baseEndpoint = '/api/auth/';
        this.login = {
            alwaysFail: false,
            endpoint: 'login',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
        };
        this.register = {
            alwaysFail: false,
            endpoint: 'register',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
        };
        this.requestPass = {
            endpoint: 'request-pass',
            method: 'post',
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
        };
        this.resetPass = {
            endpoint: 'reset-pass',
            method: 'put',
            redirect: {
                success: '/',
                failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
        };
        this.logout = {
            alwaysFail: false,
            endpoint: 'logout',
            method: 'delete',
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
        };
        this.refreshToken = {
            endpoint: 'refresh-token',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: null,
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your token has been successfully refreshed.'],
        };
        this.token = {
            class: NbAuthSimpleToken,
            key: 'data.token',
            getter: (module, res, options) => getDeepFromObject(res.body, options.token.key),
        };
        this.errors = {
            key: 'data.errors',
            getter: (module, res, options) => getDeepFromObject(res.error, options.errors.key, options[module].defaultErrors),
        };
        this.messages = {
            key: 'data.messages',
            getter: (module, res, options) => getDeepFromObject(res.body, options.messages.key, options[module].defaultMessages),
        };
    }
}
const passwordStrategyOptions = new NbPasswordAuthStrategyOptions();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The most common authentication provider for email/password strategy.
 *
 * Strategy settings. Note, there is no need to copy over the whole object to change the settings you need.
 * Also, this.getOption call won't work outside of the default options declaration
 * (which is inside of the `NbPasswordAuthStrategy` class), so you have to replace it with a custom helper function
 * if you need it.
 *
 * ```ts
 *export class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
 *  name: string;
 *  baseEndpoint? = '/api/auth/';
 *  login?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'login',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  };
 *  register?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'register',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  };
 *  requestPass?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  };
 *  resetPass?: boolean | NbPasswordStrategyReset = {
 *    endpoint: 'reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  };
 *  logout?: boolean | NbPasswordStrategyReset = {
 *    alwaysFail: false,
 *    endpoint: 'logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  };
 *  refreshToken?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'refresh-token',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: null,
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your token has been successfully refreshed.'],
 *  };
 *  token?: NbPasswordStrategyToken = {
 *    class: NbAuthSimpleToken,
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.token.key,
 *    ),
 *  };
 *  errors?: NbPasswordStrategyMessage = {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.error,
 *      options.errors.key,
 *      options[module].defaultErrors,
 *    ),
 *  };
 *  messages?: NbPasswordStrategyMessage = {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.messages.key,
 *      options[module].defaultMessages,
 *    ),
 *  };
 *  validation?: {
 *    password?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *    email?: {
 *      required?: boolean;
 *      regexp?: string | null;
 *    };
 *    fullName?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *  };
 *}
 * ```
 */
class NbPasswordAuthStrategy extends NbAuthStrategy {
    constructor(http, route) {
        super();
        this.http = http;
        this.route = route;
        this.defaultOptions = passwordStrategyOptions;
    }
    static setup(options) {
        return [NbPasswordAuthStrategy, options];
    }
    authenticate(data) {
        const module = 'login';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse(data);
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options), this.createToken(this.getOption('token.getter')(module, res, this.options), requireValidToken));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    register(data) {
        const module = 'register';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse(data);
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options), this.createToken(this.getOption('token.getter')('login', res, this.options), requireValidToken));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    requestPassword(data) {
        const module = 'requestPass';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse();
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    resetPassword(data = {}) {
        const module = 'resetPass';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        const tokenKey = this.getOption(`${module}.resetPasswordTokenKey`);
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse();
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    logout() {
        const module = 'logout';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        return of({})
            .pipe(switchMap((res) => {
            if (!url) {
                return of(res);
            }
            return this.http.request(method, url, { observe: 'response' });
        }), map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse();
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    refreshToken(data) {
        const module = 'refreshToken';
        const method = this.getOption(`${module}.method`);
        const url = this.getActionEndpoint(module);
        const requireValidToken = this.getOption(`${module}.requireValidToken`);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map((res) => {
            if (this.getOption(`${module}.alwaysFail`)) {
                throw this.createFailResponse(data);
            }
            return res;
        }), map((res) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options), this.createToken(this.getOption('token.getter')(module, res, this.options), requireValidToken));
        }), catchError((res) => {
            return this.handleResponseError(res, module);
        }));
    }
    handleResponseError(res, module) {
        let errors = [];
        if (res instanceof HttpErrorResponse) {
            errors = this.getOption('errors.getter')(module, res, this.options);
        }
        else if (res instanceof NbAuthIllegalTokenError) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        return of(new NbAuthResult(false, res, this.getOption(`${module}.redirect.failure`), errors));
    }
}
NbPasswordAuthStrategy.ɵfac = function NbPasswordAuthStrategy_Factory(t) { return new (t || NbPasswordAuthStrategy)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient), ɵngcc0.ɵɵinject(ɵngcc2.ActivatedRoute)); };
NbPasswordAuthStrategy.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbPasswordAuthStrategy, factory: NbPasswordAuthStrategy.ɵfac });
NbPasswordAuthStrategy.ctorParameters = () => [
    { type: HttpClient },
    { type: ActivatedRoute }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbPasswordAuthStrategy, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc2.ActivatedRoute }]; }, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbAuthComponent {
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
NbAuthComponent.ɵfac = function NbAuthComponent_Factory(t) { return new (t || NbAuthComponent)(ɵngcc0.ɵɵdirectiveInject(NbAuthService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Location)); };
NbAuthComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NbAuthComponent, selectors: [["nb-auth"]], decls: 10, vars: 0, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"]], template: function NbAuthComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nb-layout");
        ɵngcc0.ɵɵelementStart(1, "nb-layout-column");
        ɵngcc0.ɵɵelementStart(2, "nb-card");
        ɵngcc0.ɵɵelementStart(3, "nb-card-header");
        ɵngcc0.ɵɵelementStart(4, "nav", 0);
        ɵngcc0.ɵɵelementStart(5, "a", 1);
        ɵngcc0.ɵɵlistener("click", function NbAuthComponent_Template_a_click_5_listener() { return ctx.back(); });
        ɵngcc0.ɵɵelement(6, "nb-icon", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "nb-card-body");
        ɵngcc0.ɵɵelementStart(8, "nb-auth-block");
        ɵngcc0.ɵɵelement(9, "router-outlet");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, directives: function () { return [ɵngcc4.NbLayoutComponent, ɵngcc4.NbLayoutColumnComponent, ɵngcc4.NbCardComponent, ɵngcc4.NbCardHeaderComponent, ɵngcc4.NbIconComponent, ɵngcc4.NbCardBodyComponent, NbAuthBlockComponent, ɵngcc2.RouterOutlet]; }, styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{margin:0;height:calc(100vh - 2 * 2.5rem)}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:2rem;vertical-align:middle}[_nghost-%COMP%]   .links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:2.5rem}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:flex;width:100%}[_nghost-%COMP%]   nb-auth-block[_ngcontent-%COMP%]{margin:auto}@media (max-width: 767.98px){[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{border-radius:0;height:100vh}}[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"] });
NbAuthComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: Location }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAuthComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: NbAuthService }, { type: ɵngcc3.Location }]; }, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbAuthBlockComponent {
}
NbAuthBlockComponent.ɵfac = function NbAuthBlockComponent_Factory(t) { return new (t || NbAuthBlockComponent)(); };
NbAuthBlockComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NbAuthBlockComponent, selectors: [["nb-auth-block"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NbAuthBlockComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%]{display:block;width:100%;max-width:35rem}[_nghost-%COMP%]     form{width:100%}[_nghost-%COMP%]     .label{display:block;margin-bottom:0.5rem}[_nghost-%COMP%]     .forgot-password{text-decoration:none;margin-bottom:0.5rem}[_nghost-%COMP%]     .caption{margin-top:0.5rem}[_nghost-%COMP%]     .alert{text-align:center}[_nghost-%COMP%]     .title{margin-top:0;margin-bottom:0.75rem;text-align:center}[_nghost-%COMP%]     .sub-title{margin-bottom:2rem;text-align:center}[_nghost-%COMP%]     .form-control-group{margin-bottom:2rem}[_nghost-%COMP%]     .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}[_nghost-%COMP%]     .label-with-link{display:flex;justify-content:space-between}[_nghost-%COMP%]     .links{text-align:center;margin-top:1.75rem}[_nghost-%COMP%]     .links .socials{margin-top:1.5rem}[_nghost-%COMP%]     .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}[_nghost-%COMP%]     .links .socials a.with-icon{font-size:2rem}[_nghost-%COMP%]     .another-action{margin-top:2rem;text-align:center}[_nghost-%COMP%]     .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}[_nghost-%COMP%]     nb-alert .alert-title, [_nghost-%COMP%]     nb-alert .alert-message{margin:0 0 0.5rem}[_nghost-%COMP%]     nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAuthBlockComponent, [{
        type: Component,
        args: [{
                selector: 'nb-auth-block',
                template: `
    <ng-content></ng-content>
  `,
                styles: [":host{display:block;width:100%;max-width:35rem}:host ::ng-deep form{width:100%}:host ::ng-deep .label{display:block;margin-bottom:0.5rem}:host ::ng-deep .forgot-password{text-decoration:none;margin-bottom:0.5rem}:host ::ng-deep .caption{margin-top:0.5rem}:host ::ng-deep .alert{text-align:center}:host ::ng-deep .title{margin-top:0;margin-bottom:0.75rem;text-align:center}:host ::ng-deep .sub-title{margin-bottom:2rem;text-align:center}:host ::ng-deep .form-control-group{margin-bottom:2rem}:host ::ng-deep .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host ::ng-deep .label-with-link{display:flex;justify-content:space-between}:host ::ng-deep .links{text-align:center;margin-top:1.75rem}:host ::ng-deep .links .socials{margin-top:1.5rem}:host ::ng-deep .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}:host ::ng-deep .links .socials a.with-icon{font-size:2rem}:host ::ng-deep .another-action{margin-top:2rem;text-align:center}:host ::ng-deep .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host ::ng-deep nb-alert .alert-title,:host ::ng-deep nb-alert .alert-message{margin:0 0 0.5rem}:host ::ng-deep nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}\n"]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbLoginComponent {
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
NbLoginComponent.ɵfac = function NbLoginComponent_Factory(t) { return new (t || NbLoginComponent)(ɵngcc0.ɵɵdirectiveInject(NbAuthService), ɵngcc0.ɵɵdirectiveInject(NB_AUTH_OPTIONS), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
NbLoginComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NbLoginComponent, selectors: [["nb-login"]], decls: 32, vars: 19, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "email", "id", "input-email", "pattern", ".+@.+\\..+", "placeholder", "Email address", "fieldSize", "large", "autofocus", "", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "label-with-link"], ["for", "input-password", 1, "label"], ["routerLink", "../request-password", 1, "forgot-password", "caption-2"], ["nbInput", "", "fullWidth", "", "name", "password", "type", "password", "id", "input-password", "placeholder", "Password", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], [1, "form-control-group", "accept-group"], ["name", "rememberMe", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["class", "links", "aria-label", "Social sign in", 4, "ngIf"], ["aria-label", "Register", 1, "another-action"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["name", "rememberMe", 3, "ngModel", "ngModelChange"], ["aria-label", "Social sign in", 1, "links"], [1, "socials"], [4, "ngFor", "ngForOf"], [3, "routerLink", "with-icon", 4, "ngIf"], [3, "with-icon", 4, "ngIf"], [3, "routerLink"], [3, "icon", 4, "ngIf", "ngIfElse"], ["title", ""], [3, "icon"]], template: function NbLoginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h1", 0);
        ɵngcc0.ɵɵtext(1, "Login");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "p", 1);
        ɵngcc0.ɵɵtext(3, "Hello! Log in with your email.");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NbLoginComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
        ɵngcc0.ɵɵtemplate(5, NbLoginComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
        ɵngcc0.ɵɵelementStart(6, "form", 4, 5);
        ɵngcc0.ɵɵlistener("ngSubmit", function NbLoginComponent_Template_form_ngSubmit_6_listener() { return ctx.login(); });
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵelementStart(9, "label", 7);
        ɵngcc0.ɵɵtext(10, "Email address:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "input", 8, 9);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbLoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.email = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, NbLoginComponent_ng_container_13_Template, 3, 2, "ng-container", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 6);
        ɵngcc0.ɵɵelementStart(15, "span", 11);
        ɵngcc0.ɵɵelementStart(16, "label", 12);
        ɵngcc0.ɵɵtext(17, "Password:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "a", 13);
        ɵngcc0.ɵɵtext(19, "Forgot Password?");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "input", 14, 15);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbLoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.user.password = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(22, NbLoginComponent_ng_container_22_Template, 3, 2, "ng-container", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(23, "div", 16);
        ɵngcc0.ɵɵtemplate(24, NbLoginComponent_nb_checkbox_24_Template, 2, 1, "nb-checkbox", 17);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(25, "button", 18);
        ɵngcc0.ɵɵtext(26, " Log In ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(27, NbLoginComponent_section_27_Template, 4, 1, "section", 19);
        ɵngcc0.ɵɵelementStart(28, "section", 20);
        ɵngcc0.ɵɵtext(29, " Don't have an account? ");
        ɵngcc0.ɵɵelementStart(30, "a", 21);
        ɵngcc0.ɵɵtext(31, "Register");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(7);
        const _r3 = ɵngcc0.ɵɵreference(12);
        const _r5 = ɵngcc0.ɵɵreference(21);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.email)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r3.invalid && _r3.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r3.invalid && _r3.touched);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.password)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r5.invalid && _r5.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r5.invalid && _r5.touched);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rememberMe);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("btn-pulse", ctx.submitted);
        ɵngcc0.ɵɵproperty("disabled", ctx.submitted || !_r2.valid);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.socialLinks && ctx.socialLinks.length > 0);
    } }, directives: [ɵngcc3.NgIf, ɵngcc5.ɵNgNoValidate, ɵngcc5.NgControlStatusGroup, ɵngcc5.NgForm, ɵngcc4.NbInputDirective, ɵngcc5.DefaultValueAccessor, ɵngcc5.PatternValidator, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc5.RequiredValidator, ɵngcc2.RouterLinkWithHref, ɵngcc5.MinLengthValidator, ɵngcc5.MaxLengthValidator, ɵngcc4.NbButtonComponent, ɵngcc4.NbAlertComponent, ɵngcc3.NgForOf, ɵngcc4.NbCheckboxComponent, ɵngcc4.NbIconComponent], encapsulation: 2, changeDetection: 0 });
NbLoginComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbLoginComponent, [{
        type: Component,
        args: [{
                selector: 'nb-login',
                template: "<h1 id=\"title\" class=\"title\">Login</h1>\n<p class=\"sub-title\">Hello! Log in with your email.</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           name=\"email\"\n           id=\"input-email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email address\"\n           fieldSize=\"large\"\n           autofocus\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\" for=\"input-password\">Password:</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"../request-password\">Forgot Password?</a>\n    </span>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           name=\"password\"\n           type=\"password\"\n           id=\"input-password\"\n           placeholder=\"Password\"\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched \">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Log In\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  Don't have an account? <a class=\"text-link\" routerLink=\"../register\">Register</a>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: NbAuthService }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_AUTH_OPTIONS]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Router }]; }, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbRegisterComponent {
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
NbRegisterComponent.ɵfac = function NbRegisterComponent_Factory(t) { return new (t || NbRegisterComponent)(ɵngcc0.ɵɵdirectiveInject(NbAuthService), ɵngcc0.ɵɵdirectiveInject(NB_AUTH_OPTIONS), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
NbRegisterComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NbRegisterComponent, selectors: [["nb-register"]], decls: 38, vars: 31, consts: [["id", "title", 1, "title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-name", 1, "label"], ["nbInput", "", "id", "input-name", "name", "fullName", "placeholder", "Full name", "autofocus", "", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["fullName", "ngModel"], [4, "ngIf"], ["for", "input-email", 1, "label"], ["nbInput", "", "id", "input-email", "name", "email", "pattern", ".+@.+..+", "placeholder", "Email address", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], ["for", "input-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-password", "name", "password", "placeholder", "Password", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-re-password", "name", "rePass", "placeholder", "Confirm Password", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "ngModelChange"], ["rePass", "ngModel"], ["class", "form-control-group accept-group", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["class", "links", "aria-label", "Social sign in", 4, "ngIf"], ["aria-label", "Sign in", 1, "another-action"], ["routerLink", "../login", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "form-control-group", "accept-group"], ["name", "terms", 3, "ngModel", "required", "ngModelChange"], ["href", "#", "target", "_blank"], ["aria-label", "Social sign in", 1, "links"], [1, "socials"], [4, "ngFor", "ngForOf"], [3, "routerLink", "with-icon", 4, "ngIf"], [3, "with-icon", 4, "ngIf"], [3, "routerLink"], [3, "icon", 4, "ngIf", "ngIfElse"], ["title", ""], [3, "icon"]], template: function NbRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h1", 0);
        ɵngcc0.ɵɵtext(1, "Register");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, NbRegisterComponent_nb_alert_2_Template, 6, 1, "nb-alert", 1);
        ɵngcc0.ɵɵtemplate(3, NbRegisterComponent_nb_alert_3_Template, 6, 1, "nb-alert", 2);
        ɵngcc0.ɵɵelementStart(4, "form", 3, 4);
        ɵngcc0.ɵɵlistener("ngSubmit", function NbRegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.register(); });
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "label", 6);
        ɵngcc0.ɵɵtext(8, "Full name:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "input", 7, 8);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbRegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.fullName = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, NbRegisterComponent_ng_container_11_Template, 3, 2, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 5);
        ɵngcc0.ɵɵelementStart(13, "label", 10);
        ɵngcc0.ɵɵtext(14, "Email address:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "input", 11, 12);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbRegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.email = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(17, NbRegisterComponent_ng_container_17_Template, 3, 2, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "div", 5);
        ɵngcc0.ɵɵelementStart(19, "label", 13);
        ɵngcc0.ɵɵtext(20, "Password:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "input", 14, 15);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbRegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.password = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(23, NbRegisterComponent_ng_container_23_Template, 3, 2, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "div", 5);
        ɵngcc0.ɵɵelementStart(25, "label", 16);
        ɵngcc0.ɵɵtext(26, "Repeat password:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(27, "input", 17, 18);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbRegisterComponent_Template_input_ngModelChange_27_listener($event) { return ctx.user.confirmPassword = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(29, NbRegisterComponent_ng_container_29_Template, 3, 2, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(30, NbRegisterComponent_div_30_Template, 6, 2, "div", 19);
        ɵngcc0.ɵɵelementStart(31, "button", 20);
        ɵngcc0.ɵɵtext(32, " Register ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(33, NbRegisterComponent_section_33_Template, 4, 1, "section", 21);
        ɵngcc0.ɵɵelementStart(34, "section", 22);
        ɵngcc0.ɵɵtext(35, " Already have an account? ");
        ɵngcc0.ɵɵelementStart(36, "a", 23);
        ɵngcc0.ɵɵtext(37, "Log in");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(5);
        const _r3 = ɵngcc0.ɵɵreference(10);
        const _r5 = ɵngcc0.ɵɵreference(16);
        const _r7 = ɵngcc0.ɵɵreference(22);
        const _r9 = ɵngcc0.ɵɵreference(28);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.fullName)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.fullName.required"))("minlength", ctx.getConfigValue("forms.validation.fullName.minLength"))("maxlength", ctx.getConfigValue("forms.validation.fullName.maxLength"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r3.invalid && _r3.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r3.invalid && _r3.touched);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.email)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r5.invalid && _r5.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r5.invalid && _r5.touched);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.password)("status", _r7.dirty ? _r7.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r7.invalid && _r7.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r7.invalid && _r7.touched);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.confirmPassword)("status", _r9.dirty ? _r9.invalid || _r7.value != _r9.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r9.invalid && _r9.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r9.invalid && _r9.touched);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.getConfigValue("forms.register.terms"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("btn-pulse", ctx.submitted);
        ɵngcc0.ɵɵproperty("disabled", ctx.submitted || !_r2.valid);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.socialLinks && ctx.socialLinks.length > 0);
    } }, directives: [ɵngcc3.NgIf, ɵngcc5.ɵNgNoValidate, ɵngcc5.NgControlStatusGroup, ɵngcc5.NgForm, ɵngcc4.NbInputDirective, ɵngcc5.DefaultValueAccessor, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc5.RequiredValidator, ɵngcc5.MinLengthValidator, ɵngcc5.MaxLengthValidator, ɵngcc5.PatternValidator, ɵngcc4.NbButtonComponent, ɵngcc2.RouterLinkWithHref, ɵngcc4.NbAlertComponent, ɵngcc3.NgForOf, ɵngcc4.NbCheckboxComponent, ɵngcc4.NbIconComponent], styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:2rem}"], changeDetection: 0 });
NbRegisterComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbRegisterComponent, [{
        type: Component,
        args: [{
                selector: 'nb-register',
                template: "<h1 id=\"title\" class=\"title\">Register</h1>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"register()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">Full name:</label>\n    <input nbInput\n           [(ngModel)]=\"user.fullName\"\n           #fullName=\"ngModel\"\n           id=\"input-name\"\n           name=\"fullName\"\n           placeholder=\"Full name\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"fullName.dirty ? (fullName.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.fullName.required')\"\n           [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n           [attr.aria-invalid]=\"fullName.invalid && fullName.touched ? true : null\">\n    <ng-container *ngIf=\"fullName.invalid && fullName.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.required\">\n        Full name is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.minlength || fullName.errors?.maxlength\">\n        Full name should contains\n        from {{getConfigValue('forms.validation.fullName.minLength')}}\n        to {{getConfigValue('forms.validation.fullName.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+..+\"\n           placeholder=\"Email address\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           placeholder=\"Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-re-password\">Repeat password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           type=\"password\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.dirty ? (rePass.invalid || password.value != rePass.value  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.invalid && rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\" *ngIf=\"getConfigValue('forms.register.terms')\">\n    <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n      Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n    </nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Register\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  Already have an account? <a class=\"text-link\" routerLink=\"../login\">Log in</a>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .title{margin-bottom:2rem}\n"]
            }]
    }], function () { return [{ type: NbAuthService }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_AUTH_OPTIONS]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Router }]; }, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbLogoutComponent {
    constructor(service, options = {}, router) {
        this.service = service;
        this.options = options;
        this.router = router;
        this.redirectDelay = 0;
        this.strategy = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
    }
    ngOnInit() {
        this.logout(this.strategy);
    }
    logout(strategy) {
        this.service.logout(strategy).subscribe((result) => {
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
        });
    }
    getConfigValue(key) {
        return getDeepFromObject(this.options, key, null);
    }
}
NbLogoutComponent.ɵfac = function NbLogoutComponent_Factory(t) { return new (t || NbLogoutComponent)(ɵngcc0.ɵɵdirectiveInject(NbAuthService), ɵngcc0.ɵɵdirectiveInject(NB_AUTH_OPTIONS), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
NbLogoutComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NbLogoutComponent, selectors: [["nb-logout"]], decls: 2, vars: 0, template: function NbLogoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtext(1, "Logging out, please wait...");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
NbLogoutComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: Router }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbLogoutComponent, [{
        type: Component,
        args: [{
                selector: 'nb-logout',
                template: "<div>Logging out, please wait...</div>\n"
            }]
    }], function () { return [{ type: NbAuthService }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_AUTH_OPTIONS]
            }] }, { type: ɵngcc2.Router }]; }, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbRequestPasswordComponent {
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
NbRequestPasswordComponent.ɵfac = function NbRequestPasswordComponent_Factory(t) { return new (t || NbRequestPasswordComponent)(ɵngcc0.ɵɵdirectiveInject(NbAuthService), ɵngcc0.ɵɵdirectiveInject(NB_AUTH_OPTIONS), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
NbRequestPasswordComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NbRequestPasswordComponent, selectors: [["nb-request-password-page"]], decls: 23, vars: 10, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["requestPassForm", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "id", "input-email", "name", "email", "pattern", ".+@.+\\..+", "placeholder", "Email address", "autofocus", "", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], ["routerLink", "../login", 1, "text-link"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function NbRequestPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h1", 0);
        ɵngcc0.ɵɵtext(1, "Forgot Password");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "p", 1);
        ɵngcc0.ɵɵtext(3, "Enter your email address and we\u2019ll send a link to reset your password");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NbRequestPasswordComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
        ɵngcc0.ɵɵtemplate(5, NbRequestPasswordComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
        ɵngcc0.ɵɵelementStart(6, "form", 4, 5);
        ɵngcc0.ɵɵlistener("ngSubmit", function NbRequestPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.requestPass(); });
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵelementStart(9, "label", 7);
        ɵngcc0.ɵɵtext(10, "Enter your email address:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "input", 8, 9);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbRequestPasswordComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.email = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, NbRequestPasswordComponent_ng_container_13_Template, 3, 2, "ng-container", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "button", 11);
        ɵngcc0.ɵɵtext(15, " Request password ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "section", 12);
        ɵngcc0.ɵɵelementStart(17, "p");
        ɵngcc0.ɵɵelementStart(18, "a", 13);
        ɵngcc0.ɵɵtext(19, "Back to Log In");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "p");
        ɵngcc0.ɵɵelementStart(21, "a", 14);
        ɵngcc0.ɵɵtext(22, "Register");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(7);
        const _r3 = ɵngcc0.ɵɵreference(12);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.email)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r3.invalid && _r3.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r3.invalid && _r3.touched);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("btn-pulse", ctx.submitted);
        ɵngcc0.ɵɵproperty("disabled", ctx.submitted || !_r2.valid);
    } }, directives: [ɵngcc3.NgIf, ɵngcc5.ɵNgNoValidate, ɵngcc5.NgControlStatusGroup, ɵngcc5.NgForm, ɵngcc4.NbInputDirective, ɵngcc5.DefaultValueAccessor, ɵngcc5.PatternValidator, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc5.RequiredValidator, ɵngcc4.NbButtonComponent, ɵngcc2.RouterLinkWithHref, ɵngcc4.NbAlertComponent, ɵngcc3.NgForOf], styles: [_c1], changeDetection: 0 });
NbRequestPasswordComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbRequestPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'nb-request-password-page',
                template: "<h1 id=\"title\" class=\"title\">Forgot Password</h1>\n<p class=\"sub-title\">Enter your email address and we\u2019ll send a link to reset your password</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Enter your email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email address\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !requestPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Request password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a routerLink=\"../register\" class=\"text-link\">Register</a></p>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .form-group:last-of-type{margin-bottom:3rem}\n"]
            }]
    }], function () { return [{ type: NbAuthService }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_AUTH_OPTIONS]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Router }]; }, null); })();

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbResetPasswordComponent {
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
NbResetPasswordComponent.ɵfac = function NbResetPasswordComponent_Factory(t) { return new (t || NbResetPasswordComponent)(ɵngcc0.ɵɵdirectiveInject(NbAuthService), ɵngcc0.ɵɵdirectiveInject(NB_AUTH_OPTIONS), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
NbResetPasswordComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NbResetPasswordComponent, selectors: [["nb-reset-password-page"]], decls: 29, vars: 17, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["resetPassForm", "ngForm"], [1, "form-control-group"], ["for", "input-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-password", "name", "password", "placeholder", "New Password", "autofocus", "", "fullWidth", "", "fieldSize", "large", 1, "first", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], [4, "ngIf"], [1, "form-group"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "id", "input-re-password", "name", "rePass", "type", "password", "placeholder", "Confirm Password", "fullWidth", "", "fieldSize", "large", 1, "last", 3, "ngModel", "status", "required", "ngModelChange"], ["rePass", "ngModel"], ["nbButton", "", "status", "primary", "fullWidth", "", "size", "large", 3, "disabled"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], ["routerLink", "../login", 1, "text-link"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function NbResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h1", 0);
        ɵngcc0.ɵɵtext(1, "Change password");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "p", 1);
        ɵngcc0.ɵɵtext(3, "Please set a new password");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NbResetPasswordComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
        ɵngcc0.ɵɵtemplate(5, NbResetPasswordComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
        ɵngcc0.ɵɵelementStart(6, "form", 4, 5);
        ɵngcc0.ɵɵlistener("ngSubmit", function NbResetPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.resetPass(); });
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵelementStart(9, "label", 7);
        ɵngcc0.ɵɵtext(10, "New Password:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "input", 8, 9);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbResetPasswordComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.password = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, NbResetPasswordComponent_ng_container_13_Template, 3, 2, "ng-container", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 11);
        ɵngcc0.ɵɵelementStart(15, "label", 12);
        ɵngcc0.ɵɵtext(16, "Confirm Password:");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "input", 13, 14);
        ɵngcc0.ɵɵlistener("ngModelChange", function NbResetPasswordComponent_Template_input_ngModelChange_17_listener($event) { return ctx.user.confirmPassword = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(19, NbResetPasswordComponent_ng_container_19_Template, 3, 2, "ng-container", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "button", 15);
        ɵngcc0.ɵɵtext(21, " Change password ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "section", 16);
        ɵngcc0.ɵɵelementStart(23, "p");
        ɵngcc0.ɵɵelementStart(24, "a", 17);
        ɵngcc0.ɵɵtext(25, "Back to Log In");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(26, "p");
        ɵngcc0.ɵɵelementStart(27, "a", 18);
        ɵngcc0.ɵɵtext(28, "Register");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(7);
        const _r3 = ɵngcc0.ɵɵreference(12);
        const _r5 = ɵngcc0.ɵɵreference(18);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.password)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r3.invalid && _r3.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r3.invalid && _r3.touched);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngModel", ctx.user.confirmPassword)("status", _r5.touched ? _r5.invalid || _r3.value != _r5.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));
        ɵngcc0.ɵɵattribute("aria-invalid", _r5.invalid && _r5.touched ? true : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", _r5.touched);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("btn-pulse", ctx.submitted);
        ɵngcc0.ɵɵproperty("disabled", ctx.submitted || !_r2.valid);
    } }, directives: [ɵngcc3.NgIf, ɵngcc5.ɵNgNoValidate, ɵngcc5.NgControlStatusGroup, ɵngcc5.NgForm, ɵngcc4.NbInputDirective, ɵngcc5.DefaultValueAccessor, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc5.RequiredValidator, ɵngcc5.MinLengthValidator, ɵngcc5.MaxLengthValidator, ɵngcc4.NbButtonComponent, ɵngcc2.RouterLinkWithHref, ɵngcc4.NbAlertComponent, ɵngcc3.NgForOf], styles: [_c1], changeDetection: 0 });
NbResetPasswordComponent.ctorParameters = () => [
    { type: NbAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] }] },
    { type: ChangeDetectorRef },
    { type: Router }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbResetPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'nb-reset-password-page',
                template: "<h1 id=\"title\" class=\"title\">Change password</h1>\n<p class=\"sub-title\">Please set a new password</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">New Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           class=\"first\"\n           placeholder=\"New Password\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contains\n        from {{getConfigValue('forms.validation.password.minLength')}}\n        to {{getConfigValue('forms.validation.password.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"label\" for=\"input-re-password\">Confirm Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           type=\"password\"\n           class=\"last\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.touched\n               ? (rePass.invalid || password.value != rePass.value ? 'danger' : 'success')\n               : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.invalid && rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          status=\"primary\"\n          fullWidth\n          size=\"large\"\n          [disabled]=\"submitted || !resetPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Change password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a class=\"text-link\" routerLink=\"../register\">Register</a></p>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .form-group:last-of-type{margin-bottom:3rem}\n"]
            }]
    }], function () { return [{ type: NbAuthService }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_AUTH_OPTIONS]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Router }]; }, null); })();

function nbStrategiesFactory(options, injector) {
    const strategies = [];
    options.strategies
        .forEach(([strategyClass, strategyOptions]) => {
        const strategy = injector.get(strategyClass);
        strategy.setOptions(strategyOptions);
        strategies.push(strategy);
    });
    return strategies;
}
function nbTokensFactory(strategies) {
    const tokens = [];
    strategies
        .forEach((strategy) => {
        tokens.push(strategy.getOption('token.class'));
    });
    return tokens;
}
function nbOptionsFactory(options) {
    return deepExtend(defaultAuthOptions, options);
}
function nbNoOpInterceptorFilter(req) {
    return true;
}
class NbAuthModule {
    static forRoot(nbAuthOptions) {
        return {
            ngModule: NbAuthModule,
            providers: [
                { provide: NB_AUTH_USER_OPTIONS, useValue: nbAuthOptions },
                { provide: NB_AUTH_OPTIONS, useFactory: nbOptionsFactory, deps: [NB_AUTH_USER_OPTIONS] },
                { provide: NB_AUTH_STRATEGIES, useFactory: nbStrategiesFactory, deps: [NB_AUTH_OPTIONS, Injector] },
                { provide: NB_AUTH_TOKENS, useFactory: nbTokensFactory, deps: [NB_AUTH_STRATEGIES] },
                { provide: NB_AUTH_FALLBACK_TOKEN, useValue: NbAuthSimpleToken },
                { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
                { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: nbNoOpInterceptorFilter },
                { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
                NbAuthTokenParceler,
                NbAuthService,
                NbTokenService,
                NbDummyAuthStrategy,
                NbPasswordAuthStrategy,
                NbOAuth2AuthStrategy,
            ],
        };
    }
}
NbAuthModule.ɵfac = function NbAuthModule_Factory(t) { return new (t || NbAuthModule)(); };
NbAuthModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NbAuthModule });
NbAuthModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            NbLayoutModule,
            NbCardModule,
            NbCheckboxModule,
            NbAlertModule,
            NbInputModule,
            NbButtonModule,
            RouterModule,
            FormsModule,
            NbIconModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAuthModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    NbLayoutModule,
                    NbCardModule,
                    NbCheckboxModule,
                    NbAlertModule,
                    NbInputModule,
                    NbButtonModule,
                    RouterModule,
                    FormsModule,
                    NbIconModule,
                ],
                declarations: [
                    NbAuthComponent,
                    NbAuthBlockComponent,
                    NbLoginComponent,
                    NbRegisterComponent,
                    NbRequestPasswordComponent,
                    NbResetPasswordComponent,
                    NbLogoutComponent,
                ],
                exports: [
                    NbAuthComponent,
                    NbAuthBlockComponent,
                    NbLoginComponent,
                    NbRegisterComponent,
                    NbRequestPasswordComponent,
                    NbResetPasswordComponent,
                    NbLogoutComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NbAuthModule, { declarations: function () { return [NbAuthComponent, NbAuthBlockComponent, NbLoginComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbLogoutComponent]; }, imports: function () { return [CommonModule,
        NbLayoutModule,
        NbCardModule,
        NbCheckboxModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        RouterModule,
        FormsModule,
        NbIconModule]; }, exports: function () { return [NbAuthComponent, NbAuthBlockComponent, NbLoginComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbLogoutComponent]; } }); })();

const routes = [
    {
        path: 'auth',
        component: NbAuthComponent,
        children: [
            {
                path: '',
                component: NbLoginComponent,
            },
            {
                path: 'login',
                component: NbLoginComponent,
            },
            {
                path: 'register',
                component: NbRegisterComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent,
            },
        ],
    },
];

class NbAuthJWTInterceptor {
    constructor(injector, filter$$1) {
        this.injector = injector;
        this.filter = filter$$1;
    }
    intercept(req, next) {
        // do not intercept request whose urls are filtered by the injected filter
        if (!this.filter(req)) {
            return this.authService.isAuthenticatedOrRefresh()
                .pipe(switchMap(authenticated => {
                if (authenticated) {
                    return this.authService.getToken().pipe(switchMap((token) => {
                        const JWT = `Bearer ${token.getValue()}`;
                        req = req.clone({
                            setHeaders: {
                                Authorization: JWT,
                            },
                        });
                        return next.handle(req);
                    }));
                }
                else {
                    // Request is sent to server without authentication so that the client code
                    // receives the 401/403 error and can act as desired ('session expired', redirect to login, aso)
                    return next.handle(req);
                }
            }));
        }
        else {
            return next.handle(req);
        }
    }
    get authService() {
        return this.injector.get(NbAuthService);
    }
}
NbAuthJWTInterceptor.ɵfac = function NbAuthJWTInterceptor_Factory(t) { return new (t || NbAuthJWTInterceptor)(ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(NB_AUTH_TOKEN_INTERCEPTOR_FILTER)); };
NbAuthJWTInterceptor.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbAuthJWTInterceptor, factory: NbAuthJWTInterceptor.ɵfac });
NbAuthJWTInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_TOKEN_INTERCEPTOR_FILTER,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAuthJWTInterceptor, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_AUTH_TOKEN_INTERCEPTOR_FILTER]
            }] }]; }, null); })();

class NbAuthSimpleInterceptor {
    constructor(injector, headerName = 'Authorization') {
        this.injector = injector;
        this.headerName = headerName;
    }
    intercept(req, next) {
        return this.authService.getToken()
            .pipe(switchMap((token) => {
            if (token && token.getValue()) {
                req = req.clone({
                    setHeaders: {
                        [this.headerName]: token.getValue(),
                    },
                });
            }
            return next.handle(req);
        }));
    }
    get authService() {
        return this.injector.get(NbAuthService);
    }
}
NbAuthSimpleInterceptor.ɵfac = function NbAuthSimpleInterceptor_Factory(t) { return new (t || NbAuthSimpleInterceptor)(ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(NB_AUTH_INTERCEPTOR_HEADER)); };
NbAuthSimpleInterceptor.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NbAuthSimpleInterceptor, factory: NbAuthSimpleInterceptor.ɵfac });
NbAuthSimpleInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: String, decorators: [{ type: Inject, args: [NB_AUTH_INTERCEPTOR_HEADER,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NbAuthSimpleInterceptor, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.Injector }, { type: String, decorators: [{
                type: Inject,
                args: [NB_AUTH_INTERCEPTOR_HEADER]
            }] }]; }, null); })();

class NbUser {
    constructor(id, email, password, rememberMe, terms, confirmPassword, fullName) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
        this.terms = terms;
        this.confirmPassword = confirmPassword;
        this.fullName = fullName;
    }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { defaultAuthOptions, NB_AUTH_OPTIONS, NB_AUTH_USER_OPTIONS, NB_AUTH_STRATEGIES, NB_AUTH_TOKENS, NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, nbStrategiesFactory, nbTokensFactory, nbOptionsFactory, nbNoOpInterceptorFilter, NbAuthModule, routes, NbAuthComponent, NbAuthBlockComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbAuthService, NbAuthResult, NbAuthJWTInterceptor, NbAuthSimpleInterceptor, NbAuthToken, NbAuthTokenNotFoundError, NbAuthIllegalTokenError, NbAuthEmptyTokenError, NbAuthIllegalJWTTokenError, nbAuthCreateToken, decodeJwtPayload, NbAuthSimpleToken, NbAuthJWTToken, NbAuthOAuth2Token, NbAuthOAuth2JWTToken, ɵ0, NbTokenStorage, NbTokenLocalStorage, NbTokenService, NB_AUTH_FALLBACK_TOKEN, NbAuthTokenParceler, NbAuthStrategy, NbAuthStrategyOptions, NbDummyAuthStrategy, NbDummyAuthStrategyOptions, dummyStrategyOptions, NbPasswordAuthStrategy, NbPasswordAuthStrategyOptions, passwordStrategyOptions, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbOAuth2GrantType, NbOAuth2ClientAuthMethod, NbOAuth2AuthStrategyOptions, auth2StrategyOptions, NbUser, deepExtend, getDeepFromObject, urlBase64Decode, b64decode, b64DecodeUnicode };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3VJQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztrQ0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3VJQUdFO0FBQ0Y7QUFDQTtBQUNBOzs7NkVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3dIQUdFO0FBQ0Y7QUFDQTtBQUNBOzs7d0VBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3FIQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7OztrQ0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzswQkFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzBJQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O2tDQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Z0pBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OzRHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5cUNBMEJFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OzswQkFTRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dWVBT0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OytGQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21pQkFRRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OytGQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7NkJBTUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OzJEQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MFhBUUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OzsrRkFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VaQVFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7K0ZBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzROQWtDRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzswSUFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7a0NBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzttSkFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7a0NBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5CX1dJTkRPVywgTmJBbGVydE1vZHVsZSwgTmJCdXR0b25Nb2R1bGUsIE5iQ2FyZE1vZHVsZSwgTmJDaGVja2JveE1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYklucHV0TW9kdWxlLCBOYkxheW91dE1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlbGF5LCBmaWx0ZXIsIG1hcCwgc2hhcmUsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmNvbnN0IHNvY2lhbExpbmtzID0gW107XG5jb25zdCBkZWZhdWx0QXV0aE9wdGlvbnMgPSB7XG4gICAgc3RyYXRlZ2llczogW10sXG4gICAgZm9ybXM6IHtcbiAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgIHJlZGlyZWN0RGVsYXk6IDUwMCxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiAnZW1haWwnLFxuICAgICAgICAgICAgcmVtZW1iZXJNZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc29jaWFsTGlua3M6IHNvY2lhbExpbmtzLCAvLyBzb2NpYWwgbGlua3MgYXQgdGhlIGJvdHRvbSBvZiBhIHBhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXI6IHtcbiAgICAgICAgICAgIHJlZGlyZWN0RGVsYXk6IDUwMCxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiAnZW1haWwnLFxuICAgICAgICAgICAgc2hvd01lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXJtczogdHJ1ZSxcbiAgICAgICAgICAgIHNvY2lhbExpbmtzOiBzb2NpYWxMaW5rcyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWVzdFBhc3N3b3JkOiB7XG4gICAgICAgICAgICByZWRpcmVjdERlbGF5OiA1MDAsXG4gICAgICAgICAgICBzdHJhdGVneTogJ2VtYWlsJyxcbiAgICAgICAgICAgIHNob3dNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc29jaWFsTGlua3M6IHNvY2lhbExpbmtzLFxuICAgICAgICB9LFxuICAgICAgICByZXNldFBhc3N3b3JkOiB7XG4gICAgICAgICAgICByZWRpcmVjdERlbGF5OiA1MDAsXG4gICAgICAgICAgICBzdHJhdGVneTogJ2VtYWlsJyxcbiAgICAgICAgICAgIHNob3dNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc29jaWFsTGlua3M6IHNvY2lhbExpbmtzLFxuICAgICAgICB9LFxuICAgICAgICBsb2dvdXQ6IHtcbiAgICAgICAgICAgIHJlZGlyZWN0RGVsYXk6IDUwMCxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiAnZW1haWwnLFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNCxcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDUwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVsbE5hbWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogNTAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuY29uc3QgTkJfQVVUSF9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdOZWJ1bGFyIEF1dGggT3B0aW9ucycpO1xuY29uc3QgTkJfQVVUSF9VU0VSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05lYnVsYXIgVXNlciBBdXRoIE9wdGlvbnMnKTtcbmNvbnN0IE5CX0FVVEhfU1RSQVRFR0lFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignTmVidWxhciBBdXRoIFN0cmF0ZWdpZXMnKTtcbmNvbnN0IE5CX0FVVEhfVE9LRU5TID0gbmV3IEluamVjdGlvblRva2VuKCdOZWJ1bGFyIEF1dGggVG9rZW5zJyk7XG5jb25zdCBOQl9BVVRIX0lOVEVSQ0VQVE9SX0hFQURFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTmVidWxhciBTaW1wbGUgSW50ZXJjZXB0b3IgSGVhZGVyJyk7XG5jb25zdCBOQl9BVVRIX1RPS0VOX0lOVEVSQ0VQVE9SX0ZJTFRFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTmVidWxhciBJbnRlcmNlcHRvciBGaWx0ZXInKTtcblxuLyoqXG4gKiBFeHRlbmRpbmcgb2JqZWN0IHRoYXQgZW50ZXJlZCBpbiBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBSZXR1cm5zIGV4dGVuZGVkIG9iamVjdCBvciBmYWxzZSBpZiBoYXZlIG5vIHRhcmdldCBvYmplY3Qgb3IgaW5jb3JyZWN0IHR5cGUuXG4gKlxuICogSWYgeW91IHdpc2ggdG8gY2xvbmUgc291cmNlIG9iamVjdCAod2l0aG91dCBtb2RpZnkgaXQpLCBqdXN0IHVzZSBlbXB0eSBuZXdcbiAqIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudCwgbGlrZSB0aGlzOlxuICogICBkZWVwRXh0ZW5kKHt9LCB5b3VyT2JqXzEsIFt5b3VyT2JqX05dKTtcbiAqL1xuY29uc3QgZGVlcEV4dGVuZCA9IGZ1bmN0aW9uICguLi5vYmplY3RzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGFyZ3VtZW50c1swXTtcbiAgICAvLyBjb252ZXJ0IGFyZ3VtZW50cyB0byBhcnJheSBhbmQgY3V0IG9mZiB0YXJnZXQgb2JqZWN0XG4gICAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGV0IHZhbCwgc3JjO1xuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIC8vIHNraXAgYXJndW1lbnQgaWYgaXQgaXMgYXJyYXkgb3IgaXNuJ3Qgb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgc3JjID0gdGFyZ2V0W2tleV07IC8vIHNvdXJjZSB2YWx1ZVxuICAgICAgICAgICAgdmFsID0gb2JqW2tleV07IC8vIG5ldyB2YWx1ZVxuICAgICAgICAgICAgLy8gcmVjdXJzaW9uIHByZXZlbnRpb25cbiAgICAgICAgICAgIGlmICh2YWwgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBpZiBuZXcgdmFsdWUgaXNuJ3Qgb2JqZWN0IHRoZW4ganVzdCBvdmVyd3JpdGUgYnkgbmV3IHZhbHVlXG4gICAgICAgICAgICAgICAgICogaW5zdGVhZCBvZiBleHRlbmRpbmcuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsICE9PSAnb2JqZWN0JyB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8ganVzdCBjbG9uZSBhcnJheXMgKGFuZCByZWN1cnNpdmUgY2xvbmUgb2JqZWN0cyBpbnNpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBDbG9uZUFycmF5KHZhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBjbG9uaW5nIGFuZCBvdmVyd3JpdGUgZm9yIHNwZWNpZmljIG9iamVjdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzU3BlY2lmaWNWYWx1ZSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBjbG9uZVNwZWNpZmljVmFsdWUodmFsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gb3ZlcndyaXRlIGJ5IG5ldyB2YWx1ZSBpZiBzb3VyY2UgaXNuJ3Qgb2JqZWN0IG9yIGFycmF5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3JjICE9PSAnb2JqZWN0JyB8fCBzcmMgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwRXh0ZW5kKHt9LCB2YWwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBzb3VyY2UgdmFsdWUgYW5kIG5ldyB2YWx1ZSBpcyBvYmplY3RzIGJvdGgsIGV4dGVuZGluZy4uLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwRXh0ZW5kKHNyYywgdmFsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuZnVuY3Rpb24gaXNTcGVjaWZpY1ZhbHVlKHZhbCkge1xuICAgIHJldHVybiAodmFsIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgICB8fCB2YWwgaW5zdGFuY2VvZiBSZWdFeHApID8gdHJ1ZSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gY2xvbmVTcGVjaWZpY1ZhbHVlKHZhbCkge1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWwuZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHZhbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nsb25lU3BlY2lmaWNWYWx1ZTogVW5leHBlY3RlZCBzaXR1YXRpb24nKTtcbiAgICB9XG59XG4vKipcbiAqIFJlY3Vyc2l2ZSBjbG9uaW5nIGFycmF5LlxuICovXG5mdW5jdGlvbiBkZWVwQ2xvbmVBcnJheShhcnIpIHtcbiAgICBjb25zdCBjbG9uZSA9IFtdO1xuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVbaW5kZXhdID0gZGVlcENsb25lQXJyYXkoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1NwZWNpZmljVmFsdWUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVtpbmRleF0gPSBjbG9uZVNwZWNpZmljVmFsdWUoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9uZVtpbmRleF0gPSBkZWVwRXh0ZW5kKHt9LCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb25lW2luZGV4XSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xvbmU7XG59XG4vLyBnZXREZWVwRnJvbU9iamVjdCh7cmVzdWx0OiB7ZGF0YTogMX19LCAncmVzdWx0LmRhdGEnLCAyKTsgLy8gcmV0dXJucyAxXG5mdW5jdGlvbiBnZXREZWVwRnJvbU9iamVjdChvYmplY3QgPSB7fSwgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgY29uc3Qga2V5cyA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICAvLyBjbG9uZSB0aGUgb2JqZWN0XG4gICAgbGV0IGxldmVsID0gZGVlcEV4dGVuZCh7fSwgb2JqZWN0IHx8IHt9KTtcbiAgICBrZXlzLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgaWYgKGxldmVsICYmIHR5cGVvZiBsZXZlbFtrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldmVsID0gbGV2ZWxba107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0eXBlb2YgbGV2ZWwgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogbGV2ZWw7XG59XG5mdW5jdGlvbiB1cmxCYXNlNjREZWNvZGUoc3RyKSB7XG4gICAgbGV0IG91dHB1dCA9IHN0ci5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgIHN3aXRjaCAob3V0cHV0Lmxlbmd0aCAlIDQpIHtcbiAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgIG91dHB1dCArPSAnPT0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICBvdXRwdXQgKz0gJz0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGJhc2U2NHVybCBzdHJpbmchJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGI2NERlY29kZVVuaWNvZGUob3V0cHV0KTtcbn1cbmZ1bmN0aW9uIGI2NGRlY29kZShzdHIpIHtcbiAgICBjb25zdCBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIHN0ciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoLz0rJC8sICcnKTtcbiAgICBpZiAoc3RyLmxlbmd0aCAlIDQgPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLmApO1xuICAgIH1cbiAgICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xuICAgIGxldCBiYyA9IDAsIGJzLCBidWZmZXIsIGlkeCA9IDA7IFxuICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxuICAgIGJ1ZmZlciA9IHN0ci5jaGFyQXQoaWR4KyspOyBcbiAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XG4gICAgfmJ1ZmZlciAmJiAoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyLFxuICAgICAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxuICAgICAgICBiYysrICUgNCkgPyBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiBicyA+PiAoLTIgKiBiYyAmIDYpKSA6IDApIHtcbiAgICAgICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXG4gICAgICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZyNUaGVfVW5pY29kZV9Qcm9ibGVtXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlKHN0cikge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGI2NGRlY29kZShzdHIpLCAoYykgPT4ge1xuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfSkuam9pbignJykpO1xufVxuXG5jbGFzcyBOYkF1dGhUb2tlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IG51bGw7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLk5BTUU7XG4gICAgfVxuICAgIGdldFBheWxvYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBheWxvYWQ7XG4gICAgfVxufVxuY2xhc3MgTmJBdXRoVG9rZW5Ob3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfVxufVxuY2xhc3MgTmJBdXRoSWxsZWdhbFRva2VuRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5jbGFzcyBOYkF1dGhFbXB0eVRva2VuRXJyb3IgZXh0ZW5kcyBOYkF1dGhJbGxlZ2FsVG9rZW5FcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5jbGFzcyBOYkF1dGhJbGxlZ2FsSldUVG9rZW5FcnJvciBleHRlbmRzIE5iQXV0aElsbGVnYWxUb2tlbkVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5iQXV0aENyZWF0ZVRva2VuKHRva2VuQ2xhc3MsIHRva2VuLCBvd25lclN0cmF0ZWd5TmFtZSwgY3JlYXRlZEF0KSB7XG4gICAgcmV0dXJuIG5ldyB0b2tlbkNsYXNzKHRva2VuLCBvd25lclN0cmF0ZWd5TmFtZSwgY3JlYXRlZEF0KTtcbn1cbmZ1bmN0aW9uIGRlY29kZUp3dFBheWxvYWQocGF5bG9hZCkge1xuICAgIGlmIChwYXlsb2FkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgTmJBdXRoRW1wdHlUb2tlbkVycm9yKCdDYW5ub3QgZXh0cmFjdCBmcm9tIGFuIGVtcHR5IHBheWxvYWQuJyk7XG4gICAgfVxuICAgIGNvbnN0IHBhcnRzID0gcGF5bG9hZC5zcGxpdCgnLicpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5iQXV0aElsbGVnYWxKV1RUb2tlbkVycm9yKGBUaGUgcGF5bG9hZCAke3BheWxvYWR9IGlzIG5vdCB2YWxpZCBKV1QgcGF5bG9hZCBhbmQgbXVzdCBjb25zaXN0IG9mIHRocmVlIHBhcnRzLmApO1xuICAgIH1cbiAgICBsZXQgZGVjb2RlZDtcbiAgICB0cnkge1xuICAgICAgICBkZWNvZGVkID0gdXJsQmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5iQXV0aElsbGVnYWxKV1RUb2tlbkVycm9yKGBUaGUgcGF5bG9hZCAke3BheWxvYWR9IGlzIG5vdCB2YWxpZCBKV1QgcGF5bG9hZCBhbmQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9XG4gICAgaWYgKCFkZWNvZGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBOYkF1dGhJbGxlZ2FsSldUVG9rZW5FcnJvcihgVGhlIHBheWxvYWQgJHtwYXlsb2FkfSBpcyBub3QgdmFsaWQgSldUIHBheWxvYWQgYW5kIGNhbm5vdCBiZSBkZWNvZGVkLmApO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVkKTtcbn1cbi8qKlxuICogV3JhcHBlciBmb3Igc2ltcGxlICh0ZXh0KSB0b2tlblxuICovXG5jbGFzcyBOYkF1dGhTaW1wbGVUb2tlbiBleHRlbmRzIE5iQXV0aFRva2VuIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2tlbiwgb3duZXJTdHJhdGVneU5hbWUsIGNyZWF0ZWRBdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMub3duZXJTdHJhdGVneU5hbWUgPSBvd25lclN0cmF0ZWd5TmFtZTtcbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSBjcmVhdGVkQXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnBhcnNlUGF5bG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmICghKGVyciBpbnN0YW5jZW9mIE5iQXV0aFRva2VuTm90Rm91bmRFcnJvcikpIHtcbiAgICAgICAgICAgICAgICAvLyB0b2tlbiBpcyBwcmVzZW50IGJ1dCBoYXMgZ290IGEgcHJvYmxlbSwgaW5jbHVkaW5nIGlsbGVnYWxcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSB0aGlzLnByZXBhcmVDcmVhdGVkQXQoY3JlYXRlZEF0KTtcbiAgICB9XG4gICAgcGFyc2VQYXlsb2FkKCkge1xuICAgICAgICB0aGlzLnBheWxvYWQgPSBudWxsO1xuICAgIH1cbiAgICBwcmVwYXJlQ3JlYXRlZEF0KGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUgPyBkYXRlIDogbmV3IERhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdG9rZW4ncyBjcmVhdGlvbiBkYXRlXG4gICAgICogQHJldHVybnMge0RhdGV9XG4gICAgICovXG4gICAgZ2V0Q3JlYXRlZEF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVkQXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRva2VuIHZhbHVlXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cbiAgICBnZXRPd25lclN0cmF0ZWd5TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXJTdHJhdGVneU5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElzIG5vbiBlbXB0eSBhbmQgdmFsaWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHZhbHVlIGFuZCBjb252ZXJ0IHRvIHN0cmluZywgaWYgdmFsdWUgaXMgbm90IHZhbGlkIHJldHVybiBlbXB0eSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnRva2VuID8gdGhpcy50b2tlbiA6ICcnO1xuICAgIH1cbn1cbk5iQXV0aFNpbXBsZVRva2VuLk5BTUUgPSAnbmI6YXV0aDpzaW1wbGU6dG9rZW4nO1xuLyoqXG4gKiBXcmFwcGVyIGZvciBKV1QgdG9rZW4gd2l0aCBhZGRpdGlvbmFsIG1ldGhvZHMuXG4gKi9cbmNsYXNzIE5iQXV0aEpXVFRva2VuIGV4dGVuZHMgTmJBdXRoU2ltcGxlVG9rZW4ge1xuICAgIC8qKlxuICAgICAqIGZvciBKV1QgdG9rZW4sIHRoZSBpYXQgKGlzc3VlZCBhdCkgZmllbGQgb2YgdGhlIHRva2VuIHBheWxvYWQgY29udGFpbnMgdGhlIGNyZWF0aW9uIERhdGVcbiAgICAgKi9cbiAgICBwcmVwYXJlQ3JlYXRlZEF0KGRhdGUpIHtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IHRoaXMuZ2V0UGF5bG9hZCgpO1xuICAgICAgICByZXR1cm4gZGVjb2RlZCAmJiBkZWNvZGVkLmlhdCA/IG5ldyBEYXRlKE51bWJlcihkZWNvZGVkLmlhdCkgKiAxMDAwKSA6IHN1cGVyLnByZXBhcmVDcmVhdGVkQXQoZGF0ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgcGF5bG9hZCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBhbnlcbiAgICAgKi9cbiAgICBwYXJzZVBheWxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy50b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE5iQXV0aFRva2VuTm90Rm91bmRFcnJvcignVG9rZW4gbm90IGZvdW5kLiAnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBheWxvYWQgPSBkZWNvZGVKd3RQYXlsb2FkKHRoaXMudG9rZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEByZXR1cm5zIERhdGVcbiAgICAgKi9cbiAgICBnZXRUb2tlbkV4cERhdGUoKSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLmdldFBheWxvYWQoKTtcbiAgICAgICAgaWYgKGRlY29kZWQgJiYgIWRlY29kZWQuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgICAgIGRhdGUuc2V0VVRDU2Vjb25kcyhkZWNvZGVkLmV4cCk7IC8vICdjYXVzZSBqd3QgdG9rZW4gYXJlIHNldCBpbiBzZWNvbmRzXG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJcyBkYXRhIGV4cGlyZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuaXNWYWxpZCgpICYmICghdGhpcy5nZXRUb2tlbkV4cERhdGUoKSB8fCBuZXcgRGF0ZSgpIDwgdGhpcy5nZXRUb2tlbkV4cERhdGUoKSk7XG4gICAgfVxufVxuTmJBdXRoSldUVG9rZW4uTkFNRSA9ICduYjphdXRoOmp3dDp0b2tlbic7XG5jb25zdCBwcmVwYXJlT0F1dGgyVG9rZW4gPSAoZGF0YSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuY29uc3QgybUwID0gcHJlcGFyZU9BdXRoMlRva2VuO1xuLyoqXG4gKiBXcmFwcGVyIGZvciBPQXV0aDIgdG9rZW4gd2hvc2UgYWNjZXNzX3Rva2VuIGlzIGEgSldUIFRva2VuXG4gKi9cbmNsYXNzIE5iQXV0aE9BdXRoMlRva2VuIGV4dGVuZHMgTmJBdXRoU2ltcGxlVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSwgb3duZXJTdHJhdGVneU5hbWUsIGNyZWF0ZWRBdCkge1xuICAgICAgICAvLyB3ZSBtYXkgZ2V0IGl0IGFzIHN0cmluZyB3aGVuIHJldHJpZXZpbmcgZnJvbSBhIHN0b3JhZ2VcbiAgICAgICAgc3VwZXIocHJlcGFyZU9BdXRoMlRva2VuKGRhdGEpLCBvd25lclN0cmF0ZWd5TmFtZSwgY3JlYXRlZEF0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdG9rZW4gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWZyZXNoIHRva2VuXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0UmVmcmVzaFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbi5yZWZyZXNoX3Rva2VuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiAgcHV0IHJlZnJlc2hUb2tlbiBpbiB0aGUgdG9rZW4gcGF5bG9hZFxuICAgICAgKiBAcGFyYW0gcmVmcmVzaFRva2VuXG4gICAgICovXG4gICAgc2V0UmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbikge1xuICAgICAgICB0aGlzLnRva2VuLnJlZnJlc2hfdG9rZW4gPSByZWZyZXNoVG9rZW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0b2tlbiBwYXlsb2FkXG4gICAgICogQHJldHVybnMgYW55XG4gICAgICovXG4gICAgcGFyc2VQYXlsb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMudG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBOYkF1dGhUb2tlbk5vdEZvdW5kRXJyb3IoJ1Rva2VuIG5vdCBmb3VuZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXModGhpcy50b2tlbikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5iQXV0aEVtcHR5VG9rZW5FcnJvcignQ2Fubm90IGV4dHJhY3QgcGF5bG9hZCBmcm9tIGFuIGVtcHR5IHRva2VuLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHRoaXMudG9rZW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRva2VuIHR5cGVcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbi50b2tlbl90eXBlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJcyBkYXRhIGV4cGlyZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuaXNWYWxpZCgpICYmICghdGhpcy5nZXRUb2tlbkV4cERhdGUoKSB8fCBuZXcgRGF0ZSgpIDwgdGhpcy5nZXRUb2tlbkV4cERhdGUoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHJldHVybnMgRGF0ZVxuICAgICAqL1xuICAgIGdldFRva2VuRXhwRGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRva2VuLmhhc093blByb3BlcnR5KCdleHBpcmVzX2luJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmNyZWF0ZWRBdC5nZXRUaW1lKCkgKyBOdW1iZXIodGhpcy50b2tlbi5leHBpcmVzX2luKSAqIDEwMDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHRvIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRva2VuKTtcbiAgICB9XG59XG5OYkF1dGhPQXV0aDJUb2tlbi5OQU1FID0gJ25iOmF1dGg6b2F1dGgyOnRva2VuJztcbi8qKlxuICogV3JhcHBlciBmb3IgT0F1dGgyIHRva2VuIGVtYmVkZGluZyBKV1QgdG9rZW5zXG4gKi9cbmNsYXNzIE5iQXV0aE9BdXRoMkpXVFRva2VuIGV4dGVuZHMgTmJBdXRoT0F1dGgyVG9rZW4ge1xuICAgIHBhcnNlUGF5bG9hZCgpIHtcbiAgICAgICAgc3VwZXIucGFyc2VQYXlsb2FkKCk7XG4gICAgICAgIHRoaXMucGFyc2VBY2Nlc3NUb2tlblBheWxvYWQoKTtcbiAgICB9XG4gICAgcGFyc2VBY2Nlc3NUb2tlblBheWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTmJBdXRoVG9rZW5Ob3RGb3VuZEVycm9yKCdhY2Nlc3NfdG9rZW4ga2V5IG5vdCBmb3VuZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuUGF5bG9hZCA9IGRlY29kZUp3dFBheWxvYWQoYWNjZXNzVG9rZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFjY2VzcyB0b2tlbiBwYXlsb2FkXG4gICAgICogQHJldHVybnMgYW55XG4gICAgICovXG4gICAgZ2V0QWNjZXNzVG9rZW5QYXlsb2FkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlblBheWxvYWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGZvciBPYXV0aDIgSldUIHRva2VuLCB0aGUgaWF0IChpc3N1ZWQgYXQpIGZpZWxkIG9mIHRoZSBhY2Nlc3NfdG9rZW4gcGF5bG9hZFxuICAgICAqL1xuICAgIHByZXBhcmVDcmVhdGVkQXQoZGF0ZSkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gdGhpcy5hY2Nlc3NUb2tlblBheWxvYWQ7XG4gICAgICAgIHJldHVybiBwYXlsb2FkICYmIHBheWxvYWQuaWF0ID8gbmV3IERhdGUoTnVtYmVyKHBheWxvYWQuaWF0KSAqIDEwMDApIDogc3VwZXIucHJlcGFyZUNyZWF0ZWRBdChkYXRlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSXMgdG9rZW4gdmFsaWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlblBheWxvYWQgJiYgc3VwZXIuaXNWYWxpZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGV4cGlyYXRpb24gZGF0ZSA6XG4gICAgICogLSBleHAgaWYgc2V0LFxuICAgICAqIC0gc3VwZXIuZ2V0RXhwRGF0ZSgpIG90aGVyd2lzZVxuICAgICAqIEByZXR1cm5zIERhdGVcbiAgICAgKi9cbiAgICBnZXRUb2tlbkV4cERhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjY2Vzc1Rva2VuUGF5bG9hZCAmJiB0aGlzLmFjY2Vzc1Rva2VuUGF5bG9hZC5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICAgICAgICAgIGRhdGUuc2V0VVRDU2Vjb25kcyh0aGlzLmFjY2Vzc1Rva2VuUGF5bG9hZC5leHApO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VG9rZW5FeHBEYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5OYkF1dGhPQXV0aDJKV1RUb2tlbi5OQU1FID0gJ25iOmF1dGg6b2F1dGgyOmp3dDp0b2tlbic7XG5cbmNvbnN0IE5CX0FVVEhfRkFMTEJBQ0tfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05lYnVsYXIgQXV0aCBPcHRpb25zJyk7XG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBwYXJjZWwgd2hpY2ggY291bGQgYmUgc3RvcmVkL3Jlc3RvcmVkXG4gKi9cbmNsYXNzIE5iQXV0aFRva2VuUGFyY2VsZXIge1xuICAgIGNvbnN0cnVjdG9yKGZhbGxiYWNrQ2xhc3MsIHRva2VuQ2xhc3Nlcykge1xuICAgICAgICB0aGlzLmZhbGxiYWNrQ2xhc3MgPSBmYWxsYmFja0NsYXNzO1xuICAgICAgICB0aGlzLnRva2VuQ2xhc3NlcyA9IHRva2VuQ2xhc3NlcztcbiAgICB9XG4gICAgd3JhcCh0b2tlbikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbmFtZTogdG9rZW4uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgb3duZXJTdHJhdGVneU5hbWU6IHRva2VuLmdldE93bmVyU3RyYXRlZ3lOYW1lKCksXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHRva2VuLmdldENyZWF0ZWRBdCgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHZhbHVlOiB0b2tlbi50b1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW53cmFwKHZhbHVlKSB7XG4gICAgICAgIGxldCB0b2tlbkNsYXNzID0gdGhpcy5mYWxsYmFja0NsYXNzO1xuICAgICAgICBsZXQgdG9rZW5WYWx1ZSA9ICcnO1xuICAgICAgICBsZXQgdG9rZW5Pd25lclN0cmF0ZWd5TmFtZSA9ICcnO1xuICAgICAgICBsZXQgdG9rZW5DcmVhdGVkQXQgPSBudWxsO1xuICAgICAgICBjb25zdCB0b2tlblBhY2sgPSB0aGlzLnBhcnNlVG9rZW5QYWNrKHZhbHVlKTtcbiAgICAgICAgaWYgKHRva2VuUGFjaykge1xuICAgICAgICAgICAgdG9rZW5DbGFzcyA9IHRoaXMuZ2V0Q2xhc3NCeU5hbWUodG9rZW5QYWNrLm5hbWUpIHx8IHRoaXMuZmFsbGJhY2tDbGFzcztcbiAgICAgICAgICAgIHRva2VuVmFsdWUgPSB0b2tlblBhY2sudmFsdWU7XG4gICAgICAgICAgICB0b2tlbk93bmVyU3RyYXRlZ3lOYW1lID0gdG9rZW5QYWNrLm93bmVyU3RyYXRlZ3lOYW1lO1xuICAgICAgICAgICAgdG9rZW5DcmVhdGVkQXQgPSBuZXcgRGF0ZShOdW1iZXIodG9rZW5QYWNrLmNyZWF0ZWRBdCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYkF1dGhDcmVhdGVUb2tlbih0b2tlbkNsYXNzLCB0b2tlblZhbHVlLCB0b2tlbk93bmVyU3RyYXRlZ3lOYW1lLCB0b2tlbkNyZWF0ZWRBdCk7XG4gICAgfVxuICAgIC8vIFRPRE86IHRoaXMgY291bGQgYmUgbW92ZWQgdG8gYSBzZXBhcmF0ZSB0b2tlbiByZWdpc3RyeVxuICAgIGdldENsYXNzQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5DbGFzc2VzLmZpbmQoKHRva2VuQ2xhc3MpID0+IHRva2VuQ2xhc3MuTkFNRSA9PT0gbmFtZSk7XG4gICAgfVxuICAgIHBhcnNlVG9rZW5QYWNrKHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5OYkF1dGhUb2tlblBhcmNlbGVyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH1cbl07XG5OYkF1dGhUb2tlblBhcmNlbGVyLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOQl9BVVRIX0ZBTExCQUNLX1RPS0VOLF0gfV0gfSxcbiAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOQl9BVVRIX1RPS0VOUyxdIH1dIH1cbl07XG5cbmNsYXNzIE5iVG9rZW5TdG9yYWdlIHtcbn1cbi8qKlxuICogU2VydmljZSB0aGF0IHVzZXMgYnJvd3NlciBsb2NhbFN0b3JhZ2UgYXMgYSBzdG9yYWdlLlxuICpcbiAqIFRoZSB0b2tlbiBzdG9yYWdlIGlzIHByb3ZpZGVkIGludG8gYXV0aCBtb2R1bGUgdGhlIGZvbGxvd2luZyB3YXk6XG4gKiBgYGB0c1xuICogeyBwcm92aWRlOiBOYlRva2VuU3RvcmFnZSwgdXNlQ2xhc3M6IE5iVG9rZW5Mb2NhbFN0b3JhZ2UgfSxcbiAqIGBgYFxuICpcbiAqIElmIHlvdSBuZWVkIHRvIGNoYW5nZSB0aGUgc3RvcmFnZSBiZWhhdmlvdXIgb3IgcHJvdmlkZSB5b3VyIG93biAtIGp1c3QgZXh0ZW5kIHlvdXIgY2xhc3MgZnJvbSBiYXNpYyBgTmJUb2tlblN0b3JhZ2VgXG4gKiBvciBgTmJUb2tlbkxvY2FsU3RvcmFnZWAgYW5kIHByb3ZpZGUgaW4geW91ciBgYXBwLm1vZHVsZWA6XG4gKiBgYGB0c1xuICogeyBwcm92aWRlOiBOYlRva2VuU3RvcmFnZSwgdXNlQ2xhc3M6IE5iVG9rZW5DdXN0b21TdG9yYWdlIH0sXG4gKiBgYGBcbiAqXG4gKi9cbmNsYXNzIE5iVG9rZW5Mb2NhbFN0b3JhZ2UgZXh0ZW5kcyBOYlRva2VuU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3IocGFyY2VsZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYXJjZWxlciA9IHBhcmNlbGVyO1xuICAgICAgICB0aGlzLmtleSA9ICdhdXRoX2FwcF90b2tlbic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgKiBAcmV0dXJucyB7TmJBdXRoVG9rZW59XG4gICAgICovXG4gICAgZ2V0KCkge1xuICAgICAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmNlbGVyLnVud3JhcChyYXcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRva2VuIHRvIGxvY2FsU3RvcmFnZVxuICAgICAqIEBwYXJhbSB7TmJBdXRoVG9rZW59IHRva2VuXG4gICAgICovXG4gICAgc2V0KHRva2VuKSB7XG4gICAgICAgIGNvbnN0IHJhdyA9IHRoaXMucGFyY2VsZXIud3JhcCh0b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCByYXcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXkpO1xuICAgIH1cbn1cbk5iVG9rZW5Mb2NhbFN0b3JhZ2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfVxuXTtcbk5iVG9rZW5Mb2NhbFN0b3JhZ2UuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBOYkF1dGhUb2tlblBhcmNlbGVyIH1cbl07XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGFsbG93cyB5b3UgdG8gbWFuYWdlIGF1dGhlbnRpY2F0aW9uIHRva2VuIC0gZ2V0LCBzZXQsIGNsZWFyIGFuZCBhbHNvIGxpc3RlbiB0byB0b2tlbiBjaGFuZ2VzIG92ZXIgdGltZS5cbiAqL1xuY2xhc3MgTmJUb2tlblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRva2VuU3RvcmFnZSkge1xuICAgICAgICB0aGlzLnRva2VuU3RvcmFnZSA9IHRva2VuU3RvcmFnZTtcbiAgICAgICAgdGhpcy50b2tlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICAgICAgICB0aGlzLnB1Ymxpc2hTdG9yZWRUb2tlbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdG9rZW4gd2hlbiBpdCBjaGFuZ2VzLlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iQXV0aFRva2VuPn1cbiAgICAgKi9cbiAgICB0b2tlbkNoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW4kXG4gICAgICAgICAgICAucGlwZShmaWx0ZXIodmFsdWUgPT4gISF2YWx1ZSksIHNoYXJlKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdG9rZW4gaW50byB0aGUgc3RvcmFnZS4gVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgTmJBdXRoU2VydmljZSBhdXRvbWF0aWNhbGx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOYkF1dGhUb2tlbn0gdG9rZW5cbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgICAqL1xuICAgIHNldCh0b2tlbikge1xuICAgICAgICB0aGlzLnRva2VuU3RvcmFnZS5zZXQodG9rZW4pO1xuICAgICAgICB0aGlzLnB1Ymxpc2hTdG9yZWRUb2tlbigpO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSBvZiBjdXJyZW50IHRva2VuXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8TmJBdXRoVG9rZW4+fVxuICAgICAqL1xuICAgIGdldCgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnRva2VuU3RvcmFnZS5nZXQoKTtcbiAgICAgICAgcmV0dXJuIG9mKHRva2VuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgdG9rZW4gYW5kIHB1Ymxpc2hlZCB0b2tlbiB2YWx1ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy50b2tlblN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wdWJsaXNoU3RvcmVkVG9rZW4oKTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH1cbiAgICBwdWJsaXNoU3RvcmVkVG9rZW4oKSB7XG4gICAgICAgIHRoaXMudG9rZW4kLm5leHQodGhpcy50b2tlblN0b3JhZ2UuZ2V0KCkpO1xuICAgIH1cbn1cbk5iVG9rZW5TZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH1cbl07XG5OYlRva2VuU2VydmljZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IE5iVG9rZW5TdG9yYWdlIH1cbl07XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQ29tbW9uIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UuXG4gKiBTaG91bGQgYmUgdXNlZCB0byBhcyBhbiBpbnRlcmxheWVyIGJldHdlZW4gVUkgQ29tcG9uZW50cyBhbmQgQXV0aCBTdHJhdGVneS5cbiAqL1xuY2xhc3MgTmJBdXRoU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IodG9rZW5TZXJ2aWNlLCBzdHJhdGVnaWVzKSB7XG4gICAgICAgIHRoaXMudG9rZW5TZXJ2aWNlID0gdG9rZW5TZXJ2aWNlO1xuICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBzdHJhdGVnaWVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgY3VycmVudCBhdXRoZW50aWNhdGVkIHRva2VuIHN0b3JlZFxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAgICovXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuU2VydmljZS5nZXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGF1dGggdG9rZW4gaXMgcHJlc2VudCBpbiB0aGUgdG9rZW4gc3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGJvb2xlYW4+fVxuICAgICAqL1xuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oKVxuICAgICAgICAgICAgLnBpcGUobWFwKCh0b2tlbikgPT4gdG9rZW4uaXNWYWxpZCgpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB2YWxpZCBhdXRoIHRva2VuIGlzIHByZXNlbnQgaW4gdGhlIHRva2VuIHN0b3JhZ2UuXG4gICAgICogSWYgbm90LCBjYWxscyB0aGUgc3RyYXRlZ3kgcmVmcmVzaFRva2VuLCBhbmQgcmV0dXJucyBpc0F1dGhlbnRpY2F0ZWQoKSBpZiBzdWNjZXNzLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxib29sZWFuPn1cbiAgICAgKi9cbiAgICBpc0F1dGhlbnRpY2F0ZWRPclJlZnJlc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRva2VuKClcbiAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCh0b2tlbiA9PiB7XG4gICAgICAgICAgICBpZiAodG9rZW4uZ2V0VmFsdWUoKSAmJiAhdG9rZW4uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuKHRva2VuLmdldE93bmVyU3RyYXRlZ3lOYW1lKCksIHRva2VuKVxuICAgICAgICAgICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pc1N1Y2Nlc3MoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHRva2VuLmlzVmFsaWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0b2tlbnMgc3RyZWFtXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8TmJBdXRoU2ltcGxlVG9rZW4+fVxuICAgICAqL1xuICAgIG9uVG9rZW5DaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuU2VydmljZS50b2tlbkNoYW5nZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGF1dGhlbnRpY2F0aW9uIHN0YXR1cyBzdHJlYW1cbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxib29sZWFuPn1cbiAgICAgKi9cbiAgICBvbkF1dGhlbnRpY2F0aW9uQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vblRva2VuQ2hhbmdlKClcbiAgICAgICAgICAgIC5waXBlKG1hcCgodG9rZW4pID0+IHRva2VuLmlzVmFsaWQoKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdXRoZW50aWNhdGVzIHdpdGggdGhlIHNlbGVjdGVkIHN0cmF0ZWd5XG4gICAgICogU3RvcmVzIHJlY2VpdmVkIHRva2VuIGluIHRoZSB0b2tlbiBzdG9yYWdlXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqIGF1dGhlbnRpY2F0ZSgnZW1haWwnLCB7ZW1haWw6ICdlbWFpbEBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAndGVzdCd9KVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmF0ZWd5TmFtZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8TmJBdXRoUmVzdWx0Pn1cbiAgICAgKi9cbiAgICBhdXRoZW50aWNhdGUoc3RyYXRlZ3lOYW1lLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0cmF0ZWd5KHN0cmF0ZWd5TmFtZSkuYXV0aGVudGljYXRlKGRhdGEpXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdFRva2VuKHJlc3VsdCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIHdpdGggdGhlIHNlbGVjdGVkIHN0cmF0ZWd5XG4gICAgICogU3RvcmVzIHJlY2VpdmVkIHRva2VuIGluIHRoZSB0b2tlbiBzdG9yYWdlXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqIHJlZ2lzdGVyKCdlbWFpbCcsIHtlbWFpbDogJ2VtYWlsQGV4YW1wbGUuY29tJywgbmFtZTogJ1NvbWUgTmFtZScsIHBhc3N3b3JkOiAndGVzdCd9KVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmF0ZWd5TmFtZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8TmJBdXRoUmVzdWx0Pn1cbiAgICAgKi9cbiAgICByZWdpc3RlcihzdHJhdGVneU5hbWUsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyYXRlZ3koc3RyYXRlZ3lOYW1lKS5yZWdpc3RlcihkYXRhKVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSZXN1bHRUb2tlbihyZXN1bHQpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNpZ24gb3V0cyB3aXRoIHRoZSBzZWxlY3RlZCBzdHJhdGVneVxuICAgICAqIFJlbW92ZXMgdG9rZW4gZnJvbSB0aGUgdG9rZW4gc3RvcmFnZVxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiBsb2dvdXQoJ2VtYWlsJylcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJhdGVneU5hbWVcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+fVxuICAgICAqL1xuICAgIGxvZ291dChzdHJhdGVneU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyYXRlZ3koc3RyYXRlZ3lOYW1lKS5sb2dvdXQoKVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuU2VydmljZS5jbGVhcigpXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKG1hcCgoKSA9PiByZXN1bHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihyZXN1bHQpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGZvcmdvdCBwYXNzd29yZCByZXF1ZXN0IHRvIHRoZSBzZWxlY3RlZCBzdHJhdGVneVxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiByZXF1ZXN0UGFzc3dvcmQoJ2VtYWlsJywge2VtYWlsOiAnZW1haWxAZXhhbXBsZS5jb20nfSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJhdGVneU5hbWVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD59XG4gICAgICovXG4gICAgcmVxdWVzdFBhc3N3b3JkKHN0cmF0ZWd5TmFtZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJhdGVneShzdHJhdGVneU5hbWUpLnJlcXVlc3RQYXNzd29yZChkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJpZXMgdG8gcmVzZXQgcGFzc3dvcmQgd2l0aCB0aGUgc2VsZWN0ZWQgc3RyYXRlZ3lcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogcmVzZXRQYXNzd29yZCgnZW1haWwnLCB7bmV3UGFzc3dvcmQ6ICd0ZXN0J30pXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyYXRlZ3lOYW1lXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+fVxuICAgICAqL1xuICAgIHJlc2V0UGFzc3dvcmQoc3RyYXRlZ3lOYW1lLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0cmF0ZWd5KHN0cmF0ZWd5TmFtZSkucmVzZXRQYXNzd29yZChkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSByZWZyZXNoIHRva2VuIHJlcXVlc3RcbiAgICAgKiBTdG9yZXMgcmVjZWl2ZWQgdG9rZW4gaW4gdGhlIHRva2VuIHN0b3JhZ2VcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogcmVmcmVzaFRva2VuKCdlbWFpbCcsIHt0b2tlbjogdG9rZW59KVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmF0ZWd5TmFtZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8TmJBdXRoUmVzdWx0Pn1cbiAgICAgKi9cbiAgICByZWZyZXNoVG9rZW4oc3RyYXRlZ3lOYW1lLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0cmF0ZWd5KHN0cmF0ZWd5TmFtZSkucmVmcmVzaFRva2VuKGRhdGEpXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdFRva2VuKHJlc3VsdCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHJlZ2lzdGVyZWQgc3RyYXRlZ3kgYnkgbmFtZVxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiBnZXRTdHJhdGVneSgnZW1haWwnKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3ZpZGVyXG4gICAgICogQHJldHVybnMge05iQWJzdHJhY3RBdXRoUHJvdmlkZXJ9XG4gICAgICovXG4gICAgZ2V0U3RyYXRlZ3koc3RyYXRlZ3lOYW1lKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kID0gdGhpcy5zdHJhdGVnaWVzLmZpbmQoKHN0cmF0ZWd5KSA9PiBzdHJhdGVneS5nZXROYW1lKCkgPT09IHN0cmF0ZWd5TmFtZSk7XG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZXJlIGlzIG5vIEF1dGggU3RyYXRlZ3kgcmVnaXN0ZXJlZCB1bmRlciAnJHtzdHJhdGVneU5hbWV9JyBuYW1lYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbiAgICBwcm9jZXNzUmVzdWx0VG9rZW4ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzKCkgJiYgcmVzdWx0LmdldFRva2VuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2VuU2VydmljZS5zZXQocmVzdWx0LmdldFRva2VuKCkpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCk7XG4gICAgfVxufVxuTmJBdXRoU2VydmljZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9XG5dO1xuTmJBdXRoU2VydmljZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IE5iVG9rZW5TZXJ2aWNlIH0sXG4gICAgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW05CX0FVVEhfU1RSQVRFR0lFUyxdIH1dIH1cbl07XG5cbmNsYXNzIE5iQXV0aFN0cmF0ZWd5IHtcbiAgICAvLyB3ZSBzaG91bGQga2VlcCB0aGlzIGFueSBhbmQgdmFsaWRhdGlvbiBzaG91bGQgYmUgZG9uZSBpbiBgcmVnaXN0ZXJgIG1ldGhvZCBpbnN0ZWFkXG4gICAgLy8gb3RoZXJ3aXNlIGl0IHdvbid0IGJlIHBvc3NpYmxlIHRvIHBhc3MgYW4gZW1wdHkgb2JqZWN0XG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGRlZXBFeHRlbmQoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBnZXRPcHRpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBnZXREZWVwRnJvbU9iamVjdCh0aGlzLm9wdGlvbnMsIGtleSwgbnVsbCk7XG4gICAgfVxuICAgIGNyZWF0ZVRva2VuKHZhbHVlLCBmYWlsV2hlbkludmFsaWRUb2tlbikge1xuICAgICAgICBjb25zdCB0b2tlbiA9IG5iQXV0aENyZWF0ZVRva2VuKHRoaXMuZ2V0T3B0aW9uKCd0b2tlbi5jbGFzcycpLCB2YWx1ZSwgdGhpcy5nZXROYW1lKCkpO1xuICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBuYkF1dGhDcmVhdGVUb2tlbiBmYWlsZWQgd2l0aCBOYkF1dGhJbGxlZ2FsVG9rZW5FcnJvciB3aGljaCBNVVNUIGJlIGludGVyY2VwdGVkIGJ5IHN0cmF0ZWdpZXNcbiAgICAgICAgLy8gT3IgdG9rZW4gaXMgY3JlYXRlZC4gSXQgTUFZIGJlIGNyZWF0ZWQgZXZlbiBpZiBiYWNrZW5kIGRpZCBub3QgcmV0dXJuIGFueSB0b2tlbiwgaW4gdGhpcyBjYXNlIGl0IGlzICFWYWxpZFxuICAgICAgICBpZiAoZmFpbFdoZW5JbnZhbGlkVG9rZW4gJiYgIXRva2VuLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgcmVxdWlyZSBhIHZhbGlkIHRva2VuIChpLmUuIGlzVmFsaWQpLCB0aGVuIHdlIE1VU1QgdGhyb3cgTmJBdXRoSWxsZWdhbFRva2VuRXJyb3Igc28gdGhhdCB0aGUgc3RyYXRlZ2llc1xuICAgICAgICAgICAgLy8gaW50ZXJjZXB0IGl0XG4gICAgICAgICAgICB0aHJvdyBuZXcgTmJBdXRoSWxsZWdhbFRva2VuRXJyb3IoJ1Rva2VuIGlzIGVtcHR5IG9yIGludmFsaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb24oJ25hbWUnKTtcbiAgICB9XG4gICAgY3JlYXRlRmFpbFJlc3BvbnNlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UoeyBib2R5OiB7fSwgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVN1Y2Nlc3NSZXNwb25zZShkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHsgYm9keToge30sIHN0YXR1czogMjAwIH0pO1xuICAgIH1cbiAgICBnZXRBY3Rpb25FbmRwb2ludChhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgYWN0aW9uRW5kcG9pbnQgPSB0aGlzLmdldE9wdGlvbihgJHthY3Rpb259LmVuZHBvaW50YCk7XG4gICAgICAgIGNvbnN0IGJhc2VFbmRwb2ludCA9IHRoaXMuZ2V0T3B0aW9uKCdiYXNlRW5kcG9pbnQnKTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbkVuZHBvaW50ID8gYmFzZUVuZHBvaW50ICsgYWN0aW9uRW5kcG9pbnQgOiAnJztcbiAgICB9XG59XG5cbmNsYXNzIE5iQXV0aFJlc3VsdCB7XG4gICAgLy8gVE9ETzogYmV0dGVyIHBhc3Mgb2JqZWN0XG4gICAgY29uc3RydWN0b3Ioc3VjY2VzcywgcmVzcG9uc2UsIHJlZGlyZWN0LCBlcnJvcnMsIG1lc3NhZ2VzLCB0b2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gc3VjY2VzcztcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICB0aGlzLnJlZGlyZWN0ID0gcmVkaXJlY3Q7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5jb25jYXQoW2Vycm9yc10pO1xuICAgICAgICBpZiAoZXJyb3JzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzLmNvbmNhdChbbWVzc2FnZXNdKTtcbiAgICAgICAgaWYgKG1lc3NhZ2VzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuICAgIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcbiAgICB9XG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cbiAgICBnZXRSZWRpcmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3Q7XG4gICAgfVxuICAgIGdldEVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmZpbHRlcih2YWwgPT4gISF2YWwpO1xuICAgIH1cbiAgICBnZXRNZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXMuZmlsdGVyKHZhbCA9PiAhIXZhbCk7XG4gICAgfVxuICAgIGlzU3VjY2VzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VjY2VzcztcbiAgICB9XG4gICAgaXNGYWlsdXJlKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuc3VjY2VzcztcbiAgICB9XG59XG5cbmNsYXNzIE5iQXV0aFN0cmF0ZWd5T3B0aW9ucyB7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmNsYXNzIE5iRHVtbXlBdXRoU3RyYXRlZ3lPcHRpb25zIGV4dGVuZHMgTmJBdXRoU3RyYXRlZ3lPcHRpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHtcbiAgICAgICAgICAgIGNsYXNzOiBOYkF1dGhTaW1wbGVUb2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZWxheSA9IDEwMDA7XG4gICAgICAgIHRoaXMuYWx3YXlzRmFpbCA9IGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGR1bW15U3RyYXRlZ3lPcHRpb25zID0gbmV3IE5iRHVtbXlBdXRoU3RyYXRlZ3lPcHRpb25zKCk7XG5cbi8qKlxuICogRHVtbXkgYXV0aCBzdHJhdGVneS4gQ291bGQgYmUgdXNlZnVsIGZvciBhdXRoIHNldHVwIHdoZW4gYmFja2VuZCBpcyBub3QgYXZhaWxhYmxlIHlldC5cbiAqXG4gKlxuICogU3RyYXRlZ3kgc2V0dGluZ3MuXG4gKlxuICogYGBgdHNcbiAqIGV4cG9ydCBjbGFzcyBOYkR1bW15QXV0aFN0cmF0ZWd5T3B0aW9ucyBleHRlbmRzIE5iQXV0aFN0cmF0ZWd5T3B0aW9ucyB7XG4gKiAgIG5hbWUgPSAnZHVtbXknO1xuICogICB0b2tlbiA9IHtcbiAqICAgICBjbGFzczogTmJBdXRoU2ltcGxlVG9rZW4sXG4gKiAgIH07XG4gKiAgIGRlbGF5PyA9IDEwMDA7XG4gKiAgIGFsd2F5c0ZhaWw/ID0gZmFsc2U7XG4gKiB9XG4gKiBgYGBcbiAqL1xuY2xhc3MgTmJEdW1teUF1dGhTdHJhdGVneSBleHRlbmRzIE5iQXV0aFN0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGR1bW15U3RyYXRlZ3lPcHRpb25zO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0dXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gW05iRHVtbXlBdXRoU3RyYXRlZ3ksIG9wdGlvbnNdO1xuICAgIH1cbiAgICBhdXRoZW50aWNhdGUoZGF0YSkge1xuICAgICAgICByZXR1cm4gb2YodGhpcy5jcmVhdGVEdW1teVJlc3VsdChkYXRhKSlcbiAgICAgICAgICAgIC5waXBlKGRlbGF5KHRoaXMuZ2V0T3B0aW9uKCdkZWxheScpKSk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuY3JlYXRlRHVtbXlSZXN1bHQoZGF0YSkpXG4gICAgICAgICAgICAucGlwZShkZWxheSh0aGlzLmdldE9wdGlvbignZGVsYXknKSkpO1xuICAgIH1cbiAgICByZXF1ZXN0UGFzc3dvcmQoZGF0YSkge1xuICAgICAgICByZXR1cm4gb2YodGhpcy5jcmVhdGVEdW1teVJlc3VsdChkYXRhKSlcbiAgICAgICAgICAgIC5waXBlKGRlbGF5KHRoaXMuZ2V0T3B0aW9uKCdkZWxheScpKSk7XG4gICAgfVxuICAgIHJlc2V0UGFzc3dvcmQoZGF0YSkge1xuICAgICAgICByZXR1cm4gb2YodGhpcy5jcmVhdGVEdW1teVJlc3VsdChkYXRhKSlcbiAgICAgICAgICAgIC5waXBlKGRlbGF5KHRoaXMuZ2V0T3B0aW9uKCdkZWxheScpKSk7XG4gICAgfVxuICAgIGxvZ291dChkYXRhKSB7XG4gICAgICAgIHJldHVybiBvZih0aGlzLmNyZWF0ZUR1bW15UmVzdWx0KGRhdGEpKVxuICAgICAgICAgICAgLnBpcGUoZGVsYXkodGhpcy5nZXRPcHRpb24oJ2RlbGF5JykpKTtcbiAgICB9XG4gICAgcmVmcmVzaFRva2VuKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuY3JlYXRlRHVtbXlSZXN1bHQoZGF0YSkpXG4gICAgICAgICAgICAucGlwZShkZWxheSh0aGlzLmdldE9wdGlvbignZGVsYXknKSkpO1xuICAgIH1cbiAgICBjcmVhdGVEdW1teVJlc3VsdChkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmdldE9wdGlvbignYWx3YXlzRmFpbCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5iQXV0aFJlc3VsdChmYWxzZSwgdGhpcy5jcmVhdGVGYWlsUmVzcG9uc2UoZGF0YSksIG51bGwsIFsnU29tZXRoaW5nIHdlbnQgd3JvbmcuJ10pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oJ3Rlc3QgdG9rZW4nLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmJBdXRoUmVzdWx0KHRydWUsIHRoaXMuY3JlYXRlU3VjY2Vzc1Jlc3BvbnNlKGRhdGEpLCAnLycsIFtdLCBbJ1N1Y2Nlc3NmdWxseSBsb2dnZWQgaW4uJ10sIHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5iQXV0aFJlc3VsdChmYWxzZSwgdGhpcy5jcmVhdGVGYWlsUmVzcG9uc2UoZGF0YSksIG51bGwsIFtlcnIubWVzc2FnZV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuTmJEdW1teUF1dGhTdHJhdGVneS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9XG5dO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG52YXIgTmJPQXV0aDJSZXNwb25zZVR5cGU7XG4oZnVuY3Rpb24gKE5iT0F1dGgyUmVzcG9uc2VUeXBlKSB7XG4gICAgTmJPQXV0aDJSZXNwb25zZVR5cGVbXCJDT0RFXCJdID0gXCJjb2RlXCI7XG4gICAgTmJPQXV0aDJSZXNwb25zZVR5cGVbXCJUT0tFTlwiXSA9IFwidG9rZW5cIjtcbn0pKE5iT0F1dGgyUmVzcG9uc2VUeXBlIHx8IChOYk9BdXRoMlJlc3BvbnNlVHlwZSA9IHt9KSk7XG4vLyBUT0RPOiBjbGllbnRfY3JlZGVudGlhbHNcbnZhciBOYk9BdXRoMkdyYW50VHlwZTtcbihmdW5jdGlvbiAoTmJPQXV0aDJHcmFudFR5cGUpIHtcbiAgICBOYk9BdXRoMkdyYW50VHlwZVtcIkFVVEhPUklaQVRJT05fQ09ERVwiXSA9IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gICAgTmJPQXV0aDJHcmFudFR5cGVbXCJQQVNTV09SRFwiXSA9IFwicGFzc3dvcmRcIjtcbiAgICBOYk9BdXRoMkdyYW50VHlwZVtcIlJFRlJFU0hfVE9LRU5cIl0gPSBcInJlZnJlc2hfdG9rZW5cIjtcbn0pKE5iT0F1dGgyR3JhbnRUeXBlIHx8IChOYk9BdXRoMkdyYW50VHlwZSA9IHt9KSk7XG52YXIgTmJPQXV0aDJDbGllbnRBdXRoTWV0aG9kO1xuKGZ1bmN0aW9uIChOYk9BdXRoMkNsaWVudEF1dGhNZXRob2QpIHtcbiAgICBOYk9BdXRoMkNsaWVudEF1dGhNZXRob2RbXCJOT05FXCJdID0gXCJub25lXCI7XG4gICAgTmJPQXV0aDJDbGllbnRBdXRoTWV0aG9kW1wiQkFTSUNcIl0gPSBcImJhc2ljXCI7XG4gICAgTmJPQXV0aDJDbGllbnRBdXRoTWV0aG9kW1wiUkVRVUVTVF9CT0RZXCJdID0gXCJyZXF1ZXN0LWJvZHlcIjtcbn0pKE5iT0F1dGgyQ2xpZW50QXV0aE1ldGhvZCB8fCAoTmJPQXV0aDJDbGllbnRBdXRoTWV0aG9kID0ge30pKTtcbmNsYXNzIE5iT0F1dGgyQXV0aFN0cmF0ZWd5T3B0aW9ucyBleHRlbmRzIE5iQXV0aFN0cmF0ZWd5T3B0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuYmFzZUVuZHBvaW50ID0gJyc7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSAnJztcbiAgICAgICAgdGhpcy5jbGllbnRTZWNyZXQgPSAnJztcbiAgICAgICAgdGhpcy5jbGllbnRBdXRoTWV0aG9kID0gTmJPQXV0aDJDbGllbnRBdXRoTWV0aG9kLk5PTkU7XG4gICAgICAgIHRoaXMucmVkaXJlY3QgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiAnLycsXG4gICAgICAgICAgICBmYWlsdXJlOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlZmF1bHRFcnJvcnMgPSBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddO1xuICAgICAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZC4nXTtcbiAgICAgICAgdGhpcy5hdXRob3JpemUgPSB7XG4gICAgICAgICAgICBlbmRwb2ludDogJ2F1dGhvcml6ZScsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IE5iT0F1dGgyUmVzcG9uc2VUeXBlLkNPREUsXG4gICAgICAgICAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHtcbiAgICAgICAgICAgIGVuZHBvaW50OiAndG9rZW4nLFxuICAgICAgICAgICAgZ3JhbnRUeXBlOiBOYk9BdXRoMkdyYW50VHlwZS5BVVRIT1JJWkFUSU9OX0NPREUsXG4gICAgICAgICAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAgICAgICAgICAgIGNsYXNzOiBOYkF1dGhPQXV0aDJUb2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWZyZXNoID0ge1xuICAgICAgICAgICAgZW5kcG9pbnQ6ICd0b2tlbicsXG4gICAgICAgICAgICBncmFudFR5cGU6IE5iT0F1dGgyR3JhbnRUeXBlLlJFRlJFU0hfVE9LRU4sXG4gICAgICAgICAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5jb25zdCBhdXRoMlN0cmF0ZWd5T3B0aW9ucyA9IG5ldyBOYk9BdXRoMkF1dGhTdHJhdGVneU9wdGlvbnMoKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBPQXV0aDIgYXV0aGVudGljYXRpb24gc3RyYXRlZ3kuXG4gKlxuICogU3RyYXRlZ3kgc2V0dGluZ3M6XG4gKlxuICogYGBgdHNcbiAqIGV4cG9ydCBlbnVtIE5iT0F1dGgyUmVzcG9uc2VUeXBlIHtcbiAqICAgQ09ERSA9ICdjb2RlJyxcbiAqICAgVE9LRU4gPSAndG9rZW4nLFxuICogfVxuICpcbiAqIGV4cG9ydCBlbnVtIE5iT0F1dGgyR3JhbnRUeXBlIHtcbiAqICAgQVVUSE9SSVpBVElPTl9DT0RFID0gJ2F1dGhvcml6YXRpb25fY29kZScsXG4gKiAgIFBBU1NXT1JEID0gJ3Bhc3N3b3JkJyxcbiAqICAgUkVGUkVTSF9UT0tFTiA9ICdyZWZyZXNoX3Rva2VuJyxcbiAqIH1cbiAqXG4gKiBleHBvcnQgY2xhc3MgTmJPQXV0aDJBdXRoU3RyYXRlZ3lPcHRpb25zIHtcbiAqICAgbmFtZTogc3RyaW5nO1xuICogICBiYXNlRW5kcG9pbnQ/OiBzdHJpbmcgPSAnJztcbiAqICAgY2xpZW50SWQ6IHN0cmluZyA9ICcnO1xuICogICBjbGllbnRTZWNyZXQ6IHN0cmluZyA9ICcnO1xuICogICBjbGllbnRBdXRoTWV0aG9kOiBzdHJpbmcgPSBOYk9BdXRoMkNsaWVudEF1dGhNZXRob2QuTk9ORTtcbiAqICAgcmVkaXJlY3Q/OiB7IHN1Y2Nlc3M/OiBzdHJpbmc7IGZhaWx1cmU/OiBzdHJpbmcgfSA9IHtcbiAqICAgICBzdWNjZXNzOiAnLycsXG4gKiAgICAgZmFpbHVyZTogbnVsbCxcbiAqICAgfTtcbiAqICAgZGVmYXVsdEVycm9ycz86IGFueVtdID0gWydTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi4nXTtcbiAqICAgZGVmYXVsdE1lc3NhZ2VzPzogYW55W10gPSBbJ1lvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQuJ107XG4gKiAgIGF1dGhvcml6ZT86IHtcbiAqICAgICBlbmRwb2ludD86IHN0cmluZztcbiAqICAgICByZWRpcmVjdFVyaT86IHN0cmluZztcbiAqICAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XG4gKiAgICAgcmVxdWlyZVZhbGlkVG9rZW46IHRydWUsXG4gKiAgICAgc2NvcGU/OiBzdHJpbmc7XG4gKiAgICAgc3RhdGU/OiBzdHJpbmc7XG4gKiAgICAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAqICAgfSA9IHtcbiAqICAgICBlbmRwb2ludDogJ2F1dGhvcml6ZScsXG4gKiAgICAgcmVzcG9uc2VUeXBlOiBOYk9BdXRoMlJlc3BvbnNlVHlwZS5DT0RFLFxuICogICB9O1xuICogICB0b2tlbj86IHtcbiAqICAgICBlbmRwb2ludD86IHN0cmluZztcbiAqICAgICBncmFudFR5cGU/OiBzdHJpbmc7XG4gKiAgICAgcmVxdWlyZVZhbGlkVG9rZW46IHRydWUsXG4gKiAgICAgcmVkaXJlY3RVcmk/OiBzdHJpbmc7XG4gKiAgICAgc2NvcGU/OiBzdHJpbmc7XG4gKiAgICAgY2xhc3M6IE5iQXV0aFRva2VuQ2xhc3MsXG4gKiAgIH0gPSB7XG4gKiAgICAgZW5kcG9pbnQ6ICd0b2tlbicsXG4gKiAgICAgZ3JhbnRUeXBlOiBOYk9BdXRoMkdyYW50VHlwZS5BVVRIT1JJWkFUSU9OX0NPREUsXG4gKiAgICAgY2xhc3M6IE5iQXV0aE9BdXRoMlRva2VuLFxuICogICB9O1xuICogICByZWZyZXNoPzoge1xuICogICAgIGVuZHBvaW50Pzogc3RyaW5nO1xuICogICAgIGdyYW50VHlwZT86IHN0cmluZztcbiAqICAgICBzY29wZT86IHN0cmluZztcbiAqICAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAqICAgfSA9IHtcbiAqICAgICBlbmRwb2ludDogJ3Rva2VuJyxcbiAqICAgICBncmFudFR5cGU6IE5iT0F1dGgyR3JhbnRUeXBlLlJFRlJFU0hfVE9LRU4sXG4gKiAgIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKi9cbmNsYXNzIE5iT0F1dGgyQXV0aFN0cmF0ZWd5IGV4dGVuZHMgTmJBdXRoU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKGh0dHAsIHJvdXRlLCB3aW5kb3cpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLndpbmRvdyA9IHdpbmRvdztcbiAgICAgICAgdGhpcy5yZWRpcmVjdFJlc3VsdEhhbmRsZXJzID0ge1xuICAgICAgICAgICAgW05iT0F1dGgyUmVzcG9uc2VUeXBlLkNPREVdOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXMpLnBpcGUoc3dpdGNoTWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VG9rZW4ocGFyYW1zLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihuZXcgTmJBdXRoUmVzdWx0KGZhbHNlLCBwYXJhbXMsIHRoaXMuZ2V0T3B0aW9uKCdyZWRpcmVjdC5mYWlsdXJlJyksIHRoaXMuZ2V0T3B0aW9uKCdkZWZhdWx0RXJyb3JzJyksIFtdKSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtOYk9BdXRoMlJlc3BvbnNlVHlwZS5UT0tFTl06ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSAnYXV0aG9yaXplJztcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1aXJlVmFsaWRUb2tlbiA9IHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ucmVxdWlyZVZhbGlkVG9rZW5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YodGhpcy5yb3V0ZS5zbmFwc2hvdC5mcmFnbWVudCkucGlwZShtYXAoZnJhZ21lbnQgPT4gdGhpcy5wYXJzZUhhc2hBc1F1ZXJ5UGFyYW1zKGZyYWdtZW50KSksIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyYW1zLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5iQXV0aFJlc3VsdCh0cnVlLCBwYXJhbXMsIHRoaXMuZ2V0T3B0aW9uKCdyZWRpcmVjdC5zdWNjZXNzJyksIFtdLCB0aGlzLmdldE9wdGlvbignZGVmYXVsdE1lc3NhZ2VzJyksIHRoaXMuY3JlYXRlVG9rZW4ocGFyYW1zLCByZXF1aXJlVmFsaWRUb2tlbikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmJBdXRoUmVzdWx0KGZhbHNlLCBwYXJhbXMsIHRoaXMuZ2V0T3B0aW9uKCdyZWRpcmVjdC5mYWlsdXJlJyksIHRoaXMuZ2V0T3B0aW9uKCdkZWZhdWx0RXJyb3JzJyksIFtdKTtcbiAgICAgICAgICAgICAgICB9KSwgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIE5iQXV0aElsbGVnYWxUb2tlbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBOYkF1dGhSZXN1bHQoZmFsc2UsIGVyciwgdGhpcy5nZXRPcHRpb24oJ3JlZGlyZWN0LmZhaWx1cmUnKSwgZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFJlc3VsdHMgPSB7XG4gICAgICAgICAgICBbTmJPQXV0aDJSZXNwb25zZVR5cGUuQ09ERV06ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YodGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcykucGlwZShtYXAoKHBhcmFtcykgPT4gISEocGFyYW1zICYmIChwYXJhbXMuY29kZSB8fCBwYXJhbXMuZXJyb3IpKSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtOYk9BdXRoMlJlc3BvbnNlVHlwZS5UT0tFTl06ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YodGhpcy5yb3V0ZS5zbmFwc2hvdC5mcmFnbWVudCkucGlwZShtYXAoZnJhZ21lbnQgPT4gdGhpcy5wYXJzZUhhc2hBc1F1ZXJ5UGFyYW1zKGZyYWdtZW50KSksIG1hcCgocGFyYW1zKSA9PiAhIShwYXJhbXMgJiYgKHBhcmFtcy5hY2Nlc3NfdG9rZW4gfHwgcGFyYW1zLmVycm9yKSkpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBhdXRoMlN0cmF0ZWd5T3B0aW9ucztcbiAgICB9XG4gICAgc3RhdGljIHNldHVwKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIFtOYk9BdXRoMkF1dGhTdHJhdGVneSwgb3B0aW9uc107XG4gICAgfVxuICAgIGdldCByZXNwb25zZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9wdGlvbignYXV0aG9yaXplLnJlc3BvbnNlVHlwZScpO1xuICAgIH1cbiAgICBnZXQgY2xpZW50QXV0aE1ldGhvZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3B0aW9uKCdjbGllbnRBdXRoTWV0aG9kJyk7XG4gICAgfVxuICAgIGF1dGhlbnRpY2F0ZShkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmdldE9wdGlvbigndG9rZW4uZ3JhbnRUeXBlJykgPT09IE5iT0F1dGgyR3JhbnRUeXBlLlBBU1NXT1JEKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXNzd29yZFRva2VuKGRhdGEuZW1haWwsIGRhdGEucGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSZWRpcmVjdFJlc3VsdCgpXG4gICAgICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhvcml6ZVJlZGlyZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihuZXcgTmJBdXRoUmVzdWx0KHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXV0aG9yaXphdGlvblJlc3VsdCgpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEF1dGhvcml6YXRpb25SZXN1bHQoKSB7XG4gICAgICAgIGNvbnN0IHJlZGlyZWN0UmVzdWx0SGFuZGxlciA9IHRoaXMucmVkaXJlY3RSZXN1bHRIYW5kbGVyc1t0aGlzLnJlc3BvbnNlVHlwZV07XG4gICAgICAgIGlmIChyZWRpcmVjdFJlc3VsdEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWRpcmVjdFJlc3VsdEhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3RoaXMucmVzcG9uc2VUeXBlfScgcmVzcG9uc2VUeXBlIGlzIG5vdCBzdXBwb3J0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgb25seSAndG9rZW4nIGFuZCAnY29kZScgYXJlIHN1cHBvcnRlZCBub3dgKTtcbiAgICB9XG4gICAgcmVmcmVzaFRva2VuKHRva2VuKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9ICdyZWZyZXNoJztcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRBY3Rpb25FbmRwb2ludChtb2R1bGUpO1xuICAgICAgICBjb25zdCByZXF1aXJlVmFsaWRUb2tlbiA9IHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ucmVxdWlyZVZhbGlkVG9rZW5gKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmJ1aWxkQXV0aEhlYWRlcigpIHx8IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgdGhpcy5idWlsZFJlZnJlc2hSZXF1ZXN0RGF0YSh0b2tlbiksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLnBpcGUobWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmJBdXRoUmVzdWx0KHRydWUsIHJlcywgdGhpcy5nZXRPcHRpb24oJ3JlZGlyZWN0LnN1Y2Nlc3MnKSwgW10sIHRoaXMuZ2V0T3B0aW9uKCdkZWZhdWx0TWVzc2FnZXMnKSwgdGhpcy5jcmVhdGVSZWZyZXNoZWRUb2tlbihyZXMsIHRva2VuLCByZXF1aXJlVmFsaWRUb2tlbikpO1xuICAgICAgICB9KSwgY2F0Y2hFcnJvcigocmVzKSA9PiB0aGlzLmhhbmRsZVJlc3BvbnNlRXJyb3IocmVzKSkpO1xuICAgIH1cbiAgICBwYXNzd29yZFRva2VuKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSAndG9rZW4nO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldEFjdGlvbkVuZHBvaW50KG1vZHVsZSk7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVWYWxpZFRva2VuID0gdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5yZXF1aXJlVmFsaWRUb2tlbmApO1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuYnVpbGRBdXRoSGVhZGVyKCkgfHwgbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCB0aGlzLmJ1aWxkUGFzc3dvcmRSZXF1ZXN0RGF0YSh1c2VybmFtZSwgcGFzc3dvcmQpLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5waXBlKG1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5iQXV0aFJlc3VsdCh0cnVlLCByZXMsIHRoaXMuZ2V0T3B0aW9uKCdyZWRpcmVjdC5zdWNjZXNzJyksIFtdLCB0aGlzLmdldE9wdGlvbignZGVmYXVsdE1lc3NhZ2VzJyksIHRoaXMuY3JlYXRlVG9rZW4ocmVzLCByZXF1aXJlVmFsaWRUb2tlbikpO1xuICAgICAgICB9KSwgY2F0Y2hFcnJvcigocmVzKSA9PiB0aGlzLmhhbmRsZVJlc3BvbnNlRXJyb3IocmVzKSkpO1xuICAgIH1cbiAgICBhdXRob3JpemVSZWRpcmVjdCgpIHtcbiAgICAgICAgdGhpcy53aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYnVpbGRSZWRpcmVjdFVybCgpO1xuICAgIH1cbiAgICBpc1JlZGlyZWN0UmVzdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRpcmVjdFJlc3VsdHNbdGhpcy5yZXNwb25zZVR5cGVdLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIHJlcXVlc3RUb2tlbihjb2RlKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9ICd0b2tlbic7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0QWN0aW9uRW5kcG9pbnQobW9kdWxlKTtcbiAgICAgICAgY29uc3QgcmVxdWlyZVZhbGlkVG9rZW4gPSB0aGlzLmdldE9wdGlvbihgJHttb2R1bGV9LnJlcXVpcmVWYWxpZFRva2VuYCk7XG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5idWlsZEF1dGhIZWFkZXIoKSB8fCBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHRoaXMuYnVpbGRDb2RlUmVxdWVzdERhdGEoY29kZSksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLnBpcGUobWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmJBdXRoUmVzdWx0KHRydWUsIHJlcywgdGhpcy5nZXRPcHRpb24oJ3JlZGlyZWN0LnN1Y2Nlc3MnKSwgW10sIHRoaXMuZ2V0T3B0aW9uKCdkZWZhdWx0TWVzc2FnZXMnKSwgdGhpcy5jcmVhdGVUb2tlbihyZXMsIHJlcXVpcmVWYWxpZFRva2VuKSk7XG4gICAgICAgIH0pLCBjYXRjaEVycm9yKChyZXMpID0+IHRoaXMuaGFuZGxlUmVzcG9uc2VFcnJvcihyZXMpKSk7XG4gICAgfVxuICAgIGJ1aWxkQ29kZVJlcXVlc3REYXRhKGNvZGUpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgZ3JhbnRfdHlwZTogdGhpcy5nZXRPcHRpb24oJ3Rva2VuLmdyYW50VHlwZScpLFxuICAgICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5nZXRPcHRpb24oJ3Rva2VuLnJlZGlyZWN0VXJpJyksXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuZ2V0T3B0aW9uKCdjbGllbnRJZCcpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy51cmxFbmNvZGVQYXJhbWV0ZXJzKHRoaXMuY2xlYW5QYXJhbXModGhpcy5hZGRDcmVkZW50aWFsc1RvUGFyYW1zKHBhcmFtcykpKTtcbiAgICB9XG4gICAgYnVpbGRSZWZyZXNoUmVxdWVzdERhdGEodG9rZW4pIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgZ3JhbnRfdHlwZTogdGhpcy5nZXRPcHRpb24oJ3JlZnJlc2guZ3JhbnRUeXBlJyksXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0b2tlbi5nZXRSZWZyZXNoVG9rZW4oKSxcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLmdldE9wdGlvbigncmVmcmVzaC5zY29wZScpLFxuICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmdldE9wdGlvbignY2xpZW50SWQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsRW5jb2RlUGFyYW1ldGVycyh0aGlzLmNsZWFuUGFyYW1zKHRoaXMuYWRkQ3JlZGVudGlhbHNUb1BhcmFtcyhwYXJhbXMpKSk7XG4gICAgfVxuICAgIGJ1aWxkUGFzc3dvcmRSZXF1ZXN0RGF0YSh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgZ3JhbnRfdHlwZTogdGhpcy5nZXRPcHRpb24oJ3Rva2VuLmdyYW50VHlwZScpLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuZ2V0T3B0aW9uKCd0b2tlbi5zY29wZScpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy51cmxFbmNvZGVQYXJhbWV0ZXJzKHRoaXMuY2xlYW5QYXJhbXModGhpcy5hZGRDcmVkZW50aWFsc1RvUGFyYW1zKHBhcmFtcykpKTtcbiAgICB9XG4gICAgYnVpbGRBdXRoSGVhZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jbGllbnRBdXRoTWV0aG9kID09PSBOYk9BdXRoMkNsaWVudEF1dGhNZXRob2QuQkFTSUMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldE9wdGlvbignY2xpZW50SWQnKSAmJiB0aGlzLmdldE9wdGlvbignY2xpZW50U2VjcmV0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIGJ0b2EodGhpcy5nZXRPcHRpb24oJ2NsaWVudElkJykgKyAnOicgKyB0aGlzLmdldE9wdGlvbignY2xpZW50U2VjcmV0JykpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ZvciBiYXNpYyBjbGllbnQgYXV0aGVudGljYXRpb24gbWV0aG9kLCBwbGVhc2UgcHJvdmlkZSBib3RoIGNsaWVudElkICYgY2xpZW50U2VjcmV0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFuUGFyYW1zKHBhcmFtcykge1xuICAgICAgICBPYmplY3QuZW50cmllcyhwYXJhbXMpXG4gICAgICAgICAgICAuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4gIXZhbCAmJiBkZWxldGUgcGFyYW1zW2tleV0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhZGRDcmVkZW50aWFsc1RvUGFyYW1zKHBhcmFtcykge1xuICAgICAgICBpZiAodGhpcy5jbGllbnRBdXRoTWV0aG9kID09PSBOYk9BdXRoMkNsaWVudEF1dGhNZXRob2QuUkVRVUVTVF9CT0RZKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRPcHRpb24oJ2NsaWVudElkJykgJiYgdGhpcy5nZXRPcHRpb24oJ2NsaWVudFNlY3JldCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKSwgeyBjbGllbnRfaWQ6IHRoaXMuZ2V0T3B0aW9uKCdjbGllbnRJZCcpLCBjbGllbnRfc2VjcmV0OiB0aGlzLmdldE9wdGlvbignY2xpZW50U2VjcmV0JykgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignRm9yIHJlcXVlc3QgYm9keSBjbGllbnQgYXV0aGVudGljYXRpb24gbWV0aG9kLCBwbGVhc2UgcHJvdmlkZSBib3RoIGNsaWVudElkICYgY2xpZW50U2VjcmV0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIGhhbmRsZVJlc3BvbnNlRXJyb3IocmVzKSB7XG4gICAgICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2gocmVzLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9ycyA9IHRoaXMuZ2V0T3B0aW9uKCdkZWZhdWx0RXJyb3JzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzIGluc3RhbmNlb2YgTmJBdXRoSWxsZWdhbFRva2VuRXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKCdTb21ldGhpbmcgd2VudCB3cm9uZy4nKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG9mKG5ldyBOYkF1dGhSZXN1bHQoZmFsc2UsIHJlcywgdGhpcy5nZXRPcHRpb24oJ3JlZGlyZWN0LmZhaWx1cmUnKSwgZXJyb3JzLCBbXSkpO1xuICAgIH1cbiAgICBidWlsZFJlZGlyZWN0VXJsKCkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VfdHlwZTogdGhpcy5nZXRPcHRpb24oJ2F1dGhvcml6ZS5yZXNwb25zZVR5cGUnKSwgY2xpZW50X2lkOiB0aGlzLmdldE9wdGlvbignY2xpZW50SWQnKSwgcmVkaXJlY3RfdXJpOiB0aGlzLmdldE9wdGlvbignYXV0aG9yaXplLnJlZGlyZWN0VXJpJyksIHNjb3BlOiB0aGlzLmdldE9wdGlvbignYXV0aG9yaXplLnNjb3BlJyksIHN0YXRlOiB0aGlzLmdldE9wdGlvbignYXV0aG9yaXplLnN0YXRlJykgfSwgdGhpcy5nZXRPcHRpb24oJ2F1dGhvcml6ZS5wYXJhbXMnKSk7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5nZXRBY3Rpb25FbmRwb2ludCgnYXV0aG9yaXplJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy51cmxFbmNvZGVQYXJhbWV0ZXJzKHRoaXMuY2xlYW5QYXJhbXMocGFyYW1zKSk7XG4gICAgICAgIHJldHVybiBgJHtlbmRwb2ludH0/JHtxdWVyeX1gO1xuICAgIH1cbiAgICBwYXJzZUhhc2hBc1F1ZXJ5UGFyYW1zKGhhc2gpIHtcbiAgICAgICAgcmV0dXJuIGhhc2ggPyBoYXNoLnNwbGl0KCcmJykucmVkdWNlKChhY2MsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwYXJ0LnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBhY2NbaXRlbVswXV0gPSBkZWNvZGVVUklDb21wb25lbnQoaXRlbVsxXSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSkgOiB7fTtcbiAgICB9XG4gICAgdXJsRW5jb2RlUGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykubWFwKChrKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba10pfWA7XG4gICAgICAgIH0pLmpvaW4oJyYnKTtcbiAgICB9XG4gICAgY3JlYXRlUmVmcmVzaGVkVG9rZW4ocmVzLCBleGlzdGluZ1Rva2VuLCByZXF1aXJlVmFsaWRUb2tlbikge1xuICAgICAgICBjb25zdCByZWZyZXNoZWRUb2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4ocmVzLCByZXF1aXJlVmFsaWRUb2tlbik7XG4gICAgICAgIGlmICghcmVmcmVzaGVkVG9rZW4uZ2V0UmVmcmVzaFRva2VuKCkgJiYgZXhpc3RpbmdUb2tlbi5nZXRSZWZyZXNoVG9rZW4oKSkge1xuICAgICAgICAgICAgcmVmcmVzaGVkVG9rZW4uc2V0UmVmcmVzaFRva2VuKGV4aXN0aW5nVG9rZW4uZ2V0UmVmcmVzaFRva2VuKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWZyZXNoZWRUb2tlbjtcbiAgICB9XG4gICAgcmVnaXN0ZXIoZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ByZWdpc3RlcmAgaXMgbm90IHN1cHBvcnRlZCBieSBgTmJPQXV0aDJBdXRoU3RyYXRlZ3lgLCB1c2UgYGF1dGhlbnRpY2F0ZWAuJyk7XG4gICAgfVxuICAgIHJlcXVlc3RQYXNzd29yZChkYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYHJlcXVlc3RQYXNzd29yZGAgaXMgbm90IHN1cHBvcnRlZCBieSBgTmJPQXV0aDJBdXRoU3RyYXRlZ3lgLCB1c2UgYGF1dGhlbnRpY2F0ZWAuJyk7XG4gICAgfVxuICAgIHJlc2V0UGFzc3dvcmQoZGF0YSA9IHt9KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYHJlc2V0UGFzc3dvcmRgIGlzIG5vdCBzdXBwb3J0ZWQgYnkgYE5iT0F1dGgyQXV0aFN0cmF0ZWd5YCwgdXNlIGBhdXRoZW50aWNhdGVgLicpO1xuICAgIH1cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiBvZihuZXcgTmJBdXRoUmVzdWx0KHRydWUpKTtcbiAgICB9XG59XG5OYk9BdXRoMkF1dGhTdHJhdGVneS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9XG5dO1xuTmJPQXV0aDJBdXRoU3RyYXRlZ3kuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBIdHRwQ2xpZW50IH0sXG4gICAgeyB0eXBlOiBBY3RpdmF0ZWRSb3V0ZSB9LFxuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOQl9XSU5ET1csXSB9XSB9XG5dO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5jbGFzcyBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5T3B0aW9ucyBleHRlbmRzIE5iQXV0aFN0cmF0ZWd5T3B0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuYmFzZUVuZHBvaW50ID0gJy9hcGkvYXV0aC8nO1xuICAgICAgICB0aGlzLmxvZ2luID0ge1xuICAgICAgICAgICAgYWx3YXlzRmFpbDogZmFsc2UsXG4gICAgICAgICAgICBlbmRwb2ludDogJ2xvZ2luJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgcmVxdWlyZVZhbGlkVG9rZW46IHRydWUsXG4gICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHRFcnJvcnM6IFsnTG9naW4vRW1haWwgY29tYmluYXRpb24gaXMgbm90IGNvcnJlY3QsIHBsZWFzZSB0cnkgYWdhaW4uJ10sXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZXM6IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluLiddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyID0ge1xuICAgICAgICAgICAgYWx3YXlzRmFpbDogZmFsc2UsXG4gICAgICAgICAgICBlbmRwb2ludDogJ3JlZ2lzdGVyJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgcmVxdWlyZVZhbGlkVG9rZW46IHRydWUsXG4gICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHRFcnJvcnM6IFsnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uJ10sXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZXM6IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZC4nXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UGFzcyA9IHtcbiAgICAgICAgICAgIGVuZHBvaW50OiAncmVxdWVzdC1wYXNzJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAnLycsXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1Jlc2V0IHBhc3N3b3JkIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsLiddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc2V0UGFzcyA9IHtcbiAgICAgICAgICAgIGVuZHBvaW50OiAncmVzZXQtcGFzcycsXG4gICAgICAgICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAnLycsXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldFBhc3N3b3JkVG9rZW5LZXk6ICdyZXNldF9wYXNzd29yZF90b2tlbicsXG4gICAgICAgICAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGNoYW5nZWQuJ10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubG9nb3V0ID0ge1xuICAgICAgICAgICAgYWx3YXlzRmFpbDogZmFsc2UsXG4gICAgICAgICAgICBlbmRwb2ludDogJ2xvZ291dCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAnLycsXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1lvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQuJ10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVmcmVzaFRva2VuID0ge1xuICAgICAgICAgICAgZW5kcG9pbnQ6ICdyZWZyZXNoLXRva2VuJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgcmVxdWlyZVZhbGlkVG9rZW46IHRydWUsXG4gICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1lvdXIgdG9rZW4gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHJlZnJlc2hlZC4nXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHtcbiAgICAgICAgICAgIGNsYXNzOiBOYkF1dGhTaW1wbGVUb2tlbixcbiAgICAgICAgICAgIGtleTogJ2RhdGEudG9rZW4nLFxuICAgICAgICAgICAgZ2V0dGVyOiAobW9kdWxlLCByZXMsIG9wdGlvbnMpID0+IGdldERlZXBGcm9tT2JqZWN0KHJlcy5ib2R5LCBvcHRpb25zLnRva2VuLmtleSksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge1xuICAgICAgICAgICAga2V5OiAnZGF0YS5lcnJvcnMnLFxuICAgICAgICAgICAgZ2V0dGVyOiAobW9kdWxlLCByZXMsIG9wdGlvbnMpID0+IGdldERlZXBGcm9tT2JqZWN0KHJlcy5lcnJvciwgb3B0aW9ucy5lcnJvcnMua2V5LCBvcHRpb25zW21vZHVsZV0uZGVmYXVsdEVycm9ycyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSB7XG4gICAgICAgICAgICBrZXk6ICdkYXRhLm1lc3NhZ2VzJyxcbiAgICAgICAgICAgIGdldHRlcjogKG1vZHVsZSwgcmVzLCBvcHRpb25zKSA9PiBnZXREZWVwRnJvbU9iamVjdChyZXMuYm9keSwgb3B0aW9ucy5tZXNzYWdlcy5rZXksIG9wdGlvbnNbbW9kdWxlXS5kZWZhdWx0TWVzc2FnZXMpLFxuICAgICAgICB9O1xuICAgIH1cbn1cbmNvbnN0IHBhc3N3b3JkU3RyYXRlZ3lPcHRpb25zID0gbmV3IE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3lPcHRpb25zKCk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhlIG1vc3QgY29tbW9uIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyIGZvciBlbWFpbC9wYXNzd29yZCBzdHJhdGVneS5cbiAqXG4gKiBTdHJhdGVneSBzZXR0aW5ncy4gTm90ZSwgdGhlcmUgaXMgbm8gbmVlZCB0byBjb3B5IG92ZXIgdGhlIHdob2xlIG9iamVjdCB0byBjaGFuZ2UgdGhlIHNldHRpbmdzIHlvdSBuZWVkLlxuICogQWxzbywgdGhpcy5nZXRPcHRpb24gY2FsbCB3b24ndCB3b3JrIG91dHNpZGUgb2YgdGhlIGRlZmF1bHQgb3B0aW9ucyBkZWNsYXJhdGlvblxuICogKHdoaWNoIGlzIGluc2lkZSBvZiB0aGUgYE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3lgIGNsYXNzKSwgc28geW91IGhhdmUgdG8gcmVwbGFjZSBpdCB3aXRoIGEgY3VzdG9tIGhlbHBlciBmdW5jdGlvblxuICogaWYgeW91IG5lZWQgaXQuXG4gKlxuICogYGBgdHNcbiAqZXhwb3J0IGNsYXNzIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3lPcHRpb25zIGV4dGVuZHMgTmJBdXRoU3RyYXRlZ3lPcHRpb25zIHtcbiAqICBuYW1lOiBzdHJpbmc7XG4gKiAgYmFzZUVuZHBvaW50PyA9ICcvYXBpL2F1dGgvJztcbiAqICBsb2dpbj86IGJvb2xlYW4gfCBOYlBhc3N3b3JkU3RyYXRlZ3lNb2R1bGUgPSB7XG4gKiAgICBhbHdheXNGYWlsOiBmYWxzZSxcbiAqICAgIGVuZHBvaW50OiAnbG9naW4nLFxuICogICAgbWV0aG9kOiAncG9zdCcsXG4gKiAgICByZXF1aXJlVmFsaWRUb2tlbjogdHJ1ZSxcbiAqICAgIHJlZGlyZWN0OiB7XG4gKiAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAqICAgICAgZmFpbHVyZTogbnVsbCxcbiAqICAgIH0sXG4gKiAgICBkZWZhdWx0RXJyb3JzOiBbJ0xvZ2luL0VtYWlsIGNvbWJpbmF0aW9uIGlzIG5vdCBjb3JyZWN0LCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICogICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1lvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbi4nXSxcbiAqICB9O1xuICogIHJlZ2lzdGVyPzogYm9vbGVhbiB8IE5iUGFzc3dvcmRTdHJhdGVneU1vZHVsZSA9IHtcbiAqICAgIGFsd2F5c0ZhaWw6IGZhbHNlLFxuICogICAgZW5kcG9pbnQ6ICdyZWdpc3RlcicsXG4gKiAgICBtZXRob2Q6ICdwb3N0JyxcbiAqICAgIHJlcXVpcmVWYWxpZFRva2VuOiB0cnVlLFxuICogICAgcmVkaXJlY3Q6IHtcbiAqICAgICAgc3VjY2VzczogJy8nLFxuICogICAgICBmYWlsdXJlOiBudWxsLFxuICogICAgfSxcbiAqICAgIGRlZmF1bHRFcnJvcnM6IFsnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uJ10sXG4gKiAgICBkZWZhdWx0TWVzc2FnZXM6IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZC4nXSxcbiAqICB9O1xuICogIHJlcXVlc3RQYXNzPzogYm9vbGVhbiB8IE5iUGFzc3dvcmRTdHJhdGVneU1vZHVsZSA9IHtcbiAqICAgIGVuZHBvaW50OiAncmVxdWVzdC1wYXNzJyxcbiAqICAgIG1ldGhvZDogJ3Bvc3QnLFxuICogICAgcmVkaXJlY3Q6IHtcbiAqICAgICAgc3VjY2VzczogJy8nLFxuICogICAgICBmYWlsdXJlOiBudWxsLFxuICogICAgfSxcbiAqICAgIGRlZmF1bHRFcnJvcnM6IFsnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uJ10sXG4gKiAgICBkZWZhdWx0TWVzc2FnZXM6IFsnUmVzZXQgcGFzc3dvcmQgaW5zdHJ1Y3Rpb25zIGhhdmUgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuJ10sXG4gKiAgfTtcbiAqICByZXNldFBhc3M/OiBib29sZWFuIHwgTmJQYXNzd29yZFN0cmF0ZWd5UmVzZXQgPSB7XG4gKiAgICBlbmRwb2ludDogJ3Jlc2V0LXBhc3MnLFxuICogICAgbWV0aG9kOiAncHV0JyxcbiAqICAgIHJlZGlyZWN0OiB7XG4gKiAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAqICAgICAgZmFpbHVyZTogbnVsbCxcbiAqICAgIH0sXG4gKiAgICByZXNldFBhc3N3b3JkVG9rZW5LZXk6ICdyZXNldF9wYXNzd29yZF90b2tlbicsXG4gKiAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICogICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGNoYW5nZWQuJ10sXG4gKiAgfTtcbiAqICBsb2dvdXQ/OiBib29sZWFuIHwgTmJQYXNzd29yZFN0cmF0ZWd5UmVzZXQgPSB7XG4gKiAgICBhbHdheXNGYWlsOiBmYWxzZSxcbiAqICAgIGVuZHBvaW50OiAnbG9nb3V0JyxcbiAqICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gKiAgICByZWRpcmVjdDoge1xuICogICAgICBzdWNjZXNzOiAnLycsXG4gKiAgICAgIGZhaWx1cmU6IG51bGwsXG4gKiAgICB9LFxuICogICAgZGVmYXVsdEVycm9yczogWydTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi4nXSxcbiAqICAgIGRlZmF1bHRNZXNzYWdlczogWydZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0LiddLFxuICogIH07XG4gKiAgcmVmcmVzaFRva2VuPzogYm9vbGVhbiB8IE5iUGFzc3dvcmRTdHJhdGVneU1vZHVsZSA9IHtcbiAqICAgIGVuZHBvaW50OiAncmVmcmVzaC10b2tlbicsXG4gKiAgICBtZXRob2Q6ICdwb3N0JyxcbiAqICAgIHJlcXVpcmVWYWxpZFRva2VuOiB0cnVlLFxuICogICAgcmVkaXJlY3Q6IHtcbiAqICAgICAgc3VjY2VzczogbnVsbCxcbiAqICAgICAgZmFpbHVyZTogbnVsbCxcbiAqICAgIH0sXG4gKiAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICogICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1lvdXIgdG9rZW4gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHJlZnJlc2hlZC4nXSxcbiAqICB9O1xuICogIHRva2VuPzogTmJQYXNzd29yZFN0cmF0ZWd5VG9rZW4gPSB7XG4gKiAgICBjbGFzczogTmJBdXRoU2ltcGxlVG9rZW4sXG4gKiAgICBrZXk6ICdkYXRhLnRva2VuJyxcbiAqICAgIGdldHRlcjogKG1vZHVsZTogc3RyaW5nLCByZXM6IEh0dHBSZXNwb25zZTxPYmplY3Q+LCBvcHRpb25zOiBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5T3B0aW9ucykgPT4gZ2V0RGVlcEZyb21PYmplY3QoXG4gKiAgICAgIHJlcy5ib2R5LFxuICogICAgICBvcHRpb25zLnRva2VuLmtleSxcbiAqICAgICksXG4gKiAgfTtcbiAqICBlcnJvcnM/OiBOYlBhc3N3b3JkU3RyYXRlZ3lNZXNzYWdlID0ge1xuICogICAga2V5OiAnZGF0YS5lcnJvcnMnLFxuICogICAgZ2V0dGVyOiAobW9kdWxlOiBzdHJpbmcsIHJlczogSHR0cEVycm9yUmVzcG9uc2UsIG9wdGlvbnM6IE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3lPcHRpb25zKSA9PiBnZXREZWVwRnJvbU9iamVjdChcbiAqICAgICAgcmVzLmVycm9yLFxuICogICAgICBvcHRpb25zLmVycm9ycy5rZXksXG4gKiAgICAgIG9wdGlvbnNbbW9kdWxlXS5kZWZhdWx0RXJyb3JzLFxuICogICAgKSxcbiAqICB9O1xuICogIG1lc3NhZ2VzPzogTmJQYXNzd29yZFN0cmF0ZWd5TWVzc2FnZSA9IHtcbiAqICAgIGtleTogJ2RhdGEubWVzc2FnZXMnLFxuICogICAgZ2V0dGVyOiAobW9kdWxlOiBzdHJpbmcsIHJlczogSHR0cFJlc3BvbnNlPE9iamVjdD4sIG9wdGlvbnM6IE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3lPcHRpb25zKSA9PiBnZXREZWVwRnJvbU9iamVjdChcbiAqICAgICAgcmVzLmJvZHksXG4gKiAgICAgIG9wdGlvbnMubWVzc2FnZXMua2V5LFxuICogICAgICBvcHRpb25zW21vZHVsZV0uZGVmYXVsdE1lc3NhZ2VzLFxuICogICAgKSxcbiAqICB9O1xuICogIHZhbGlkYXRpb24/OiB7XG4gKiAgICBwYXNzd29yZD86IHtcbiAqICAgICAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICogICAgICBtaW5MZW5ndGg/OiBudW1iZXIgfCBudWxsO1xuICogICAgICBtYXhMZW5ndGg/OiBudW1iZXIgfCBudWxsO1xuICogICAgICByZWdleHA/OiBzdHJpbmcgfCBudWxsO1xuICogICAgfTtcbiAqICAgIGVtYWlsPzoge1xuICogICAgICByZXF1aXJlZD86IGJvb2xlYW47XG4gKiAgICAgIHJlZ2V4cD86IHN0cmluZyB8IG51bGw7XG4gKiAgICB9O1xuICogICAgZnVsbE5hbWU/OiB7XG4gKiAgICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAqICAgICAgbWluTGVuZ3RoPzogbnVtYmVyIHwgbnVsbDtcbiAqICAgICAgbWF4TGVuZ3RoPzogbnVtYmVyIHwgbnVsbDtcbiAqICAgICAgcmVnZXhwPzogc3RyaW5nIHwgbnVsbDtcbiAqICAgIH07XG4gKiAgfTtcbiAqfVxuICogYGBgXG4gKi9cbmNsYXNzIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3kgZXh0ZW5kcyBOYkF1dGhTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3IoaHR0cCwgcm91dGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gcGFzc3dvcmRTdHJhdGVneU9wdGlvbnM7XG4gICAgfVxuICAgIHN0YXRpYyBzZXR1cChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBbTmJQYXNzd29yZEF1dGhTdHJhdGVneSwgb3B0aW9uc107XG4gICAgfVxuICAgIGF1dGhlbnRpY2F0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9ICdsb2dpbic7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ubWV0aG9kYCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0QWN0aW9uRW5kcG9pbnQobW9kdWxlKTtcbiAgICAgICAgY29uc3QgcmVxdWlyZVZhbGlkVG9rZW4gPSB0aGlzLmdldE9wdGlvbihgJHttb2R1bGV9LnJlcXVpcmVWYWxpZFRva2VuYCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgeyBib2R5OiBkYXRhLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAgICAgICAucGlwZShtYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0uYWx3YXlzRmFpbGApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5jcmVhdGVGYWlsUmVzcG9uc2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KSwgbWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmJBdXRoUmVzdWx0KHRydWUsIHJlcywgdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5yZWRpcmVjdC5zdWNjZXNzYCksIFtdLCB0aGlzLmdldE9wdGlvbignbWVzc2FnZXMuZ2V0dGVyJykobW9kdWxlLCByZXMsIHRoaXMub3B0aW9ucyksIHRoaXMuY3JlYXRlVG9rZW4odGhpcy5nZXRPcHRpb24oJ3Rva2VuLmdldHRlcicpKG1vZHVsZSwgcmVzLCB0aGlzLm9wdGlvbnMpLCByZXF1aXJlVmFsaWRUb2tlbikpO1xuICAgICAgICB9KSwgY2F0Y2hFcnJvcigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXNwb25zZUVycm9yKHJlcywgbW9kdWxlKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICByZWdpc3RlcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9ICdyZWdpc3Rlcic7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ubWV0aG9kYCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0QWN0aW9uRW5kcG9pbnQobW9kdWxlKTtcbiAgICAgICAgY29uc3QgcmVxdWlyZVZhbGlkVG9rZW4gPSB0aGlzLmdldE9wdGlvbihgJHttb2R1bGV9LnJlcXVpcmVWYWxpZFRva2VuYCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgeyBib2R5OiBkYXRhLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAgICAgICAucGlwZShtYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0uYWx3YXlzRmFpbGApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5jcmVhdGVGYWlsUmVzcG9uc2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KSwgbWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmJBdXRoUmVzdWx0KHRydWUsIHJlcywgdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5yZWRpcmVjdC5zdWNjZXNzYCksIFtdLCB0aGlzLmdldE9wdGlvbignbWVzc2FnZXMuZ2V0dGVyJykobW9kdWxlLCByZXMsIHRoaXMub3B0aW9ucyksIHRoaXMuY3JlYXRlVG9rZW4odGhpcy5nZXRPcHRpb24oJ3Rva2VuLmdldHRlcicpKCdsb2dpbicsIHJlcywgdGhpcy5vcHRpb25zKSwgcmVxdWlyZVZhbGlkVG9rZW4pKTtcbiAgICAgICAgfSksIGNhdGNoRXJyb3IoKHJlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2VFcnJvcihyZXMsIG1vZHVsZSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgcmVxdWVzdFBhc3N3b3JkKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gJ3JlcXVlc3RQYXNzJztcbiAgICAgICAgY29uc3QgbWV0aG9kID0gdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5tZXRob2RgKTtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRBY3Rpb25FbmRwb2ludChtb2R1bGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIHsgYm9keTogZGF0YSwgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgICAgICAgLnBpcGUobWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldE9wdGlvbihgJHttb2R1bGV9LmFsd2F5c0ZhaWxgKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHRoaXMuY3JlYXRlRmFpbFJlc3BvbnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KSwgbWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmJBdXRoUmVzdWx0KHRydWUsIHJlcywgdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5yZWRpcmVjdC5zdWNjZXNzYCksIFtdLCB0aGlzLmdldE9wdGlvbignbWVzc2FnZXMuZ2V0dGVyJykobW9kdWxlLCByZXMsIHRoaXMub3B0aW9ucykpO1xuICAgICAgICB9KSwgY2F0Y2hFcnJvcigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXNwb25zZUVycm9yKHJlcywgbW9kdWxlKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICByZXNldFBhc3N3b3JkKGRhdGEgPSB7fSkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSAncmVzZXRQYXNzJztcbiAgICAgICAgY29uc3QgbWV0aG9kID0gdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5tZXRob2RgKTtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRBY3Rpb25FbmRwb2ludChtb2R1bGUpO1xuICAgICAgICBjb25zdCB0b2tlbktleSA9IHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ucmVzZXRQYXNzd29yZFRva2VuS2V5YCk7XG4gICAgICAgIGRhdGFbdG9rZW5LZXldID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1t0b2tlbktleV07XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgeyBib2R5OiBkYXRhLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAgICAgICAucGlwZShtYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0uYWx3YXlzRmFpbGApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5jcmVhdGVGYWlsUmVzcG9uc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0pLCBtYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOYkF1dGhSZXN1bHQodHJ1ZSwgcmVzLCB0aGlzLmdldE9wdGlvbihgJHttb2R1bGV9LnJlZGlyZWN0LnN1Y2Nlc3NgKSwgW10sIHRoaXMuZ2V0T3B0aW9uKCdtZXNzYWdlcy5nZXR0ZXInKShtb2R1bGUsIHJlcywgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgIH0pLCBjYXRjaEVycm9yKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc3BvbnNlRXJyb3IocmVzLCBtb2R1bGUpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gJ2xvZ291dCc7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ubWV0aG9kYCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0QWN0aW9uRW5kcG9pbnQobW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIG9mKHt9KVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgICAgICAgfSksIG1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5hbHdheXNGYWlsYCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmNyZWF0ZUZhaWxSZXNwb25zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSksIG1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5iQXV0aFJlc3VsdCh0cnVlLCByZXMsIHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ucmVkaXJlY3Quc3VjY2Vzc2ApLCBbXSwgdGhpcy5nZXRPcHRpb24oJ21lc3NhZ2VzLmdldHRlcicpKG1vZHVsZSwgcmVzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgICAgfSksIGNhdGNoRXJyb3IoKHJlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2VFcnJvcihyZXMsIG1vZHVsZSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgcmVmcmVzaFRva2VuKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gJ3JlZnJlc2hUb2tlbic7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ubWV0aG9kYCk7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0QWN0aW9uRW5kcG9pbnQobW9kdWxlKTtcbiAgICAgICAgY29uc3QgcmVxdWlyZVZhbGlkVG9rZW4gPSB0aGlzLmdldE9wdGlvbihgJHttb2R1bGV9LnJlcXVpcmVWYWxpZFRva2VuYCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgeyBib2R5OiBkYXRhLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAgICAgICAucGlwZShtYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0uYWx3YXlzRmFpbGApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5jcmVhdGVGYWlsUmVzcG9uc2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KSwgbWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmJBdXRoUmVzdWx0KHRydWUsIHJlcywgdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5yZWRpcmVjdC5zdWNjZXNzYCksIFtdLCB0aGlzLmdldE9wdGlvbignbWVzc2FnZXMuZ2V0dGVyJykobW9kdWxlLCByZXMsIHRoaXMub3B0aW9ucyksIHRoaXMuY3JlYXRlVG9rZW4odGhpcy5nZXRPcHRpb24oJ3Rva2VuLmdldHRlcicpKG1vZHVsZSwgcmVzLCB0aGlzLm9wdGlvbnMpLCByZXF1aXJlVmFsaWRUb2tlbikpO1xuICAgICAgICB9KSwgY2F0Y2hFcnJvcigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXNwb25zZUVycm9yKHJlcywgbW9kdWxlKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBoYW5kbGVSZXNwb25zZUVycm9yKHJlcywgbW9kdWxlKSB7XG4gICAgICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICBlcnJvcnMgPSB0aGlzLmdldE9wdGlvbignZXJyb3JzLmdldHRlcicpKG1vZHVsZSwgcmVzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlcyBpbnN0YW5jZW9mIE5iQXV0aElsbGVnYWxUb2tlbkVycm9yKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChyZXMubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKG5ldyBOYkF1dGhSZXN1bHQoZmFsc2UsIHJlcywgdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5yZWRpcmVjdC5mYWlsdXJlYCksIGVycm9ycykpO1xuICAgIH1cbn1cbk5iUGFzc3dvcmRBdXRoU3RyYXRlZ3kuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfVxuXTtcbk5iUGFzc3dvcmRBdXRoU3RyYXRlZ3kuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBIdHRwQ2xpZW50IH0sXG4gICAgeyB0eXBlOiBBY3RpdmF0ZWRSb3V0ZSB9XG5dO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5jbGFzcyBOYkF1dGhDb21wb25lbnQge1xuICAgIC8vIHNob3djYXNlIG9mIGhvdyB0byB1c2UgdGhlIG9uQXV0aGVudGljYXRpb25DaGFuZ2UgbWV0aG9kXG4gICAgY29uc3RydWN0b3IoYXV0aCwgbG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9rZW4gPSAnJztcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBhdXRoLm9uQXV0aGVudGljYXRpb25DaGFuZ2UoKVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoYXV0aGVudGljYXRlZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gYXV0aGVudGljYXRlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cbn1cbk5iQXV0aENvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbmItYXV0aCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGBcbiAgICA8bmItbGF5b3V0PlxuICAgICAgPG5iLWxheW91dC1jb2x1bW4+XG4gICAgICAgIDxuYi1jYXJkPlxuICAgICAgICAgIDxuYi1jYXJkLWhlYWRlcj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cImJhY2soKVwiIGNsYXNzPVwibGluayBiYWNrLWxpbmtcIiBhcmlhLWxhYmVsPVwiQmFja1wiPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJhcnJvdy1iYWNrXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L25iLWNhcmQtaGVhZGVyPlxuICAgICAgICAgIDxuYi1jYXJkLWJvZHk+XG4gICAgICAgICAgICA8bmItYXV0aC1ibG9jaz5cbiAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgPC9uYi1hdXRoLWJsb2NrPlxuICAgICAgICAgIDwvbmItY2FyZC1ib2R5PlxuICAgICAgICA8L25iLWNhcmQ+XG4gICAgICA8L25iLWxheW91dC1jb2x1bW4+XG4gICAgPC9uYi1sYXlvdXQ+XG4gIGAsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBbXCIvKiFcXG4gKiBAbGljZW5zZVxcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxcbiAqLzpob3N0IG5iLWNhcmR7bWFyZ2luOjA7aGVpZ2h0OmNhbGMoMTAwdmggLSAyICogMi41cmVtKX06aG9zdCAubmF2aWdhdGlvbiAubGlua3tkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWRlY29yYXRpb246bm9uZX06aG9zdCAubmF2aWdhdGlvbiAubGluayBuYi1pY29ue2ZvbnQtc2l6ZToycmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdCAubGlua3MgbmItaWNvbntmb250LXNpemU6Mi41cmVtfTpob3N0IG5iLWNhcmQtYm9keXtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJX06aG9zdCBuYi1hdXRoLWJsb2Nre21hcmdpbjphdXRvfUBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCl7Omhvc3QgbmItY2FyZHtib3JkZXItcmFkaXVzOjA7aGVpZ2h0OjEwMHZofX06aG9zdCA6Om5nLWRlZXAgbmItbGF5b3V0IC5sYXlvdXQgLmxheW91dC1jb250YWluZXIgLmNvbnRlbnQgLmNvbHVtbnMgbmItbGF5b3V0LWNvbHVtbntwYWRkaW5nOjIuNXJlbX1AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpezpob3N0IDo6bmctZGVlcCBuYi1sYXlvdXQgLmxheW91dCAubGF5b3V0LWNvbnRhaW5lciAuY29udGVudCAuY29sdW1ucyBuYi1sYXlvdXQtY29sdW1ue3BhZGRpbmc6MH19XFxuXCJdXG4gICAgICAgICAgICB9LF0gfVxuXTtcbk5iQXV0aENvbXBvbmVudC5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IE5iQXV0aFNlcnZpY2UgfSxcbiAgICB7IHR5cGU6IExvY2F0aW9uIH1cbl07XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmNsYXNzIE5iQXV0aEJsb2NrQ29tcG9uZW50IHtcbn1cbk5iQXV0aEJsb2NrQ29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICduYi1hdXRoLWJsb2NrJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IFtcIjpob3N0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttYXgtd2lkdGg6MzVyZW19Omhvc3QgOjpuZy1kZWVwIGZvcm17d2lkdGg6MTAwJX06aG9zdCA6Om5nLWRlZXAgLmxhYmVse2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWJvdHRvbTowLjVyZW19Omhvc3QgOjpuZy1kZWVwIC5mb3Jnb3QtcGFzc3dvcmR7dGV4dC1kZWNvcmF0aW9uOm5vbmU7bWFyZ2luLWJvdHRvbTowLjVyZW19Omhvc3QgOjpuZy1kZWVwIC5jYXB0aW9ue21hcmdpbi10b3A6MC41cmVtfTpob3N0IDo6bmctZGVlcCAuYWxlcnR7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QgOjpuZy1kZWVwIC50aXRsZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowLjc1cmVtO3RleHQtYWxpZ246Y2VudGVyfTpob3N0IDo6bmctZGVlcCAuc3ViLXRpdGxle21hcmdpbi1ib3R0b206MnJlbTt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdCA6Om5nLWRlZXAgLmZvcm0tY29udHJvbC1ncm91cHttYXJnaW4tYm90dG9tOjJyZW19Omhvc3QgOjpuZy1kZWVwIC5mb3JtLWNvbnRyb2wtZ3JvdXAuYWNjZXB0LWdyb3Vwe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW46MnJlbSAwfTpob3N0IDo6bmctZGVlcCAubGFiZWwtd2l0aC1saW5re2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn06aG9zdCA6Om5nLWRlZXAgLmxpbmtze3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi10b3A6MS43NXJlbX06aG9zdCA6Om5nLWRlZXAgLmxpbmtzIC5zb2NpYWxze21hcmdpbi10b3A6MS41cmVtfTpob3N0IDo6bmctZGVlcCAubGlua3MgLnNvY2lhbHMgYXttYXJnaW46MCAxcmVtO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdCA6Om5nLWRlZXAgLmxpbmtzIC5zb2NpYWxzIGEud2l0aC1pY29ue2ZvbnQtc2l6ZToycmVtfTpob3N0IDo6bmctZGVlcCAuYW5vdGhlci1hY3Rpb257bWFyZ2luLXRvcDoycmVtO3RleHQtYWxpZ246Y2VudGVyfTpob3N0IDo6bmctZGVlcCAuc2lnbi1pbi1vci11cHttYXJnaW4tdG9wOjJyZW07ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0IDo6bmctZGVlcCBuYi1hbGVydCAuYWxlcnQtdGl0bGUsOmhvc3QgOjpuZy1kZWVwIG5iLWFsZXJ0IC5hbGVydC1tZXNzYWdle21hcmdpbjowIDAgMC41cmVtfTpob3N0IDo6bmctZGVlcCBuYi1hbGVydCAuYWxlcnQtbWVzc2FnZS1saXN0e2xpc3Qtc3R5bGUtdHlwZTpub25lO3BhZGRpbmc6MDttYXJnaW46MH1cXG5cIl1cbiAgICAgICAgICAgIH0sXSB9XG5dO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5jbGFzcyBOYkxvZ2luQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlLCBvcHRpb25zID0ge30sIGNkLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jZCA9IGNkO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5yZWRpcmVjdERlbGF5ID0gMDtcbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9ICcnO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgICAgIHRoaXMudXNlciA9IHt9O1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNvY2lhbExpbmtzID0gW107XG4gICAgICAgIHRoaXMucmVtZW1iZXJNZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZGlyZWN0RGVsYXkgPSB0aGlzLmdldENvbmZpZ1ZhbHVlKCdmb3Jtcy5sb2dpbi5yZWRpcmVjdERlbGF5Jyk7XG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VzID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMubG9naW4uc2hvd01lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSB0aGlzLmdldENvbmZpZ1ZhbHVlKCdmb3Jtcy5sb2dpbi5zdHJhdGVneScpO1xuICAgICAgICB0aGlzLnNvY2lhbExpbmtzID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMubG9naW4uc29jaWFsTGlua3MnKTtcbiAgICAgICAgdGhpcy5yZW1lbWJlck1lID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMubG9naW4ucmVtZW1iZXJNZScpO1xuICAgIH1cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VydmljZS5hdXRoZW50aWNhdGUodGhpcy5zdHJhdGVneSwgdGhpcy51c2VyKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gcmVzdWx0LmdldE1lc3NhZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5nZXRFcnJvcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gcmVzdWx0LmdldFJlZGlyZWN0KCk7XG4gICAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucmVkaXJlY3REZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENvbmZpZ1ZhbHVlKGtleSkge1xuICAgICAgICByZXR1cm4gZ2V0RGVlcEZyb21PYmplY3QodGhpcy5vcHRpb25zLCBrZXksIG51bGwpO1xuICAgIH1cbn1cbk5iTG9naW5Db21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ25iLWxvZ2luJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8aDEgaWQ9XFxcInRpdGxlXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPkxvZ2luPC9oMT5cXG48cCBjbGFzcz1cXFwic3ViLXRpdGxlXFxcIj5IZWxsbyEgTG9nIGluIHdpdGggeW91ciBlbWFpbC48L3A+XFxuXFxuPG5iLWFsZXJ0ICpuZ0lmPVxcXCJzaG93TWVzc2FnZXMuZXJyb3IgJiYgZXJyb3JzPy5sZW5ndGggJiYgIXN1Ym1pdHRlZFxcXCIgb3V0bGluZT1cXFwiZGFuZ2VyXFxcIiByb2xlPVxcXCJhbGVydFxcXCI+XFxuICA8cCBjbGFzcz1cXFwiYWxlcnQtdGl0bGVcXFwiPjxiPk9oIHNuYXAhPC9iPjwvcD5cXG4gIDx1bCBjbGFzcz1cXFwiYWxlcnQtbWVzc2FnZS1saXN0XFxcIj5cXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IGVycm9yIG9mIGVycm9yc1xcXCIgY2xhc3M9XFxcImFsZXJ0LW1lc3NhZ2VcXFwiPnt7IGVycm9yIH19PC9saT5cXG4gIDwvdWw+XFxuPC9uYi1hbGVydD5cXG5cXG48bmItYWxlcnQgKm5nSWY9XFxcInNob3dNZXNzYWdlcy5zdWNjZXNzICYmIG1lc3NhZ2VzPy5sZW5ndGggJiYgIXN1Ym1pdHRlZFxcXCIgb3V0bGluZT1cXFwic3VjY2Vzc1xcXCIgcm9sZT1cXFwiYWxlcnRcXFwiPlxcbiAgPHAgY2xhc3M9XFxcImFsZXJ0LXRpdGxlXFxcIj48Yj5Ib29yYXkhPC9iPjwvcD5cXG4gIDx1bCBjbGFzcz1cXFwiYWxlcnQtbWVzc2FnZS1saXN0XFxcIj5cXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcXFwiIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlXFxcIj57eyBtZXNzYWdlIH19PC9saT5cXG4gIDwvdWw+XFxuPC9uYi1hbGVydD5cXG5cXG48Zm9ybSAobmdTdWJtaXQpPVxcXCJsb2dpbigpXFxcIiAjZm9ybT1cXFwibmdGb3JtXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInRpdGxlXFxcIj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tY29udHJvbC1ncm91cFxcXCI+XFxuICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiIGZvcj1cXFwiaW5wdXQtZW1haWxcXFwiPkVtYWlsIGFkZHJlc3M6PC9sYWJlbD5cXG4gICAgPGlucHV0IG5iSW5wdXRcXG4gICAgICAgICAgIGZ1bGxXaWR0aFxcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgICAgICAjZW1haWw9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICAgICBuYW1lPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgICAgIGlkPVxcXCJpbnB1dC1lbWFpbFxcXCJcXG4gICAgICAgICAgIHBhdHRlcm49XFxcIi4rQC4rXFxcXC4uK1xcXCJcXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbCBhZGRyZXNzXFxcIlxcbiAgICAgICAgICAgZmllbGRTaXplPVxcXCJsYXJnZVxcXCJcXG4gICAgICAgICAgIGF1dG9mb2N1c1xcbiAgICAgICAgICAgW3N0YXR1c109XFxcImVtYWlsLmRpcnR5ID8gKGVtYWlsLmludmFsaWQgID8gJ2RhbmdlcicgOiAnc3VjY2VzcycpIDogJ2Jhc2ljJ1xcXCJcXG4gICAgICAgICAgIFtyZXF1aXJlZF09XFxcImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLmVtYWlsLnJlcXVpcmVkJylcXFwiXFxuICAgICAgICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVxcXCJlbWFpbC5pbnZhbGlkICYmIGVtYWlsLnRvdWNoZWQgPyB0cnVlIDogbnVsbFxcXCI+XFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XFxcImVtYWlsLmludmFsaWQgJiYgZW1haWwudG91Y2hlZFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcImNhcHRpb24gc3RhdHVzLWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycz8ucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgRW1haWwgaXMgcmVxdWlyZWQhXFxuICAgICAgPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnM/LnBhdHRlcm5cXFwiPlxcbiAgICAgICAgRW1haWwgc2hvdWxkIGJlIHRoZSByZWFsIG9uZSFcXG4gICAgICA8L3A+XFxuICAgIDwvbmctY29udGFpbmVyPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtZ3JvdXBcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwibGFiZWwtd2l0aC1saW5rXFxcIj5cXG4gICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIiBmb3I9XFxcImlucHV0LXBhc3N3b3JkXFxcIj5QYXNzd29yZDo8L2xhYmVsPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJmb3Jnb3QtcGFzc3dvcmQgY2FwdGlvbi0yXFxcIiByb3V0ZXJMaW5rPVxcXCIuLi9yZXF1ZXN0LXBhc3N3b3JkXFxcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxcbiAgICA8L3NwYW4+XFxuICAgIDxpbnB1dCBuYklucHV0XFxuICAgICAgICAgICBmdWxsV2lkdGhcXG4gICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgbmFtZT1cXFwicGFzc3dvcmRcXFwiXFxuICAgICAgICAgICB0eXBlPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgIGlkPVxcXCJpbnB1dC1wYXNzd29yZFxcXCJcXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCJcXG4gICAgICAgICAgIGZpZWxkU2l6ZT1cXFwibGFyZ2VcXFwiXFxuICAgICAgICAgICBbc3RhdHVzXT1cXFwicGFzc3dvcmQuZGlydHkgPyAocGFzc3dvcmQuaW52YWxpZCAgPyAnZGFuZ2VyJyA6ICdzdWNjZXNzJykgOiAnYmFzaWMnXFxcIlxcbiAgICAgICAgICAgW3JlcXVpcmVkXT1cXFwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQucmVxdWlyZWQnKVxcXCJcXG4gICAgICAgICAgIFttaW5sZW5ndGhdPVxcXCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5taW5MZW5ndGgnKVxcXCJcXG4gICAgICAgICAgIFttYXhsZW5ndGhdPVxcXCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5tYXhMZW5ndGgnKVxcXCJcXG4gICAgICAgICAgIFthdHRyLmFyaWEtaW52YWxpZF09XFxcInBhc3N3b3JkLmludmFsaWQgJiYgcGFzc3dvcmQudG91Y2hlZCA/IHRydWUgOiBudWxsXFxcIj5cXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cXFwicGFzc3dvcmQuaW52YWxpZCAmJiBwYXNzd29yZC50b3VjaGVkIFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcImNhcHRpb24gc3RhdHVzLWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycz8ucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgUGFzc3dvcmQgaXMgcmVxdWlyZWQhXFxuICAgICAgPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZC5lcnJvcnM/Lm1pbmxlbmd0aCB8fCBwYXNzd29yZC5lcnJvcnM/Lm1heGxlbmd0aFxcXCI+XFxuICAgICAgICBQYXNzd29yZCBzaG91bGQgY29udGFpblxcbiAgICAgICAgZnJvbSB7eyBnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5taW5MZW5ndGgnKSB9fVxcbiAgICAgICAgdG8ge3sgZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWF4TGVuZ3RoJykgfX1cXG4gICAgICAgIGNoYXJhY3RlcnNcXG4gICAgICA8L3A+XFxuICAgIDwvbmctY29udGFpbmVyPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtZ3JvdXAgYWNjZXB0LWdyb3VwXFxcIj5cXG4gICAgPG5iLWNoZWNrYm94IG5hbWU9XFxcInJlbWVtYmVyTWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnJlbWVtYmVyTWVcXFwiICpuZ0lmPVxcXCJyZW1lbWJlck1lXFxcIj5SZW1lbWJlciBtZTwvbmItY2hlY2tib3g+XFxuICA8L2Rpdj5cXG5cXG4gIDxidXR0b24gbmJCdXR0b25cXG4gICAgICAgICAgZnVsbFdpZHRoXFxuICAgICAgICAgIHN0YXR1cz1cXFwicHJpbWFyeVxcXCJcXG4gICAgICAgICAgc2l6ZT1cXFwibGFyZ2VcXFwiXFxuICAgICAgICAgIFtkaXNhYmxlZF09XFxcInN1Ym1pdHRlZCB8fCAhZm9ybS52YWxpZFxcXCJcXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XFxcInN1Ym1pdHRlZFxcXCI+XFxuICAgIExvZyBJblxcbiAgPC9idXR0b24+XFxuPC9mb3JtPlxcblxcbjxzZWN0aW9uICpuZ0lmPVxcXCJzb2NpYWxMaW5rcyAmJiBzb2NpYWxMaW5rcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGlua3NcXFwiIGFyaWEtbGFiZWw9XFxcIlNvY2lhbCBzaWduIGluXFxcIj5cXG4gIG9yIGVudGVyIHdpdGg6XFxuICA8ZGl2IGNsYXNzPVxcXCJzb2NpYWxzXFxcIj5cXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XFxcImxldCBzb2NpYWxMaW5rIG9mIHNvY2lhbExpbmtzXFxcIj5cXG4gICAgICA8YSAqbmdJZj1cXFwic29jaWFsTGluay5saW5rXFxcIlxcbiAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwic29jaWFsTGluay5saW5rXFxcIlxcbiAgICAgICAgIFthdHRyLnRhcmdldF09XFxcInNvY2lhbExpbmsudGFyZ2V0XFxcIlxcbiAgICAgICAgIFthdHRyLmNsYXNzXT1cXFwic29jaWFsTGluay5pY29uXFxcIlxcbiAgICAgICAgIFtjbGFzcy53aXRoLWljb25dPVxcXCJzb2NpYWxMaW5rLmljb25cXFwiPlxcbiAgICAgICAgPG5iLWljb24gKm5nSWY9XFxcInNvY2lhbExpbmsuaWNvbjsgZWxzZSB0aXRsZVxcXCIgW2ljb25dPVxcXCJzb2NpYWxMaW5rLmljb25cXFwiPjwvbmItaWNvbj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGU+e3sgc29jaWFsTGluay50aXRsZSB9fTwvbmctdGVtcGxhdGU+XFxuICAgICAgPC9hPlxcbiAgICAgIDxhICpuZ0lmPVxcXCJzb2NpYWxMaW5rLnVybFxcXCJcXG4gICAgICAgICBbYXR0ci5ocmVmXT1cXFwic29jaWFsTGluay51cmxcXFwiXFxuICAgICAgICAgW2F0dHIudGFyZ2V0XT1cXFwic29jaWFsTGluay50YXJnZXRcXFwiXFxuICAgICAgICAgW2F0dHIuY2xhc3NdPVxcXCJzb2NpYWxMaW5rLmljb25cXFwiXFxuICAgICAgICAgW2NsYXNzLndpdGgtaWNvbl09XFxcInNvY2lhbExpbmsuaWNvblxcXCI+XFxuICAgICAgICA8bmItaWNvbiAqbmdJZj1cXFwic29jaWFsTGluay5pY29uOyBlbHNlIHRpdGxlXFxcIiBbaWNvbl09XFxcInNvY2lhbExpbmsuaWNvblxcXCI+PC9uYi1pY29uPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZT57eyBzb2NpYWxMaW5rLnRpdGxlIH19PC9uZy10ZW1wbGF0ZT5cXG4gICAgICA8L2E+XFxuICAgIDwvbmctY29udGFpbmVyPlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlxcblxcbjxzZWN0aW9uIGNsYXNzPVxcXCJhbm90aGVyLWFjdGlvblxcXCIgYXJpYS1sYWJlbD1cXFwiUmVnaXN0ZXJcXFwiPlxcbiAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBjbGFzcz1cXFwidGV4dC1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCIuLi9yZWdpc3RlclxcXCI+UmVnaXN0ZXI8L2E+XFxuPC9zZWN0aW9uPlxcblwiLFxuICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG4gICAgICAgICAgICB9LF0gfVxuXTtcbk5iTG9naW5Db21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBOYkF1dGhTZXJ2aWNlIH0sXG4gICAgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW05CX0FVVEhfT1BUSU9OUyxdIH1dIH0sXG4gICAgeyB0eXBlOiBDaGFuZ2VEZXRlY3RvclJlZiB9LFxuICAgIHsgdHlwZTogUm91dGVyIH1cbl07XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmNsYXNzIE5iUmVnaXN0ZXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2UsIG9wdGlvbnMgPSB7fSwgY2QsIHJvdXRlcikge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNkID0gY2Q7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLnJlZGlyZWN0RGVsYXkgPSAwO1xuICAgICAgICB0aGlzLnNob3dNZXNzYWdlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gJyc7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdGhpcy51c2VyID0ge307XG4gICAgICAgIHRoaXMuc29jaWFsTGlua3MgPSBbXTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdERlbGF5ID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMucmVnaXN0ZXIucmVkaXJlY3REZWxheScpO1xuICAgICAgICB0aGlzLnNob3dNZXNzYWdlcyA9IHRoaXMuZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnJlZ2lzdGVyLnNob3dNZXNzYWdlcycpO1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMucmVnaXN0ZXIuc3RyYXRlZ3knKTtcbiAgICAgICAgdGhpcy5zb2NpYWxMaW5rcyA9IHRoaXMuZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLmxvZ2luLnNvY2lhbExpbmtzJyk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXIodGhpcy5zdHJhdGVneSwgdGhpcy51c2VyKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gcmVzdWx0LmdldE1lc3NhZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5nZXRFcnJvcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gcmVzdWx0LmdldFJlZGlyZWN0KCk7XG4gICAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucmVkaXJlY3REZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENvbmZpZ1ZhbHVlKGtleSkge1xuICAgICAgICByZXR1cm4gZ2V0RGVlcEZyb21PYmplY3QodGhpcy5vcHRpb25zLCBrZXksIG51bGwpO1xuICAgIH1cbn1cbk5iUmVnaXN0ZXJDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ25iLXJlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8aDEgaWQ9XFxcInRpdGxlXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPlJlZ2lzdGVyPC9oMT5cXG5cXG48bmItYWxlcnQgKm5nSWY9XFxcInNob3dNZXNzYWdlcy5lcnJvciAmJiBlcnJvcnM/Lmxlbmd0aCAmJiAhc3VibWl0dGVkXFxcIiBvdXRsaW5lPVxcXCJkYW5nZXJcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIj5cXG4gIDxwIGNsYXNzPVxcXCJhbGVydC10aXRsZVxcXCI+PGI+T2ggc25hcCE8L2I+PC9wPlxcbiAgPHVsIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlLWxpc3RcXFwiPlxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgZXJyb3Igb2YgZXJyb3JzXFxcIiBjbGFzcz1cXFwiYWxlcnQtbWVzc2FnZVxcXCI+e3sgZXJyb3IgfX08L2xpPlxcbiAgPC91bD5cXG48L25iLWFsZXJ0PlxcblxcbjxuYi1hbGVydCAqbmdJZj1cXFwic2hvd01lc3NhZ2VzLnN1Y2Nlc3MgJiYgbWVzc2FnZXM/Lmxlbmd0aCAmJiAhc3VibWl0dGVkXFxcIiBvdXRsaW5lPVxcXCJzdWNjZXNzXFxcIiByb2xlPVxcXCJhbGVydFxcXCI+XFxuICA8cCBjbGFzcz1cXFwiYWxlcnQtdGl0bGVcXFwiPjxiPkhvb3JheSE8L2I+PC9wPlxcbiAgPHVsIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlLWxpc3RcXFwiPlxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1xcXCIgY2xhc3M9XFxcImFsZXJ0LW1lc3NhZ2VcXFwiPnt7IG1lc3NhZ2UgfX08L2xpPlxcbiAgPC91bD5cXG48L25iLWFsZXJ0Plxcblxcbjxmb3JtIChuZ1N1Ym1pdCk9XFxcInJlZ2lzdGVyKClcXFwiICNmb3JtPVxcXCJuZ0Zvcm1cXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwidGl0bGVcXFwiPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCIgZm9yPVxcXCJpbnB1dC1uYW1lXFxcIj5GdWxsIG5hbWU6PC9sYWJlbD5cXG4gICAgPGlucHV0IG5iSW5wdXRcXG4gICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLmZ1bGxOYW1lXFxcIlxcbiAgICAgICAgICAgI2Z1bGxOYW1lPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgaWQ9XFxcImlucHV0LW5hbWVcXFwiXFxuICAgICAgICAgICBuYW1lPVxcXCJmdWxsTmFtZVxcXCJcXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJGdWxsIG5hbWVcXFwiXFxuICAgICAgICAgICBhdXRvZm9jdXNcXG4gICAgICAgICAgIGZ1bGxXaWR0aFxcbiAgICAgICAgICAgZmllbGRTaXplPVxcXCJsYXJnZVxcXCJcXG4gICAgICAgICAgIFtzdGF0dXNdPVxcXCJmdWxsTmFtZS5kaXJ0eSA/IChmdWxsTmFtZS5pbnZhbGlkICA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnKSA6ICdiYXNpYydcXFwiXFxuICAgICAgICAgICBbcmVxdWlyZWRdPVxcXCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5mdWxsTmFtZS5yZXF1aXJlZCcpXFxcIlxcbiAgICAgICAgICAgW21pbmxlbmd0aF09XFxcImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLmZ1bGxOYW1lLm1pbkxlbmd0aCcpXFxcIlxcbiAgICAgICAgICAgW21heGxlbmd0aF09XFxcImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLmZ1bGxOYW1lLm1heExlbmd0aCcpXFxcIlxcbiAgICAgICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cXFwiZnVsbE5hbWUuaW52YWxpZCAmJiBmdWxsTmFtZS50b3VjaGVkID8gdHJ1ZSA6IG51bGxcXFwiPlxcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVxcXCJmdWxsTmFtZS5pbnZhbGlkICYmIGZ1bGxOYW1lLnRvdWNoZWRcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmdWxsTmFtZS5lcnJvcnM/LnJlcXVpcmVkXFxcIj5cXG4gICAgICAgIEZ1bGwgbmFtZSBpcyByZXF1aXJlZCFcXG4gICAgICA8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcImNhcHRpb24gc3RhdHVzLWRhbmdlclxcXCIgKm5nSWY9XFxcImZ1bGxOYW1lLmVycm9ycz8ubWlubGVuZ3RoIHx8IGZ1bGxOYW1lLmVycm9ycz8ubWF4bGVuZ3RoXFxcIj5cXG4gICAgICAgIEZ1bGwgbmFtZSBzaG91bGQgY29udGFpbnNcXG4gICAgICAgIGZyb20ge3tnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5mdWxsTmFtZS5taW5MZW5ndGgnKX19XFxuICAgICAgICB0byB7e2dldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLmZ1bGxOYW1lLm1heExlbmd0aCcpfX1cXG4gICAgICAgIGNoYXJhY3RlcnNcXG4gICAgICA8L3A+XFxuICAgIDwvbmctY29udGFpbmVyPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtZ3JvdXBcXFwiPlxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIiBmb3I9XFxcImlucHV0LWVtYWlsXFxcIj5FbWFpbCBhZGRyZXNzOjwvbGFiZWw+XFxuICAgIDxpbnB1dCBuYklucHV0XFxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCJcXG4gICAgICAgICAgICNlbWFpbD1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgICAgIGlkPVxcXCJpbnB1dC1lbWFpbFxcXCJcXG4gICAgICAgICAgIG5hbWU9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgICAgcGF0dGVybj1cXFwiLitALisuLitcXFwiXFxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW1haWwgYWRkcmVzc1xcXCJcXG4gICAgICAgICAgIGZ1bGxXaWR0aFxcbiAgICAgICAgICAgZmllbGRTaXplPVxcXCJsYXJnZVxcXCJcXG4gICAgICAgICAgIFtzdGF0dXNdPVxcXCJlbWFpbC5kaXJ0eSA/IChlbWFpbC5pbnZhbGlkICA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnKSA6ICdiYXNpYydcXFwiXFxuICAgICAgICAgICBbcmVxdWlyZWRdPVxcXCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5lbWFpbC5yZXF1aXJlZCcpXFxcIlxcbiAgICAgICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cXFwiZW1haWwuaW52YWxpZCAmJiBlbWFpbC50b3VjaGVkID8gdHJ1ZSA6IG51bGxcXFwiPlxcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVxcXCJlbWFpbC5pbnZhbGlkICYmIGVtYWlsLnRvdWNoZWRcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnM/LnJlcXVpcmVkXFxcIj5cXG4gICAgICAgIEVtYWlsIGlzIHJlcXVpcmVkIVxcbiAgICAgIDwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWwuZXJyb3JzPy5wYXR0ZXJuXFxcIj5cXG4gICAgICAgIEVtYWlsIHNob3VsZCBiZSB0aGUgcmVhbCBvbmUhXFxuICAgICAgPC9wPlxcbiAgICA8L25nLWNvbnRhaW5lcj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCIgZm9yPVxcXCJpbnB1dC1wYXNzd29yZFxcXCI+UGFzc3dvcmQ6PC9sYWJlbD5cXG4gICAgPGlucHV0IG5iSW5wdXRcXG4gICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgdHlwZT1cXFwicGFzc3dvcmRcXFwiXFxuICAgICAgICAgICBpZD1cXFwiaW5wdXQtcGFzc3dvcmRcXFwiXFxuICAgICAgICAgICBuYW1lPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCJcXG4gICAgICAgICAgIGZ1bGxXaWR0aFxcbiAgICAgICAgICAgZmllbGRTaXplPVxcXCJsYXJnZVxcXCJcXG4gICAgICAgICAgIFtzdGF0dXNdPVxcXCJwYXNzd29yZC5kaXJ0eSA/IChwYXNzd29yZC5pbnZhbGlkICA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnKSA6ICdiYXNpYydcXFwiXFxuICAgICAgICAgICBbcmVxdWlyZWRdPVxcXCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5yZXF1aXJlZCcpXFxcIlxcbiAgICAgICAgICAgW21pbmxlbmd0aF09XFxcImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLm1pbkxlbmd0aCcpXFxcIlxcbiAgICAgICAgICAgW21heGxlbmd0aF09XFxcImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLm1heExlbmd0aCcpXFxcIlxcbiAgICAgICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cXFwicGFzc3dvcmQuaW52YWxpZCAmJiBwYXNzd29yZC50b3VjaGVkID8gdHJ1ZSA6IG51bGxcXFwiPlxcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVxcXCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWRcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZC5lcnJvcnM/LnJlcXVpcmVkXFxcIj5cXG4gICAgICAgIFBhc3N3b3JkIGlzIHJlcXVpcmVkIVxcbiAgICAgIDwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmQuZXJyb3JzPy5taW5sZW5ndGggfHwgcGFzc3dvcmQuZXJyb3JzPy5tYXhsZW5ndGhcXFwiPlxcbiAgICAgICAgUGFzc3dvcmQgc2hvdWxkIGNvbnRhaW5cXG4gICAgICAgIGZyb20ge3sgZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWluTGVuZ3RoJykgfX1cXG4gICAgICAgIHRvIHt7IGdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLm1heExlbmd0aCcpIH19XFxuICAgICAgICBjaGFyYWN0ZXJzXFxuICAgICAgPC9wPlxcbiAgICA8L25nLWNvbnRhaW5lcj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCIgZm9yPVxcXCJpbnB1dC1yZS1wYXNzd29yZFxcXCI+UmVwZWF0IHBhc3N3b3JkOjwvbGFiZWw+XFxuICAgIDxpbnB1dCBuYklucHV0XFxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5jb25maXJtUGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAjcmVQYXNzPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgdHlwZT1cXFwicGFzc3dvcmRcXFwiXFxuICAgICAgICAgICBpZD1cXFwiaW5wdXQtcmUtcGFzc3dvcmRcXFwiXFxuICAgICAgICAgICBuYW1lPVxcXCJyZVBhc3NcXFwiXFxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ29uZmlybSBQYXNzd29yZFxcXCJcXG4gICAgICAgICAgIGZ1bGxXaWR0aFxcbiAgICAgICAgICAgZmllbGRTaXplPVxcXCJsYXJnZVxcXCJcXG4gICAgICAgICAgIFtzdGF0dXNdPVxcXCJyZVBhc3MuZGlydHkgPyAocmVQYXNzLmludmFsaWQgfHwgcGFzc3dvcmQudmFsdWUgIT0gcmVQYXNzLnZhbHVlICA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnKSA6ICdiYXNpYydcXFwiXFxuICAgICAgICAgICBbcmVxdWlyZWRdPVxcXCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5yZXF1aXJlZCcpXFxcIlxcbiAgICAgICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cXFwicmVQYXNzLmludmFsaWQgJiYgcmVQYXNzLnRvdWNoZWQgPyB0cnVlIDogbnVsbFxcXCI+XFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XFxcInJlUGFzcy5pbnZhbGlkICYmIHJlUGFzcy50b3VjaGVkXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicmVQYXNzLmVycm9ycz8ucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgUGFzc3dvcmQgY29uZmlybWF0aW9uIGlzIHJlcXVpcmVkIVxcbiAgICAgIDwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmQudmFsdWUgIT0gcmVQYXNzLnZhbHVlICYmICFyZVBhc3MuZXJyb3JzPy5yZXF1aXJlZFxcXCI+XFxuICAgICAgICBQYXNzd29yZCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlybSBwYXNzd29yZC5cXG4gICAgICA8L3A+XFxuICAgIDwvbmctY29udGFpbmVyPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtZ3JvdXAgYWNjZXB0LWdyb3VwXFxcIiAqbmdJZj1cXFwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnJlZ2lzdGVyLnRlcm1zJylcXFwiPlxcbiAgICA8bmItY2hlY2tib3ggbmFtZT1cXFwidGVybXNcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnRlcm1zXFxcIiBbcmVxdWlyZWRdPVxcXCJnZXRDb25maWdWYWx1ZSgnZm9ybXMucmVnaXN0ZXIudGVybXMnKVxcXCI+XFxuICAgICAgQWdyZWUgdG8gPGEgaHJlZj1cXFwiI1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzdHJvbmc+VGVybXMgJiBDb25kaXRpb25zPC9zdHJvbmc+PC9hPlxcbiAgICA8L25iLWNoZWNrYm94PlxcbiAgPC9kaXY+XFxuXFxuICA8YnV0dG9uIG5iQnV0dG9uXFxuICAgICAgICAgIGZ1bGxXaWR0aFxcbiAgICAgICAgICBzdGF0dXM9XFxcInByaW1hcnlcXFwiXFxuICAgICAgICAgIHNpemU9XFxcImxhcmdlXFxcIlxcbiAgICAgICAgICBbZGlzYWJsZWRdPVxcXCJzdWJtaXR0ZWQgfHwgIWZvcm0udmFsaWRcXFwiXFxuICAgICAgICAgIFtjbGFzcy5idG4tcHVsc2VdPVxcXCJzdWJtaXR0ZWRcXFwiPlxcbiAgICBSZWdpc3RlclxcbiAgPC9idXR0b24+XFxuPC9mb3JtPlxcblxcbjxzZWN0aW9uICpuZ0lmPVxcXCJzb2NpYWxMaW5rcyAmJiBzb2NpYWxMaW5rcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGlua3NcXFwiIGFyaWEtbGFiZWw9XFxcIlNvY2lhbCBzaWduIGluXFxcIj5cXG4gIG9yIGVudGVyIHdpdGg6XFxuICA8ZGl2IGNsYXNzPVxcXCJzb2NpYWxzXFxcIj5cXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XFxcImxldCBzb2NpYWxMaW5rIG9mIHNvY2lhbExpbmtzXFxcIj5cXG4gICAgICA8YSAqbmdJZj1cXFwic29jaWFsTGluay5saW5rXFxcIlxcbiAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwic29jaWFsTGluay5saW5rXFxcIlxcbiAgICAgICAgIFthdHRyLnRhcmdldF09XFxcInNvY2lhbExpbmsudGFyZ2V0XFxcIlxcbiAgICAgICAgIFthdHRyLmNsYXNzXT1cXFwic29jaWFsTGluay5pY29uXFxcIlxcbiAgICAgICAgIFtjbGFzcy53aXRoLWljb25dPVxcXCJzb2NpYWxMaW5rLmljb25cXFwiPlxcbiAgICAgICAgPG5iLWljb24gKm5nSWY9XFxcInNvY2lhbExpbmsuaWNvbjsgZWxzZSB0aXRsZVxcXCIgW2ljb25dPVxcXCJzb2NpYWxMaW5rLmljb25cXFwiPjwvbmItaWNvbj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGU+e3sgc29jaWFsTGluay50aXRsZSB9fTwvbmctdGVtcGxhdGU+XFxuICAgICAgPC9hPlxcbiAgICAgIDxhICpuZ0lmPVxcXCJzb2NpYWxMaW5rLnVybFxcXCJcXG4gICAgICAgICBbYXR0ci5ocmVmXT1cXFwic29jaWFsTGluay51cmxcXFwiXFxuICAgICAgICAgW2F0dHIudGFyZ2V0XT1cXFwic29jaWFsTGluay50YXJnZXRcXFwiXFxuICAgICAgICAgW2F0dHIuY2xhc3NdPVxcXCJzb2NpYWxMaW5rLmljb25cXFwiXFxuICAgICAgICAgW2NsYXNzLndpdGgtaWNvbl09XFxcInNvY2lhbExpbmsuaWNvblxcXCI+XFxuICAgICAgICA8bmItaWNvbiAqbmdJZj1cXFwic29jaWFsTGluay5pY29uOyBlbHNlIHRpdGxlXFxcIiBbaWNvbl09XFxcInNvY2lhbExpbmsuaWNvblxcXCI+PC9uYi1pY29uPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZT57eyBzb2NpYWxMaW5rLnRpdGxlIH19PC9uZy10ZW1wbGF0ZT5cXG4gICAgICA8L2E+XFxuICAgIDwvbmctY29udGFpbmVyPlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlxcblxcbjxzZWN0aW9uIGNsYXNzPVxcXCJhbm90aGVyLWFjdGlvblxcXCIgYXJpYS1sYWJlbD1cXFwiU2lnbiBpblxcXCI+XFxuICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPGEgY2xhc3M9XFxcInRleHQtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiLi4vbG9naW5cXFwiPkxvZyBpbjwvYT5cXG48L3NlY3Rpb24+XFxuXCIsXG4gICAgICAgICAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBbXCI6aG9zdCAudGl0bGV7bWFyZ2luLWJvdHRvbToycmVtfVxcblwiXVxuICAgICAgICAgICAgfSxdIH1cbl07XG5OYlJlZ2lzdGVyQ29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogTmJBdXRoU2VydmljZSB9LFxuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOQl9BVVRIX09QVElPTlMsXSB9XSB9LFxuICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYgfSxcbiAgICB7IHR5cGU6IFJvdXRlciB9XG5dO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5jbGFzcyBOYkxvZ291dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc2VydmljZSwgb3B0aW9ucyA9IHt9LCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMucmVkaXJlY3REZWxheSA9IDA7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSAnJztcbiAgICAgICAgdGhpcy5yZWRpcmVjdERlbGF5ID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMubG9nb3V0LnJlZGlyZWN0RGVsYXknKTtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHRoaXMuZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLmxvZ291dC5zdHJhdGVneScpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dvdXQodGhpcy5zdHJhdGVneSk7XG4gICAgfVxuICAgIGxvZ291dChzdHJhdGVneSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UubG9nb3V0KHN0cmF0ZWd5KS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSByZXN1bHQuZ2V0UmVkaXJlY3QoKTtcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5yZWRpcmVjdERlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENvbmZpZ1ZhbHVlKGtleSkge1xuICAgICAgICByZXR1cm4gZ2V0RGVlcEZyb21PYmplY3QodGhpcy5vcHRpb25zLCBrZXksIG51bGwpO1xuICAgIH1cbn1cbk5iTG9nb3V0Q29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICduYi1sb2dvdXQnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjxkaXY+TG9nZ2luZyBvdXQsIHBsZWFzZSB3YWl0Li4uPC9kaXY+XFxuXCJcbiAgICAgICAgICAgIH0sXSB9XG5dO1xuTmJMb2dvdXRDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBOYkF1dGhTZXJ2aWNlIH0sXG4gICAgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW05CX0FVVEhfT1BUSU9OUyxdIH1dIH0sXG4gICAgeyB0eXBlOiBSb3V0ZXIgfVxuXTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuY2xhc3MgTmJSZXF1ZXN0UGFzc3dvcmRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2UsIG9wdGlvbnMgPSB7fSwgY2QsIHJvdXRlcikge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNkID0gY2Q7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLnJlZGlyZWN0RGVsYXkgPSAwO1xuICAgICAgICB0aGlzLnNob3dNZXNzYWdlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gJyc7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdGhpcy51c2VyID0ge307XG4gICAgICAgIHRoaXMucmVkaXJlY3REZWxheSA9IHRoaXMuZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnJlcXVlc3RQYXNzd29yZC5yZWRpcmVjdERlbGF5Jyk7XG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VzID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMucmVxdWVzdFBhc3N3b3JkLnNob3dNZXNzYWdlcycpO1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMucmVxdWVzdFBhc3N3b3JkLnN0cmF0ZWd5Jyk7XG4gICAgfVxuICAgIHJlcXVlc3RQYXNzKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlcnZpY2UucmVxdWVzdFBhc3N3b3JkKHRoaXMuc3RyYXRlZ3ksIHRoaXMudXNlcikuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzU3VjY2VzcygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHJlc3VsdC5nZXRNZXNzYWdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSByZXN1bHQuZ2V0RXJyb3JzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IHJlc3VsdC5nZXRSZWRpcmVjdCgpO1xuICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnJlZGlyZWN0RGVsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDb25maWdWYWx1ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIGdldERlZXBGcm9tT2JqZWN0KHRoaXMub3B0aW9ucywga2V5LCBudWxsKTtcbiAgICB9XG59XG5OYlJlcXVlc3RQYXNzd29yZENvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbmItcmVxdWVzdC1wYXNzd29yZC1wYWdlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8aDEgaWQ9XFxcInRpdGxlXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPkZvcmdvdCBQYXNzd29yZDwvaDE+XFxuPHAgY2xhc3M9XFxcInN1Yi10aXRsZVxcXCI+RW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzIGFuZCB3ZVxcdTIwMTlsbCBzZW5kIGEgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkPC9wPlxcblxcbjxuYi1hbGVydCAqbmdJZj1cXFwic2hvd01lc3NhZ2VzLmVycm9yICYmIGVycm9ycz8ubGVuZ3RoICYmICFzdWJtaXR0ZWRcXFwiIG91dGxpbmU9XFxcImRhbmdlclxcXCIgcm9sZT1cXFwiYWxlcnRcXFwiPlxcbiAgPHAgY2xhc3M9XFxcImFsZXJ0LXRpdGxlXFxcIj48Yj5PaCBzbmFwITwvYj48L3A+XFxuICA8dWwgY2xhc3M9XFxcImFsZXJ0LW1lc3NhZ2UtbGlzdFxcXCI+XFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCBlcnJvciBvZiBlcnJvcnNcXFwiIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlXFxcIj57eyBlcnJvciB9fTwvbGk+XFxuICA8L3VsPlxcbjwvbmItYWxlcnQ+XFxuXFxuPG5iLWFsZXJ0ICpuZ0lmPVxcXCJzaG93TWVzc2FnZXMuc3VjY2VzcyAmJiBtZXNzYWdlcz8ubGVuZ3RoICYmICFzdWJtaXR0ZWRcXFwiIG91dGxpbmU9XFxcInN1Y2Nlc3NcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIj5cXG4gIDxwIGNsYXNzPVxcXCJhbGVydC10aXRsZVxcXCI+PGI+SG9vcmF5ITwvYj48L3A+XFxuICA8dWwgY2xhc3M9XFxcImFsZXJ0LW1lc3NhZ2UtbGlzdFxcXCI+XFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXFxcIiBjbGFzcz1cXFwiYWxlcnQtbWVzc2FnZVxcXCI+e3sgbWVzc2FnZSB9fTwvbGk+XFxuICA8L3VsPlxcbjwvbmItYWxlcnQ+XFxuXFxuPGZvcm0gKG5nU3VibWl0KT1cXFwicmVxdWVzdFBhc3MoKVxcXCIgI3JlcXVlc3RQYXNzRm9ybT1cXFwibmdGb3JtXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInRpdGxlXFxcIj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tY29udHJvbC1ncm91cFxcXCI+XFxuICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiIGZvcj1cXFwiaW5wdXQtZW1haWxcXFwiPkVudGVyIHlvdXIgZW1haWwgYWRkcmVzczo8L2xhYmVsPlxcbiAgICA8aW5wdXQgbmJJbnB1dFxcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgICAgICAjZW1haWw9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICAgICBpZD1cXFwiaW5wdXQtZW1haWxcXFwiXFxuICAgICAgICAgICBuYW1lPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgICAgIHBhdHRlcm49XFxcIi4rQC4rXFxcXC4uK1xcXCJcXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbCBhZGRyZXNzXFxcIlxcbiAgICAgICAgICAgYXV0b2ZvY3VzXFxuICAgICAgICAgICBmdWxsV2lkdGhcXG4gICAgICAgICAgIGZpZWxkU2l6ZT1cXFwibGFyZ2VcXFwiXFxuICAgICAgICAgICBbc3RhdHVzXT1cXFwiZW1haWwuZGlydHkgPyAoZW1haWwuaW52YWxpZCAgPyAnZGFuZ2VyJyA6ICdzdWNjZXNzJykgOiAnYmFzaWMnXFxcIlxcbiAgICAgICAgICAgW3JlcXVpcmVkXT1cXFwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24uZW1haWwucmVxdWlyZWQnKVxcXCJcXG4gICAgICAgICAgIFthdHRyLmFyaWEtaW52YWxpZF09XFxcImVtYWlsLmludmFsaWQgJiYgZW1haWwudG91Y2hlZCA/IHRydWUgOiBudWxsXFxcIj5cXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cXFwiZW1haWwuaW52YWxpZCAmJiBlbWFpbC50b3VjaGVkXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWwuZXJyb3JzPy5yZXF1aXJlZFxcXCI+XFxuICAgICAgICBFbWFpbCBpcyByZXF1aXJlZCFcXG4gICAgICA8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcImNhcHRpb24gc3RhdHVzLWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycz8ucGF0dGVyblxcXCI+XFxuICAgICAgICBFbWFpbCBzaG91bGQgYmUgdGhlIHJlYWwgb25lIVxcbiAgICAgIDwvcD5cXG4gICAgPC9uZy1jb250YWluZXI+XFxuICA8L2Rpdj5cXG5cXG4gIDxidXR0b24gbmJCdXR0b25cXG4gICAgICAgICAgZnVsbFdpZHRoXFxuICAgICAgICAgIHN0YXR1cz1cXFwicHJpbWFyeVxcXCJcXG4gICAgICAgICAgc2l6ZT1cXFwibGFyZ2VcXFwiXFxuICAgICAgICAgIFtkaXNhYmxlZF09XFxcInN1Ym1pdHRlZCB8fCAhcmVxdWVzdFBhc3NGb3JtLnZhbGlkXFxcIlxcbiAgICAgICAgICBbY2xhc3MuYnRuLXB1bHNlXT1cXFwic3VibWl0dGVkXFxcIj5cXG4gICAgUmVxdWVzdCBwYXNzd29yZFxcbiAgPC9idXR0b24+XFxuPC9mb3JtPlxcblxcbjxzZWN0aW9uIGNsYXNzPVxcXCJzaWduLWluLW9yLXVwXFxcIiBhcmlhLWxhYmVsPVxcXCJTaWduIGluIG9yIHNpZ24gdXBcXFwiPlxcbiAgPHA+PGEgY2xhc3M9XFxcInRleHQtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiLi4vbG9naW5cXFwiPkJhY2sgdG8gTG9nIEluPC9hPjwvcD5cXG4gIDxwPjxhIHJvdXRlckxpbms9XFxcIi4uL3JlZ2lzdGVyXFxcIiBjbGFzcz1cXFwidGV4dC1saW5rXFxcIj5SZWdpc3RlcjwvYT48L3A+XFxuPC9zZWN0aW9uPlxcblwiLFxuICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICAgICAgICAgIHN0eWxlczogW1wiOmhvc3QgLmZvcm0tZ3JvdXA6bGFzdC1vZi10eXBle21hcmdpbi1ib3R0b206M3JlbX1cXG5cIl1cbiAgICAgICAgICAgIH0sXSB9XG5dO1xuTmJSZXF1ZXN0UGFzc3dvcmRDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBOYkF1dGhTZXJ2aWNlIH0sXG4gICAgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW05CX0FVVEhfT1BUSU9OUyxdIH1dIH0sXG4gICAgeyB0eXBlOiBDaGFuZ2VEZXRlY3RvclJlZiB9LFxuICAgIHsgdHlwZTogUm91dGVyIH1cbl07XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmNsYXNzIE5iUmVzZXRQYXNzd29yZENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc2VydmljZSwgb3B0aW9ucyA9IHt9LCBjZCwgcm91dGVyKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2QgPSBjZDtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMucmVkaXJlY3REZWxheSA9IDA7XG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VzID0ge307XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSAnJztcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLnVzZXIgPSB7fTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdERlbGF5ID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMucmVzZXRQYXNzd29yZC5yZWRpcmVjdERlbGF5Jyk7XG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VzID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZm9ybXMucmVzZXRQYXNzd29yZC5zaG93TWVzc2FnZXMnKTtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHRoaXMuZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnJlc2V0UGFzc3dvcmQuc3RyYXRlZ3knKTtcbiAgICB9XG4gICAgcmVzZXRQYXNzKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlcnZpY2UucmVzZXRQYXNzd29yZCh0aGlzLnN0cmF0ZWd5LCB0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc1N1Y2Nlc3MoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSByZXN1bHQuZ2V0TWVzc2FnZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gcmVzdWx0LmdldEVycm9ycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSByZXN1bHQuZ2V0UmVkaXJlY3QoKTtcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5yZWRpcmVjdERlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q29uZmlnVmFsdWUoa2V5KSB7XG4gICAgICAgIHJldHVybiBnZXREZWVwRnJvbU9iamVjdCh0aGlzLm9wdGlvbnMsIGtleSwgbnVsbCk7XG4gICAgfVxufVxuTmJSZXNldFBhc3N3b3JkQ29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICduYi1yZXNldC1wYXNzd29yZC1wYWdlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8aDEgaWQ9XFxcInRpdGxlXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPkNoYW5nZSBwYXNzd29yZDwvaDE+XFxuPHAgY2xhc3M9XFxcInN1Yi10aXRsZVxcXCI+UGxlYXNlIHNldCBhIG5ldyBwYXNzd29yZDwvcD5cXG5cXG48bmItYWxlcnQgKm5nSWY9XFxcInNob3dNZXNzYWdlcy5lcnJvciAmJiBlcnJvcnM/Lmxlbmd0aCAmJiAhc3VibWl0dGVkXFxcIiBvdXRsaW5lPVxcXCJkYW5nZXJcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIj5cXG4gIDxwIGNsYXNzPVxcXCJhbGVydC10aXRsZVxcXCI+PGI+T2ggc25hcCE8L2I+PC9wPlxcbiAgPHVsIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlLWxpc3RcXFwiPlxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgZXJyb3Igb2YgZXJyb3JzXFxcIiBjbGFzcz1cXFwiYWxlcnQtbWVzc2FnZVxcXCI+e3sgZXJyb3IgfX08L2xpPlxcbiAgPC91bD5cXG48L25iLWFsZXJ0PlxcblxcbjxuYi1hbGVydCAqbmdJZj1cXFwic2hvd01lc3NhZ2VzLnN1Y2Nlc3MgJiYgbWVzc2FnZXM/Lmxlbmd0aCAmJiAhc3VibWl0dGVkXFxcIiBvdXRsaW5lPVxcXCJzdWNjZXNzXFxcIiByb2xlPVxcXCJhbGVydFxcXCI+XFxuICA8cCBjbGFzcz1cXFwiYWxlcnQtdGl0bGVcXFwiPjxiPkhvb3JheSE8L2I+PC9wPlxcbiAgPHVsIGNsYXNzPVxcXCJhbGVydC1tZXNzYWdlLWxpc3RcXFwiPlxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1xcXCIgY2xhc3M9XFxcImFsZXJ0LW1lc3NhZ2VcXFwiPnt7IG1lc3NhZ2UgfX08L2xpPlxcbiAgPC91bD5cXG48L25iLWFsZXJ0Plxcblxcbjxmb3JtIChuZ1N1Ym1pdCk9XFxcInJlc2V0UGFzcygpXFxcIiAjcmVzZXRQYXNzRm9ybT1cXFwibmdGb3JtXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcInRpdGxlXFxcIj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tY29udHJvbC1ncm91cFxcXCI+XFxuICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiIGZvcj1cXFwiaW5wdXQtcGFzc3dvcmRcXFwiPk5ldyBQYXNzd29yZDo8L2xhYmVsPlxcbiAgICA8aW5wdXQgbmJJbnB1dFxcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAjcGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICAgICB0eXBlPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgIGlkPVxcXCJpbnB1dC1wYXNzd29yZFxcXCJcXG4gICAgICAgICAgIG5hbWU9XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImZpcnN0XFxcIlxcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIk5ldyBQYXNzd29yZFxcXCJcXG4gICAgICAgICAgIGF1dG9mb2N1c1xcbiAgICAgICAgICAgZnVsbFdpZHRoXFxuICAgICAgICAgICBmaWVsZFNpemU9XFxcImxhcmdlXFxcIlxcbiAgICAgICAgICAgW3N0YXR1c109XFxcInBhc3N3b3JkLmRpcnR5ID8gKHBhc3N3b3JkLmludmFsaWQgID8gJ2RhbmdlcicgOiAnc3VjY2VzcycpIDogJ2Jhc2ljJ1xcXCJcXG4gICAgICAgICAgIFtyZXF1aXJlZF09XFxcImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLnJlcXVpcmVkJylcXFwiXFxuICAgICAgICAgICBbbWlubGVuZ3RoXT1cXFwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWluTGVuZ3RoJylcXFwiXFxuICAgICAgICAgICBbbWF4bGVuZ3RoXT1cXFwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWF4TGVuZ3RoJylcXFwiXFxuICAgICAgICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVxcXCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWQgPyB0cnVlIDogbnVsbFxcXCI+XFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XFxcInBhc3N3b3JkLmludmFsaWQgJiYgcGFzc3dvcmQudG91Y2hlZFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcImNhcHRpb24gc3RhdHVzLWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycz8ucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgUGFzc3dvcmQgaXMgcmVxdWlyZWQhXFxuICAgICAgPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZC5lcnJvcnM/Lm1pbmxlbmd0aCB8fCBwYXNzd29yZC5lcnJvcnM/Lm1heGxlbmd0aFxcXCI+XFxuICAgICAgICBQYXNzd29yZCBzaG91bGQgY29udGFpbnNcXG4gICAgICAgIGZyb20ge3tnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5taW5MZW5ndGgnKX19XFxuICAgICAgICB0byB7e2dldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLm1heExlbmd0aCcpfX1cXG4gICAgICAgIGNoYXJhY3RlcnNcXG4gICAgICA8L3A+XFxuICAgIDwvbmctY29udGFpbmVyPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCIgZm9yPVxcXCJpbnB1dC1yZS1wYXNzd29yZFxcXCI+Q29uZmlybSBQYXNzd29yZDo8L2xhYmVsPlxcbiAgICA8aW5wdXQgbmJJbnB1dFxcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuY29uZmlybVBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgI3JlUGFzcz1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgICAgIGlkPVxcXCJpbnB1dC1yZS1wYXNzd29yZFxcXCJcXG4gICAgICAgICAgIG5hbWU9XFxcInJlUGFzc1xcXCJcXG4gICAgICAgICAgIHR5cGU9XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImxhc3RcXFwiXFxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ29uZmlybSBQYXNzd29yZFxcXCJcXG4gICAgICAgICAgIGZ1bGxXaWR0aFxcbiAgICAgICAgICAgZmllbGRTaXplPVxcXCJsYXJnZVxcXCJcXG4gICAgICAgICAgIFtzdGF0dXNdPVxcXCJyZVBhc3MudG91Y2hlZFxcbiAgICAgICAgICAgICAgID8gKHJlUGFzcy5pbnZhbGlkIHx8IHBhc3N3b3JkLnZhbHVlICE9IHJlUGFzcy52YWx1ZSA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnKVxcbiAgICAgICAgICAgICAgIDogJ2Jhc2ljJ1xcXCJcXG4gICAgICAgICAgIFtyZXF1aXJlZF09XFxcImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLnJlcXVpcmVkJylcXFwiXFxuICAgICAgICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVxcXCJyZVBhc3MuaW52YWxpZCAmJiByZVBhc3MudG91Y2hlZCA/IHRydWUgOiBudWxsXFxcIj5cXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cXFwicmVQYXNzLnRvdWNoZWRcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcXFwiICpuZ0lmPVxcXCJyZVBhc3MuaW52YWxpZCAmJiByZVBhc3MuZXJyb3JzPy5yZXF1aXJlZFxcXCI+XFxuICAgICAgICBQYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQhXFxuICAgICAgPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZC52YWx1ZSAhPSByZVBhc3MudmFsdWUgJiYgIXJlUGFzcy5lcnJvcnM/LnJlcXVpcmVkXFxcIj5cXG4gICAgICAgIFBhc3N3b3JkIGRvZXMgbm90IG1hdGNoIHRoZSBjb25maXJtIHBhc3N3b3JkLlxcbiAgICAgIDwvcD5cXG4gICAgPC9uZy1jb250YWluZXI+XFxuICA8L2Rpdj5cXG5cXG4gIDxidXR0b24gbmJCdXR0b25cXG4gICAgICAgICAgc3RhdHVzPVxcXCJwcmltYXJ5XFxcIlxcbiAgICAgICAgICBmdWxsV2lkdGhcXG4gICAgICAgICAgc2l6ZT1cXFwibGFyZ2VcXFwiXFxuICAgICAgICAgIFtkaXNhYmxlZF09XFxcInN1Ym1pdHRlZCB8fCAhcmVzZXRQYXNzRm9ybS52YWxpZFxcXCJcXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XFxcInN1Ym1pdHRlZFxcXCI+XFxuICAgIENoYW5nZSBwYXNzd29yZFxcbiAgPC9idXR0b24+XFxuPC9mb3JtPlxcblxcbjxzZWN0aW9uIGNsYXNzPVxcXCJzaWduLWluLW9yLXVwXFxcIiBhcmlhLWxhYmVsPVxcXCJTaWduIGluIG9yIHNpZ24gdXBcXFwiPlxcbiAgPHA+PGEgY2xhc3M9XFxcInRleHQtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiLi4vbG9naW5cXFwiPkJhY2sgdG8gTG9nIEluPC9hPjwvcD5cXG4gIDxwPjxhIGNsYXNzPVxcXCJ0ZXh0LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcIi4uL3JlZ2lzdGVyXFxcIj5SZWdpc3RlcjwvYT48L3A+XFxuPC9zZWN0aW9uPlxcblwiLFxuICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICAgICAgICAgIHN0eWxlczogW1wiOmhvc3QgLmZvcm0tZ3JvdXA6bGFzdC1vZi10eXBle21hcmdpbi1ib3R0b206M3JlbX1cXG5cIl1cbiAgICAgICAgICAgIH0sXSB9XG5dO1xuTmJSZXNldFBhc3N3b3JkQ29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogTmJBdXRoU2VydmljZSB9LFxuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOQl9BVVRIX09QVElPTlMsXSB9XSB9LFxuICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYgfSxcbiAgICB7IHR5cGU6IFJvdXRlciB9XG5dO1xuXG5mdW5jdGlvbiBuYlN0cmF0ZWdpZXNGYWN0b3J5KG9wdGlvbnMsIGluamVjdG9yKSB7XG4gICAgY29uc3Qgc3RyYXRlZ2llcyA9IFtdO1xuICAgIG9wdGlvbnMuc3RyYXRlZ2llc1xuICAgICAgICAuZm9yRWFjaCgoW3N0cmF0ZWd5Q2xhc3MsIHN0cmF0ZWd5T3B0aW9uc10pID0+IHtcbiAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPSBpbmplY3Rvci5nZXQoc3RyYXRlZ3lDbGFzcyk7XG4gICAgICAgIHN0cmF0ZWd5LnNldE9wdGlvbnMoc3RyYXRlZ3lPcHRpb25zKTtcbiAgICAgICAgc3RyYXRlZ2llcy5wdXNoKHN0cmF0ZWd5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyYXRlZ2llcztcbn1cbmZ1bmN0aW9uIG5iVG9rZW5zRmFjdG9yeShzdHJhdGVnaWVzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgc3RyYXRlZ2llc1xuICAgICAgICAuZm9yRWFjaCgoc3RyYXRlZ3kpID0+IHtcbiAgICAgICAgdG9rZW5zLnB1c2goc3RyYXRlZ3kuZ2V0T3B0aW9uKCd0b2tlbi5jbGFzcycpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuZnVuY3Rpb24gbmJPcHRpb25zRmFjdG9yeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRlZXBFeHRlbmQoZGVmYXVsdEF1dGhPcHRpb25zLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIG5iTm9PcEludGVyY2VwdG9yRmlsdGVyKHJlcSkge1xuICAgIHJldHVybiB0cnVlO1xufVxuY2xhc3MgTmJBdXRoTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChuYkF1dGhPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTmJBdXRoTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBOQl9BVVRIX1VTRVJfT1BUSU9OUywgdXNlVmFsdWU6IG5iQXV0aE9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IE5CX0FVVEhfT1BUSU9OUywgdXNlRmFjdG9yeTogbmJPcHRpb25zRmFjdG9yeSwgZGVwczogW05CX0FVVEhfVVNFUl9PUFRJT05TXSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogTkJfQVVUSF9TVFJBVEVHSUVTLCB1c2VGYWN0b3J5OiBuYlN0cmF0ZWdpZXNGYWN0b3J5LCBkZXBzOiBbTkJfQVVUSF9PUFRJT05TLCBJbmplY3Rvcl0gfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IE5CX0FVVEhfVE9LRU5TLCB1c2VGYWN0b3J5OiBuYlRva2Vuc0ZhY3RvcnksIGRlcHM6IFtOQl9BVVRIX1NUUkFURUdJRVNdIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBOQl9BVVRIX0ZBTExCQUNLX1RPS0VOLCB1c2VWYWx1ZTogTmJBdXRoU2ltcGxlVG9rZW4gfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IE5CX0FVVEhfSU5URVJDRVBUT1JfSEVBREVSLCB1c2VWYWx1ZTogJ0F1dGhvcml6YXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBOQl9BVVRIX1RPS0VOX0lOVEVSQ0VQVE9SX0ZJTFRFUiwgdXNlVmFsdWU6IG5iTm9PcEludGVyY2VwdG9yRmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBOYlRva2VuU3RvcmFnZSwgdXNlQ2xhc3M6IE5iVG9rZW5Mb2NhbFN0b3JhZ2UgfSxcbiAgICAgICAgICAgICAgICBOYkF1dGhUb2tlblBhcmNlbGVyLFxuICAgICAgICAgICAgICAgIE5iQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgTmJUb2tlblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgTmJEdW1teUF1dGhTdHJhdGVneSxcbiAgICAgICAgICAgICAgICBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgIE5iT0F1dGgyQXV0aFN0cmF0ZWd5LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5OYkF1dGhNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBOYkxheW91dE1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgTmJDYXJkTW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBOYkNoZWNrYm94TW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBOYkFsZXJ0TW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBOYklucHV0TW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgTmJJY29uTW9kdWxlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIE5iQXV0aENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgTmJBdXRoQmxvY2tDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIE5iTG9naW5Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIE5iUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIE5iUmVxdWVzdFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBOYlJlc2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIE5iTG9nb3V0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZXhwb3J0czogW1xuICAgICAgICAgICAgICAgICAgICBOYkF1dGhDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIE5iQXV0aEJsb2NrQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBOYkxvZ2luQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBOYlJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBOYlJlcXVlc3RQYXNzd29yZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgTmJSZXNldFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBOYkxvZ291dENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxdIH1cbl07XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICdhdXRoJyxcbiAgICAgICAgY29tcG9uZW50OiBOYkF1dGhDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBOYkxvZ2luQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTmJMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ3JlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IE5iUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdsb2dvdXQnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTmJMb2dvdXRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdyZXF1ZXN0LXBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IE5iUmVxdWVzdFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAncmVzZXQtcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTmJSZXNldFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcblxuY2xhc3MgTmJBdXRoSldUSW50ZXJjZXB0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGluamVjdG9yLCBmaWx0ZXIkJDEpIHtcbiAgICAgICAgdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlciQkMTtcbiAgICB9XG4gICAgaW50ZXJjZXB0KHJlcSwgbmV4dCkge1xuICAgICAgICAvLyBkbyBub3QgaW50ZXJjZXB0IHJlcXVlc3Qgd2hvc2UgdXJscyBhcmUgZmlsdGVyZWQgYnkgdGhlIGluamVjdGVkIGZpbHRlclxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyKHJlcSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQXV0aGVudGljYXRlZE9yUmVmcmVzaCgpXG4gICAgICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKGF1dGhlbnRpY2F0ZWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCkucGlwZShzd2l0Y2hNYXAoKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBKV1QgPSBgQmVhcmVyICR7dG9rZW4uZ2V0VmFsdWUoKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEpXVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVxdWVzdCBpcyBzZW50IHRvIHNlcnZlciB3aXRob3V0IGF1dGhlbnRpY2F0aW9uIHNvIHRoYXQgdGhlIGNsaWVudCBjb2RlXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY2VpdmVzIHRoZSA0MDEvNDAzIGVycm9yIGFuZCBjYW4gYWN0IGFzIGRlc2lyZWQgKCdzZXNzaW9uIGV4cGlyZWQnLCByZWRpcmVjdCB0byBsb2dpbiwgYXNvKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgYXV0aFNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChOYkF1dGhTZXJ2aWNlKTtcbiAgICB9XG59XG5OYkF1dGhKV1RJbnRlcmNlcHRvci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9XG5dO1xuTmJBdXRoSldUSW50ZXJjZXB0b3IuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBJbmplY3RvciB9LFxuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOQl9BVVRIX1RPS0VOX0lOVEVSQ0VQVE9SX0ZJTFRFUixdIH1dIH1cbl07XG5cbmNsYXNzIE5iQXV0aFNpbXBsZUludGVyY2VwdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvciwgaGVhZGVyTmFtZSA9ICdBdXRob3JpemF0aW9uJykge1xuICAgICAgICB0aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gICAgICAgIHRoaXMuaGVhZGVyTmFtZSA9IGhlYWRlck5hbWU7XG4gICAgfVxuICAgIGludGVyY2VwdChyZXEsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgaWYgKHRva2VuICYmIHRva2VuLmdldFZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5oZWFkZXJOYW1lXTogdG9rZW4uZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGdldCBhdXRoU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KE5iQXV0aFNlcnZpY2UpO1xuICAgIH1cbn1cbk5iQXV0aFNpbXBsZUludGVyY2VwdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH1cbl07XG5OYkF1dGhTaW1wbGVJbnRlcmNlcHRvci5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IEluamVjdG9yIH0sXG4gICAgeyB0eXBlOiBTdHJpbmcsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW05CX0FVVEhfSU5URVJDRVBUT1JfSEVBREVSLF0gfV0gfVxuXTtcblxuY2xhc3MgTmJVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgZW1haWwsIHBhc3N3b3JkLCByZW1lbWJlck1lLCB0ZXJtcywgY29uZmlybVBhc3N3b3JkLCBmdWxsTmFtZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICB0aGlzLnJlbWVtYmVyTWUgPSByZW1lbWJlck1lO1xuICAgICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkID0gY29uZmlybVBhc3N3b3JkO1xuICAgICAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0IHsgZGVmYXVsdEF1dGhPcHRpb25zLCBOQl9BVVRIX09QVElPTlMsIE5CX0FVVEhfVVNFUl9PUFRJT05TLCBOQl9BVVRIX1NUUkFURUdJRVMsIE5CX0FVVEhfVE9LRU5TLCBOQl9BVVRIX0lOVEVSQ0VQVE9SX0hFQURFUiwgTkJfQVVUSF9UT0tFTl9JTlRFUkNFUFRPUl9GSUxURVIsIG5iU3RyYXRlZ2llc0ZhY3RvcnksIG5iVG9rZW5zRmFjdG9yeSwgbmJPcHRpb25zRmFjdG9yeSwgbmJOb09wSW50ZXJjZXB0b3JGaWx0ZXIsIE5iQXV0aE1vZHVsZSwgcm91dGVzLCBOYkF1dGhDb21wb25lbnQsIE5iQXV0aEJsb2NrQ29tcG9uZW50LCBOYkxvZ2luQ29tcG9uZW50LCBOYkxvZ291dENvbXBvbmVudCwgTmJSZWdpc3RlckNvbXBvbmVudCwgTmJSZXF1ZXN0UGFzc3dvcmRDb21wb25lbnQsIE5iUmVzZXRQYXNzd29yZENvbXBvbmVudCwgTmJBdXRoU2VydmljZSwgTmJBdXRoUmVzdWx0LCBOYkF1dGhKV1RJbnRlcmNlcHRvciwgTmJBdXRoU2ltcGxlSW50ZXJjZXB0b3IsIE5iQXV0aFRva2VuLCBOYkF1dGhUb2tlbk5vdEZvdW5kRXJyb3IsIE5iQXV0aElsbGVnYWxUb2tlbkVycm9yLCBOYkF1dGhFbXB0eVRva2VuRXJyb3IsIE5iQXV0aElsbGVnYWxKV1RUb2tlbkVycm9yLCBuYkF1dGhDcmVhdGVUb2tlbiwgZGVjb2RlSnd0UGF5bG9hZCwgTmJBdXRoU2ltcGxlVG9rZW4sIE5iQXV0aEpXVFRva2VuLCBOYkF1dGhPQXV0aDJUb2tlbiwgTmJBdXRoT0F1dGgySldUVG9rZW4sIMm1MCwgTmJUb2tlblN0b3JhZ2UsIE5iVG9rZW5Mb2NhbFN0b3JhZ2UsIE5iVG9rZW5TZXJ2aWNlLCBOQl9BVVRIX0ZBTExCQUNLX1RPS0VOLCBOYkF1dGhUb2tlblBhcmNlbGVyLCBOYkF1dGhTdHJhdGVneSwgTmJBdXRoU3RyYXRlZ3lPcHRpb25zLCBOYkR1bW15QXV0aFN0cmF0ZWd5LCBOYkR1bW15QXV0aFN0cmF0ZWd5T3B0aW9ucywgZHVtbXlTdHJhdGVneU9wdGlvbnMsIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3ksIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3lPcHRpb25zLCBwYXNzd29yZFN0cmF0ZWd5T3B0aW9ucywgTmJPQXV0aDJBdXRoU3RyYXRlZ3ksIE5iT0F1dGgyUmVzcG9uc2VUeXBlLCBOYk9BdXRoMkdyYW50VHlwZSwgTmJPQXV0aDJDbGllbnRBdXRoTWV0aG9kLCBOYk9BdXRoMkF1dGhTdHJhdGVneU9wdGlvbnMsIGF1dGgyU3RyYXRlZ3lPcHRpb25zLCBOYlVzZXIsIGRlZXBFeHRlbmQsIGdldERlZXBGcm9tT2JqZWN0LCB1cmxCYXNlNjREZWNvZGUsIGI2NGRlY29kZSwgYjY0RGVjb2RlVW5pY29kZSB9O1xuIl19