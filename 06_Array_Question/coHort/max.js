const maxNumber = (arr) => {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
const prompt = require('prompt-sync')()
const input = prompt(`Enter a number: `)
const arr = input.split(' ').map(Number)
console.log(maxNumber(arr))