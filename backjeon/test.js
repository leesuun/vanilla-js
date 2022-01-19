let input = require("fs").readFileSync("input.txt").toString().split("\n");

const arr = [];

input.forEach((x) => {
    const num = x % 42;
    arr.push(num);
});

let result = [...new Set(arr)];

console.log(result.length);
