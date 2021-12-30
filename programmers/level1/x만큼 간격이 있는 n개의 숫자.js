// sol1
function solution(x, n) {
    var answer = [x];

    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] + x;
    }
    return answer;
}

// sol2
function solution(x, n) {
    return Array(n)
        .fill(x)
        .map((n, i) => n + x * i);
}
