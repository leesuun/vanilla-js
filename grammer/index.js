"use strict";

// {
//     const fruits = "😀,😁,😂,🤣,😄";
//     // console.log(fruits.split(",", 2));
// }

// {
//     const arr = [1, 2, 3, 4, 5];
//     // arr.sort((a, b) => b - a);
//     arr.reverse();
//     // console.log(arr);
// }

// {
//     //새로운 배열
//     const arr = [1, 2, 3, 4, 5];
//     arr.splice(0, 2);
//     // console.log(arr);
// }

// {
//     const arr = [1, 2, 3, 4, 5];
//     // console.log(arr.slice(2, 5));
// }

// class Student {
//     constructor(name, age, enrolled, score) {
//         this.name = name;
//         this.age = age;
//         this.enrolled = enrolled;
//         this.score = score;
//     }
// }

// const students = [
//     new Student("A", 29, true, 15),
//     new Student("B", 29, false, 80),
//     new Student("C", 30, true, 90),
//     new Student("D", 40, false, 66),
//     new Student("E", 18, true, 88),
// ];

// students.forEach((student) => {
//     if (student.score === 90) {
//         console.log(student);
//     }
// });

// const result = students.find((student) => student.score === 90);
// console.log(result);

// let result = [];

// const test = students.forEach((student) => {
//     if (student.enrolled) {
//         result.push(student);
//     }
// });

// console.log(result);

// const result = students.filter((student) => {
//     return student.enrolled === true;
// });
// console.log(result);

// const result = students
//     .map((student) => student.score)
//     .sort((a, b) => b - a)
//     .join(",");
// console.log(result);

// const result = students.some((student) => student.score < 16);
// console.log(result);

// const result = students.reduceRight((prev, curr) => {
//     console.log(prev);
//     console.log(curr);
//     return prev + curr.score;
// }, 0);
// console.log(result);

// const result = students
//     .map((student) => student.score)
//     .sort()
//     .join(",");
// console.log(result);

// let json = JSON.stringify(true, (sd) => console.log(sd));
// console.log(json);

// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "ellie" && password === "dream") ||
                    (id === "coder" && password === "academy")
                ) {
                    resolve(id);
                } else {
                    reject(new Error("not found"));
                }
            }, 2000);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "ellie") {
                    resolve({ name: "ellie", role: "admin" });
                } else {
                    reject(new Error("no access"));
                }
            }, 1000);
        });
    }
}

const id = prompt("enter id");
const pass = prompt("enter pass");

const userStorage = new UserStorage();
userStorage.loginUser(id, pass).then((user) => {
    userStorage
        .getRoles(user)
        .then((value) => console.log(value))
        .catch((error) => console.log(error));
});

// userStorage.loginUser(
//     id,
//     password,
//     (user) => {
//         userStorage.getRoles(
//             user,
//             (info) => console.log(info.name, info.role),
//             (error) => {
//                 console.log(error);
//             }
//         );
//     },
//     (error) => {
//         console.log(error);
//     }
// );

// const promise = new Promise((resolve, reject) => {
//     console.log("doing something..");
//     setTimeout(() => {
//         // resolve("hello");
//         reject(new Error("no network"));
//     }, 2000);
// });

// try {
//     promise.then((value) => {
//         console.log(value);
//     });
// } catch (err) {
//     console.log(err);
// }
