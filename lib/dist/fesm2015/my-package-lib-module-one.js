import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

export { OneModule, OneComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGFja2FnZS1saWItbW9kdWxlLW9uZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXktcGFja2FnZS9saWIvbW9kdWxlLW9uZS9zcmMvb25lLmNvbXBvbmVudC50cyIsIm5nOi8vbXktcGFja2FnZS9saWIvbW9kdWxlLW9uZS9zcmMvb25lLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIGlzIGEgc2FtcGxlIGNvbXBvbmVudCBvZiBjb21tb24gbW9kdWxlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiYnV0dG9uQ2xpY2tlZCQuZW1pdCgpXCI+Q2xpY2sgVGhpczwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFsnJ11cbn0pXG5leHBvcnQgY2xhc3MgT25lQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrZWQkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT25lQ29tcG9uZW50IH0gZnJvbSAnLi9vbmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW09uZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPbmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE9uZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBWUE7OzhCQUNnRCxJQUFJLFlBQVksRUFBRTs7OztZQVJqRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOztHQUVUO2dCQUNELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7OytCQUVFLE1BQU07Ozs7Ozs7QUNiVDs7O1lBSUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEI7Ozs7Ozs7Ozs7Ozs7OzsifQ==