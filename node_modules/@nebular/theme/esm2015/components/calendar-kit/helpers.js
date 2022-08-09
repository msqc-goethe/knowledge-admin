/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const batch = (target, batchSize, offset = 0) => {
    return target.reduce((res, item, index) => {
        const chunkIndex = Math.floor((index + offset) / batchSize);
        if (!res[chunkIndex]) {
            res[chunkIndex] = [];
        }
        res[chunkIndex].push(item);
        return res;
    }, []);
};
/**
 * returns array with numbers from first argument to bound.
 * */
export const rangeFromTo = (from, to = 0, producer = i => i) => {
    const arr = [];
    for (let i = from; i < to; i++) {
        arr.push(producer(i));
    }
    return arr;
};
/**
 * returns array with numbers from zero to bound.
 * */
export const range = (bound, producer = i => i) => {
    return rangeFromTo(0, bound, producer);
};
//# sourceMappingURL=helpers.js.map