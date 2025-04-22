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
        } a
        i++
    }
    return result
}

const missingNumberBrute = (arr, n) => {
    for (let i = 1; i <= n; i++) {
        let flag = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                flag = 1
                break
            }
        }
        if (flag === 0) {
            return i
        }
    }
    return 'No missing number'
}

const missingNumberOptimal = (arr) => {
    let n = arr.length
    let sumOne = (n * (n + 1)) / 2
    let sumTwo = 0
    for (let i = 0; i < n; i++) {
        sumTwo += arr[i]
    }
    return sumOne - sumTwo
}

const maxConsecutiveOne = (arr) => {
    let max = 0
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            cnt++
            max = Math.max(max, cnt)
        }
        else {
            cnt = 0
        }
    }
    return max
}

const singleNumberBrute = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        let cnt = 0
        for (let j = 0; j < arr.length; j++) {
            if (n === arr[j]) {
                cnt++
            }
        }
        if (cnt === 1) {
            return n;
        }
    }
}

const prompt = require('prompt-sync')()
const inputOne = prompt(`Enter the number seperated by spaces: `)
const inputTwo = prompt(`Enter the number seperated by spaces: `)
const arrOne = inputOne.split(' ').map(Number)
const arrTwo = inputTwo.split(' ').map(Number)
console.log(missingNumberOptimal(arrOne))
console.log(singleNumberBrute(arrOne))
console.log(maxConsecutiveOne(arrOne))
console.log(missingNumberBrute(arrOne, 5))
console.log(twoPointerUnion(arrOne, arrTwo))
console.log(bruteCodeUnion(arrOne, arrTwo))
console.log(unionOptimal(arrOne, arrTwo))
