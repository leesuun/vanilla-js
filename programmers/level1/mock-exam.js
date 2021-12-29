// sol 1
function solution(answers) {
    var answer = [];

    const per1 = [1, 2, 3, 4, 5];
    const per2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let one = [];
    let two = [];
    let three = [];

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    let j = 0;
    let k = 0;
    let l = 0;
    for (let i = 0; i < answers.length; i++) {
        if (j === 5) {
            j = 0;
        }
        if (k === 8) {
            k = 0;
        }
        if (l === 10) {
            l = 0;
        }
        one.push(per1[j]);
        two.push(per2[k]);
        three.push(per3[l]);
        one[i] === answers[i] && count1++;
        two[i] === answers[i] && count2++;
        three[i] === answers[i] && count3++;
        j++;
        k++;
        l++;
    }

    let arr = [];
    arr.push(count1, count2, count3);

    let max = Math.max.apply(null, arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max - 1) {
            max = arr[i];
            answer.push(i + 1);
        }
    }

    return answer;
}

// sol 2
function solution(answers) {
    var answer = [];

    const per1 = [1, 2, 3, 4, 5];
    const per2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let per1c = answers.filter((a, idx) => a === per1[idx % per1.length]).length;
    let per2c = answers.filter((a, idx) => a === per2[idx % per2.length]).length;
    let per3c = answers.filter((a, idx) => a === per3[idx % per3.length]).length;

    const max = Math.max(per1c, per2c, per3c);

    per1c === max && answer.push(1);
    per2c === max && answer.push(2);
    per3c === max && answer.push(3);

    return answer;
}

// sol 3
function solution(answers) {
    var answer = [];
    const per1 = [1, 2, 3, 4, 5];
    const per2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == per1[i % per1.length]) count[0]++;
        if (answers[i] == per2[i % per2.length]) count[1]++;
        if (answers[i] == per3[i % per3.length]) count[2]++;
    }

    const max = Math.max(count[0], count[1], count[2]);
    for (let i = 0; i < count.length; i++) {
        if (max == count[i]) answer.push(i + 1);
    }

    return answer;
}
