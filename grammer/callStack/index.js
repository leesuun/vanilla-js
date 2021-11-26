function changeAgeAndReference(person) {
    person.age = 25; //personObj1.age 의 값 변경
    person = {
        name: "John",
        age: 50,
    };

    return person;
}

var personObj1 = {
    name: "Alex",
    age: 30,
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
