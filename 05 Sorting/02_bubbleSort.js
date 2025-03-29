const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 1; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}
const prompt = require("prompt-sync")()
const input = prompt(`Enter numbers seperated by spaces: `)
const arr = input.split(" ").map(Number)
console.log(bubbleSort(arr))