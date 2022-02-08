let input = require("fs").readFileSync("../input.txt").toString().split(" ").map(Number);

const [M, N] = input;

const isPrimeArr = new Array(N + 1).fill(false).map((_, idx) => {
    if (idx >= 2) {
        return true;
    }
});

for (let i = 2; i <= N; i++) {
    if (isPrimeArr[i]) {
        for (let j = 2; j <= N / i; j++) {
            isPrimeArr[i * j] = false;
        }
    }
}

for (let i = M; i <= N; i++) {
    if (isPrimeArr[i]) console.log(i);
}
