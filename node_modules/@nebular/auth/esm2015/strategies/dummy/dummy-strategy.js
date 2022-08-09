import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthResult } from '../../services/auth-result';
import { dummyStrategyOptions } from './dummy-strategy-options';
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
export class NbDummyAuthStrategy extends NbAuthStrategy {
    constructor() {
        super(...arguments);
        this.defaultOptions = dummyStrategyOptions;
    }
    static setup(options) {
        return [NbDummyAuthStrategy, options];
    }
    authenticate(data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    register(data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    requestPassword(data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    resetPassword(data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    logout(data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    }
    refreshToken(data) {
        return observableOf(this.createDummyResult(data))
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
NbDummyAuthStrategy.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=dummy-strategy.js.map