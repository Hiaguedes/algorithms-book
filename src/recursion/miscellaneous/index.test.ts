import { describe, expect, it } from "vitest"
import fatorial from "./fatorial"
import fibonacci from "./fibonacci"

describe('recursion example tests', () => {
    const fatorialTests = [
        [5, 120],
        [3, 6],
        [2, 2],
        [10, 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2]
    ]

    for (const [input, result] of fatorialTests) {
        it(`should calculate the right fatorial result: fatorial(${input}) -> ${result}`, () => {
            expect(fatorial(input)).toEqual(result)
        })
    }


    const fibonacciTests = [
        [5, 5],
        [3, 2],
        [12, 144],
    ]

    for (const [input, result] of fibonacciTests) {
        it(`should calculate the right fatorial result: fibonacci(${input}) -> ${result}`, () => {
            expect(fibonacci(input)).toEqual(result)
        })
    }
})