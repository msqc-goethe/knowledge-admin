import { HttpResponse } from '@angular/common/http';
import { deepExtend, getDeepFromObject } from '../helpers';
import { nbAuthCreateToken, NbAuthIllegalTokenError, } from '../services/token/token';
export class NbAuthStrategy {
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
//# sourceMappingURL=auth-strategy.js.map