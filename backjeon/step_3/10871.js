let input = require("fs").readFileSync("../input.txt").toString().split("\r\n");

const N = input[0].split(" ")[0];
const X = input[0].split(" ")[1];
const sequence = input[1].split(" ");

let result = "";

for (let i = 0; i < N; i++) {
    if (Number(sequence[i]) < X) {
        result += sequence[i];
    }
}

result = result.split("");
result.forEach((el, idx) => {
    result[idx] = Number(el);
});

console.log(result.join(" "));
