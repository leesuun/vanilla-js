// console.log({}); // 프로토타입 Obj가 최상위 부모
// console.log([]); // 프로토타입 Array가 최상위 부모
// console.log(new Map()); // 프로토타입 Map가 최상위 부모
// console.log(new Set()); // 프로토타입 sET가 최상위 부모

// class Test {}
// const test = new Test();
// console.log(test);

/* 동물
function Animal() {}
Animal.prototype.run = function () {
    console.log("동물이 뛴다.");
};

const tiger = new Animal();
tiger.runs = function () {
    console.log("타이거가 뛴다");
};
tiger.run();
*/

/*
const Animal = {
    runs: function () {
        console.log(`${this.name}가 뛴다.`);
    },
};

const rabbit = {
    name: "토끼",
    eat: true,
};
Object.setPrototypeOf(rabbit, Animal);

console.log(Animal);
console.log(rabbit);
*/

/* 계산기
function Calc(a, b) {
    this.a = a;
    this.b = b;
}

Calc.prototype.plus = function () {
    console.log(this.a + this.b);
};
Calc.prototype.subtract = function () {
    console.log(this.a - this.b);
};
Calc.prototype.multiply = function () {
    console.log(this.a * this.b);
};
Calc.prototype.divison = function () {
    console.log(this.a / this.b);
};

let calc1 = new Calc(10, 5);
let calc2 = new Calc(10, 5);
let calc3 = new Calc(10, 5);
let calc4 = new Calc(10, 5);

console.log(calc1);

*/

/* 프로토타입 상속

let obj1 = {
    name: "홍길",
    age: 20,
    sayHi: function () {
        console.log(`HI~ ${this.name}`);
    },
};

let obj2 = {
    name: "순신",
    age: 30,
};

Object.setPrototypeOf(obj2, obj1);
obj2.sayHi();
console.log(obj2);
*/

/* new 연산자의 내부 동작 
function newFunc() {
    this.asd = "asd";
    this.hello = function hello() {
        console.log("hello newFunc");
    };
}
// 상위 프로토타입 객체를 참조 할 수 있도록함
const func1 = new newFunc();
newFunc.prototype.hello2 = function () {
    console.log("hello2");
};
func1.hello2();
newFunc.hello2();
console.log(func1.hello);

function Add(a, b) {
    this.a = a;
    this.b = b;
}

Add.prototype.plus = function () {
    return this.a + this.b;
};

//방법1
const add = new Add(1, 2);
console.log(add.plus());

//방법2
const obj = {};
obj.__proto__ = Add.prototype;
Add.apply(obj, [1, 2]); // 인자값들을 하나로 묶어
console.log(obj.plus());
*/

/*생성자 함수(공장 함수)
function Persion(name, age) {
    //this = {} this라는 빈 객체를 하나 생성한 후에 속성을 추가
    this.name = name;
    this.age = age;

    //return this;
}
let per1 = new Persion("asd", 1);
console.log(per1);

function A() {}
const obj = new A();
// console.log(obj instanceof A);

console.log(Object.prototype.isPrototypeOf(obj));
*/

/*
 프로토타입 연습
const housing = {
    toilet: 1,
    turnon() {
        console.log("turn on..");
    },
    setColor(color) {
        this.color = color;
    },
    setRooms(rooms) {
        this.rooms = rooms;
    },
};

const apt = {};
const villa = {};
const oneroom = {};

Object.setPrototypeOf(apt, housing);
Object.setPrototypeOf(villa, housing);
Object.setPrototypeOf(oneroom, housing);

apt.hasOven = function () {
    console.log(true);
};

apt.setColor("blue");
apt.setRooms(4);

villa.setColor("red");
villa.setRooms(2);

oneroom.setColor("green");
oneroom.setRooms(1);

const rainbow = {
    name: "무지개아파트",
    rooms: 5,
    __proto__: apt,
};
// console.log(Object.keys(rainbow));
// console.log(Object.values(rainbow));
// console.log(Object.entries(rainbow));

let ary = Object.entries(rainbow);
let obj = {};
// ary.forEach((prop) => {
//     obj[prop[0]] = prop[1];
// });
obj = Object.fromEntries(ary);
console.log(obj);
console.log(ary);
*/

/* 생성자 함수
function Housing(name, color, rooms, ...arg) {
    this.name = name;
    this.color = color;
    this.rooms = rooms;

    // console.log(arg);  3번째 인자 이후로 입력한 매개변수는 배열 형태로 들어옴
    this.turnon = function () {
        console.log("turn on..");
    };
}

Housing.prototype.toilet = 1;
Housing.prototype.turnon = function () {
    console.log("turn on..!");
};

const apt = new Housing("apt", "red", 4);
const villa = new Housing("villa", "black", 3);
const oneroom = new Housing("oneroom", "blue", 1);

console.log(apt);
console.log(villa);
console.log(oneroom);
*/

/*
const Housing = function (name_, color, rooms) {
    const name = name_;
    this.getName = () => console.log(name);
    this.color = color;
    this.rooms = rooms;
};

const apt = new Housing("apt", "red", 4);
*/

const housing = {
    toilet: 1,
    turnon() {
        console.log("turn on..");
    },
    setColor(color) {
        this.color = color;
    },
    setRooms(rooms) {
        this.rooms = rooms;
    },
};

const apt = {};
const villa = {};
const oneroom = {};

Object.setPrototypeOf(apt, housing);
Object.setPrototypeOf(villa, housing);
Object.setPrototypeOf(oneroom, housing);

apt.hasOven = function () {
    console.log(true);
};

apt.setColor("blue");
apt.setRooms(4);

villa.setColor("red");
villa.setRooms(2);

oneroom.setColor("green");
oneroom.setRooms(1);

const rainbow = {
    name: "무지개아파트",
    rooms: 5,
    __proto__: apt,
};
// console.log(Object.keys(rainbow));
// console.log(Object.values(rainbow));
// console.log(Object.entries(rainbow));

let ary = Object.entries(rainbow);
let obj = {};
// ary.forEach((prop) => {
//     obj[prop[0]] = prop[1];
// });
obj = Object.fromEntries(ary);
console.log(obj);
console.log(ary);
