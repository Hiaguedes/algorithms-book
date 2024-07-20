// a complexidade dele e de O(n^2)

export enum OperationType {
    MAX = 'max',
    MIN = 'min'
}

// complexidade O(n), ele faz a varredura do array inteiro em busca do menor ou do maior elemento
const findLimitNumber = (arr: number[], operation: OperationType = OperationType.MIN) => {
    let low = arr[0];
    let high = arr[0];
    let lowIndex = 0;
    let highIndex = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < low && operation === OperationType.MIN) {
            low = arr[index];
            lowIndex = index;
        }

        if (arr[index] > high && operation === OperationType.MAX) {
            high = arr[index];
            highIndex = index;
        }
    }

    return operation === OperationType.MIN ? { index: lowIndex, value: low } : { index: highIndex, value: high };
};

export type ResultType = ReturnType<typeof findLimitNumber>
export type ParamsType = Parameters<typeof findLimitNumber>

export default findLimitNumber;