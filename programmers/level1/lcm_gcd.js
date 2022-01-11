function solution(n, m) {
    var answer = [];
    for (let i = 1; i <= m; i++) {
        if (!(n % i) && !(m % i)) {
            answer[0] = i;
            answer[1] = i * (n / i) * (m / i);
        }
    }
    return answer;
}

function solution(n, m) {
    var answer = [];
    for (let i = 1; i <= m; i++) {
        if (!(n % i) && !(m % i)) {
            let gcd = i;
            let lcm = i * (n / i) * (m / i);
            answer[0] = gcd;
            answer[1] = lcm;
        }
    }
    return answer;
}
