const unionOptimal = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])]
}

const twoPointerUnion = (arr1, arr2) => {
    let n = arr1.length
    let m = arr2.length
    let i = 0, j = 0
    let result = []
    while (i < n && j < m) {
        if (arr1[i] === arr2[j]) {
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i])
            }
            i++
            j++
        } else if (arr1[i] < arr2[j]) {
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i])
            }
            i++
        } else {
            if (result[result.length - 1] !== arr2[j]) {
                result.push(arr2[j])
            }
            j++
        }
    }
    while (j < m) {
        if (result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j])
        }
        j++
    }
    while (i < n) {
        if (result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i])
        }
        i++
    }
    return result
}

const prompt = require('prompt-sync')()
const inputOne = prompt(`Enter the number seperated by spaces: `)
const inputTwo = prompt(`Enter the number seperated by spaces: `)
const arrOne = inputOne.split(' ').map(Number)
const arrTwo = inputTwo.split(' ').map(Number)
console.log(twoPointerUnion(arrOne, arrTwo))
// console.log(bruteCodeUnion(arrOne, arrTwo))
// console.log(unionOptimal(arrOne, arrTwo))