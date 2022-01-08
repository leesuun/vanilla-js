// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(ary) {
//     let map = new Map();

// //     for (let word of ary) {
// //         let sorted = word.toLowerCase().split("").sort().join("");
// //         map.set(sorted, word);
// //     }

// //     return Array.from(map.values());
// // }

// // console.log(aclean(arr));

// // //

// // function aclean(arr) {
//     let obj = {};

//     for (let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split("").sort().join("");
//         obj[sorted] = arr[i];
//         console.log(obj);
//     }

//     return Object.values(obj);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(arr.values());

// alert(aclean(arr));

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");
// console.log(keys);

// let [a, b, c] = "abd"; // ["a", "b", "c"]

// console.log([a, b, c]);

// 함수에 전달할 객체
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"],
// };

// // 똑똑한 함수는 전달받은 객체를 분해해 변수에 즉시 할당함
// function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
//     // title, items – 객체 options에서 가져옴
//     // width, height – 기본값
//     alert(`${title} ${width} ${height}`); // My Menu 200 100
//     alert(items); // Item1, Item2
// }

// showMenu(options);

// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 3);
// alert(pow(2, 3)); // 8

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
//     if (Array.isArray(department)) {
//         // console.log(department.reduce((acc, curr) => acc + curr.salary, 0));
//         return department.reduce((acc, curr) => acc + curr.salary, 0);
//     } else {
//         let sum = 0;
//         for (let depa of Object.values(department)) {
//             sum += sumSalaries(depa);
//             console.log(sum);
//         }

//         return sum;
//     }
// }

// console.log(sumSalaries(company));

// function sumTo(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += i;
//     }
//     return result;
// }

// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
// }
// //return 5 + 4 + 3 + 2 + 1

// console.log(sumTo(5));

// function factorial(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// function factorial(n) {
//     if (n == 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(3));

// function fib(n) {
//     return n <= 1 ? n : fib(n - 2) + fib(n - 1);
// }

// console.log(fib(5));

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}

let counter = makeCounter();

console.log(counter());
// alert(counter()); // 1
// alert(counter()); // 2
