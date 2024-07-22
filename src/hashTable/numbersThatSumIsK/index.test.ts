import { describe, expect, it } from "vitest";
import numberThatSumIsK from ".";

describe('number that sum is equal k', () => {
    const cases: [number[], number, number[][]][] = [
        [
            [1, 3, 5, 0, -2, 9],
            3,
            [[0, 3], [-2, 5]],
        ],
        [
            [1, 2, 3, 4, 5, 6],
            5,
            [[3, 2], [4, 1]],
        ],
        [
            [0, 0, 0, 0],
            1,
            [],
        ],
    ];

    for (const [arr, k, result] of cases) {
        it(`should return right complements: numberThatSumIsK(${arr}) -> {values: ${result}, numberOfCases ${result.length ?? 0}}`, () => {
            expect(numberThatSumIsK(arr, k)).toMatchObject({ values: result, numberOfCases: result.length ?? 0 });
        });
    }
})