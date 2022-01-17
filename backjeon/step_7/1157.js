let input = require("fs").readFileSync("../input.txt").toString().toLowerCase().split("");

const apb = new Object();
for (let i = 97; i <= 122; i++) {
    apb[String.fromCharCode(i)] = 0;
}
input.forEach((s) => {
    apb[s] += 1;
});

let duple = Object.values(apb);
let max = Math.max(...duple);
let index = duple.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
    if (duple[j] === max && index != j) {
        isSame = true;
        break;
    }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
// let input = require("fs").readFileSync("../input.txt").toString().toLowerCase();

// const result = new Array(26).fill(0);

// for (let i = 0; i < input.length; i++) {
//     result[input.charCodeAt(i) - 97]++;
// }

// const max = Math.max(...result);
// const index = result.indexOf(max);

// let isSame = false;

// for (let j = 0; j < 26; j++) {
//     if (result[j] === max && index != j) {
//         isSame = true;
//         break;
//     }
// }

// console.log(isSame ? "?" : String.fromCharCode(index + 65));
