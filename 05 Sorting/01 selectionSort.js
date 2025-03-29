const selectionSort = (arr) => {
    for (let i = 0; i <= arr.length - 2; i++) {
        let minIndex = i;
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[j] < arr[i]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}

const prompt = require('prompt-sync')();
const input = prompt(`Enter the Number seperated by spaces: `);
const arr = input.split(" ").map(Number);
console.log(selectionSort(arr))