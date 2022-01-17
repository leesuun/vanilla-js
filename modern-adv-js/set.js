// let range = {
//     from: 1,
//     to: 5,
// };
// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         },
//     };
// };

// console.log(range);
// for (let num of range) {
//     console.log(num);
// }

let arr = [1, 2, 3];
const legnth = Symbol("length");

arr[length] = 50;
console.log(arr);
console.log(arr.length);
console.log(arr[length]);

// const friends = [
//     { name: "john", age: 18 },
//     { name: "jinho", age: 20 },
//     { name: "heock", age: 23 },
// ];

// for (let i = 0; i<set_keys.)

// const arr = [...set];
// console.log(arr);

// set.forEach((val) => console.log(val));
// for (let val of set) {
//     console.log(val);
// }

// const obj = new Object();
// obj[1] = 1;
// console.log(typeof obj[1]);
// for (let key in obj) {
//     console.log(typeof key);
// }

// const keys_friends = setFriends.keys();

// console.log(setFriends);
// console.log(arr);

// const keys = set.keys();
// const values = set.values();
