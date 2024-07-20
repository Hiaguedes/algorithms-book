import { describe, expect, it } from "vitest"
import sumRecursion from "."

describe('recrusion sum', () => {
    const fatorialTests: [number[], number][] = [
        [[2, 4, 6], 12],
        [[3], 3],
        [[1, -1, 0, 1, -1, 0], 0],
        [[1, 10, 100, 1000, 10000, 100000], 111111],
    ]

    for (const [input, result] of fatorialTests) {
        it(`should calculate the right fatorial result: fatorial(${input}) -> ${result}`, () => {
            expect(sumRecursion(input)).toEqual(result)
        })
    }

})