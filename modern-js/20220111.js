// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         alert(`${this.name}가 ${speed}의 속도로 달립니다.`);
//     }
//     stop() {
//         alert(`${this.name}가 멈췄습니다.`);
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name}가 숨었습니다.`);
//     }
//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit("토끼");
// console.log(rabbit);

// rabbit.run(5);
// rabbit.stop();

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     // ...
// }

// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }

//     // ...
// }

// // 동작하지 않습니다!
// let rabbit = new Rabbit("흰 토끼", 10);
// console.log(rabbit);

// class User {
//     static staticMethod() {
//         alert(this === User);
//     }
// }

// User.staticMethod(); // true

// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }
// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () =>
//         callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));

//     document.head.append(script);
// }
// loadScript(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//     function (error, script) {
//         if (error) {
//             // 에러 처리
//             alert(`error: ${error}  `);
//         } else {
//             // 스크립트 로딩이 성공적으로 끝남
//             alert(`${script.src}가 로드되었습니다.`);
//             alert(_); // 스크립트에 정의된 함수
//         }
//     }
// );

// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

//     document.head.append(script);
// }

// function loadScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement("script");
//         script.src = src;

//         script.onload = () => resolve(script);
//         script.onerror = () =>
//             reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

//         document.head.append(script);
//     });
// }

// let promise = loadScript(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(
//     (script) => alert(`${script.src}을 불러왔습니다!`),
//     (error) => alert(`Error: ${error.message}`)
// );

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//     // 여기에 코드 작성
// }

// delay(3000).then(() => alert("3초후 실행"));

// new Promise(function (resolve, reject) {
//     debugger;
//     setTimeout(() => resolve(1), 1000);
// })
//     .then(function (result) {
//         alert(result); // 1

//         return new Promise((resolve, reject) => {
//             // (*)
//             setTimeout(() => resolve(result * 2), 1000);
//         });
//     })
//     .then(function (result) {
//         // (**)

//         alert(result); // 2

//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(result * 2), 1000);
//         });
//     })
//     .then(function (result) {
//         alert(result); // 4
//     });

// user.json에 요청을 보냅니다.
// fetch("/article/promise-chaining/user.json")
//     .then((response) => response.json())
//     .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//     .then((response) => response.json())
//     .then((githubUser) => {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => img.remove(), 3000); // (*)
//     });

// fetch(`https://api.github.com/users/leesuun`)
//     .then((response) => response.json())
//     .then(
//         (githubUser) =>
//             new Promise(function (resolve, reject) {
//                 // (*)
//                 let img = document.createElement("img");
//                 img.src = githubUser.avatar_url;
//                 img.className = "promise-avatar-example";
//                 document.body.append(img);

//                 setTimeout(() => {
//                     img.remove();
//                     resolve(githubUser); // (**)
//                 }, 3000);
//             })
//     )
//     // 3초 후 동작함
//     .then((githubUser) => alert(`Finished showing ${githubUser.name}`));

// function loadJson(url) {
//     return fetch(url).then((response) => response.json());
// }

// function loadGithubUser(name) {
//     return fetch(`https://api.github.com/users/${name}`).then((response) =>
//         response.json()
//     );
// }

// function showAvatar(githubUser) {
//     return new Promise(function (resolve, reject) {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//             img.remove();
//             resolve(githubUser);
//         }, 3000);
//     });
// }

// // 함수를 이용하여 다시 동일 작업 수행
// loadGithubUser("leesuun")
//     .then(showAvatar)
//     .then((githubUser) => alert(`Finished showing ${githubUser.name}`))
//     .then(() => alert("hello"));
// // ...

// let urls = [
//     "https://api.github.com/users/iliakan",
//     "https://api.github.com/users/remy",
//     "https://api.github.com/users/jeresig",
// ];

// // fetch를 사용해 url을 프라미스로 매핑합니다.
// let requests = urls.map((url) => fetch(url));

// console.log(requests);

// async function f() {
//     return Promise.resolve(1);
// }

// f().then(alert).then(alert); // 1

// async function showAvatar() {
//     // // JSON 읽기
//     // let response = await fetch("/article/promise-chaining/user.json");
//     // let user = await response.json();

//     // github 사용자 정보 읽기
//     let githubResponse = await fetch(`https://api.github.com/users/leesuun`);
//     let githubUser = await githubResponse.json();

//     // 아바타 보여주기
//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     // 3초 대기
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();

//     return githubUser;
// }

// showAvatar();

let i = 0;

let start = Date.now();

// function count() {
//     // CPU 소모가 많은 무거운 작업을 수행
//     for (let j = 0; j < 1e9; j++) {
//         i++;
//     }

//     alert("처리에 걸린 시간: " + (Date.now() - start) + "ms");
// }

// function count() {
//     // 무거운 작업을 쪼갠 후 이를 수행 (*)
//     do {
//         i++;
//     } while (i % 1e6 != 0);
//     // console.log(Date.now() - start) + "ms";

//     if (i == 1e9) {
//         alert("처리에 걸린 시간: " + (Date.now() - start) + "ms");
//     } else {
//         setTimeout(count); // 새로운 호출을 스케줄링 (**)
//     }
// }

function count() {
    // 스케줄링 코드를 함수 앞부분으로 옮김
    if (i < 1e9 - 1e6) {
        setTimeout(count); // 새로운 호출을 스케줄링함
    }

    do {
        i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
        alert("처리에 걸린 시간: " + (Date.now() - start) + "ms");
    }
}

count();
