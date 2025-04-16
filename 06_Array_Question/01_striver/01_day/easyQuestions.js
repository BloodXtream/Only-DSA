const sortedArray = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false
    }
    return true
}

// Remove dublicate elements form an array 
const OptimiseddublicateArr = (arr) => {
    return [...new Set(arr)]
}
const brutedublicateArr = (arr) => {
    const uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}

// rotate an array with one step to left side
const rotateleft = (arr) => {
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = temp
    return arr
}
 
const numRotationLeft = (arr, k) => {
    for (let j = 0; j < k; j++) {
        let temp = arr[0]
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = temp
        return arr
    }
}


const prompt = require('prompt-sync')()
const input = prompt(`Enter a numbers with spaces: `)
const arr = input.split(' ').map(Number)
const k = prompt(`Enter the number of iteration: `)
console.log(numRotationLeft(arr, k))
// console.log(rotateleft(arr))
// console.log(brutedublicateArr(arr))
// console.log(OptimiseddublicateArr(arr))
// console.log(sortedArray(arr))