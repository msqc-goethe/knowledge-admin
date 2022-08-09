import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { NbAccessChecker } from '../services/access-checker.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbIsGrantedDirective implements OnDestroy {
    private templateRef;
    private viewContainer;
    private accessChecker;
    private destroy$;
    private hasView;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, accessChecker: NbAccessChecker);
    set nbIsGranted([permission, resource]: [string, string]);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbIsGrantedDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<NbIsGrantedDirective, "[nbIsGranted]", never, { "nbIsGranted": "nbIsGranted"; }, {}, never>;
}

//# sourceMappingURL=is-granted.directive.d.ts.map