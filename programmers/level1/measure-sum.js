// sol1
function solution(left, right) {
    var answer = 0;
    let cnt = 0;

    for (let i = left; i <= right; i++) {
        cnt = 0;
        for (let j = 1; j <= right; j++) {
            !(i % j) && cnt++;
        }
        answer += !(cnt % 2) ? i : -i;
    }

    return answer;
}

// sol2
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        //제곱근이 정수이면 약수의 개수가 홀수
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
