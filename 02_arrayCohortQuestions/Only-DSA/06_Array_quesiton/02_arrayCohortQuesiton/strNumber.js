const strNumber = (n) => {
    let original = n;
    let ans = 0;
    while (n > 0) {
        let rem = n % 10;
        let fact = 1;
        for (let i = 1; i <= rem; i++) {
            fact *= i;
        }
        ans += fact;
        n = Math.floor(n / 10);
    }
    return (original === ans) ? 'strNumber' : "Notstrnumber";
};

const prompt = require('prompt-sync')();
const input = Number(prompt(`Enter the number: `));
console.log(strNumber(input));
