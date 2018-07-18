/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
/**
 * The is a sample component of common module.
 */
export class OneComponent {
    constructor() {
        this.buttonClicked$ = new EventEmitter();
    }
}
OneComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-component-1',
                template: `
    <button (click)="buttonClicked$.emit()">Click This</button>
  `,
                styles: ['']
            },] },
];
/** @nocollapse */
OneComponent.propDecorators = {
    "buttonClicked$": [{ type: Output },],
};
function OneComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    OneComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    OneComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    OneComponent.propDecorators;
    /** @type {?} */
    OneComponent.prototype.buttonClicked$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXBhY2thZ2UvIiwic291cmNlcyI6WyJtb2R1bGUtb25lL3NyYy9vbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZaEUsTUFBTTs7OEJBQzBDLElBQUksWUFBWSxFQUFFOzs7O1lBUmpFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7K0JBRUUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgaXMgYSBzYW1wbGUgY29tcG9uZW50IG9mIGNvbW1vbiBtb2R1bGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWNvbXBvbmVudC0xJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIChjbGljayk9XCJidXR0b25DbGlja2VkJC5lbWl0KClcIj5DbGljayBUaGlzPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogWycnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmVDb21wb25lbnQge1xuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2tlZCQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19