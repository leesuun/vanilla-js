let input = require("fs").readFileSync("../input.txt").toString().split(" ").map(Number);
const [x, y, rectX, rectY] = input;

const distances = [
    Math.abs(0 - x),
    Math.abs(0 - y),
    Math.abs(rectX - x),
    Math.abs(rectY - y),
];

console.log(Math.min(...distances));
