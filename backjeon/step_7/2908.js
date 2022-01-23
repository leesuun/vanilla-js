let input = require("fs").readFileSync("../input.txt").toString().split(" ");

const reverseNum = [];

for (let i = 0; i < input.length; i++) {
    reverseNum.push(input[i].split("").reverse().join());
}
console.log(reverseNum);
