/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { DataService } from '../services';
/**
 * The ThreeComponent renders a value and its square.
 */
var ThreeComponent = /** @class */ (function () {
    function ThreeComponent(dataService) {
        this.dataService = dataService;
    }
    /**
     * @return {?}
     */
    ThreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getData().subscribe(function (result) {
            _this.value = result;
        });
    };
    ThreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-component-3',
                    template: "<div>\n  <div id=\"data-container\">Value: {{value}} -- Squared: {{value | square}} </div>\n</div>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    ThreeComponent.ctorParameters = function () { return [
        { type: DataService, },
    ]; };
    return ThreeComponent;
}());
export { ThreeComponent };
function ThreeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ThreeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ThreeComponent.ctorParameters;
    /** @type {?} */
    ThreeComponent.prototype.value;
    /** @type {?} */
    ThreeComponent.prototype.dataService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktcGFja2FnZS9saWIvbW9kdWxlLXRocmVlLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvdGhyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0lBZXhDLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtLQUFJOzs7O0lBRWhELGlDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQ2xELEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztLQUNKOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxvR0FFTDtvQkFDTCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OztnQkFYUSxXQUFXOzt5QkFGcEI7O1NBY2EsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG4vKipcbiAqIFRoZSBUaHJlZUNvbXBvbmVudCByZW5kZXJzIGEgdmFsdWUgYW5kIGl0cyBzcXVhcmUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWNvbXBvbmVudC0zJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8ZGl2IGlkPVwiZGF0YS1jb250YWluZXJcIj5WYWx1ZToge3t2YWx1ZX19IC0tIFNxdWFyZWQ6IHt7dmFsdWUgfCBzcXVhcmV9fSA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGhyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldERhdGEoKS5zdWJzY3JpYmUoKHJlc3VsdDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG4iXX0=