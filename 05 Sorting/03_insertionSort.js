const insertionSort = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            j--;
        }
    }
    return arr;
}

const prompt = require('prompt-sync')()
const input = prompt(`Enter Numbers seperated by spaces: `)
const arr = input.split(" ").map(Number)
console.log(insertionSort(arr))