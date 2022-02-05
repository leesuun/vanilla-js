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

class MiddleCalc extends Calculator {
    constructor(type) {
        super(type);
    }
    pow(a, b) {
        return a ** b;
    }
    sqrt(a) {
        return Math.sqrt(a);
    }
    remainder(a, b) {
        if (!b) return new Error(`${b}으로 나눌 수 없습니다.`);
        return a % b;
    }
}

const middleCalc = new MiddleCalc("middle", 1);

class AdvancedCalc extends MiddleCalc {
    constructor(type) {
        super(type);
    }
    random(a, b) {
        let ary = [];
        for (let i = a; i <= b; i++) {
            ary.push(i);
        }
        const random = Math.floor(Math.random() * ary.length);
        return ary[random];
    }

    factorial(a) {
        if (a < 0) return new Error("음수 사용 불가");
        if (a === 0) return 1;
        let factorial = 1;
        for (let i = 1; i <= a; i++) {
            factorial *= i;
        }
        return factorial;
    }

    #decimal(a) {
        let measure = [];
        for (let i = 1; i <= a; i++) {
            if (a % i === 0) measure.push(i);
        }

        if (measure.length === 2) {
            return `소수입니다. 약수: ${measure} `;
        }
        return "소수가 아닙니다.";
    }

    decimal2(a) {
        return this.#decimal(a);
    }
}

const advancedCalc = new AdvancedCalc("advanced");
console.log(advancedCalc.decimal2(5));
console.log(advancedCalc.decimal(5)); 

