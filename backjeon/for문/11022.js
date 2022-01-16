let input = require("fs").readFileSync("../input.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
    const numbers = input[i].split(" ");

    const num1 = Number(numbers[0]);
    const num2 = Number(numbers[1]);

    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}
