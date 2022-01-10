// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// i = 0;
// console.log(i);

// function sayHi() {
//     phrase = "Hello"; // (*)

//     if (false) {
//         var phrase;
//     }

//     console.log(phrase);
//     alert(phrase);
// }

// sayHi();

// (function () {
//     var IIFE = "IIFE";
//     return IIFE;
// })();
// console.log(IIFE);

// function makeCounter() {
//     // let count = 0 대신 아래 메서드(프로퍼티)를 사용함

//     function counter() {
//         return counter.count++;
//     }

//     counter.count = 0;

//     return counter;
// }

// let counter = makeCounter();
// alert(counter()); // 0
// alert(counter()); // 1

// function makeCounter() {
//     function counter() {
//         return counter.count++;
//     }

//     counter.count = 0;

//     return counter;
// }

// let counter = makeCounter();

// counter.count = 10;
// alert(counter()); // 10

// let sayHi = function func(who) {
//     if (who) {
//         alert(`Hello, ${who}`);
//     } else {
//         func("Guest"); // 원하는 값이 제대로 출력됩니다.
//     }
// };

// let welcome = sayHi;
// sayHi = null;

// welcome(); // Hello, Guest (중첩 호출이 제대로 동작함)

// function makeCounter() {
//     let count = 0;
//     // ... your code ...
//     function counter() {
//         return count++;
//     }

//     counter.set = (value) => (count = value);
//     counter.decrease = () => count--;

//     return counter;
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// counter.set(10); // set the new count

// alert(counter()); // 10

// counter.decrease(); // decrease the count by 1

// alert(counter()); // 10 (instead of 11)

// let delay = 5000;

// let timerId = setTimeout(function request() {
//     console.log("1");
//     timerId = setTimeout(request, delay);
// }, delay);

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(() => {
//         console.log(current);
//         if (current === to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }

// function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }

//         current++;
//     }, 1000);
// }

// printNumbers(5, 10);

// let user = {
//     name: "John",
// };

// console.log(user.constructor());

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// alert(JSON.stringify(descriptor, null, 2));

// let animal = {
//     eats: true,
// };
// let rabbit = {
//     jumps: true,
// };

// // rabbit.__proto__ = animal;
// // rabbit.setPrototypeof = animal;

// Object.setPrototypeOf(rabbit, animal);
// console.dir(rabbit);

// let user = {
//     name: "Jon",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(fullName) {
//         [this.name, this.surname] = fullName.split(" ");
//     },
// };

// let admin = {
//     __proto__: user,
//     isAdmin: true,
// };

// // alert(admin.fullName);

// admin.fullName = "Alice coper";

// alert(admin.fullName);

// animal엔 다양한 메서드가 있습니다.
// let animal = {
//     eats: true,
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal,
// };

// for (let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);

//     console.log(isOwn, prop);
//     if (isOwn) {
//         alert(`객체 자신의 프로퍼티: ${prop}`); // 객체 자신의 프로퍼티: jumps
//     } else {
//         alert(`상속 프로퍼티: ${prop}`); // 상속 프로퍼티: eats
//     }
// }

// let head = {
//     glasses: 1,
// };

// let table = {
//     pen: 3,
//     __proto__: head,
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };

// console.log(pockets.glasses);

// let hamster = {
//     stomach: [],

//     eat(food) {
//         this.stomach.push(food);
//     },
// };

// let speedy = {
//     stomach: [],
//     __proto__: hamster,
// };

// let lazy = {
//     stomach: [],
//     __proto__: hamster,
// };

// speedy.eat("apple");
// speedy.eat("banana");
// lazy.eat("banana");
// console.log(speedy);

// let animal = {
//     eats: true,
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("토끼");

// console.log(rabbit);

// let obj = {};

// let obj2 = new Object();

// console.log(obj.__proto__ === Object.prototype);
// console.log(obj2.constructor);

// let arr = 5;

// // console.log(arr.__proto__.__proto__ === Object.prototype);
// console.dir(toString);

// Function.prototype.defer = function (ms) {
//     setTimeout(f, ms);
// };

// function f() {
//     alert("Hello!");
// }

// f.defer(1000);

// let animal = {
//     eats: true,
// };

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true,
//     },

//     activity: {
//         runs() {
//             console.log("토끼 뛴다.");
//         },
//     },
//     runs() {
//         console.log("토끼 뛴다.");
//     },
// });

// console.log(rabbit);
// alert(rabbit.jumps); // true

// let animal = {
//     eats: true,
// };

// let rabbit = Object.create(animal);

// let obj1 = Object.create(null);

// console.log(rabbit.__proto__.constructor);
// console.dir(obj1.__proto__.constructor);

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name);
//     }
// }
// alert(typeof User);
// // 사용법:
// let user = new User("John");
// console.log(user);
// user.sayHi();

// class User {
//     constructor(name) {
//         // setter를 활성화합니다.
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 4) {
//             alert("이름이 너무 짧습니다.");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("보라dlek");
// alert(user.name); // 보라

// user = new User(""); // 이름이 너무 짧습니다.

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} 이/가 멈췄습니다.`);
    }
}

let animal = new Animal("동물");

class Rabbit extends Animal {
    hide() {
        alert(`${this.name}이가 숨었습니다.`);
    }
}

let rabbit = new Rabbit("토끼");

console.dir(rabbit);
