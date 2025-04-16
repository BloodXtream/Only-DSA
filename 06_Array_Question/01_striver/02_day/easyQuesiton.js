const moveNumbersToLeft = (arr) => {
    temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = temp
    return arr
}

const moveNumbersToLeftnNumbersBruteForce = (arr, k) => {
    const n = arr.length
    k = k % n
    let temp = []
    for (let i = 0; i < n; i++) {
        temp.push(arr[i])
    }

    for (let i = k; i < n; i++) {
        arr[i - k] = arr[i]
    }
    for (let i = 0; i < k; i++) {
        arr[n - k + i] = temp[i];
    }
    return arr
}

const prompt = require('prompt-sync')()
const input = prompt(`Enter numbers with space: `)
const k = prompt(`Enter the value of rotation: `)
const arr = input.split(' ').map(Number)
console.log(moveNumbersToLeftnNumbersBruteForce(arr, k))
// console.log(moveNumbersToLeft(arr))