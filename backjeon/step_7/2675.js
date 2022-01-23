let input = require("fs").readFileSync("../input.txt").toString().split("\n");

let num = input[0];

for (let i = 1; i <= num; i++) {
    const repeat = input[i].split(" ")[0];
    const str = input[i].split(" ")[1];
    let result = "";

    for (let j = 0; j < str.length; j++) {
        if (str[j]) {
            result += str[j].repeat(repeat);
        }
    }
    console.log(result);
}
