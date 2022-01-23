/* 
//setTimeout()의 반환값은 순차적으로 지정됨

{
    const timeoutId1 = setTimeout(() => console.log("1"), 1000);
    const timeoutId2 = setTimeout(() => console.log("2"), 1000);
    const timeoutId3 = setTimeout(() => console.log("3"), 1000);
    const timeoutId4 = setTimeout(() => console.log("4"), 1000);
    const timeoutId5 = setTimeout(() => console.log("5"), 1000);

    console.log(timeoutId1);
    console.log(timeoutId2);
    console.log(timeoutId3);
    console.log(timeoutId4);
    console.log(timeoutId5);

    // 동일하게 3번째 setTimeout 함수가 정지됨
    // clearTimeout(3);
    // clearTimeout(timeoutId3);
}
*/

const clock = document.getElementById("clock");

// let cnt = 0;
// setInterval(() => {
//     clock.innerText = new Date(cnt).toISOString().slice(11, 19);
//     cnt += 1000;
// }, 2000);

function myClock() {
    let clock = document.getElementById("clock");
    let d = new Date();

    clock.innerText = `현재 시각은 ${d.getFullYear()}년 ${d.getMonth()}월 ${d.getDate()}일 ${d.getHours()}시 ${d.getMinutes()}분 ${d.getSeconds()}초 입니다.`;

    setTimeout(myClock, 2000);
}

myClock();
