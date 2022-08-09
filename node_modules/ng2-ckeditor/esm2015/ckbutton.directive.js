import { Directive, EventEmitter, Output, Input } from '@angular/core';
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
export class CKButtonDirective {
    constructor() {
        this.click = new EventEmitter();
    }
    initialize(editor) {
        editor.instance.addCommand(this.command, {
            exec: (evt) => {
                this.click.emit(evt);
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    }
    ngOnInit() {
        if (!this.name)
            throw new Error('Attribute "name" is required on <ckbutton>');
        if (!this.command)
            throw new Error('Attribute "command" is required on <ckbutton>');
    }
}
CKButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ckbutton',
            },] }
];
CKButtonDirective.propDecorators = {
    click: [{ type: Output }],
    label: [{ type: Input }],
    command: [{ type: Input }],
    toolbar: [{ type: Input }],
    name: [{ type: Input }],
    icon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tidXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NrYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9FOzs7Ozs7OztHQVFHO0FBSUgsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUlZLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBMEJ2QyxDQUFDO0lBbkJDLFVBQVUsQ0FBQyxNQUF5QjtRQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCOzs7b0JBRUUsTUFBTTtvQkFDTixLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDS0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2tlZGl0b3IuY29tcG9uZW50JztcblxuLyoqXG4gKiBDS0dyb3VwIGNvbXBvbmVudFxuICogVXNhZ2UgOlxuICogIDxja2VkaXRvciBbKG5nTW9kZWwpXT1cImRhdGFcIiBbY29uZmlnXT1cInsuLi59XCIgZGVib3VuY2U9XCI1MDBcIj5cbiAqICAgICAgPGNrYnV0dG9uIFtuYW1lXT1cIidTYXZlQnV0dG9uJ1wiIFtjb21tYW5kXT1cIidzYXZlQ29tbWFuZCdcIiAoY2xpY2spPVwic2F2ZSgkZXZlbnQpXCJcbiAqICAgICAgICAgICAgICAgIFtpY29uXT1cIicvc2F2ZS5wbmcnXCIgW3Rvb2xiYXJdPVwiJ2N1c3RvbUdyb3VwLDEnXCIgW2xhYmVsXT1cIidTYXZlJ1wiPlxuICogICAgICA8L2NrYnV0dG9uPlxuICogICA8L2NrZWRpdG9yPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdja2J1dHRvbicsXG59KVxuZXhwb3J0IGNsYXNzIENLQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBjb21tYW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2xiYXI6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgaW5pdGlhbGl6ZShlZGl0b3I6IENLRWRpdG9yQ29tcG9uZW50KSB7XG4gICAgZWRpdG9yLmluc3RhbmNlLmFkZENvbW1hbmQodGhpcy5jb21tYW5kLCB7XG4gICAgICBleGVjOiAoZXZ0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jbGljay5lbWl0KGV2dCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZWRpdG9yLmluc3RhbmNlLnVpLmFkZEJ1dHRvbih0aGlzLm5hbWUsIHtcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgY29tbWFuZDogdGhpcy5jb21tYW5kLFxuICAgICAgdG9vbGJhcjogdGhpcy50b29sYmFyLFxuICAgICAgaWNvbjogdGhpcy5pY29uLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5hbWUpIHRocm93IG5ldyBFcnJvcignQXR0cmlidXRlIFwibmFtZVwiIGlzIHJlcXVpcmVkIG9uIDxja2J1dHRvbj4nKTtcbiAgICBpZiAoIXRoaXMuY29tbWFuZCkgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGUgXCJjb21tYW5kXCIgaXMgcmVxdWlyZWQgb24gPGNrYnV0dG9uPicpO1xuICB9XG59XG4iXX0=