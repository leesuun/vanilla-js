function solution(n) {
    var answer = 0;

    for (let i = 0; i < n + 1; i++) {
        if (!(n % i)) answer += i;
    }

    return answer;
}
