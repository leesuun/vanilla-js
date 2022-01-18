let input = require("fs").readFileSync("../input.txt").toString().split(" ").map(Number);

console.log(BigInt(input[0]) + BigInt(input[1]));

// let input = require("fs").readFileSync("../input.txt").toString() / 1;

// let range = 1;
// let block = 1;

// while (block < input) {
//     block += 6 * range;
//     range++;
// }
// console.log(range);

// let hex = 6;
// let i = 0;
// let j = 1;

// if (input === 1) {
//     console.log(1);
//     return;
// }

// while (1) {
//     if (!(i < input && input <= i + hex * j)) {
//         console.log(i, i + hex * j);
//         i += hex * j;
//         j++;
//     } else {
//         break;
//     }
// }
// console.log(j + 1);
