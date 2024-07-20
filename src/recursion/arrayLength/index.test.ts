import { describe, expect, it } from "vitest"
import arrayLength from "."

enum ExampleEnum {
    A = 1,
    B = 'B',
    C = "0"
}

describe('recrusion sum', () => {
    const cases: [unknown[], number][] = [
        [[2, 4, 6], 3],
        [['a', 'b', 'c', 'd'], 4],
        [[1, -1, 0, 1, -1, 0], 6],
        [[], 0],
        [[ExampleEnum.A, ExampleEnum.B, ExampleEnum.C], 3],
    ]

    for (const [input, result] of cases) {
        it(`should return the right length of the array: arrayLength([${input}]) -> ${result}`, () => {
            expect(arrayLength(input)).toEqual(result)
        })
    }

})