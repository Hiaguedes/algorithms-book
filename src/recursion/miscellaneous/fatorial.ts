const fatorial = (number: number): number => {
    if (number === 0) return 1;
    return number * fatorial(number - 1);
}

export default fatorial;