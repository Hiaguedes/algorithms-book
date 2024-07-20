export enum OperationType {
    MAX = 'max',
    MIN = 'min'
}

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

export default findLimitNumber;

