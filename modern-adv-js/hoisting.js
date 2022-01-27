/*
    1. hoisting 사전적의미 -> 끌어올리기
    2. 자바스크립트는 기본적으로 모든 선언문(var, let , function, const, class)을 --> 호이스팅
    3. 호이스팅 == 스코프 안의 어디에서든 변수 선언은 최상위에서 선언한 것과 동일
    4. var 와 let, const 키워드로 선언한 변수가 차이가 있다.
*/

/*
// console.log(b); // not initialization
// let b = 1;
console.log(a);
var a = 111;

function myA() {
    // 함수 레벨 스코프
    var a = 333;
}

console.log(a); // 111
*/

// class 호이스팅

var str1 = "Hello, World";

const testFun = function () {
    console.log(str1);
    var str1 = "Hello, Korea";
};

testFun();
