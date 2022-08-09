import { cloneDeep } from 'lodash';
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = cloneDeep(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
export class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
export function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object);
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
export function getPageForRowIndex(index, perPage) {
    // we need to add 1 to convert 0-based index to 1-based page number.
    return Math.floor(index / perPage) + 1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2VyZ2V5L3Byb2dyYW0vbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvbGliL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVuQzs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxVQUFTLEdBQUcsT0FBbUI7SUFDdkQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDNUQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckI7SUFFRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUIsdURBQXVEO0lBQ3ZELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdEQsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBRWIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ3hCLCtDQUErQztRQUMvQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pELE9BQU87U0FDUjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztZQUNwQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUNsQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUU1Qix1QkFBdUI7WUFDdkIsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO2dCQUNsQixPQUFPO2dCQUVQOzs7bUJBR0c7YUFDSjtpQkFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixPQUFPO2dCQUVQLHlEQUF5RDthQUMxRDtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87Z0JBRVAseURBQXlEO2FBQzFEO2lCQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU87Z0JBRVAsMkRBQTJEO2FBQzVEO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO2FBQ1I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLFFBQVE7SUFPbkI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBRUQseUVBQXlFO0FBQ3pFLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLElBQVksRUFBRSxZQUFrQjtJQUM3RSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLG1CQUFtQjtJQUNuQixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNqQixJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDNUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzdELENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsS0FBYSxFQUFFLE9BQWU7SUFDL0Qsb0VBQW9FO0lBQ3BFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuXG4vKipcbiAqIEV4dGVuZGluZyBvYmplY3QgdGhhdCBlbnRlcmVkIGluIGZpcnN0IGFyZ3VtZW50LlxuICpcbiAqIFJldHVybnMgZXh0ZW5kZWQgb2JqZWN0IG9yIGZhbHNlIGlmIGhhdmUgbm8gdGFyZ2V0IG9iamVjdCBvciBpbmNvcnJlY3QgdHlwZS5cbiAqXG4gKiBJZiB5b3Ugd2lzaCB0byBjbG9uZSBzb3VyY2Ugb2JqZWN0ICh3aXRob3V0IG1vZGlmeSBpdCksIGp1c3QgdXNlIGVtcHR5IG5ld1xuICogb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50LCBsaWtlIHRoaXM6XG4gKiAgIGRlZXBFeHRlbmQoe30sIHlvdXJPYmpfMSwgW3lvdXJPYmpfTl0pO1xuICovXG5leHBvcnQgY29uc3QgZGVlcEV4dGVuZCA9IGZ1bmN0aW9uKC4uLm9iamVjdHM6IEFycmF5PGFueT4pOiBhbnkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICB9XG5cbiAgY29uc3QgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXG4gIC8vIGNvbnZlcnQgYXJndW1lbnRzIHRvIGFycmF5IGFuZCBjdXQgb2ZmIHRhcmdldCBvYmplY3RcbiAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgbGV0IHZhbCwgc3JjO1xuXG4gIGFyZ3MuZm9yRWFjaCgob2JqOiBhbnkpID0+IHtcbiAgICAvLyBza2lwIGFyZ3VtZW50IGlmIGl0IGlzIGFycmF5IG9yIGlzbid0IG9iamVjdFxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgc3JjID0gdGFyZ2V0W2tleV07IC8vIHNvdXJjZSB2YWx1ZVxuICAgICAgdmFsID0gb2JqW2tleV07IC8vIG5ldyB2YWx1ZVxuXG4gICAgICAvLyByZWN1cnNpb24gcHJldmVudGlvblxuICAgICAgaWYgKHZhbCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgbmV3IHZhbHVlIGlzbid0IG9iamVjdCB0aGVuIGp1c3Qgb3ZlcndyaXRlIGJ5IG5ldyB2YWx1ZVxuICAgICAgICAgKiBpbnN0ZWFkIG9mIGV4dGVuZGluZy5cbiAgICAgICAgICovXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIGp1c3QgY2xvbmUgYXJyYXlzIChhbmQgcmVjdXJzaXZlIGNsb25lIG9iamVjdHMgaW5zaWRlKVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBjbG9uZURlZXAodmFsKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIG92ZXJ3cml0ZSBieSBuZXcgdmFsdWUgaWYgc291cmNlIGlzbid0IG9iamVjdCBvciBhcnJheVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3JjICE9PSAnb2JqZWN0JyB8fCBzcmMgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gZGVlcEV4dGVuZCh7fSwgdmFsKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIHNvdXJjZSB2YWx1ZSBhbmQgbmV3IHZhbHVlIGlzIG9iamVjdHMgYm90aCwgZXh0ZW5kaW5nLi4uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBFeHRlbmQoc3JjLCB2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnQgY2xhc3MgRGVmZXJyZWQge1xuXG4gIHByb21pc2U6IFByb21pc2U8YW55PjtcblxuICByZXNvbHZlOiBhbnk7XG4gIHJlamVjdDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBnZXREZWVwRnJvbU9iamVjdCh7cmVzdWx0OiB7ZGF0YTogMX19LCAncmVzdWx0LmRhdGEnLCAyKTsgLy8gcmV0dXJucyAxXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVlcEZyb21PYmplY3Qob2JqZWN0ID0ge30sIG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gIGNvbnN0IGtleXMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gIC8vIGNsb25lIHRoZSBvYmplY3RcbiAgbGV0IGxldmVsID0gZGVlcEV4dGVuZCh7fSwgb2JqZWN0KTtcbiAga2V5cy5mb3JFYWNoKChrKSA9PiB7XG4gICAgaWYgKGxldmVsICYmIHR5cGVvZiBsZXZlbFtrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldmVsID0gbGV2ZWxba107XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHlwZW9mIGxldmVsID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGxldmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFnZUZvclJvd0luZGV4KGluZGV4OiBudW1iZXIsIHBlclBhZ2U6IG51bWJlcik6IG51bWJlciB7XG4gIC8vIHdlIG5lZWQgdG8gYWRkIDEgdG8gY29udmVydCAwLWJhc2VkIGluZGV4IHRvIDEtYmFzZWQgcGFnZSBudW1iZXIuXG4gIHJldHVybiBNYXRoLmZsb29yKGluZGV4IC8gcGVyUGFnZSkgKyAxO1xufVxuIl19