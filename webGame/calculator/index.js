"use strict";

const btnBox = document.getElementById("btnBox");
const screen = document.getElementById("screen");
const buttons = btnBox.querySelectorAll("button");

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

const span = document.createElement("span");
function handleBtnClick(event) {
    const { innerText } = event.target;
    const regexNumber = /([0-9])/;
    const regexOper = /([-+*/])/;
    const regexCalc = /([=])/;
    const regexClear = /([C])/;

    // 숫자 대입
    if (operator === "") {
        if (regexNumber.test(innerText)) {
            firstNum += innerText;
        }
    } else {
        if (regexNumber.test(innerText)) {
            secondNum += innerText;
        }
    }

    // 연산 선택
    if (regexOper.test(innerText)) {
        operator = innerText;
    }

    // 초기화
    if (regexClear.test(innerText)) {
        firstNum = "";
        secondNum = "";
        operator = "";
        result = "";

        screen.removeChild(span);
    }

    // 계산
    if (regexCalc.test(innerText)) {
        switch (operator) {
            case "+": {
                result = Number(firstNum) + Number(secondNum);
                break;
            }
            case "-": {
                result = Number(firstNum) - Number(secondNum);
                break;
            }
            case "*": {
                result = Number(firstNum) * Number(secondNum);
                break;
            }
            case "/": {
                result = Number(firstNum) / Number(secondNum);
                break;
            }
            default: {
                break;
            }
        }

        if (firstNum && operator && secondNum) {
            span.innerText = `${firstNum} ${operator} ${secondNum} = ${result} `;
            screen.appendChild(span);
        }
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", handleBtnClick);
});
