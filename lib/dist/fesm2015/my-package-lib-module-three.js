import { Injectable, Component, Pipe, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

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

export { ThreeModule, ThreeComponent as ɵa, SquarePipe as ɵb, DataService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGFja2FnZS1saWItbW9kdWxlLXRocmVlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1wYWNrYWdlL2xpYi9tb2R1bGUtdGhyZWUvc3JjL3NlcnZpY2VzL2RhdGEuc2VydmljZS50cyIsIm5nOi8vbXktcGFja2FnZS9saWIvbW9kdWxlLXRocmVlL3NyYy9jb21wb25lbnRzL3RocmVlLmNvbXBvbmVudC50cyIsIm5nOi8vbXktcGFja2FnZS9saWIvbW9kdWxlLXRocmVlL3NyYy9waXBlcy9zcXVhcmUucGlwZS50cyIsIm5nOi8vbXktcGFja2FnZS9saWIvbW9kdWxlLXRocmVlL3NyYy90aHJlZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFRoZSBzZXJ2aWNlIERhdGFTZXJ2aWNlIHByb3ZpZGVzIGEgbWV0aG9kIHJldHVybmluZyBhIG51bWJlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIG1ldGhvZCBnZXREYXRhIHJldHVybnMgYSBnZW5lcmljIG9ic2VydmFibGVcbiAgICovXG4gIHB1YmxpYyBnZXREYXRhKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YoMTUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuLyoqXG4gKiBUaGUgVGhyZWVDb21wb25lbnQgcmVuZGVycyBhIHZhbHVlIGFuZCBpdHMgc3F1YXJlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMycsXG4gIHRlbXBsYXRlOiBgPGRpdj5cbiAgPGRpdiBpZD1cImRhdGEtY29udGFpbmVyXCI+VmFsdWU6IHt7dmFsdWV9fSAtLSBTcXVhcmVkOiB7e3ZhbHVlIHwgc3F1YXJlfX0gPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRocmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHZhbHVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXREYXRhKCkuc3Vic2NyaWJlKChyZXN1bHQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBTcXVhcmVQaXBlIGNvbnZlcnRzIGEgbnVtYmVyIHRvIGl0cyBzcXVhcmVcbiAqL1xuQFBpcGUoe25hbWU6ICdzcXVhcmUnfSlcbmV4cG9ydCBjbGFzcyBTcXVhcmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWw6IG51bWJlciA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gTWF0aC5wb3codmFsLCAyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaHJlZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgU3F1YXJlUGlwZX0gZnJvbSAnLi9waXBlcyc7XG5cbi8qKlxuICogVGhlIG1vZHVsZSByZWdpc3RlcnMgY29tcG9uZW50LCBzZXJ2aWNlIGFuZCBwaXBlIGNyZWF0ZWQgaW4gdGhlIG1vZHVsZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVGhyZWVDb21wb25lbnQsIFNxdWFyZVBpcGVdLFxuICBleHBvcnRzOiBbVGhyZWVDb21wb25lbnQsIFNxdWFyZVBpcGVdLFxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVGhyZWVNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFPQTs7Ozs7SUFJUyxPQUFPO1FBQ1osT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1lBTjVCLFVBQVU7Ozs7Ozs7Ozs7OztBQ05YOzs7QUFjQTs7OztJQUdFLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0tBQUk7Ozs7SUFFaEQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYztZQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNyQixDQUFDLENBQUM7S0FDSjs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7O09BRUw7Z0JBQ0wsTUFBTSxFQUFFLEVBQUU7YUFDWDs7OztZQVhRLFdBQVc7Ozs7Ozs7Ozs7OztBQ0ZwQjs7O0FBTUE7Ozs7O0lBQ0UsU0FBUyxDQUFDLEtBQWE7UUFDckIsdUJBQU0sR0FBRyxHQUFXLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU5QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pCOzs7WUFORixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7QUNMdEI7OztBQWVBOzs7WUFOQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7OzsifQ==