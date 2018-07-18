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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktcGFja2FnZS8iLCJzb3VyY2VzIjpbIm1vZHVsZS10aHJlZS9zcmMvY29tcG9uZW50cy90aHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQVkxQyxNQUFNOzs7O0lBR0osWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7S0FBSTs7OztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNyQixDQUFDLENBQUM7S0FDSjs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7O09BRUw7Z0JBQ0wsTUFBTSxFQUFFLEVBQUU7YUFDWDs7OztZQVhRLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuLyoqXG4gKiBUaGUgVGhyZWVDb21wb25lbnQgcmVuZGVycyBhIHZhbHVlIGFuZCBpdHMgc3F1YXJlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMycsXG4gIHRlbXBsYXRlOiBgPGRpdj5cbiAgPGRpdiBpZD1cImRhdGEtY29udGFpbmVyXCI+VmFsdWU6IHt7dmFsdWV9fSAtLSBTcXVhcmVkOiB7e3ZhbHVlIHwgc3F1YXJlfX0gPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRocmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHZhbHVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXREYXRhKCkuc3Vic2NyaWJlKChyZXN1bHQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuIl19