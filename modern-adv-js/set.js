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

// let arr = [1, 2, 3];
// const legnth = Symbol("length");

// arr[length] = 50;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[length]);

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

// const setObj = new Set();
// setObj.add(1);
// setObj.add(2);
// setObj.add(3);

// console.log(setObj);

// const map = new Map(); // map을 생성한다.

// //원시 자료형 key
// map.set(1, "number");
// map.set(true, "boolean");
// map.set("str", "string");
// map.set(null, "null check");
// map.set(undefined, "undefined check");
// // map[Symbol(2)] = "number2";

// const map_itr = map.keys();
// for (let key of map_itr) {
//     console.log(key);
// }
// console.log(map_itr);

// map.get(1); // number
// map.get(true); // boolean
// map.get("str"); // string
// map.get(null); // null check
// map.get(undefined); // undefined check
// console.log(map.get(2));

// const map = new Map();
// const arr = [1, 2, 3, 4];
// map.set(arr, "numAry");
// map.get([1, 2, 3, 4]); //undefined
// map.get(arr); // numAry

// for (let val of map) {
//     console.log(val);
// }
// const map_itr = map.keys();

// for (let val of map_itr) {
//     console.log(val);
// }
// console.log(map_itr);

// const map = new Map();
// const animals = [
//     { name: "lion", age: 1 },
//     { name: "dog", age: 2 },
//     { name: "cat", age: 3 },
// ];
// // set 체이닝을 통한 할당이 가능하다.
// map.set(animals[0], "first").set(animals[1], "second").set(animals[2], "third");

// map.get(animals[0]); // first
// map.get(animals[1]); // second
// map.get(animals[2]); // third

// map.forEach((value, key, map) => {
//     // map객체의 forEach는 매개변수로 각 property별로
//     // value , key , map(자신)
//     console.log(key, value);
// });

// const key_itr = map.keys();
// const value_itr = map.values();
// const entries_itr = map.entries();

// console.log(key_itr);
// console.log(value_itr);
// console.log(entries_itr);

// for (let key of map.keys()) {
//     console.log(key); // key값 출력
// }
// for (let value of map.values()) {
//     console.log(value); // value값 출력
// }
// for (let entrie of map.entries()) {
//     console.log(entrie); // key와 value가 한쌍인 배열 출력
// }

// const set = new Set(); // Set 객체 생성
// set.add(1).add(2).add(1); // 1, 2
// set.add("str").add("str"); // str
// set.add(true).add(false).add(true).add(false); // true , false

// const ary = [];
// const obj = {};
// set.add([]).add([]); // [1,2,3], [1,2,3]
// set.add(ary).add(ary); // [] 중복 제거
// set.add(obj).add(obj); // {} 중복 제거

// console.log(set);

// const set = new Set([1, 2, 3, 4, 5, 1, 2]);
// const ary = Array.from(set);

const ary = [1, 2, 3, 1, 2];
const set = new Set([...ary]);
const map = new Map(set.entries());

console.log(map);

// console.log(set);
