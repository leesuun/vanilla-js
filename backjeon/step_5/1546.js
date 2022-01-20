let input = require("fs")
    .readFileSync("../input.txt")
    .toString()
    .split("\n")[1]
    .split(" ");

const maxScore = Math.max(...input);
const aver = input
    .map((score) => (score / maxScore) * 100)
    .reduce((pre, curr) => pre + curr, 0);
console.log(aver / input.length);
