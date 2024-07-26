// O ecma script de 2024 possui o metodo de union, mas vale a pena saber o algoritmo pra ele

export const union = <T>(set1: T[], set2: T[]) => {
    const union = new Set<T>([...set1, ...set2]);

    return Array.from(union)
}
