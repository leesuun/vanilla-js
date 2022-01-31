let input = require("fs").readFileSync("../input.txt").toString().split(" ").map(Number);

const [up, down, height] = input;

let goal = height - down; //목표
let d = up - down; // 하루 이동 거리
let result = goal / d;
console.log(Math.ceil(result));
