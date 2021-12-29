// sol1
function solution(s) {
    var answer = false;
    const numbers = /([a-z])/;

    for (let i = 0; i < s.length; i++) {
        if (!numbers.test(s)) {
            if (s.length === 4 || s.length === 6) {
                answer = true;
            }
        }
    }

    return answer;
}

// sol2
function solution(s) {
    const regex = /^\d{4}$|^\d{6}$/;
    const regex2 = /^[0-9]{4}$|^[0-9]{6}$/;

    return regex2.test(s);
}
