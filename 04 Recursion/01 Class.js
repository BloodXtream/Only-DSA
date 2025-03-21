// All the Quesiton are form Recursion 
//  print form 1 to n 
const f1 = (i, n) => {
    if (i > n) return;
    else {
        console.log(i);
        f1(i + 1, n)
    }
}
// print form n to 1
const f2 = (i, n) => {
    if (i < 1) return;
    else {
        console.log(i);
        f2(i - 1, n)
    }
}
//  print form 1 to n with the backtracking
const f3 = (i, n) => {
    if (i < 1) return;
    else {
        f3(i - 1, n);
        console.log(i);
    }
}
//  print form n to 1 with the backtracking
const f4 = (i, n) => {
    if (i > n) return;
    else {
        f(i + 1, n);
        console.log(i)
    }
}
// sum of First N numbers with parameters
const f5 = (i, sum) => {
    if (i < 1) {
        console.log(sum);
        return;
    }
    f5(i - 1, sum + i);
}
// sum of first N number with functional approch
const f6 = (n) => {
    if (n === 0) return 0;
    return n + f6(n - 1)
}
const prompt = require('prompt-sync')();
const n = Number(prompt(`Enter a number: `));
console.log(f1(1, n))
console.log(f2(n, n))
console.log(f3(n, n))
console.log(f4(1, n))
console.log(f5(n, 0))
console.log(f6(n))