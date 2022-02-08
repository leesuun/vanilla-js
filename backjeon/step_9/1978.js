let input = require("fs").readFileSync("../input.txt").toString().split("\n");

const nums = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 1; j <= nums[i]; j++) {
        nums[i] % j === 0 && count++;
    }
    count === 2 && answer++;
}
console.log(answer);
