// O ecma script de 2024 possui o metodo de diferenca, mas vale a pena saber o algoritmo pra ele

export const differenceSet = <T>(set1: Set<T>, set2: Set<T>) => {
    const difference = new Set<T>([...set1]);

    for (const ele of set2) {
        if (!set1.has(ele)) {
            difference.add(ele)
        } else {
            difference.delete(ele)
        }
    }

    return Array.from(difference)
}

export const differenceArray = <T>(arr1: T[], arr2: T[]) => {
    const difference = new Set<T>([...arr1]);

    for (const ele of arr2) {
        if (!arr1.includes(ele)) {
            difference.add(ele)
        } else {
            difference.delete(ele)
        }
    }

    return Array.from(difference)
}