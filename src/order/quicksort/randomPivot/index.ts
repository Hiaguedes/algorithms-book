// Essa solucao melhora os piores casos, onde tem muitos numeros repetidos e numeros iguais 

export function sortArray(nums: number[]): number[] {
    if (nums.length <= 1) return nums
    const pivotIndex = Math.floor(Math.random() * nums.length); // como qq index funciona pra ordenar entao vamos deixar ele aleatorio, isso e bom pra pegar casos cabeludos mais cedo
    const pivot = nums[pivotIndex]
    const minorArr = [];
    const majorArr = [];
    const equalArr = [];

    for (let index = 0; index < nums.length; index++) { // ele vai percorrer o array inteiro de qq forma
        if (nums[index] < pivot) {
            minorArr.push(nums[index])
        } else if (nums[index] > pivot) {
            majorArr.push(nums[index])
        } else {
            equalArr.push(nums[index]);
        }
    }

    return [...sortArray(minorArr), ...equalArr, ...sortArray(majorArr)]
};

