import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { NB_DOCUMENT } from '../../../theme.options';
import { NbFlexibleConnectedPositionStrategy, NbOverlayPositionBuilder, } from './mapping';
import { NbPlatform } from '../platform/platform-service';
import { NbOverlayContainerAdapter } from '../adapter/overlay-container-adapter';
import { NbViewportRulerAdapter } from '../adapter/viewport-ruler-adapter';
import { NbGlobalLogicalPosition } from './position-helper';
import { GlobalPositionStrategy } from '@angular/cdk/overlay';
export var NbAdjustment;
(function (NbAdjustment) {
    NbAdjustment["NOOP"] = "noop";
    NbAdjustment["CLOCKWISE"] = "clockwise";
    NbAdjustment["COUNTERCLOCKWISE"] = "counterclockwise";
    NbAdjustment["VERTICAL"] = "vertical";
    NbAdjustment["HORIZONTAL"] = "horizontal";
})(NbAdjustment || (NbAdjustment = {}));
export var NbPosition;
(function (NbPosition) {
    NbPosition["TOP"] = "top";
    NbPosition["BOTTOM"] = "bottom";
    NbPosition["LEFT"] = "left";
    NbPosition["RIGHT"] = "right";
    NbPosition["START"] = "start";
    NbPosition["END"] = "end";
    NbPosition["TOP_END"] = "top-end";
    NbPosition["TOP_START"] = "top-start";
    NbPosition["BOTTOM_END"] = "bottom-end";
    NbPosition["BOTTOM_START"] = "bottom-start";
    NbPosition["END_TOP"] = "end-top";
    NbPosition["END_BOTTOM"] = "end-bottom";
    NbPosition["START_TOP"] = "start-top";
    NbPosition["START_BOTTOM"] = "start-bottom";
})(NbPosition || (NbPosition = {}));
const POSITIONS = {
    [NbPosition.RIGHT](offset) {
        return { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: offset };
    },
    [NbPosition.BOTTOM](offset) {
        return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: offset };
    },
    [NbPosition.LEFT](offset) {
        return { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -offset };
    },
    [NbPosition.TOP](offset) {
        return { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -offset };
    },
    [NbPosition.START](offset) {
        return this[NbPosition.LEFT](offset);
    },
    [NbPosition.END](offset) {
        return this[NbPosition.RIGHT](offset);
    },
    [NbPosition.END_TOP](offset) {
        return { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'bottom', offsetX: offset };
    },
    [NbPosition.END_BOTTOM](offset) {
        return { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: offset };
    },
    [NbPosition.BOTTOM_START](offset) {
        return { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: offset };
    },
    [NbPosition.BOTTOM_END](offset) {
        return { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: offset };
    },
    [NbPosition.START_TOP](offset) {
        return { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'bottom', offsetX: -offset };
    },
    [NbPosition.START_BOTTOM](offset) {
        return { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top', offsetX: -offset };
    },
    [NbPosition.TOP_START](offset) {
        return { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetY: -offset };
    },
    [NbPosition.TOP_END](offset) {
        return { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -offset };
    },
};
const COUNTER_CLOCKWISE_POSITIONS = [
    NbPosition.TOP,
    NbPosition.TOP_END,
    NbPosition.TOP_START,
    NbPosition.START,
    NbPosition.START_TOP,
    NbPosition.START_BOTTOM,
    NbPosition.BOTTOM,
    NbPosition.BOTTOM_START,
    NbPosition.BOTTOM_END,
    NbPosition.END,
    NbPosition.END_BOTTOM,
    NbPosition.END_TOP,
];
const CLOCKWISE_POSITIONS = [
    NbPosition.TOP,
    NbPosition.TOP_START,
    NbPosition.TOP_END,
    NbPosition.END,
    NbPosition.END_TOP,
    NbPosition.END_BOTTOM,
    NbPosition.BOTTOM,
    NbPosition.BOTTOM_END,
    NbPosition.BOTTOM_START,
    NbPosition.START,
    NbPosition.START_BOTTOM,
    NbPosition.START_TOP,
];
const VERTICAL_POSITIONS = [NbPosition.BOTTOM, NbPosition.TOP];
const HORIZONTAL_POSITIONS = [NbPosition.START, NbPosition.END];
function comparePositions(p1, p2) {
    return p1.originX === p2.originX
        && p1.originY === p2.originY
        && p1.overlayX === p2.overlayX
        && p1.overlayY === p2.overlayY;
}
/**
 * The main idea of the adjustable connected strategy is to provide predefined set of positions for your overlay.
 * You have to provide adjustment and appropriate strategy will be chosen in runtime.
 * */
