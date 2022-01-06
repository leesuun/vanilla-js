// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("하양");
// console.log(user.name);

// function A() {}
// function B() {
//     return a;
// }

// let a = new A();
// let b = new B();

// alert(a == b); // true

// function Calculator() {
//     this.read = function () {
//         this.a = prompt();
//         this.b = prompt();
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// const obj = {};

// let val = {};
// val[obj] = 1;
// console.log(val);

// // 명시적 형 변환
// let num = Number(obj);

// // (이항 덧셈 연산을 제외한) 수학 연산
// let n = +obj; // 단항 덧셈 연산
// let delta = date1 - date2;

// // 크고 작음 비교하기
// let greater = user1 > user2;

// "use strict";
// let str = "Hello";
// str.test = 5; // (*)
// alert(str.test);

// let str = "stringify";

// 끝에서 4번째부터 시작해 끝에서 1번째 위치까지
// alert(str.slice(-4, -1)); // gif

// let ary = [
//     1,
//     2,
//     (test = () => {
//         alert(this);
//     }),
// ];
// console.log(ary[2]());

// function camelize(str) {
//     let newStr = str
//         .split("-")
//         .map((word, idx) => (idx == 0 ? word : word[0].toUpperCase() + word.slice(1)));

//     console.log(newStr);
// }

// camelize("background-color") == "backgroundColor";
// camelize("list-style-image") == "listStyleImage";
// camelize("-webkit-transition") == "WebkitTransition";

// function filterRange(arr, a, b) {
//     return arr.filter((val, idx) => val >= a && val <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);
// console.log(arr);
// alert(filtered); // 3,1 (조건에 맞는 요소)

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arrs, a, b) {
//     for (let i = 0; i < arrs.length; i++) {
//         if (!(a <= arrs[i] && arrs[i] <= b)) {
//             arr.splice(i, 1);
//         }
//     }
// }

// filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

// alert(arr); // [3, 1]

// alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

// function copySorted(ary) {
//     const newAry = [];

//     ary.forEach((value) => {
//         newAry.push(value);
//     });
//     return newAry.sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (no changes)

// function Calculator() {
//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     };

//     this.calculate = function (str) {
//         let split = str.split(" "),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//         return this.methods[op](a, b);
//     };

//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }

// let calc = new Calculator();
// let powerCalc = new Calculator();
// powerCalc.addMethod("**", (a, b) => a ** b);

// alert(powerCalc.calculate("3 ** 2")); // 10

// function Calculator() {
//     this.addMetod = function (oper,) {

//     }
// }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((obj) => obj.name);

// /* 여기에 코드를 작성하세요. */

// alert(names); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((item) => ({
//     fullName: item.name + " " + item.surname,
//     id: item.id,
// }));
// /* 여기에 코드를 작성하세요. */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // John Smith

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(ary) {
//     ary.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// function shuffle(ary) {
//     const newAry = [];
//     for (let i = 0; ary.length > 0; i++) {
//         const randomIdx = Math.floor(Math.random() * ary.length);
//         newAry.push(ary[randomIdx]);
//         ary.splice(randomIdx, 1);
//     }
//     return newAry
// }

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// // 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
// let count = {
//     123: 0,
//     132: 0,
//     213: 0,
//     231: 0,
//     321: 0,
//     312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join("")]++;
// }

// // 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// shuffle(arr);

// console.log(arr);

// let range = {
//     from: 1,
//     to: 5,
// };

let range = [1, 2, 3];

for (key of range) {
    console.log(key);
}

/* 포스팅
1. 스택 큐 간단한 구현 카드로

*/
