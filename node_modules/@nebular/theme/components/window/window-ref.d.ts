import { ComponentRef } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NbWindowComponent } from './window.component';
import { NbWindowConfig, NbWindowState, NbWindowStateChange } from './window.options';
/**
 * The `NbWindowRef` helps to manipulate window after it was created.
 * The window can be dismissed by using `close` method of the windowRef.
 * You can access rendered component as `componentRef` property of the windowRef.
 */
export declare class NbWindowRef {
    config: NbWindowConfig;
    componentRef: ComponentRef<NbWindowComponent>;
    protected prevStateValue: NbWindowState;
    protected stateValue: NbWindowState;
    /**
     * Current window state.
     */
    get state(): NbWindowState;
    set state(newState: NbWindowState);
    protected stateChange$: ReplaySubject<NbWindowStateChange>;
    /**
     * Emits when window state change.
     */
    get stateChange(): Observable<NbWindowStateChange>;
    protected _closed: boolean;
    protected closed$: Subject<unknown>;
    /**
     * Emits when window was closed.
     */
    get onClose(): Observable<unknown>;
    constructor(config: NbWindowConfig);
    /**
     * Minimize window.
     */
    minimize(): void;
    /**
     * Maximize window.
     */
    maximize(): void;
    /**
     * Set window on top.
     */
    fullScreen(): void;
    toPreviousState(): void;
    /**
     * Closes window.
     * */
    close(): void;
}
