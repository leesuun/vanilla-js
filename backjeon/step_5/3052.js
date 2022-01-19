let input = require("fs").readFileSync("input.txt").toString().split("\n");
{
    let ary = input.map((num) => num % 42);

    ary = ary.filter((num, idx) => {
        return ary.indexOf(num) === idx;
    });

    console.log(ary.length);
}

{
    const userNum = [];

    input.forEach((x) => {
        const num = x % 42;

        if (userNum.indexOf(num) === -1) {
            userNum.push(num);
        }
    });

    console.log(userNum.length);
}

{
    const arr = [];

    input.forEach((x) => {
        const num = x % 42;
        arr.push(num);
    });

    let result = [...new Set(arr)];

    console.log(result.length);
}
