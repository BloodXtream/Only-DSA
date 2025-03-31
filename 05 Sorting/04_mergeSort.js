const merge = (arr, low, mid, high) => {
    let temp = [];
    let left = low;
    let right = mid + 1;

    // Merging two sorted halves
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    // Copy remaining elements from the left half (if any)
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // Copy remaining elements from the right half (if any)
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // Copy sorted elements back into the original array
    for (let i = 0; i < temp.length; i++) {
        arr[low + i] = temp[i];
    }
};

const mergeSort = (arr, low, high) => {
    if (low >= high) return; // Base case

    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
};

// Taking input from user
const prompt = require('prompt-sync')();
const input = prompt(`Enter numbers with spaces: `);
const arr = input.split(' ').map(Number);

mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);

