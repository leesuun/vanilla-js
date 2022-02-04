/*
{
    // Shape - 상위클래스
    function Shape() {
        this.x = 0;
        this.y = 0;
    }

    // 상위클래스 메서드
    Shape.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
        console.info(x, y);
    };

    // Rectangle - 하위클래스
    function Rectangle() {
        this.z = 1;
        // 부모 생성자를 호출해서 x , y 속성을 받음
        Shape.call(this); // super 생성자 호출.

        // Shape.apply(this); // super 생성자 호출.
    }

    // 하위클래스는 상위클래스를 확장
    // Object.create()는 프로토타입 객체를 그대로 복사한다. 부모클래스를 가르키고 있음
    Rectangle.prototype = Object.create(Shape.prototype);
    // 복제된 프로토타입이 자식 객체를 가르키로록 만들어야함
    Rectangle.prototype.constructor = Rectangle;

    var rect = new Rectangle();
    // rect의 프로토타입은 Object.create()를 통해 생성된 프로토타입을 의미한다.
    // 생성된 프로토타입은 최초 Shape 함수를 선언 했을때 생성된 프로토타입 객체를 참조한다.
    // 아니었다면 프로토타입을 디버깅 했을 시 move 메서드가 보여야하는데 안보임

    console.dir(rect);

    // console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
    // console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
    // rect.move(1, 2); // Outputs, 'Shape moved.'
}
*/

/*
class Person {
    age = 20;
    power = 900;
    #weight = 60; // private 변수
    #height = 170; // private 변수
}

const p1 = new Person();
console.log(p1);

console.log(p1.weight);
// console.log(p1.#weight); // error
*/

/* private value, method
class Animal {
    #dog = "개";
    bark() {
        return this.#dog + "가 짖네..";
    }
    #privateMethod() {
        return "Hello, Private method";
    }
    printPrivateMethod() {
        console.log(this.#privateMethod());
    }
    static #privateStaticMethod() {
        console.log("privateStaticMethod");
    }
    static printPrivateStaticMethod() {
        this.#privateStaticMethod();
    }
}

const dog = new Animal();
console.log(dog.bark());
Animal.printPrivateStaticMethod();
*/

/*
// getter , setter
class Person {
    constructor(id, name, email) {
        this._id = id;
        this._name = name;
        this._email = email;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }

    set id(id) {
        this._id = id;
    }
    set name(name) {
        this._name = name;
    }
    set email(email) {
        this._email = email;
    }

    info() {
        return `ID:${this._id}, 이름:${this._name}, email:${this._email}`;
    }
}

const p1 = new Person(1, "leesuun", "sktjsvy2@naver.com");

// getter는 사용시 함수호출이 아님
// console.log(p1.name());
// console.log(p1.email);
console.log(p1.info());
p1.name = "이수운";
console.log(p1.info());
*/
