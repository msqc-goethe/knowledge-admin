import { Injectable } from '@angular/core';
import { BehaviorSubject, of as observableOf } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import { NbTokenStorage } from './token-storage';
/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
export class NbTokenService {
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
        return observableOf(null);
    }
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    get() {
        const token = this.tokenStorage.get();
        return observableOf(token);
    }
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    clear() {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return observableOf(null);
    }
    publishStoredToken() {
        this.token$.next(this.tokenStorage.get());
    }
}
NbTokenService.decorators = [
    { type: Injectable }
];
NbTokenService.ctorParameters = () => [
    { type: NbTokenStorage }
];
//# sourceMappingURL=token.service.js.map