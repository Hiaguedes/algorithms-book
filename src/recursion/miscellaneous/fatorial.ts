const fatorial = (number: number): number => {
    if (number === 0) return 1; // caso base
    return number * fatorial(number - 1); // caso recursivo
}

export default fatorial;