export enum OrdenationEnum {
    ASC = 'asc',
    DESC = 'desc'
}

const quickSort = (arr: number[], ordenation: OrdenationEnum = OrdenationEnum.DESC): number[] => {
    if (arr.length < 2) return arr; // se arr esta vazio ou so tem um elemento ele esta ordenado

    const pivot = arr[0]; // comeco comparando sempre o primeiro elemento e percorro o array depois dele
    const lessNumbers: number[] = [];
    const greaterNumbers: number[] = []; // salvo em array de numeros menores e maiores que meu pivo

    for (let index = 1; index < arr.length; index++) { // comeco com index 1 pra pegar elementos diferentes dele
        if (arr[index] <= pivot) {
            lessNumbers.push(arr[index])
        } else {
            greaterNumbers.push(arr[index]) // faco push nos arrays
        }
    }

    return [
        ...quickSort(ordenation === OrdenationEnum.ASC ? lessNumbers : greaterNumbers, ordenation),
        pivot,
        ...quickSort(ordenation === OrdenationEnum.ASC ? greaterNumbers : lessNumbers, ordenation)
    ] // agora arrumo os arrays que sao menores e maiores que ele ate ter a resposta de forma recursiva
}

export default quickSort;