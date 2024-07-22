import { OperationType } from "@src/lib/enums";

export { OperationType }

const findLimitNumber = (arr: number[], operation: OperationType = OperationType.MIN) => {
    let limitNumber = operation === OperationType.MIN ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    const verifyNumber = (arr: number[]) => {
        if (arr.length === 0) {
            return;
        }
        if (operation === OperationType.MIN && arr[0] < limitNumber) {
            limitNumber = arr[0];
        }

        if (operation === OperationType.MAX && arr[0] > limitNumber) {
            limitNumber = arr[0];
        }

        arr.shift()
        verifyNumber(arr)
    }

    verifyNumber(arr)
    return limitNumber
}

export type ResultType = ReturnType<typeof findLimitNumber>
export type ParamsType = Parameters<typeof findLimitNumber>

export default findLimitNumber;

