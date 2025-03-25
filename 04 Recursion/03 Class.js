const prompt = require('prompt-sync')();
const n = prompt(`Enter the value of N:  `);


// 01 Fibonacci Number

const f1 = (n) => {
    if (n <= 1) return n;
    let last = f1(n - 1);
    let lasts = f1(n - 2);
    return last + lasts;
}
console.log(f1(n))
