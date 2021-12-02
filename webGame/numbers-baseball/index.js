// 처음 짠 랜덤 4자리 코드
const MIN = 1000;
const MAX = 10000;
let number;
let numberCheck = 0;

let cnt = 0;

do {
    cnt++;
    numberCheck = 0;
    number = Math.ceil(Math.random() * (MAX - MIN) + MIN)
        .toString()
        .split("");

    console.log(...new Set(number), cnt);

    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] === number[j]) {
                numberCheck = 1;
            }
        }
    }
} while (numberCheck === 1);

console.log(number);

// ssssssssssssssssssssssssssssssssssssssssssssssssssss

let list = [];
while (true) {
    let n = ~~(Math.random() * 10); // 0~9 숫자하나 랜덤으로 얻음
    (list.length || !n) && list.push(n); // list요소가 하나라도 있거나 n이 0보다 크면 list에 추가
    list = [...new Set(list)]; // 중복값제거
    if (list.length >= 4) break; // 중복값제거하고 나서 요소 수가 4개면 반복 종료
}
console.log(list.join("")); // 결과

// ssssssssssssssssssssssssssssssssssssssssssssssssssss

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer = [];
function getRandom(start, end) {
    return Math.floor(Math.random() * end + start);
}

const idx = getRandom(1, numbers.length - 1);
answer.push(numbers[idx]);
numbers.splice(idx, 1);

for (let i = 0; i < 3; i++) {
    const idx = getRandom(0, numbers.length - 1);
    answer.push(numbers[idx]);
    numbers.splice(idx, 1);
}
console.log(answer);

// SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

const inputForm = document.getElementById("inputForm");
const numInputs = inputForm.querySelectorAll("input");
const gameReset = document.getElementById("gameReset");

const stateStrike = document.getElementById("stateStrike");
const stateBall = document.getElementById("stateBall");
const stateOut = document.getElementById("stateOut");
const stateHomerun = document.getElementById("stateHomerun");

const td = document.querySelectorAll(".status__table tbody tr td:nth-child(2)");

const COIN = 10; // 코인 개수

const order = {
    FIRST: 0,
    SECOND: 1,
    THIRD: 2,
    FOURTH: 3,
}; // 번호 순서

const gameState = {
    STRIKE: 0,
    BALL: 0,
    OUT: 0,
    HOMERUN: 0,
}; // 게임 진행 상태

let goalNumber = getGoalNumber();
let gameCoin = COIN; // 게임 코인

let swingNumber = [];
let tableInfo = [];

//랜덤 4자리 숫자 GET
function getGoalNumber() {
    const MIN = 1000;
    const MAX = 10000;
    let number;
    do {
        number = Math.ceil(Math.random() * (MAX - MIN) + MIN)
            .toString()
            .split("");
        number = [...new Set(number)]; // 중복 요소 제거
    } while (number.length < 4); // number 배열의 length가 4가 될 때 while 종료

    return number;
}

function createPaintBall(gameState, stateText) {
    const stateAry = [];
    for (let i = 0; i < gameState; i++) {
        const div = document.createElement("div");
        if (stateText === "homerun") {
            div.classList.add(stateText, "create", "victory");
            div.innerText = "승리!!";
        } else {
            div.classList.add(stateText, "create");
        }

        stateAry.push(div);
    }
    return stateAry;
}

function paintState() {
    const game__state = document.querySelector(".game__state");
    const create = game__state.querySelectorAll(".create");

    if (gameState.OUT > 2) {
        alert(`삼진 아웃!! 정답은${goalNumber}`);
        return;
    }
    // 생성된 카운트볼 초기화
    if (create.length > 0) {
        create.forEach((create) => create.remove());
    }

    // 카운트 볼 생성
    const strike = createPaintBall(gameState.STRIKE, "strike");
    const ball = createPaintBall(gameState.BALL, "ball");
    const out = createPaintBall(gameState.OUT, "out");
    const homerun = createPaintBall(gameState.HOMERUN, "homerun");

    if (homerun.length < 1) {
        strike.forEach((strike) => stateStrike.appendChild(strike));
    }
    ball.forEach((ball) => stateBall.appendChild(ball));
    out.forEach((out) => stateOut.appendChild(out));
    homerun.forEach((homerun) => stateHomerun.appendChild(homerun));
}

function paintTable() {
    // 입력한 배열 , 스트라이크 ,볼 ,아웃, 홈런

    for (let i = 0; i < tableInfo.length; i++) {
        td[
            i
        ].innerText = `스윙: [${tableInfo[i].swingNumber}], 현황: [${tableInfo[i].strike}]S [${tableInfo[i].ball}]B [${tableInfo[i].out}]O [${tableInfo[i].homerun}]H`;
    }
}
function handleGame(swingNumber) {
    gameState.STRIKE = 0;
    gameState.BALL = 0;
    gameCoin--;
    goalNumber.forEach(function numberCheck(number) {
        if (swingNumber.includes(number)) {
            if (goalNumber.indexOf(number) === swingNumber.indexOf(number)) {
                gameState.STRIKE++;
                return;
            }
            gameState.BALL++;
        }
    });

    if (gameState.BALL < 1 && gameState.STRIKE < 1) {
        gameState.OUT++;
    }
    if (gameState.STRIKE > 3) {
        gameState.HOMERUN++;
        inputForm.removeEventListener("submit", handleNumberSubmit);
    }

    //테이블 정보 삽입
    const tableInfoObj = {
        swingNumber: swingNumber.toString(),
        strike: gameState.STRIKE,
        ball: gameState.BALL,
        out: gameState.OUT,
        homerun: gameState.HOMERUN,
    };

    tableInfo.push(tableInfoObj); // tableInfo

    // 화면 표시
    paintState();
    paintTable();
}

function inputCheck() {
    if (
        swingNumber.length < 4 ||
        swingNumber.includes(undefined) ||
        swingNumber.includes("")
    ) {
        alert("숫자를 모두 입력해주세요.");
        return;
    } else if ([...new Set(swingNumber)].length !== 4) {
        alert("중복된 숫자는 입력 할 수 없습니다.");
        return;
    } else if (gameCoin < 1) {
        alert(`코인 모두 소모!! 정답은${goalNumber}`);
        return;
    }
    return true;
}

function handleNumberSubmit(event) {
    event.preventDefault();
    if (!inputCheck()) return;
    numInputs.forEach((input) => (input.value = ""));
    handleGame(swingNumber);
}

function handleGameReset() {
    gameCoin = COIN;

    gameState.STRIKE = 0;
    gameState.BALL = 0;
    gameState.OUT = 0;
    gameState.HOMERUN = 0;
    swingNumber = [];

    paintState();
    td.forEach((td) => (td.innerText = ""));
    numInputs.forEach((input) => (input.value = ""));
    tableInfo = [];
    goalNumber = getGoalNumber();
}

function handleInputNumber(event) {
    const {
        target: { id, value },
    } = event;

    switch (id) {
        case "firstNumber": {
            swingNumber[order.FIRST] = value;
            break;
        }
        case "secondNumber": {
            swingNumber[order.SECOND] = value;
            break;
        }
        case "thirdNumber": {
            swingNumber[order.THIRD] = value;
            break;
        }
        case "fourthNumber": {
            swingNumber[order.FOURTH] = value;
            break;
        }
        default: {
            break;
        }
    }
    console.log(goalNumber);
}

inputForm.addEventListener("submit", handleNumberSubmit);
numInputs.forEach((input) => {
    input.addEventListener("input", handleInputNumber);
});
gameReset.addEventListener("click", handleGameReset);
