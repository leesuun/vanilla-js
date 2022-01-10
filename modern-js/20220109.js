// 재귀
// function pow(x, n) {
//     debugger;

//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//         // 2 * pow(2,2)
//         // 2 * 2 * pow(2,1)
//         // 2 * 2 * 2
//     }
// }

// alert(pow(2, 3)); // 8

// 재귀

// let company = {
//     // 동일한 객체(간결성을 위해 약간 압축함)
//     sales: [
//         { name: "John", salary: 1000 },
//         { name: "Alice", salary: 1600 },
//     ],
//     development: {
//         sites: [
//             { name: "Peter", salary: 2000 },
//             { name: "Alex", salary: 1800 },
//         ],
//         internals: [{ name: "Jack", salary: 1300 }],
//     },
// };

// function sumSalaries(department) {
//     debugger;
//     if (Array.isArray(department)) {
//         console.log(department);
//         return department.reduce((acc, curr) => acc + curr.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }

// alert(sumSalaries(company));

// 링크드 리스트
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null,
//             },
//         },
//     },
// };

// console.log(list.next.prev);

// let testVal = 1;

// function testFunc(num) {
//     console.log(testVal);
// }

// testFunc(testVal);

// testVal = 2;

// function makeCounter() {
//     let count = 0;

//     debugger;
//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();

// Cannot access 'parse' before initialization
// console.log(parse);
// let parse;

// let parse = "outer";
// function test(par) {
//     const inner = par;

//     debugger;
//     console.log(par);
// }
// test(parse);

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     };
// }
// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// "use strict";
// function f() {
//     let value = Math.random();

//     function g() {
//         console.log(value);
//         debugger; // Uncaught ReferenceError: value is not defined가 출력됩니다.
//     }

//     return g;
// }

// let g = f();
// g();

// "use strict";
// function makeWorker() {
//     // let name = "Pete";

//     return function () {
//         // let name = "jet";
//         alert(name);
//     };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // what will it show?

// "use strict";
// let phrase = "Hello";

// if (true) {
//     let user = "John";

//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
// }

// function sum(fir) {
//     return function (sec) {
//         return fir + sec;
//     };
// }

// // sum(1)(2) = 3
// // sum(5)(-1) = 4
// console.log(sum(5)(-1));

// let x = 1;

// function func() {
//     console.log(x); // ?
//     // let x = 2;
// }

// func();
/* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(start, finish) {
//     return (val) => start <= val && val <= finish;
// }
// function inArray(ary) {
//     return (val) => {
//         return ary.includes(val);
//     };
// }

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let j = i;
//         let shooter = function () {
//             alert(j);
//         };
//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // 0번째 shooter가 10을 출력함
// army[5](); // 5번째 shooter 역시 10을 출력함
// // 모든 shooter가 자신의 번호 대신 10을 출력하고 있음
