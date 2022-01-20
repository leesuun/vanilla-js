let input = require("fs")
    .readFileSync("../input.txt")
    .toString()
    .split("\n")
    .splice(1, 5);

{
    let num = Number(input[0]);

    for (let i = 1; i <= num; i++) {
        let count = 0;
        let sum = 0;

        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === "O") {
                count++;
            } else {
                count = 0;
            }

            sum += count;
        }

        console.log(sum);
    }
}

{
    for (let i = 0; i < input.length; i++) {
        let score = 0;
        let count = 0;
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === "O") {
                count++;
                score += count;
            } else {
                count = 0;
            }
        }
        console.log(score);
    }
}

{
    for (let i = 1; i < input.length; i++) {
        let score = 0;
        let temp = "";
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === "X") {
                for (let k = 1; k <= temp.length; k++) {
                    score += k;
                }
                temp = "";
                continue;
            }
            temp += "O";
        }
        if (temp) {
            for (let z = 1; z <= temp.length - 1; z++) {
                score += z;
            }
        }
        console.log(score);
    }
}
