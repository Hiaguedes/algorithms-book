// O ecma script de 2024 possui o metodo de intersecao, mas vale a pena saber o algoritmo pra ele

export const intersectionSet = <T>(set1: Set<T>, set2: Set<T>) => {
    const intersection = new Set<T>();

    for (const ele of set2) {
        if (set1.has(ele)) {
            intersection.add(ele)
        }
    }

    return Array.from(intersection)
}

export const intersectionArray = <T>(set1: T[], set2: T[]) => {
    const intersection = new Set<T>();

    for (const ele of set2) {
        if (set1.includes(ele)) {
            intersection.add(ele)
        }
    }

    return Array.from(intersection)
}