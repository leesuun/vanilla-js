// let input = require("fs").readFileSync("../input.txt").toString().split("");

// const num = Number(input[0]);

// let j = 1;
// for (let i = num; i > 0; i--) {
//     console.log(" ".repeat(i - 1) + "*".repeat(j));
//     j++;
// }

let num = 5;

for (let i = 0; i < num; i++) {
    let star = "";

    for (let j = num - 1; j >= 0; j--) {
        star += j <= i ? "*" : " ";
    }

    console.log(star);
}
