import { Injectable } from '@angular/core';
import { NbLayoutDirectionService } from '../../../services/direction.service';
export var NbGlobalLogicalPosition;
(function (NbGlobalLogicalPosition) {
    NbGlobalLogicalPosition["TOP_START"] = "top-start";
    NbGlobalLogicalPosition["TOP_END"] = "top-end";
    NbGlobalLogicalPosition["BOTTOM_START"] = "bottom-start";
    NbGlobalLogicalPosition["BOTTOM_END"] = "bottom-end";
})(NbGlobalLogicalPosition || (NbGlobalLogicalPosition = {}));
export var NbGlobalPhysicalPosition;
(function (NbGlobalPhysicalPosition) {
    NbGlobalPhysicalPosition["TOP_RIGHT"] = "top-right";
    NbGlobalPhysicalPosition["TOP_LEFT"] = "top-left";
    NbGlobalPhysicalPosition["BOTTOM_RIGHT"] = "bottom-right";
    NbGlobalPhysicalPosition["BOTTOM_LEFT"] = "bottom-left";
})(NbGlobalPhysicalPosition || (NbGlobalPhysicalPosition = {}));
export class NbPositionHelper {
    constructor(layoutDirection) {
        this.layoutDirection = layoutDirection;
    }
    toLogicalPosition(position) {
        if (Object.values(NbGlobalLogicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toLogicalPositionWhenLtr(position);
        }
        else {
            return this.toLogicalPositionWhenRtl(position);
        }
    }
    toPhysicalPosition(position) {
        if (Object.values(NbGlobalPhysicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toPhysicalPositionWhenLtr(position);
        }
        else {
            return this.toPhysicalPositionWhenRtl(position);
        }
    }
    isTopPosition(position) {
        const logicalPosition = this.toLogicalPosition(position);
        return logicalPosition === NbGlobalLogicalPosition.TOP_END
            || logicalPosition === NbGlobalLogicalPosition.TOP_START;
    }
    isRightPosition(position) {
        const physicalPosition = this.toPhysicalPosition(position);
        return physicalPosition === NbGlobalPhysicalPosition.TOP_RIGHT
            || physicalPosition === NbGlobalPhysicalPosition.BOTTOM_RIGHT;
    }
    toLogicalPositionWhenLtr(position) {
        switch (position) {
            case NbGlobalPhysicalPosition.TOP_RIGHT:
                return NbGlobalLogicalPosition.TOP_END;
            case NbGlobalPhysicalPosition.TOP_LEFT:
                return NbGlobalLogicalPosition.TOP_START;
            case NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return NbGlobalLogicalPosition.BOTTOM_END;
            case NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return NbGlobalLogicalPosition.BOTTOM_START;
        }
    }
    toLogicalPositionWhenRtl(position) {
        switch (position) {
            case NbGlobalPhysicalPosition.TOP_RIGHT:
                return NbGlobalLogicalPosition.TOP_START;
            case NbGlobalPhysicalPosition.TOP_LEFT:
                return NbGlobalLogicalPosition.TOP_END;
            case NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return NbGlobalLogicalPosition.BOTTOM_START;
            case NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return NbGlobalLogicalPosition.BOTTOM_END;
        }
    }
    toPhysicalPositionWhenLtr(position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return NbGlobalPhysicalPosition.TOP_LEFT;
            case NbGlobalLogicalPosition.TOP_END:
                return NbGlobalPhysicalPosition.TOP_RIGHT;
            case NbGlobalLogicalPosition.BOTTOM_START:
                return NbGlobalPhysicalPosition.BOTTOM_LEFT;
            case NbGlobalLogicalPosition.BOTTOM_END:
                return NbGlobalPhysicalPosition.BOTTOM_RIGHT;
        }
    }
    toPhysicalPositionWhenRtl(position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return NbGlobalPhysicalPosition.TOP_RIGHT;
            case NbGlobalLogicalPosition.TOP_END:
                return NbGlobalPhysicalPosition.TOP_LEFT;
            case NbGlobalLogicalPosition.BOTTOM_START:
                return NbGlobalPhysicalPosition.BOTTOM_RIGHT;
            case NbGlobalLogicalPosition.BOTTOM_END:
                return NbGlobalPhysicalPosition.BOTTOM_LEFT;
        }
    }
}
NbPositionHelper.decorators = [
    { type: Injectable }
];
NbPositionHelper.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
//# sourceMappingURL=position-helper.js.map