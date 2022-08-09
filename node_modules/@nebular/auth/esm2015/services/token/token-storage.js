import { Injectable } from '@angular/core';
import { NbAuthTokenParceler } from './token-parceler';
export class NbTokenStorage {
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
export class NbTokenLocalStorage extends NbTokenStorage {
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
NbTokenLocalStorage.decorators = [
    { type: Injectable }
];
NbTokenLocalStorage.ctorParameters = () => [
    { type: NbAuthTokenParceler }
];
//# sourceMappingURL=token-storage.js.map