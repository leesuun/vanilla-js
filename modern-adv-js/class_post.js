class Calculator {
    // 생성자 함수
    constructor(type) {
        this.type = type;
    }

    // 정적 클래스 메서드
    static add2(a, b) {
        return a + b;
    }

    // 일반 클래스 메서드
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (!b) return new Error(`${b}으로 나눌 수 없습니다.`);
        return a / b;
    }
}

const basicCalc = new Calculator("basic");
// console.log("typeof Calculator:", typeof Calculator);
console.dir(Calculator);
// console.log(basicCalc);

console.log(basicCalc.add(10, 20));
console.log(basicCalc.subtract(10, 20));
console.log(basicCalc.multiply(10, 20));
console.log(basicCalc.divide(10, 20));
console.log(Calculator.add2(10, 20));
