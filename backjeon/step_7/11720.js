let input = require("fs").readFileSync("../input.txt").toString().split("\r\n");

let num = input[1].split("");

console.log(num.reduce((acc, curr) => acc / 1 + curr / 1, 0));
