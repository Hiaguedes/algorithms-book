// Complexidade de O(n^2) mesmo percorrendo metade do array na hora de dar push pro novo array
// Percorre uma vez a cada laco for pra pegar o menor ou maior valor e outra vez pra dar push no novo array
// o quick sorte e menos custoso

import { OrdenationEnum } from "@src/lib/enums";
import findLimitNumber, { OperationType } from "@src/search/findLimitNumber";

export { OrdenationEnum }

const selectionOrder = (arr: number[], ordenation: OrdenationEnum = OrdenationEnum.DESC) => {
    const newArr = [];
    const copyArr = new Array(...arr);

    for (let index = 0; index < arr.length; index++) {
        const { index, value } = findLimitNumber(copyArr, ordenation === OrdenationEnum.ASC ? OperationType.MIN : OperationType.MAX);

        newArr.push(value)
        copyArr.splice(index, 1)
    }

    return newArr;

}

export default selectionOrder
