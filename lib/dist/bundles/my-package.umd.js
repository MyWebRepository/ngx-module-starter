(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('my-package', ['exports', '@angular/core', '@angular/common', 'rxjs'], factory) :
    (factory((global['my-package'] = {}),global.ng.core,global.ng.common,global.rxjs));
}(this, (function (exports,core,common,rxjs) { 'use strict';

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
    var TwoComponent = (function () {
        function TwoComponent() {
        }
        TwoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'my-component-2',
                        template: '<p>Module Two Component!</p>',
                        styles: ['p {color: blue;}']
                    },] },
        ];
        return TwoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TwoModule = (function () {
        function TwoModule() {
        }
        TwoModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TwoComponent],
                        exports: [TwoComponent]
                    },] },
        ];
        return TwoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * The service DataService provides a method returning a number
     */
    var DataService = (function () {
        function DataService() {
        }
        /**
         * The method getData returns a generic observable
         * @return {?}
         */
        DataService.prototype.getData = /**
         * The method getData returns a generic observable
         * @return {?}
         */
            function () {
                return rxjs.Observable.of(15);
            };
        DataService.decorators = [
            { type: core.Injectable },
        ];
        return DataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * The ThreeComponent renders a value and its square.
     */
    var ThreeComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'my-component-3',
                        template: "<div>\n  <div id=\"data-container\">Value: {{value}} -- Squared: {{value | square}} </div>\n</div>",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        ThreeComponent.ctorParameters = function () {
            return [
                { type: DataService, },
            ];
        };
        return ThreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * The SquarePipe converts a number to its square
     */
    var SquarePipe = (function () {
        function SquarePipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SquarePipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ val = parseFloat(String(value));
                return Math.pow(val, 2);
            };
        SquarePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'square' },] },
        ];
        return SquarePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * The module registers component, service and pipe created in the module
     */
    var ThreeModule = (function () {
        function ThreeModule() {
        }
        ThreeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [ThreeComponent, SquarePipe],
                        exports: [ThreeComponent, SquarePipe],
                        providers: [DataService]
                    },] },
        ];
        return ThreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.OneModule = OneModule;
    exports.TwoModule = TwoModule;
    exports.ThreeModule = ThreeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGFja2FnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL215LXBhY2thZ2UvbW9kdWxlLW9uZS9zcmMvb25lLmNvbXBvbmVudC50cyIsIm5nOi8vbXktcGFja2FnZS9tb2R1bGUtb25lL3NyYy9vbmUubW9kdWxlLnRzIiwibmc6Ly9teS1wYWNrYWdlL21vZHVsZS10d28vc3JjL3R3by5jb21wb25lbnQudHMiLCJuZzovL215LXBhY2thZ2UvbW9kdWxlLXR3by9zcmMvdHdvLm1vZHVsZS50cyIsIm5nOi8vbXktcGFja2FnZS9tb2R1bGUtdGhyZWUvc3JjL3NlcnZpY2VzL2RhdGEuc2VydmljZS50cyIsIm5nOi8vbXktcGFja2FnZS9tb2R1bGUtdGhyZWUvc3JjL2NvbXBvbmVudHMvdGhyZWUuY29tcG9uZW50LnRzIiwibmc6Ly9teS1wYWNrYWdlL21vZHVsZS10aHJlZS9zcmMvcGlwZXMvc3F1YXJlLnBpcGUudHMiLCJuZzovL215LXBhY2thZ2UvbW9kdWxlLXRocmVlL3NyYy90aHJlZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBpcyBhIHNhbXBsZSBjb21wb25lbnQgb2YgY29tbW9uIG1vZHVsZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29tcG9uZW50LTEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gKGNsaWNrKT1cImJ1dHRvbkNsaWNrZWQkLmVtaXQoKVwiPkNsaWNrIFRoaXM8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbJyddXG59KVxuZXhwb3J0IGNsYXNzIE9uZUNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSBidXR0b25DbGlja2VkJDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9uZUNvbXBvbmVudCB9IGZyb20gJy4vb25lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtPbmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT25lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBPbmVNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMicsXG4gIHRlbXBsYXRlOiAnPHA+TW9kdWxlIFR3byBDb21wb25lbnQhPC9wPicsXG4gIHN0eWxlczogWydwIHtjb2xvcjogYmx1ZTt9J11cbn0pXG5leHBvcnQgY2xhc3MgVHdvQ29tcG9uZW50IHtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHdvQ29tcG9uZW50IH0gZnJvbSAnLi90d28uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1R3b0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUd29Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFR3b01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFRoZSBzZXJ2aWNlIERhdGFTZXJ2aWNlIHByb3ZpZGVzIGEgbWV0aG9kIHJldHVybmluZyBhIG51bWJlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIG1ldGhvZCBnZXREYXRhIHJldHVybnMgYSBnZW5lcmljIG9ic2VydmFibGVcbiAgICovXG4gIHB1YmxpYyBnZXREYXRhKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YoMTUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuLyoqXG4gKiBUaGUgVGhyZWVDb21wb25lbnQgcmVuZGVycyBhIHZhbHVlIGFuZCBpdHMgc3F1YXJlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMycsXG4gIHRlbXBsYXRlOiBgPGRpdj5cbiAgPGRpdiBpZD1cImRhdGEtY29udGFpbmVyXCI+VmFsdWU6IHt7dmFsdWV9fSAtLSBTcXVhcmVkOiB7e3ZhbHVlIHwgc3F1YXJlfX0gPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRocmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHZhbHVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXREYXRhKCkuc3Vic2NyaWJlKChyZXN1bHQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBTcXVhcmVQaXBlIGNvbnZlcnRzIGEgbnVtYmVyIHRvIGl0cyBzcXVhcmVcbiAqL1xuQFBpcGUoe25hbWU6ICdzcXVhcmUnfSlcbmV4cG9ydCBjbGFzcyBTcXVhcmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWw6IG51bWJlciA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gTWF0aC5wb3codmFsLCAyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaHJlZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgU3F1YXJlUGlwZX0gZnJvbSAnLi9waXBlcyc7XG5cbi8qKlxuICogVGhlIG1vZHVsZSByZWdpc3RlcnMgY29tcG9uZW50LCBzZXJ2aWNlIGFuZCBwaXBlIGNyZWF0ZWQgaW4gdGhlIG1vZHVsZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVGhyZWVDb21wb25lbnQsIFNxdWFyZVBpcGVdLFxuICBleHBvcnRzOiBbVGhyZWVDb21wb25lbnQsIFNxdWFyZVBpcGVdLFxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVGhyZWVNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk9ic2VydmFibGUiLCJJbmplY3RhYmxlIiwiUGlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OztrQ0FhZ0QsSUFBSUEsaUJBQVksRUFBRTs7O29CQVJqRUMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSx5RUFFVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7dUNBRUVDLFdBQU07OzJCQWJUOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksQ0FBQzt3QkFDdkIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3hCOzt3QkFSRDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7b0JBRUNILGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsOEJBQThCO3dCQUN4QyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDN0I7OzJCQU5EOzs7Ozs7O0FDQUE7Ozs7b0JBSUNFLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksQ0FBQzt3QkFDdkIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3hCOzt3QkFSRDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7UUFXUyw2QkFBTzs7Ozs7Z0JBQ1osT0FBT0MsZUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O29CQU41QkMsZUFBVTs7MEJBTlg7Ozs7Ozs7Ozs7OztBQ0FBOzs7O1FBaUJFLHdCQUFvQixXQUF3QjtZQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtTQUFJOzs7O1FBRWhELGlDQUFROzs7WUFBUjtnQkFBQSxpQkFJQztnQkFIQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWM7b0JBQ2xELEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2lCQUNyQixDQUFDLENBQUM7YUFDSjs7b0JBaEJGTCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLG9HQUVMO3dCQUNMLE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7Ozt3QkFYUSxXQUFXOzs7NkJBRnBCOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztRQU9FLDhCQUFTOzs7O1lBQVQsVUFBVSxLQUFhO2dCQUNyQixxQkFBTSxHQUFHLEdBQVcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3pCOztvQkFORk0sU0FBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQzs7eUJBTHRCOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztvQkFTQ0osYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxDQUFDO3dCQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO3dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO3dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7cUJBQ3pCOzswQkFkRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9