import { Inject, Injectable, InjectionToken } from '@angular/core';
import { nbAuthCreateToken } from './token';
import { NB_AUTH_TOKENS } from '../../auth.options';
export const NB_AUTH_FALLBACK_TOKEN = new InjectionToken('Nebular Auth Options');
/**
 * Creates a token parcel which could be stored/restored
 */
export class NbAuthTokenParceler {
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
NbAuthTokenParceler.decorators = [
    { type: Injectable }
];
NbAuthTokenParceler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_FALLBACK_TOKEN,] }] },
    { type: Array, decorators: [{ type: Inject, args: [NB_AUTH_TOKENS,] }] }
];
//# sourceMappingURL=token-parceler.js.map