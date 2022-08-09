/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthStrategyOptions } from '../auth-strategy-options';
import { NbAuthSimpleToken } from '../../services/token/token';
export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.token = {
            class: NbAuthSimpleToken,
        };
        this.delay = 1000;
        this.alwaysFail = false;
    }
}
export const dummyStrategyOptions = new NbDummyAuthStrategyOptions();
//# sourceMappingURL=dummy-strategy-options.js.map