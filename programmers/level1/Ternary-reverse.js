// sol1
function solution(n) {
    var answer = 0;

    let temp = [];
    while (n !== 0) {
        temp.push(n % 3);
        n = Math.floor(n / 3);
        if (n < 1) {
            temp.forEach((data, rI) => {
                const legnth = temp.length - 1 - rI;
                answer += data * Math.pow(3, legnth);
                // answer += data * (3 ** length);
            });
        }
    }
    return answer;
}

//sol2
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
};
