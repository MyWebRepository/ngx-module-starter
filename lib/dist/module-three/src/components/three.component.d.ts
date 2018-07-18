import { OnInit } from '@angular/core';
import { DataService } from '../services';
/**
 * The ThreeComponent renders a value and its square.
 */
export declare class ThreeComponent implements OnInit {
    private dataService;
    value: number;
    constructor(dataService: DataService);
    ngOnInit(): void;
}
