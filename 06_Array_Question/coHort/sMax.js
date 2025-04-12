const maxNumber = (arr) => {
    let max = arr[0]
    let sMax = -Infinity
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            sMax = max
            max = arr[i]
        } else if (max > arr[i] && sMax < arr[i]) {
            sMax = arr[i]
        }
    }
    return sMax
}
const prompt = require('prompt-sync')()
const input = prompt(`Enter a number: `)
const arr = input.split(' ').map(Number)
console.log(maxNumber(arr))