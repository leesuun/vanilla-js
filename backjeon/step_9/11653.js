let input = require("fs").readFileSync("../input.txt").toString();

let i = 2;

while (input != 1) {
    if (input % i === 0) {
        input /= i;
        console.log(i);
    } else {
        i++;
    }
}
