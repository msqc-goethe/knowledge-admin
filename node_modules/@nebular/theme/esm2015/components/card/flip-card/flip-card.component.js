import { Component, Input, HostBinding } from '@angular/core';
/**
 *
 * Flip card example:
 * @stacked-example(Showcase, flip-card/flip-card-showcase.component)
 *
 * As a content Flip card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic flip card configuration:
 *
 * ```html
 * <nb-flip-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-flip-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Flip Card with header and footer:
 * @stacked-example(With Header & Footer, flip-card/flip-card-full.component.ts)
 *
 * Colored flip-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, flip-card/flip-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, flip-card/flip-card-accents.component)
 *
 * @additional-example(Multiple Sizes, flip-card/flip-card-sizes.component)
 *
 */
export class NbFlipCardComponent {
    constructor() {
        /**
         * Flip state
         * @type boolean
         */
        this.flipped = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    toggle() {
        this.flipped = !this.flipped;
    }
}
NbFlipCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-flip-card',
                template: `
    <div class="flipcard-body">
      <div class="front-container">
        <ng-content select="nb-card-front"></ng-content>
        <a *ngIf="showToggleButton" class="flip-button" (click)="toggle()">
          <nb-icon icon="chevron-left-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
        </a>
      </div>
      <div class="back-container">
        <ng-content select="nb-card-back"></ng-content>
        <a *ngIf="showToggleButton" class="flip-button" (click)="toggle()">
          <nb-icon icon="chevron-left-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
        </a>
      </div>
    </div>
  `,
                styles: [":host{display:block;perspective:1200px;position:relative}:host-context(.flipped) .flipcard-body{transform:rotateY(-180deg)}:host-context(.flipped) .flipcard-body .front-container{opacity:0;transition:opacity 0s 0.25s;backface-visibility:hidden;-webkit-backface-visibility:hidden}:host-context(.flipped) .flipcard-body .front-container .flip-button{opacity:0;z-index:-1}:host-context(.flipped) .flipcard-body .back-container{backface-visibility:visible;-webkit-backface-visibility:visible}.flipcard-body{display:flex;transition:transform 0.5s;transform-style:preserve-3d}.flipcard-body .front-container,.flipcard-body .back-container{flex:1}.flipcard-body .front-container .flip-button,.flipcard-body .back-container .flip-button{cursor:pointer;position:absolute;right:0;bottom:0;opacity:1;transition:opacity 0s 0.15s}.flipcard-body .front-container{backface-visibility:visible;-webkit-backface-visibility:visible;transition:opacity 0s 0.2s}.flipcard-body .back-container{backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg)}\n"]
            },] }
];
NbFlipCardComponent.propDecorators = {
    flipped: [{ type: Input }, { type: HostBinding, args: ['class.flipped',] }],
    showToggleButton: [{ type: Input }]
};
//# sourceMappingURL=flip-card.component.js.map