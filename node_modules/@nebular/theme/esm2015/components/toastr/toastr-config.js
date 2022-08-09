/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken } from '@angular/core';
import { NbGlobalLogicalPosition } from '../cdk/overlay/position-helper';
export const NB_TOASTR_CONFIG = new InjectionToken('Default toastr options');
/**
 * The `NbToastrConfig` class describes configuration of the `NbToastrService.show` and global toastr configuration.
 * */
export class NbToastrConfig {
    constructor(config) {
        /**
         * Determines where on the screen toast have to be rendered.
         * */
        this.position = NbGlobalLogicalPosition.TOP_END;
        /**
         * Status chooses color scheme for the toast.
         * */
        this.status = 'basic';
        /**
         * Duration is timeout between toast appears and disappears.
         * */
        this.duration = 3000;
        /**
         * Destroy by click means you can hide the toast by clicking it.
         * */
        this.destroyByClick = true;
        /**
         * If preventDuplicates is true then the toast with the same title, message and status will not be rendered.
         * Find duplicates behaviour determined by `preventDuplicates`.
         * The default `previous` duplicate behaviour is used.
         * */
        this.preventDuplicates = false;
        /**
         * Determines the how to treat duplicates.
         * */
        this.duplicatesBehaviour = 'previous';
        /*
        * The number of visible toasts. If the limit exceeded the oldest toast will be removed.
        * */
        this.limit = null;
        /**
         * Class to be applied to the toast.
         */
        this.toastClass = '';
        /**
         * Determines render icon or not.
         * */
        this.hasIcon = true;
        /**
         * Icon name or icon config object that can be provided to render custom icon.
         * */
        this.icon = 'email';
        /**
         * Toast status icon-class mapping.
         * */
        this.icons = {
            danger: 'flash-outline',
            success: 'checkmark-outline',
            info: 'question-mark-outline',
            warning: 'alert-triangle-outline',
            primary: 'email-outline',
            control: 'email-outline',
            basic: 'email-outline',
        };
        this.patchIcon(config);
        Object.assign(this, config);
    }
    patchIcon(config) {
        if (!('icon' in config)) {
            config.icon = {
                icon: this.icons[config.status] || this.icons.basic,
                pack: 'nebular-essentials',
            };
        }
    }
}
//# sourceMappingURL=toastr-config.js.map