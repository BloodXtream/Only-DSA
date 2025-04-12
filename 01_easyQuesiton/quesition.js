const largestElement = (arr) => {
    let l = arr[0];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (l < arr[i]) {
            l = arr[i];
        }
    }
    return l;
}
const secondLargestElement = (arr) => {
    let largest = arr[0];
    let slargest = -1;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (largest < arr[i]) {
            slargest = largest;
            largest = arr[i]
        } else if (largest > arr[i] && slargest < arr[i]) {
            slargest = arr[i]
        }
    }
    return slargest;
}
const secondSmallestElement = (arr) => {
    let smallest = Infinity;
    let ssmallest = Infinity;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (smallest > arr[i]) {
            ssmallest = smallest
            smallest = arr[i]
        } else if (smallest < arr[i] && ssmallest > arr[i]) {
            ssmallest = arr[i]
        }
    }
    return ssmallest
}
const sortedArrayCheck = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {

        } else {
            return false
        }
    }
    return true
}

const prompt = require('prompt-sync')()
const input = prompt(`Enter a number seperated with spaces: `)
const arr = input.split(' ').map(Number)
// console.log(largestElement(arr))
// console.log(secondLargestElement(arr))
// console.log(secondSmallestElement(arr))
console.log(sortedArrayCheck(arr))