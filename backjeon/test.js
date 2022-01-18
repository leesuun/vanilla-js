let input = require("fs").readFileSync("input.txt").toString().split(" ").map(Number);

const [h, m] = input;
const changeM = h * 60 + m - 45;

if (changeM / 60 < 0) {
    let minus = 1440 - Math.floor(changeM / 60) * (changeM % 60);
    console.log(Math.floor(minus / 60) + " " + (minus % 60));
    return;
}
console.log(Math.floor(changeM / 60) + " " + (changeM % 60));
