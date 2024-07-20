// Poderia se fazer um reduce ou varrer todo um array mas voce olhar de outra forma com recursividade pra resolver esse problema

const sumRecursion = (arr: number[]): number => {
    if (arr.length === 0) return 0;

    const firstIndex = arr.splice(0, 1)
    return firstIndex[0] + sumRecursion(arr)
}

export default sumRecursion;