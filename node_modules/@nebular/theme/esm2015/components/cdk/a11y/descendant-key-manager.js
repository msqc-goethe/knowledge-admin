import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
export class NbActiveDescendantKeyManager extends ActiveDescendantKeyManager {
}
export class NbActiveDescendantKeyManagerFactoryService {
    create(items) {
        return new NbActiveDescendantKeyManager(items);
    }
}
export var NbKeyManagerActiveItemMode;
(function (NbKeyManagerActiveItemMode) {
    NbKeyManagerActiveItemMode[NbKeyManagerActiveItemMode["RESET_ACTIVE"] = -1] = "RESET_ACTIVE";
    NbKeyManagerActiveItemMode[NbKeyManagerActiveItemMode["FIRST_ACTIVE"] = 0] = "FIRST_ACTIVE";
})(NbKeyManagerActiveItemMode || (NbKeyManagerActiveItemMode = {}));
//# sourceMappingURL=descendant-key-manager.js.map