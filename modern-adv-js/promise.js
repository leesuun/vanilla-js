// callback
/*
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중 에러 발생`));

    document.head.append(script);

    // script.onload = () => callback(script);
}
loadScript("setTimeout.js", function (error, script) {
    if (error) {
        console.log(error);
    } else {
        myClock();
    }
});
*/

/*
// Promise
function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`${src}를 불러오는동안 에러가 발생`));
        document.head.append(script);
    });
}

loadScript("setTimeout.js").then((script) => {
    console.log(script);
    myClock();
});
*/

/*
// Promise chainning
function mulTwo() {
    // Promise Chainning
    new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    })
        .then(function (result) {
            console.log(result); // 1

            return new Promise((resolve, reject) => {
                // (*)
                setTimeout(() => resolve(result * 2), 1000);
            });
        })
        .then(function (result) {
            // (**)

            console.log(result); // 2

            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(result * 2), 1000);
            });
        })
        .then(function (result) {
            console.log(result); // 4
        });
}
mulTwo();
*/

/*
// Promise all
// 하나라도 실패시 거절
let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then((responses) => {
        return responses;
    })
    // 응답 메시지가 담긴 배열을 response.json()로 매핑해, 내용을 읽습니다.
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    // JSON 형태의 응답 메시지는 파싱 되어 배열 'users'에 저장됩니다.
    .then((users) =>
        users.forEach((user) => {
            const img = document.createElement("img");
            img.src = user.avatar_url;

            document.body.append(img);
        })
    );
*/

/*
// Promisification; 프라미스 화
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

    document.head.append(script);
}

let loadScriptPromise = function (src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err);
            else resolve(script);
        });
    });
};

function promisify(f) {
  return function (...args) { // 래퍼 함수를 반환함
    return new Promise((resolve, reject) => {
      function callback(err, result) { // f에 사용할 커스텀 콜백
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // 위에서 만든 커스텀 콜백을 함수 f의 인수 끝에 추가합니다.

      f.call(this, ...args); // 기존 함수를 호출합니다.
    });
  };
};

// 사용법:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);

*/

/*
// async await
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000);
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

    alert(result); // "완료!"
}

f();
*/
