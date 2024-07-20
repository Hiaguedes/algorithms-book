import { describe, expect, it } from "vitest";
import findLimitNumber, {
    OperationType,
    type ResultType,
    type ParamsType,
} from ".";

describe("find limit number", () => {
    const casesMinimum: [ParamsType["0"], ResultType][] = [
        [[1, 2, -5, 0, 10], -5],
        [[1], 1],
        [[2, 0, -0.3], -0.3],
        [[0, 0, Number.NEGATIVE_INFINITY, 4], Number.NEGATIVE_INFINITY],
    ];

    for (const [arr, result] of casesMinimum) {
        it(`should find smallest number and index correctly ${JSON.stringify(arr)} -> ${JSON.stringify(result)}`, () => {
            expect(findLimitNumber(arr, OperationType.MIN)).toMatchObject(result);
        });
    }


    const casesMaximum: [ParamsType["0"], ResultType][] = [
        [[1, 2, -5, 0, 10], 10],
        [[1], 1],
        [[2, 0, -0.3], 2],
        [[0, 0, Number.POSITIVE_INFINITY, 4], Number.POSITIVE_INFINITY],
        [[0.1, -0.1, 0, 0.15], 0.15],
    ];

    for (const [arr, result] of casesMaximum) {
        it(`should find bigest number and index correctly ${JSON.stringify(arr)} -> ${JSON.stringify(result)}`, () => {
            expect(findLimitNumber(arr, OperationType.MAX)).toMatchObject(result);
        });
    }

});
