/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
/**
 * The is a sample component of common module.
 */
var OneComponent = /** @class */ (function () {
    function OneComponent() {
        this.buttonClicked$ = new EventEmitter();
    }
    OneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-component-1',
                    template: "\n    <button (click)=\"buttonClicked$.emit()\">Click This</button>\n  ",
                    styles: ['']
                },] },
    ];
    /** @nocollapse */
    OneComponent.propDecorators = {
        "buttonClicked$": [{ type: Output },],
    };
    return OneComponent;
}());
export { OneComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXBhY2thZ2UvbGliL21vZHVsZS1vbmUvIiwic291cmNlcyI6WyJzcmMvb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OEJBYWhCLElBQUksWUFBWSxFQUFFOzs7Z0JBUmpFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUseUVBRVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O21DQUVFLE1BQU07O3VCQWJUOztTQVlhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIGlzIGEgc2FtcGxlIGNvbXBvbmVudCBvZiBjb21tb24gbW9kdWxlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiYnV0dG9uQ2xpY2tlZCQuZW1pdCgpXCI+Q2xpY2sgVGhpczwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFsnJ11cbn0pXG5leHBvcnQgY2xhc3MgT25lQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrZWQkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiJdfQ==