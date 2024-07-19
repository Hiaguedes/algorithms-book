// voce chuta sempre a metade dos valores
// no maximo log(2) n tentativas pra acertar o valor
// na notacao big O, seria O(log n)

// a lista tem que estar ordenada pra funcionar 

const binarySearch = <T>(list: T[], item: T) => {
    let low = 0;
    let high = list.length - 1;

    while (low < high) {
        const middle = Math.floor((low + high) / 2);
        const guess = list[middle];

        if (guess === item) {
            return middle;
        }

        if (guess > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }

        if (low === high && list[low] === item) {
            return low
        }
    }

    return null
};

export default binarySearch;
