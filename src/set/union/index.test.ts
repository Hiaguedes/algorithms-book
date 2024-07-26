import { describe, expect, it } from "vitest";
import { union } from ".";

describe('intersection', () => {
    const cases: [unknown[], unknown[], unknown[]][] = [
        [["a", "b"], ["b", "c"], ["a", "b", "c"]],
        [[1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]],

    ]

    for (const [input1, input2, result] of cases) {
        it(`should return rigth union beetween arrays: union(${input1}, ${input2}) -> ${result}`, () => {
            expect(union(input1, input2)).toEqual(result)
        })
    }
})