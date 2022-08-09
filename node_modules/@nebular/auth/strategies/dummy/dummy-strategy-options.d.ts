/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthStrategyOptions, NbStrategyToken } from '../auth-strategy-options';
export declare class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
    token?: NbStrategyToken;
    delay?: number;
    alwaysFail?: boolean;
}
export declare const dummyStrategyOptions: NbDummyAuthStrategyOptions;
