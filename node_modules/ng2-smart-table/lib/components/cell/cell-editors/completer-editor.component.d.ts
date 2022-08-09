import { OnInit } from '@angular/core';
import { CompleterService } from 'ng2-completer';
import { DefaultEditor } from './default-editor';
import * as ɵngcc0 from '@angular/core';
export declare class CompleterEditorComponent extends DefaultEditor implements OnInit {
    private completerService;
    completerStr: string;
    constructor(completerService: CompleterService);
    ngOnInit(): void;
    onEditedCompleter(event: {
        title: '';
    }): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CompleterEditorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CompleterEditorComponent, "completer-editor", never, {}, {}, never, never>;
}

//# sourceMappingURL=completer-editor.component.d.ts.map