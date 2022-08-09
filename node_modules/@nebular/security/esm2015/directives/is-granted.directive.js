import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAccessChecker } from '../services/access-checker.service';
export class NbIsGrantedDirective {
    constructor(templateRef, viewContainer, accessChecker) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.accessChecker = accessChecker;
        this.destroy$ = new Subject();
        this.hasView = false;
    }
    set nbIsGranted([permission, resource]) {
        this.accessChecker.isGranted(permission, resource)
            .pipe(takeUntil(this.destroy$))
            .subscribe((can) => {
            if (can && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            }
            else if (!can && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbIsGrantedDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbIsGranted]' },] }
];
NbIsGrantedDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: NbAccessChecker }
];
NbIsGrantedDirective.propDecorators = {
    nbIsGranted: [{ type: Input }]
};
//# sourceMappingURL=is-granted.directive.js.map