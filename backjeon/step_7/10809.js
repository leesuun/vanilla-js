let input = require("fs").readFileSync("../input.txt").toString();

{
    let ary = Array(26)
        .fill(97)
        .map((num, idx) => String.fromCharCode(num + idx));
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if (ary.indexOf(input[i]) !== -1) {
            ary[ary.indexOf(input[i])] = i;
        }
    }
    for (let i = 0; i < ary.length; i++) {
        if (typeof ary[i] === "string") {
            ary[i] = -1;
        }
        result += String(ary[i]) + " ";
    }

    console.log(result);
}

{
    const result = [];

    for (let i = 97; i <= 122; i++) {
        result.push(input.indexOf(String.fromCharCode(i)));
    }

    console.log(result.join(" "));
}
