let input = require("fs").readFileSync("../input.txt").toString().split("\r\n");
let nums = input[0] / 1;
let words = input.slice(1, input.length);

let temp = [];
let result = input.length - 1;

for (let i = 0; i < nums; i++) {
    for (let j = 0; j < words[i].length; j++) {
        let word = words[i];
        if (word[j] !== word[j + 1]) {
            temp.push(word[j]);
        }
        if (temp.includes(word[j + 2])) {
            result--;
            break;
        }
    }
    temp = [];
}
console.log(result);
