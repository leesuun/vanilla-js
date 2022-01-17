let ary = [];
for (let i = 1; i <= 10000; i++) {
    let num = String(i).split("");
    let sum = i;
    for (let j = 0; j < num.length; j++) {
        sum += num[j] / 1;
    }
    ary.push(sum);
}
ary.sort((a, b) => a - b);
for (let i = 1; i <= ary.length; i++) {
    if (!ary.includes(i)) {
        console.log(i);
    }
}
