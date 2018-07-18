/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { DataService } from '../services';
/**
 * The ThreeComponent renders a value and its square.
 */
export class ThreeComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktcGFja2FnZS9saWIvbW9kdWxlLXRocmVlLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvdGhyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFZMUMsTUFBTTs7OztJQUdKLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0tBQUk7Ozs7SUFFaEQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDckIsQ0FBQyxDQUFDO0tBQ0o7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOztPQUVMO2dCQUNMLE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7WUFYUSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbi8qKlxuICogVGhlIFRocmVlQ29tcG9uZW50IHJlbmRlcnMgYSB2YWx1ZSBhbmQgaXRzIHNxdWFyZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29tcG9uZW50LTMnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gIDxkaXYgaWQ9XCJkYXRhLWNvbnRhaW5lclwiPlZhbHVlOiB7e3ZhbHVlfX0gLS0gU3F1YXJlZDoge3t2YWx1ZSB8IHNxdWFyZX19IDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUaHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0RGF0YSgpLnN1YnNjcmliZSgocmVzdWx0OiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==