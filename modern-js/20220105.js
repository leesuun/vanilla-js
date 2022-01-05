// //1
// "use strict";

// //2
// let name = 0;
// let nickname = null;

// console.log(name ?? nickname ?? "익명의 사용자"); // 0출력
// console.log((name || nickname) ?? "익명의 사용자"); // 익명의 사용자 출력

// // ?? 연산자 falsy값 "", 0의 연산결과는 true

// //3
// function test() {
//     console.log(this);
// }

// const test1 = () => {
//     console.log(this);
// };

// const box = document.querySelector("#box");
// box.addEventListener("click", test);

// //4
// const obj = {
//     name: "he",
//     age: 20,
//     height: 160,
// };
// console.log("name" in obj);
// for (let key in obj) {
//     // console.log(key);
//     console.log(obj[key]);
// }

// /* 포스팅
//     1. nullish 연산자
//     2. 논리 연산자 우선순위
//     3. use strict
//     4. 주석에 들어가면 좋은 내용
//     5. 테스트 자동화

// */

// // describe("pow", function () {
// //     it("주어진 숫자의 n 제곱", function () {
// //         assert.equal(pow(2, 3), 8);
// //     });
// // });

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let value = 0;
// for (let key in salaries) {
//     value += salaries[key];
// }
// console.log(value);

// for (let key in menu) {
//     if (typeof menu[key] === Number) {
//         menu.key += menu.key;
//     }
// }

// const human = {
//     name: "hehe",
//     age: 20,
// };

// const copy = { canView: true };

// //깊은 복사
// for (let key in human) {
//     copy[key] = human[key];
// }
// json.parse(json.stringify)

// //병합
// Object.assign(human, copy);

// console.log(copy);
// console.log(human);

let user = {
    name: "sdasd",
};

let admin = user;

user = null;
console.log(user);
