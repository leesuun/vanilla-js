// sol1
function solution(n) {
    var answer = "";

    for (let i = 0; i < n; i++) {
        i % 2 === 0 ? (answer += "수") : (answer += "박");
    }
    return answer;
}

//sol2
function solution(n) {
    var answer = "";

    for (let i = 0; i < n; i++) {
        !(i % 2) ? (answer += "수") : (answer += "박");
    }
    return answer;
}
