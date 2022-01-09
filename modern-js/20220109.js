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

"use strict";
function makeWorker() {
    // let name = "Pete";

    return function () {
        // let name = "jet";
        alert(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
