// 03 Hashed Number

input = 23
inputCopy = input
sum = 0 // value -> 9 after the loop completes 
while (input > 0) {
    let rem = input % 10
    sum += rem
    input = Math.floor(input / 10)
}

(inputCopy % sum === 0) ? console.log("Hased Number") : console.log("Not a Hased Number")





// 04 Perfect square 

let number = Number(prompt(`Enter a Number: `))
let sq = number * number
if (sq % number === 0) console.log("Its an Perfect Square")
else console.log("Its not an Perfect Square")





// 05 count all digits 
let count = (n) => {
    let cntDigit = 0;
    while (n > 0) {
        let rem = n % 10;
        cntDigit++;
        n = Math.floor(n / 10);
    }

    return cntDigit;
}
// Another way of doing this 
let count2 = (n) => {
    let cntDigit = Math.floor(Math.log10(n) + 1)
    return cntDigit
}
let palindrome = (n) => {
    let revNum = 0;
    let originalN = n;
    while (n > 0) {
        let rem = n % 10;
        n = Math.floor(n / 10);
        revNum = (revNum * 10) + rem;
    }
    if (revNum === originalN) return `Palindrome Number`
    else return `Not Palindrome Number`
}
let armStrong = (n) => {
    let armNumber = 0;   //1-->28-->371
    let originalN = n;
    let power = n.toString().length;
    while (n > 0) {
        let rem = n % 10;
        n = Math.floor(n / 10);
        armNumber += Math.pow(rem, power);
    }
    if (originalN === armNumber) return `Its an Armstrong Number...😁`
    else return `Not an ArmStrong number...👀`
}
let divisors = (n) => {
    let message = `All divisior are above`
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
    console.log(n);
    return message;
}

let prompt = require('prompt-sync')();
let n = prompt(`Enter the value of n: `);
console.log(`Number of digits are: ${count(n)}`)
console.log(`Number of digits are: ${count2(n)}`)
console.log(palindrome(n))
console.log(armStrong(n))
console.log(divisors(n))










