let input = require("fs").readFileSync("../input.txt").toString().split(" ").map(Number);

const [A, B, C] = input;
let num = 0;

num = Math.floor(A / (C - B));
console.log(++num);
