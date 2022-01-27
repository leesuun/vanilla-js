let input = require("fs").readFileSync("../input.txt").toString() / 1;

let num = 0;
let arr = [];

for (let i = 1; i <= input; i++) {
    num += i;
    if (num >= input) {
        arr.push(i, input - (num - i));
        break;
    }
}

const diagonalIdx = arr[0] - (arr[1] - 1);

if (arr[0] % 2 === 0) {
    console.log(arr[1] + "/" + diagonalIdx);
} else {
    console.log(diagonalIdx + "" + "/" + arr[1]);
}
