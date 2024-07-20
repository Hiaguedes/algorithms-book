import { describe, expect, it } from "vitest";
import selectionOrder, { OrdenationEnum } from ".";

describe('selection order', () => {
    const ascendantCases: [number[], number[]][] = [
        [[1, 5, 3, 10, -1], [-1, 1, 3, 5, 10]],
        [[1, 1, -2, 0, -1], [-2, -1, 0, 1, 1]],
    ];

    for (const [arr, result] of ascendantCases) {
        it(`should order by ascendant order correctly: [${arr}] -> [${result}]`, () => {
            expect(selectionOrder(arr, OrdenationEnum.ASC)).toEqual(result)
        })
    }

    const descendantCases: [number[], number[]][] = [
        [[1, 5, 3, 10, -1], [10, 5, 3, 1, -1]],
        [[1, 1, -2, 0, -1], [1, 1, 0, -1, -2]],
    ];

    for (const [arr, result] of descendantCases) {
        it(`should order by ascendant order correctly: [${arr}] -> [${result}]`, () => {
            expect(selectionOrder(arr, OrdenationEnum.DESC)).toEqual(result)
        })
    }
})