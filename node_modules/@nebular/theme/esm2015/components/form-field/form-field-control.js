/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
/*
 * Class used as injection token to provide form element.
 **/
export class NbFormFieldControl {
}
NbFormFieldControl.decorators = [
    { type: Injectable }
];
/*
 * Optional config to be provided on NbFormFieldControl to alter default settings.
 **/
export class NbFormFieldControlConfig {
    constructor() {
        this.supportsPrefix = true;
        this.supportsSuffix = true;
    }
}
NbFormFieldControlConfig.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=form-field-control.js.map