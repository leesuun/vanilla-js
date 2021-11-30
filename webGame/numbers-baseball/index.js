function randomNumber() {
    const MIN = 1000;
    const MAX = 10000;
    let number;
    let numberCheck = 0;

    do {
        number = Math.ceil(Math.random() * (MAX - MIN) + MIN)
            .toString()
            .split("");

        for (let i = 0; i < number.length; i++) {
            for (let j = i + 1; j < number.length; j++) {
                if (number[i] === number[j]) {
                    numberCheck = 1;
                } else {
                    numberCheck = 0;
                }
            }
        }
    } while (numberCheck > 0);

    return number;
}

let list = [];
while (true) {
    let n = ~~(Math.random() * 10); // 0~9 숫자하나 랜덤으로 얻음
    (list.length || n) && list.push(n); // list요소가 하나라도 있거나 n이 0보다 크면 list에 추가
    list = [...new Set(list)]; // 중복값제거
    if (list.length >= 4) break; // 중복값제거하고 나서 요소 수가 4개면 반복 종료
}
console.log(list.join("")); // 결과

// ssssssssssssssssssssssssssssssssssssssssssssssssssss

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer = [];
function getRandom(start, end) {
    return Math.floor(Math.random() * end + start);
}

const idx = getRandom(1, numbers.length - 1);
answer.push(numbers[idx]);
numbers.splice(idx, 1);

for (let i = 0; i < 3; i++) {
    const idx = getRandom(0, numbers.length - 1);
    answer.push(numbers[idx]);
    numbers.splice(idx, 1);
}
console.log(answer);
