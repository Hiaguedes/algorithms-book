const arrayLength = <T>(arr: T[]): number => {
    if (typeof arr[0] === 'undefined') return 0;

    arr.shift()
    return 1 + arrayLength(arr)
}

export default arrayLength