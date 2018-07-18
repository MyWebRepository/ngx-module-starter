(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('my-package/lib/module-one', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['my-package'] = global['my-package'] || {}, global['my-package'].lib = global['my-package'].lib || {}, global['my-package'].lib['module-one'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * The is a sample component of common module.
     */
    var OneComponent = (function () {
        function OneComponent() {
            this.buttonClicked$ = new core.EventEmitter();
        }
        OneComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'my-component-1',
                        template: "\n    <button (click)=\"buttonClicked$.emit()\">Click This</button>\n  ",
                        styles: ['']
                    },] },
        ];
        /** @nocollapse */
        OneComponent.propDecorators = {
            "buttonClicked$": [{ type: core.Output },],
        };
        return OneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var OneModule = (function () {
        function OneModule() {
        }
        OneModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [OneComponent],
                        exports: [OneComponent]
                    },] },
        ];
        return OneModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.OneModule = OneModule;
    exports.ɵa = OneComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGFja2FnZS1saWItbW9kdWxlLW9uZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL215LXBhY2thZ2UvbGliL21vZHVsZS1vbmUvc3JjL29uZS5jb21wb25lbnQudHMiLCJuZzovL215LXBhY2thZ2UvbGliL21vZHVsZS1vbmUvc3JjL29uZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBpcyBhIHNhbXBsZSBjb21wb25lbnQgb2YgY29tbW9uIG1vZHVsZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29tcG9uZW50LTEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gKGNsaWNrKT1cImJ1dHRvbkNsaWNrZWQkLmVtaXQoKVwiPkNsaWNrIFRoaXM8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbJyddXG59KVxuZXhwb3J0IGNsYXNzIE9uZUNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSBidXR0b25DbGlja2VkJDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9uZUNvbXBvbmVudCB9IGZyb20gJy4vb25lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtPbmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT25lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBPbmVNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OztrQ0FhZ0QsSUFBSUEsaUJBQVksRUFBRTs7O29CQVJqRUMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSx5RUFFVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7dUNBRUVDLFdBQU07OzJCQWJUOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksQ0FBQzt3QkFDdkIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3hCOzt3QkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9