let input = require("fs").readFileSync("../input.txt").toString().split("\n").map(Number);

const [min, max] = input;

let decimal = [];

for (let i = min; i <= max; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count === 2) {
        decimal.push(i);
    }
}

if (!decimal.length) {
    console.log(-1);
} else {
    console.log(decimal.reduce((p, c) => p + c, 0));
    console.log(Math.min(...decimal));
}
