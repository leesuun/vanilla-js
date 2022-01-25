function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);

    for (let i = 0; answer <= budget; i++) {
        if (answer + d[i] <= budget) {
            answer += d[i];
        } else {
            return i;
        }
    }
}
