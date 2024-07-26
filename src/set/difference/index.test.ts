import { describe, expect, it } from "vitest";
import { differenceArray, differenceSet } from ".";

describe('intersection', () => {
    const cases: [unknown[], unknown[], unknown[]][] = [
        [["a", "b"], ["b", "c"], ["a", "c"]],
        [[1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]],

    ]

    for (const [input1, input2, result] of cases) {
        it(`should return right difference beetween arrays: differenceArray(${input1}, ${input2}) -> ${result}`, () => {
            expect(differenceArray(input1, input2)).toEqual(result)
        })
    }

    for (const [input1, input2, result] of cases) {
        it(`should return right difference beetween sets: differenceSet(${input1}, ${input2}) -> ${result}`, () => {
            expect(differenceSet(new Set(input1), new Set(input2))).toEqual(result)
        })
    }
})