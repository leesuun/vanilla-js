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

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;

//     return {
//         father: man,
//         mother: woman,
//     };
// }

// let family = marry(
//     {
//         name: "John",
//     },
//     {
//         name: "Ann",
//     }
// );

// delete family.father;
// delete family.mother.husband;
// console.log(family.father);

// family = null;
// console.log(family.father);

// let user = {
//     name: "hoho",

//     sayHi() {
//         return this.name;
//     },
// };

// const admin = user;

// user = null;

// console.log(admin.sayHi());

// function makeUser() {
//     return {
//         name: "jon",
//         ref: this,
//     };
// }

// let user = makeUser();
// console.log(user.name);

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         console.log(this);
//         return this;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () {
//         // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
//         alert(this.step);
//         return this;
//     },
// };

// ladder.up().showStep();
// ladder.showStep();
// ladder.up().up().down().up().down().showStep(); // 1
