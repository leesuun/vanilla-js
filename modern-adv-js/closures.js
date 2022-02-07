// 클로져 closures
// 외부에 있는 변수가 내부에 있는 함수와 함수 호출한 후에도 종료되지 않고 계속 참조하는 것.
// 외부의 변수와 내부의 함수가 끊기지 않고 연결고리가 계속 이어져 있는 것.

/*
function closures() {
    const testVal = 1;
    (function close() {
        console.log(testVal);
    })();
}
closures();
*/

// {
//     const external_ = () => {
//         let number = 65;
//         let internal = () => {
//             let char_ = String.fromCharCode(number);
//             console.log(char_, number++);
//         };
//         internal();
//     };

//     external_();
// }

// {
//     const external_ = () => {
//         let number = 65;
//         let internal = () => {
//             let char_ = String.fromCharCode(number);
//             return `${char_}:${number++}`;
//         };
//         return internal();
//     };

//     console.log(external_());
//     console.log(external_());
//     console.log(external_());
// }

/*
const out = function () {
    let number = 65;

    let internal = function () {
        let char_ = String.fromCharCode(number);
        return `${char_}:${number++}`;
    };
    return internal; // 함수의 실행 결과가 아닌 함수 자체를 반환하면 참조관계가 유지된다.
};

const out2 = out();

for (let i = 0; i < 30; i++) {
    console.log(out2());
}
*/

/*
const button = document.querySelector("button");
const span = document.getElementById("viewCnt");
const out = () => {
    let cnt = 0;
    let internal = () => ++cnt;
    return internal;
};

const counter = out();

button.addEventListener("click", () => {
    span.innerText = counter();
});
*/

/*
const makeList = (ar) => {
    let el = `<ul>\n`;
    for (let i = 0; i < ar.length; i++) {
        el += `<li>` + ar[i] + `</li>\n`;
    }
    el += `</ul>`;
    return el;
};

const fruits = ["apple", "banana", "melon"];
const listItem = makeList(fruits);

document.body.innerHTML = listItem;

const li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", () => console.log(i + " 번째 요소"));
}
*/
