// sol1
function solution(num) {
    var answer = 0;
    let n = num;

    while (n !== 1) {
        n = !(n % 2) ? n / 2 : n * 3 + 1;
        answer++;
        if (answer > 499) {
            answer = -1;
            break;
        }
    }
    return answer;
}
