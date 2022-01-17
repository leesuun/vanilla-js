let input = require("fs").readFileSync("../input.txt").toString().split("\r\n");

let num = input[0] * 1;

for (let i = 1; i <= num; i++) {
    const cls = input[i].split(" ").map(Number);
    cls.shift();

    let avg = 0;
    for (let j = 0; j < cls.length; j++) {
        avg += cls[j];
    }
    avg = Math.floor(avg / cls.length);

    let count = 0;
    for (let j = 0; j < cls.length; j++) {
        cls[j] > avg && count++;
    }

    console.log(((count / cls.length) * 100).toFixed(3) + "%");
}
