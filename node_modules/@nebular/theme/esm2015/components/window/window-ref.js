import { ReplaySubject, Subject } from 'rxjs';
import { NbWindowState } from './window.options';
/**
 * The `NbWindowRef` helps to manipulate window after it was created.
 * The window can be dismissed by using `close` method of the windowRef.
 * You can access rendered component as `componentRef` property of the windowRef.
 */
export class NbWindowRef {
    constructor(config) {
        this.config = config;
        this.stateChange$ = new ReplaySubject(1);
        this._closed = false;
        this.closed$ = new Subject();
        this.state = config.initialState;
    }
    /**
     * Current window state.
     */
    get state() {
        return this.stateValue;
    }
    set state(newState) {
        if (newState && this.stateValue !== newState) {
            this.prevStateValue = this.state;
            this.stateValue = newState;
            this.stateChange$.next({ oldState: this.prevStateValue, newState });
        }
    }
    /**
     * Emits when window state change.
     */
    get stateChange() {
        return this.stateChange$.asObservable();
    }
    /**
     * Emits when window was closed.
     */
    get onClose() {
        return this.closed$.asObservable();
    }
    /**
     * Minimize window.
     */
    minimize() {
        this.state = NbWindowState.MINIMIZED;
    }
    /**
     * Maximize window.
     */
    maximize() {
        this.state = NbWindowState.MAXIMIZED;
    }
    /**
     * Set window on top.
     */
    fullScreen() {
        this.state = NbWindowState.FULL_SCREEN;
    }
    toPreviousState() {
        this.state = this.prevStateValue;
    }
    /**
     * Closes window.
     * */
    close() {
        if (this._closed) {
            return;
        }
        this._closed = true;
        this.componentRef.destroy();
        this.stateChange$.complete();
        this.closed$.next();
        this.closed$.complete();
    }
}
//# sourceMappingURL=window-ref.js.map