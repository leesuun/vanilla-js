const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().split("\n");
const T = Number(input.shift());

{
    for (let i = 0; i < T; i++) {
        const k = +input.shift();
        const n = +input.shift();

        let result = 1;
        for (let j = 0; j < n - 1; j++) {
            result = result * (k + n - j);
        }

        for (let j = 1; j < n; j++) {
            result = result / j;
        }

        console.log(Math.abs(result));
    }
}
{
    for (let i = 0; i < T; i++) {
        const k = +input.shift();
        const n = +input.shift();

        // 각 방당 인원수를 저장할 2차원 배열 선언
        const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

        for (let i = 1; i <= n; i++) {
            house[0][i] = i;
        }

        for (let i = 1; i <= k; i++) {
            for (let j = 1; j <= n; j++) {
                house[i][j] = house[i][j - 1] + house[i - 1][j];
            }
        }

        // k층 n호의 인원수 출력
        console.log(house[k][n]);
    }
}
