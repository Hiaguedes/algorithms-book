import { describe, expect, it } from "vitest";
import { intersectionArray } from ".";

describe('intersection', () => {
    const cases: [unknown[], unknown[], unknown[]][] = [
        [["a", "b"], ["b", "c"], ["b"]],
        [[1, 2, 3], [4, 5, 6], []],

    ]

    for (const [input1, input2, result] of cases) {
        it(`should return rigth intersection beetween arrays: intersectionArray(${input1}, ${input2}) -> ${result}`, () => {
            expect(intersectionArray(input1, input2)).toEqual(result)
        })
    }
})