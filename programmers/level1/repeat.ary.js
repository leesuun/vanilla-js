// sol1
function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i + 1, 1);
        }
    }
    // 시간 복잡도 높아짐.
}

//sol2
function solution(arr) {
    return arr.filter((num, i) => num !== arr[i + 1]);
}
