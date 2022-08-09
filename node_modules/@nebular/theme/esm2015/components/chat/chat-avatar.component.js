import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
export class NbChatAvatarComponent {
    constructor() {
        this.avatarClass = true;
    }
}
NbChatAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-avatar',
                template: `
    <ng-container *ngIf="!avatarStyle">
      {{ initials }}
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatAvatarComponent.propDecorators = {
    initials: [{ type: Input }],
    avatarStyle: [{ type: Input }, { type: HostBinding, args: ['style.background-image',] }],
    avatarClass: [{ type: HostBinding, args: ['class.avatar',] }]
};
//# sourceMappingURL=chat-avatar.component.js.map