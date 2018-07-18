import { Component, EventEmitter, Output, NgModule, Injectable, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The is a sample component of common module.
 */
class OneComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OneModule {
}
OneModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [OneComponent],
                exports: [OneComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TwoComponent {
}
TwoComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-component-2',
                template: '<p>Module Two Component!</p>',
                styles: ['p {color: blue;}']
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TwoModule {
}
TwoModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TwoComponent],
                exports: [TwoComponent]
            },] },
];

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
class DataService {
    /**
     * The method getData returns a generic observable
     * @return {?}
     */
    getData() {
        return Observable.of(15);
    }
}
DataService.decorators = [
    { type: Injectable },
];

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
class ThreeComponent {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataService.getData().subscribe((result) => {
            this.value = result;
        });
    }
}
ThreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-component-3',
                template: `<div>
  <div id="data-container">Value: {{value}} -- Squared: {{value | square}} </div>
</div>`,
                styles: []
            },] },
];
/** @nocollapse */
ThreeComponent.ctorParameters = () => [
    { type: DataService, },
];

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
class SquarePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        const /** @type {?} */ val = parseFloat(String(value));
        return Math.pow(val, 2);
    }
}
SquarePipe.decorators = [
    { type: Pipe, args: [{ name: 'square' },] },
];

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
class ThreeModule {
}
ThreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ThreeComponent, SquarePipe],
                exports: [ThreeComponent, SquarePipe],
                providers: [DataService]
            },] },
];

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

export { OneModule, TwoModule, ThreeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGFja2FnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXktcGFja2FnZS9tb2R1bGUtb25lL3NyYy9vbmUuY29tcG9uZW50LnRzIiwibmc6Ly9teS1wYWNrYWdlL21vZHVsZS1vbmUvc3JjL29uZS5tb2R1bGUudHMiLCJuZzovL215LXBhY2thZ2UvbW9kdWxlLXR3by9zcmMvdHdvLmNvbXBvbmVudC50cyIsIm5nOi8vbXktcGFja2FnZS9tb2R1bGUtdHdvL3NyYy90d28ubW9kdWxlLnRzIiwibmc6Ly9teS1wYWNrYWdlL21vZHVsZS10aHJlZS9zcmMvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9teS1wYWNrYWdlL21vZHVsZS10aHJlZS9zcmMvY29tcG9uZW50cy90aHJlZS5jb21wb25lbnQudHMiLCJuZzovL215LXBhY2thZ2UvbW9kdWxlLXRocmVlL3NyYy9waXBlcy9zcXVhcmUucGlwZS50cyIsIm5nOi8vbXktcGFja2FnZS9tb2R1bGUtdGhyZWUvc3JjL3RocmVlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIGlzIGEgc2FtcGxlIGNvbXBvbmVudCBvZiBjb21tb24gbW9kdWxlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiYnV0dG9uQ2xpY2tlZCQuZW1pdCgpXCI+Q2xpY2sgVGhpczwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFsnJ11cbn0pXG5leHBvcnQgY2xhc3MgT25lQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrZWQkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT25lQ29tcG9uZW50IH0gZnJvbSAnLi9vbmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW09uZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPbmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE9uZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWNvbXBvbmVudC0yJyxcbiAgdGVtcGxhdGU6ICc8cD5Nb2R1bGUgVHdvIENvbXBvbmVudCE8L3A+JyxcbiAgc3R5bGVzOiBbJ3Age2NvbG9yOiBibHVlO30nXVxufSlcbmV4cG9ydCBjbGFzcyBUd29Db21wb25lbnQge1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUd29Db21wb25lbnQgfSBmcm9tICcuL3R3by5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVHdvQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1R3b0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVHdvTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogVGhlIHNlcnZpY2UgRGF0YVNlcnZpY2UgcHJvdmlkZXMgYSBtZXRob2QgcmV0dXJuaW5nIGEgbnVtYmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIGdldERhdGEgcmV0dXJucyBhIGdlbmVyaWMgb2JzZXJ2YWJsZVxuICAgKi9cbiAgcHVibGljIGdldERhdGEoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZigxNSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG4vKipcbiAqIFRoZSBUaHJlZUNvbXBvbmVudCByZW5kZXJzIGEgdmFsdWUgYW5kIGl0cyBzcXVhcmUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWNvbXBvbmVudC0zJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8ZGl2IGlkPVwiZGF0YS1jb250YWluZXJcIj5WYWx1ZToge3t2YWx1ZX19IC0tIFNxdWFyZWQ6IHt7dmFsdWUgfCBzcXVhcmV9fSA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGhyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldERhdGEoKS5zdWJzY3JpYmUoKHJlc3VsdDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIFNxdWFyZVBpcGUgY29udmVydHMgYSBudW1iZXIgdG8gaXRzIHNxdWFyZVxuICovXG5AUGlwZSh7bmFtZTogJ3NxdWFyZSd9KVxuZXhwb3J0IGNsYXNzIFNxdWFyZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHZhbDogbnVtYmVyID0gcGFyc2VGbG9hdChTdHJpbmcodmFsdWUpKTtcblxuICAgIHJldHVybiBNYXRoLnBvdyh2YWwsIDIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRocmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBTcXVhcmVQaXBlfSBmcm9tICcuL3BpcGVzJztcblxuLyoqXG4gKiBUaGUgbW9kdWxlIHJlZ2lzdGVycyBjb21wb25lbnQsIHNlcnZpY2UgYW5kIHBpcGUgY3JlYXRlZCBpbiB0aGUgbW9kdWxlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUaHJlZUNvbXBvbmVudCwgU3F1YXJlUGlwZV0sXG4gIGV4cG9ydHM6IFtUaHJlZUNvbXBvbmVudCwgU3F1YXJlUGlwZV0sXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBUaHJlZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQVlBOzs4QkFDZ0QsSUFBSSxZQUFZLEVBQUU7Ozs7WUFSakUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OzsrQkFFRSxNQUFNOzs7Ozs7O0FDYlQ7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCOzs7Ozs7Ozs7Ozs7QUNSRDs7O1lBRUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQzdCOzs7Ozs7O0FDTkQ7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCOzs7Ozs7Ozs7Ozs7QUNSRDs7O0FBT0E7Ozs7O0lBSVMsT0FBTztRQUNaLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OztZQU41QixVQUFVOzs7Ozs7Ozs7Ozs7QUNOWDs7O0FBY0E7Ozs7SUFHRSxZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtLQUFJOzs7O0lBRWhELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQWM7WUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDckIsQ0FBQyxDQUFDO0tBQ0o7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOztPQUVMO2dCQUNMLE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7WUFYUSxXQUFXOzs7Ozs7Ozs7Ozs7QUNGcEI7OztBQU1BOzs7OztJQUNFLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLHVCQUFNLEdBQUcsR0FBVyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7O1lBTkYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7O0FDTHRCOzs7QUFlQTs7O1lBTkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQztnQkFDckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==