export class NbAdjustableConnectedPositionStrategy extends NbFlexibleConnectedPositionStrategy {
    constructor() {
        super(...arguments);
        this._offset = 15;
        this.positionChange = this.positionChanges.pipe(map((positionChange) => positionChange.connectionPair), map((connectionPair) => {
            return this.appliedPositions.find(({ connectedPosition }) => {
                return comparePositions(connectedPosition, connectionPair);
            }).key;
        }));
    }
    attach(overlayRef) {
        /**
         * We have to apply positions before attach because super.attach() validates positions and crashes app
         * if no positions provided.
         * */
        this.applyPositions();
        super.attach(overlayRef);
    }
    apply() {
        this.applyPositions();
        super.apply();
    }
    position(position) {
        this._position = position;
        return this;
    }
    adjustment(adjustment) {
        this._adjustment = adjustment;
        return this;
    }
    offset(offset) {
        this._offset = offset;
        return this;
    }
    applyPositions() {
        const positions = this.createPositions();
        this.persistChosenPositions(positions);
        this.withPositions(this.appliedPositions.map(({ connectedPosition }) => connectedPosition));
    }
    createPositions() {
        switch (this._adjustment) {
            case NbAdjustment.NOOP:
                return [this._position];
            case NbAdjustment.CLOCKWISE:
                return this.reorderPreferredPositions(CLOCKWISE_POSITIONS);
            case NbAdjustment.COUNTERCLOCKWISE:
                return this.reorderPreferredPositions(COUNTER_CLOCKWISE_POSITIONS);
            case NbAdjustment.HORIZONTAL:
                return this.reorderPreferredPositions(HORIZONTAL_POSITIONS);
            case NbAdjustment.VERTICAL:
                return this.reorderPreferredPositions(VERTICAL_POSITIONS);
        }
    }
    persistChosenPositions(positions) {
        this.appliedPositions = positions.map(position => ({
            key: position,
            connectedPosition: POSITIONS[position](this._offset),
        }));
    }
    reorderPreferredPositions(positions) {
        // Physical positions should be mapped to logical as adjustments use logical positions.
        const startPositionIndex = positions.indexOf(this.mapToLogicalPosition(this._position));
        const firstPart = positions.slice(startPositionIndex);
        const secondPart = positions.slice(0, startPositionIndex);
        return firstPart.concat(secondPart);
    }
    mapToLogicalPosition(position) {
        if (position === NbPosition.LEFT) {
            return NbPosition.START;
        }
        if (position === NbPosition.RIGHT) {
            return NbPosition.END;
        }
        return position;
    }
}
export class NbGlobalPositionStrategy extends GlobalPositionStrategy {
    position(position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return this.top().left();
            case NbGlobalLogicalPosition.TOP_END:
                return this.top().right();
            case NbGlobalLogicalPosition.BOTTOM_START:
                return this.bottom().left();
            case NbGlobalLogicalPosition.BOTTOM_END:
                return this.bottom().right();
        }
    }
}
export class NbPositionBuilderService {
    constructor(document, viewportRuler, platform, positionBuilder, overlayContainer) {
        this.document = document;
        this.viewportRuler = viewportRuler;
        this.platform = platform;
        this.positionBuilder = positionBuilder;
        this.overlayContainer = overlayContainer;
    }
    global() {
        return new NbGlobalPositionStrategy();
    }
    connectedTo(elementRef) {
        return new NbAdjustableConnectedPositionStrategy(elementRef, this.viewportRuler, this.document, this.platform, this.overlayContainer)
            .withFlexibleDimensions(false)
            .withPush(false);
    }
}
NbPositionBuilderService.decorators = [
    { type: Injectable }
];
NbPositionBuilderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbViewportRulerAdapter },
    { type: NbPlatform },
    { type: NbOverlayPositionBuilder },
    { type: NbOverlayContainerAdapter }
];
//# sourceMappingURL=overlay-position.js.map