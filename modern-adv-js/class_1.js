/*
//클래스
// 기본적으로 엄격모드로 동작함 (use strict)
// 클래스 메서드는 반복(열거) 대상이 아님 
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        hello() {
            console.log(`${this.name}님은 ${this.age}세 입니다.`);
        }
    }

    class Adult extends Person {}

    const p1 = new Person("이수운", 26);
    const p2 = new Adult("김", 26);
    p1.hello();
    p2.hello();

    console.dir(Person);
    console.dir(Adult);
}
*/

/*
// 무명 표현식
{
    const Person = class {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    };

    const p1 = new Person("홍", 10);
    console.log(Person.name); // Person
}
*/

/*
// 유명 표현식
{
    const Person = class namedPerson {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    };

    console.log(Person.name); // namedPerson

    // const p1 = new namedPerson("dsk", 10); // err
}
*/

// 자바스크립트 클래스 - 2가지 방식

/*
{
    // 1. 생성자 함수
    // 2. class
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        hello() {
            console.log(`${this.name}님은 ${this.age}세 입니다.`);
        }
    }
    const p1 = new Person();

    // 기본적으로 클래스 메서드는 열거 불가능하지만 getOwnPropertyNames() 메서드를 통해 get 가능
    console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(p1)));
}
*/

/*
// class 생성자 메서드(constructor)
{
    1. 생성자 메서드는 인스턴스(객체)를 생성할 때 제일 먼저 실행되는 메서드
2. 생성되는 객체의 초기화를 담당한다.
3. class내에 한개의 생성자 함수만 써야한다.
4. 생성자 메서드는 생략 가능 {}
}
*/

/*
{
    // class 상속과 super
    class Animal {
        constructor(group) {
            this.group = group;
        }
        getGroup() {
            return this.group;
        }
        eat() {}
        sleep() {}
        bark() {
            return "짖다.";
        }
    }

    class Mammal extends Animal {
        constructor(name, finger, toe, eyesight) {
            // 상위 클래스의 생성자 호출 해줌 super()
            // this보다 먼저 호출 해야함 --> 참조오류
            //
            super(Mammal.name);
            this.name = name;
            this.finger = finger;
            this.toe = toe;
            this.eyesight = eyesight;
        }
        // method overriding(메서드 재정의)
        // overriding ~보다 우선시하다.
        bark() {
            return "짖다";
        }
        // move() {
        //     return `${this.name}가 ${this.bark()}}`;
        // }
        move() {
            //super 메서드를 통해 상위 bark 메서드 호출
            return `${this.name}가 ${super.bark()}}`;
        }
    }

    const mam1 = new Mammal("호랑이", 10, 10, 1.5);

    console.log(mam1.getGroup()); // undefined
    console.log(mam1.name); // 호랑이
    console.log(mam1.bark());
    // overriding으로 재정의한 메서드를 무시하고 부모 메서드를 사용 할 때
    console.log(mam1.move());

    //속성 출력
    console.log(Object.getOwnPropertyNames(mam1)); // ['group', 'name', 'finger', 'toe', 'eyesight']

    console.log(
        Object.getOwnPropertyNames(Object.getPrototypeOf(mam1))
        // Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(mam1)))
    );
}
*/

// 자바스크립트 클래스 - 정적 메서드
// 1. 어떻게 정적 메서드를 구현하는지 알아본다.
// 2. 정적 메서드가 어떤 경우에 호출되고 안되는지 알아본다.
// 3. 인스턴스(객체)가 정적 메서드를 호출 할 수 있는 지 없는지

// 정적 메서드 --> static method
// 메서드 앞에 static키워드를 붙인다. 따로 객체를 생성하지 않아도 외부에서 호출가능
// 인스턴스(객체)를 통해서 호출하는 것은 기본적으로는 불가능
// 인스턴스에 따라 달라지지 않는 정적인 메서드

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static staticFunc(type) {
        console.log(`call static method!! type: ${type}`);
    }
    nomalFunc(type) {
        console.log(`call normal method!! type: ${type}`);
    }
}

const p1 = new Person("이수", 20);

p1.constructor.staticFunc("인스턴스"); // 인스턴스를 통해 static 함수 실행
Person.staticFunc("일반"); //
// Person.nomalFunc(); //error

class Add {
    static plus(x) {
        x = x || 100;
        return x + 1000;
    }
}

class ChildAdd extends Add {
    static plus(x) {
        return super.plus(x) + super.plus(x) + super.plus(x);
    }
}
const add1 = new Add();
console.log(add1.constructor.plus(30)); // 1030

const cadd1 = new ChildAdd();
console.log(cadd1.constructor.plus(30)); // 3090
