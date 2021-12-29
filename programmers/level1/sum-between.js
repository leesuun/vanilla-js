// sol1
function solution(a, b) {
    var answer = 0;
    let aFac = 0;
    let bFac = 0;

    if (a > b) {
        for (let i = b; i < a + 1; i++) {
            aFac += i;
        }
        answer = aFac;
    } else if (a < b) {
        for (let i = a; i < b + 1; i++) {
            bFac += i;
        }
        answer = bFac;
    } else {
        answer = a;
    }

    return answer;
}

// sol2
{
    function sum(large, small) {
        let number = 0;
        for (let i = small; i < large + 1; i++) {
            number += i;
        }
        return number;
    }
    function solution(a, b) {
        var answer = 0;

        if (a > b) {
            answer = sum(a, b);
        } else if (a < b) {
            answer = sum(b, a);
        } else {
            answer = a;
        }

        return answer;
    }
}

// sol3
function adder(a, b) {
    var result = 0;
    return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
