/*
function* generateSequence(val) {
    const genValue_1 = 1;
    const genValue_2 = 2;
    const value = val;
    console.log(value);

    yield () => console.log("first", genValue_1);
    yield () => console.log("second", genValue_2);
    yield function () {
        console.log("third");
    };
    return () => console.log("fourth");
}

const gen_itr = generateSequence(1);

// 객체 반환 -> next()메서드 존재 -> next() 실행마다 yield 부분까지 실행 후
// -> 멈춘다 -> yied뒤의 값을 반환
// next()메서드는 value,done 2개의 속성을 가진 객체를 반환
// done은 함수 코드 실행이 끝나면 true, 아니면 false 반환

// const fir = gen_itr.next();
// const second = gen_itr.next();
// const third = gen_itr.next();
// console.log(gen_itr.next());

*/

/*
function* testGen2() {
    const a = yield 1;
    console.log(a);
    const b = yield a * 1;
    console.log(b);
    const c = yield b + 2;
    console.log(c);
    return a * b * c;
}

const gen_itr = testGen2();

console.log(gen_itr);
console.log(gen_itr.next());
console.log(gen_itr.next(100));
console.log(gen_itr.next(48));
console.log(gen_itr.next(2));

*/

// 제너레이터 함수를 통한 비동기 구현(callback, promise)

// 1. 콜백 구현
/*
setTimeout(
    (x) => {
        let result = x;
        console.log(result);

        setTimeout(
            (x) => {
                result *= x;
                console.log(result);

                setTimeout(
                    (x) => {
                        result *= x;
                        console.log(result);
                    },
                    1000,
                    30
                );
            },
            1000,
            20
        );
    },
    1000,
    10
);
*/

/*
// 2. Promise로 변환
let promise = new Promise(function (resolve, reject) {
    setTimeout(
        (x) => {
            let result = x;
            console.log(result);
            resolve(result);
        },
        1000,
        10
    );
})
    .then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(
                (x) => {
                    result *= x;
                    console.log(result);
                    resolve(result);
                },
                1000,
                20
            );
        });
    })
    .then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(
                (x) => {
                    result *= x;
                    console.log(result);
                    resolve(result);
                },
                1000,
                30
            );
        });
    })
    .then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(
                (x) => {
                    result *= x;
                    console.log(result);
                    resolve(result);
                },
                1000,
                40
            );
        });
    });
*/

// 3. 제너레이터로 변환
/*
function calc(a, b) {
    setTimeout(() => {
        mul_itr.next(a * b);
    }, 1000);
}

function* mulGen() {
    const a = yield calc(1, 10);
    console.log(a);
    const b = yield calc(a, 20);
    console.log(b);
    const c = yield calc(b, 30);
    console.log(c);
    const d = yield calc(c, 40);
    console.log(d);
    return;
}

const mul_itr = mulGen();
mul_itr.next();
*/
