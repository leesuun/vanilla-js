let input = require("fs").readFileSync("../input.txt").toString().split(" ");

const nums = [];

for (let i = 0; i < input.length; i++) {
    nums.push(input[i].split("").reverse().join(",").replace(/,/gi, "") / 1);
}

nums[0] > nums[1] ? console.log(nums[0]) : console.log(nums[1]);
