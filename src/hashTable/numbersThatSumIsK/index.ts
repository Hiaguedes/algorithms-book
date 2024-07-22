// problema classico do leetcode que voce quer encontrar uma combinacao de dois numeros cuja soma e igual a k

const numberThatSumIsK = (arr: number[], k: number) => {
    const complements = new Map<number, number>();
    const results = new Map<number, number>();

    for (const element of arr) {
        if (complements.has(element)) {
            results.set(element, complements.get(element));
        } else {
            complements.set(k - element, element)
        }
    }

    return { values: Array.from(results), numberOfCases: results.size }
}

console.log(numberThatSumIsK([0, 0, 0, 0], 1))

export default numberThatSumIsK;