/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * The SquarePipe converts a number to its square
 */
export class SquarePipe {
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
function SquarePipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SquarePipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SquarePipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1wYWNrYWdlLyIsInNvdXJjZXMiOlsibW9kdWxlLXRocmVlL3NyYy9waXBlcy9zcXVhcmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7QUFNcEQsTUFBTTs7Ozs7SUFDSixTQUFTLENBQUMsS0FBYTtRQUNyQix1QkFBTSxHQUFHLEdBQVcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7O1lBTkYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgU3F1YXJlUGlwZSBjb252ZXJ0cyBhIG51bWJlciB0byBpdHMgc3F1YXJlXG4gKi9cbkBQaXBlKHtuYW1lOiAnc3F1YXJlJ30pXG5leHBvcnQgY2xhc3MgU3F1YXJlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdmFsOiBudW1iZXIgPSBwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIE1hdGgucG93KHZhbCwgMik7XG4gIH1cbn1cbiJdfQ==