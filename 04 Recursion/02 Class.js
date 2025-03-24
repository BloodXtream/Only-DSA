// All the quesiton are form reicursion 
const prompt = require('prompt-sync')();
const input = prompt(`Enter the value of an Array: `);
const arr = input.split(' ').map(Number);
const str = input.trim();

// 01 Reverse an array with two pointers or two variables in Rucirsion
const f1 = (l, r) => {
    if (l >= r) return;
    [arr[l], arr[r]] = [arr[r], arr[l]]
    f1(l + 1, r - 1);
}
f1(0, arr.length - 1)
console.log(`Reversed Arr: ${arr}`);

// 01.1 Reverse an array with an Single pointer or a single variable in Rucirsion

const f2 = (i) => {
    if (i > Math.floor((arr.length - 1) / 2)) return;
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
    f2(i + 1)
}
f2(0)
console.log(`Reversed Arr: ${arr}`);

const f3 = (i) => {
    if (i >= Math.floor(str.length / 2)) return true;
    if (str[i] !== str[str.length - i - 1]) return false;
    return f3(i + 1);
}
console.log(f3(0))