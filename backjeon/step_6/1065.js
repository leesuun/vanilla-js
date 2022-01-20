let input = require("fs").readFileSync("../input.txt").toString() / 1;

let num = 99;

if (input < 100) {
    console.log(input);
    return;
}

for (let i = 100; i <= input; i++) {
    let hundredNum = (i + "")[0];
    let tenNum = (i + "")[1];
    let oneNum = (i + "")[2];

    if (tenNum - hundredNum === oneNum - tenNum) {
        num += 1;
    }
}
console.log(num);
