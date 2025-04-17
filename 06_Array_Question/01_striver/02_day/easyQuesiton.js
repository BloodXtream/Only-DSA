const moveNumbersToLeft = (arr) => {
    temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = temp
    return arr
}


// brute method to move element

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


// better approch to do this quesiton

const oneByOne = (arr) => {
    const first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
}
const moveNumbersToLeftnNumbersBetterApproch = (arr, k) => {
    const n = arr.length;
    k = k % n; // Handle k > n

    for (let i = 0; i < k; i++) {
        oneByOne(arr)
    }

    return arr;
}

// Zeros to last 

const zerosToLastBrute = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i])
        }
    }
    while (newArr.length < arr.length) {
        newArr.push(0)
    }
    return newArr;
}
const zerosToLastBetterApproch = (arr) => {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[j] = arr[i]
            j++
        }
    }
    while (j < arr.length) {
        arr[j] = 0
        j++
    }
    return arr;
}
const zeroOptiomalApproch = (arr) => {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (i !== j) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
            j++
        }
    }
    return arr
}

const zeroOptiomalApproch2 = (arr) => {
    let i = 0
    let j = 1
    while (j < arr.length) {
        if (arr[i] === 0 && arr[j] !== 0) {
            arr[i] = arr[j]
            arr[j] = 0
            i++
        } if (arr[i] !== 0) {
            i++
        }
        j++
    }
    return arr
}

const prompt = require('prompt-sync')()
const input = prompt(`Enter numbers with space: `)
const k = prompt(`Enter the value of rotation: `)
const arr = input.split(' ').map(Number)
console.log(zeroOptiomalApproch2(arr))
console.log(zeroOptiomalApproch(arr))
console.log(zerosToLastBetterApproch(arr))
console.log(zerosToLastBrute(arr))
console.log(moveNumbersToLeftnNumbersBetterApproch(arr, k))
console.log(moveNumbersToLeftnNumbersBruteForce(arr, k))
console.log(moveNumbersToLeft(arr))
