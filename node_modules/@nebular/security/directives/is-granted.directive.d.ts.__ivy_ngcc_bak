import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { NbAccessChecker } from '../services/access-checker.service';
export declare class NbIsGrantedDirective implements OnDestroy {
    private templateRef;
    private viewContainer;
    private accessChecker;
    private destroy$;
    private hasView;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, accessChecker: NbAccessChecker);
    set nbIsGranted([permission, resource]: [string, string]);
    ngOnDestroy(): void;
}
