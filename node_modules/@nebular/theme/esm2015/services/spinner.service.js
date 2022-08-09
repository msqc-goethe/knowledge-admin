/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable, Inject } from '@angular/core';
import { NB_DOCUMENT } from '../theme.options';
/**
 * Service to control the global page spinner.
 */
export class NbSpinnerService {
    constructor(document) {
        this.document = document;
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    registerLoader(method) {
        this.loaders.push(method);
    }
    /**
     * Clears the list of loader
     */
    clear() {
        this.loaders = [];
    }
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    load() {
        this.showSpinner();
        this.executeAll();
    }
    executeAll(done = () => { }) {
        Promise.all(this.loaders).then((values) => {
            this.hideSpinner();
            done.call(null, values);
        })
            .catch((error) => {
            // TODO: Promise.reject
            console.error(error);
        });
    }
    // TODO is there any better way of doing this?
    showSpinner() {
        const el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    }
    hideSpinner() {
        const el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    }
    getSpinnerElement() {
        return this.document.getElementById(this.selector);
    }
}
NbSpinnerService.decorators = [
    { type: Injectable }
];
NbSpinnerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
//# sourceMappingURL=spinner.service.js.map