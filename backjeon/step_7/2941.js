let input = require("fs").readFileSync("../input.txt").toString();

const ary = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;

for (let i = 0; i < ary.length; i++) {
    if (input.match(ary[i])) {
        input = input.replace(ary[i], " ");
        count++;
        i--;
    }
}

console.log(input.replace(/\s/g, "").length + count);

// const n = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
// let T = n.shift();

// const arr = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

// arr.forEach((element) => (T = T.replace(element, "1")));

// console.log(T.length);
