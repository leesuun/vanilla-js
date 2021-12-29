// sol1
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    let ary = [];

    for (let i = 0; i < a; i++) {
        ary[i] = "*";
    }
    for (let i = 0; i < b; i++) {
        console.log(ary.join(""));
    }
});

// sol2
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);

    const row = "*".repeat(a);
    for (let i = 0; i < b; i++) {
        console.log(row);
    }
});
