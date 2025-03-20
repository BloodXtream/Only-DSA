function printSquarePattern(size) {
    let pattern = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            pattern += "* ";
        }
        pattern += "\n"; // Move to the next line after each row
    }

    console.log(pattern);
}

// Call the function with desired size


let starnRightTringle = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log()
    }
}
let numberRightTringle = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}${" "}`);
        }
        console.log()
    }
}
let numRightTringle = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${i}${" "}`);
        }
        console.log()
    }
}
let invertedRightTringle = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            process.stdout.write(`${"*"}${" "}`);
        }
        console.log()
    }
}
let pyramid = (n) => {
    for (let i = 1; i <= n; i++) {
        // Print spaces before stars
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        // Print stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}
let invertedpyramid = (n) => {
    for (let i = n; i = 1; i--) {
        // Print spaces before stars
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        // Print stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}
let printBinaryNumber = (n) => {
    for (let i = 1; i <= n; i++) {
        // Print stars
        let stars = 0;
        if (i % 2 === 0) stars = 0;
        else stars = 1
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${stars}`);
            stars = 1 - stars
        }
        console.log();
    }
}

let prompt = require('prompt-sync')();
let n = Number(prompt(`Enter the value of n: `));
console.log(starnRightTringle(n))
console.log(printSquarePattern(5))
console.log(numRightTringle(5))
console.log(numberRightTringle(5))
console.log(invertedRightTringle(5))
console.log(pyramid(5))
console.log(invertedpyramid(5))
console.log(printBinaryNumber(5))