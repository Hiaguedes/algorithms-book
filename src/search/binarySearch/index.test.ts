import { describe, expect, it } from "vitest";
import binarySearch from ".";

describe('binary search', () => {
    const cases: [number[], number, null | number][] = [
        [[1, 3, 5, 7, 9], 3, 1],
        [[1, 3, 5, 7, 9], -1, null],
        [[1, 3, 5, 7, 9], 5, 2],
        [[2, 5, 7, 11, 24, 36, 78], 24, 4],
    ];

    cases.forEach(([arr, item, expected]) => {
        it(`binarySearch(${JSON.stringify(arr)}, ${item}) -> ${expected}`, () => {
            expect(binarySearch(arr, item)).toEqual(expected);
        });
    });
})