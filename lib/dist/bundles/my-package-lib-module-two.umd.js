(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('my-package/lib/module-two', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['my-package'] = global['my-package'] || {}, global['my-package'].lib = global['my-package'].lib || {}, global['my-package'].lib['module-two'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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

    exports.TwoModule = TwoModule;
    exports.ɵa = TwoComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGFja2FnZS1saWItbW9kdWxlLXR3by51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL215LXBhY2thZ2UvbGliL21vZHVsZS10d28vc3JjL3R3by5jb21wb25lbnQudHMiLCJuZzovL215LXBhY2thZ2UvbGliL21vZHVsZS10d28vc3JjL3R3by5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWNvbXBvbmVudC0yJyxcbiAgdGVtcGxhdGU6ICc8cD5Nb2R1bGUgVHdvIENvbXBvbmVudCE8L3A+JyxcbiAgc3R5bGVzOiBbJ3Age2NvbG9yOiBibHVlO30nXVxufSlcbmV4cG9ydCBjbGFzcyBUd29Db21wb25lbnQge1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUd29Db21wb25lbnQgfSBmcm9tICcuL3R3by5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVHdvQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1R3b0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVHdvTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztvQkFFQ0EsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSw4QkFBOEI7d0JBQ3hDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUM3Qjs7MkJBTkQ7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxDQUFDO3dCQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDeEI7O3dCQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=