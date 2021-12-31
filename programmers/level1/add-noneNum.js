// sol1
function solution(numbers) {
    var answer = 0;
    let nums = Array(10)
        .fill()
        .map((v, i) => i);

    for (let i = 0; i < nums.length; i++) {
        if (!numbers.includes(nums[i])) {
            answer += nums[i];
        }
    }
    return answer;
}

// sol2
function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < 10; i++) {
        answer += i;
    }

    return answer - numbers.reduce((pre, curr) => pre + curr);
}
