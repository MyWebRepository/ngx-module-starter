(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('my-package/lib/module-three', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (factory((global['my-package'] = global['my-package'] || {}, global['my-package'].lib = global['my-package'].lib || {}, global['my-package'].lib['module-three'] = {}),global.ng.core,global.rxjs,global.ng.common));
}(this, (function (exports,core,rxjs,common) { 'use strict';

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

    exports.ThreeModule = ThreeModule;
    exports.ɵa = ThreeComponent;
    exports.ɵb = SquarePipe;
    exports.ɵc = DataService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGFja2FnZS1saWItbW9kdWxlLXRocmVlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXktcGFja2FnZS9saWIvbW9kdWxlLXRocmVlL3NyYy9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UudHMiLCJuZzovL215LXBhY2thZ2UvbGliL21vZHVsZS10aHJlZS9zcmMvY29tcG9uZW50cy90aHJlZS5jb21wb25lbnQudHMiLCJuZzovL215LXBhY2thZ2UvbGliL21vZHVsZS10aHJlZS9zcmMvcGlwZXMvc3F1YXJlLnBpcGUudHMiLCJuZzovL215LXBhY2thZ2UvbGliL21vZHVsZS10aHJlZS9zcmMvdGhyZWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBUaGUgc2VydmljZSBEYXRhU2VydmljZSBwcm92aWRlcyBhIG1ldGhvZCByZXR1cm5pbmcgYSBudW1iZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSBtZXRob2QgZ2V0RGF0YSByZXR1cm5zIGEgZ2VuZXJpYyBvYnNlcnZhYmxlXG4gICAqL1xuICBwdWJsaWMgZ2V0RGF0YSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKDE1KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbi8qKlxuICogVGhlIFRocmVlQ29tcG9uZW50IHJlbmRlcnMgYSB2YWx1ZSBhbmQgaXRzIHNxdWFyZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29tcG9uZW50LTMnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gIDxkaXYgaWQ9XCJkYXRhLWNvbnRhaW5lclwiPlZhbHVlOiB7e3ZhbHVlfX0gLS0gU3F1YXJlZDoge3t2YWx1ZSB8IHNxdWFyZX19IDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUaHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0RGF0YSgpLnN1YnNjcmliZSgocmVzdWx0OiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgU3F1YXJlUGlwZSBjb252ZXJ0cyBhIG51bWJlciB0byBpdHMgc3F1YXJlXG4gKi9cbkBQaXBlKHtuYW1lOiAnc3F1YXJlJ30pXG5leHBvcnQgY2xhc3MgU3F1YXJlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdmFsOiBudW1iZXIgPSBwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIE1hdGgucG93KHZhbCwgMik7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGhyZWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IFNxdWFyZVBpcGV9IGZyb20gJy4vcGlwZXMnO1xuXG4vKipcbiAqIFRoZSBtb2R1bGUgcmVnaXN0ZXJzIGNvbXBvbmVudCwgc2VydmljZSBhbmQgcGlwZSBjcmVhdGVkIGluIHRoZSBtb2R1bGVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RocmVlQ29tcG9uZW50LCBTcXVhcmVQaXBlXSxcbiAgZXhwb3J0czogW1RocmVlQ29tcG9uZW50LCBTcXVhcmVQaXBlXSxcbiAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFRocmVlTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiT2JzZXJ2YWJsZSIsIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJQaXBlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztRQVdTLDZCQUFPOzs7OztnQkFDWixPQUFPQSxlQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7b0JBTjVCQyxlQUFVOzswQkFOWDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7UUFpQkUsd0JBQW9CLFdBQXdCO1lBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1NBQUk7Ozs7UUFFaEQsaUNBQVE7OztZQUFSO2dCQUFBLGlCQUlDO2dCQUhDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBYztvQkFDbEQsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7aUJBQ3JCLENBQUMsQ0FBQzthQUNKOztvQkFoQkZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsb0dBRUw7d0JBQ0wsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7O3dCQVhRLFdBQVc7Ozs2QkFGcEI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O1FBT0UsOEJBQVM7Ozs7WUFBVCxVQUFVLEtBQWE7Z0JBQ3JCLHFCQUFNLEdBQUcsR0FBVyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRTlDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDekI7O29CQU5GQyxTQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDOzt5QkFMdEI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O29CQVNDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLG1CQUFZLENBQUM7d0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUM7d0JBQzFDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUM7d0JBQ3JDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDekI7OzBCQWREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==