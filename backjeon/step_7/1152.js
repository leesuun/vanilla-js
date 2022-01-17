let input = require("fs").readFileSync("../input.txt").toString().trim().split(" ");

if (!input[0]) {
    console.log(0);
    return;
}
console.log(input.length);
