// 제너레이터 이더레이션 구현 (next 구현)
let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
        // [Symbol.iterator]: function*()를 짧게 줄임
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    },
};

for (let value of range) {
    alert(value); // 1, 2, 3, 4, 5
}
