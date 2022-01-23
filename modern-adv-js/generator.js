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

function* testGen2() {
    const a = yield 1;
    console.log(a);
    debugger;
    const b = yield a * 1;
    console.log(b);
    const c = yield b + 2;
    console.log(c);
    return a * b * c;
}

const gen_itr = testGen2();
console.log(gen_itr.next());
console.log(gen_itr.next(100));
console.log(gen_itr.next(48));
console.log(gen_itr.next(2));

// 3 or
