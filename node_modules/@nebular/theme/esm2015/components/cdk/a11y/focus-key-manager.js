import { FocusKeyManager } from '@angular/cdk/a11y';
export class NbFocusKeyManager extends FocusKeyManager {
}
export class NbFocusKeyManagerFactoryService {
    create(items) {
        return new NbFocusKeyManager(items);
    }
}
//# sourceMappingURL=focus-key-manager.js.map