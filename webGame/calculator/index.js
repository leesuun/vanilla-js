"use strict";

const screen = document.getElementById("screen");

const one = document
    .getElementById("num-one")
    .addEventListener("click", handleClickNumber);
const two = document
    .getElementById("num-two")
    .addEventListener("click", handleClickNumber);
const three = document
    .getElementById("num-three")
    .addEventListener("click", handleClickNumber);
const four = document
    .getElementById("num-four")
    .addEventListener("click", handleClickNumber);
const five = document
    .getElementById("num-five")
    .addEventListener("click", handleClickNumber);
const six = document
    .getElementById("num-six")
    .addEventListener("click", handleClickNumber);
const seven = document
    .getElementById("num-seven")
    .addEventListener("click", handleClickNumber);
const eight = document
    .getElementById("num-eight")
    .addEventListener("click", handleClickNumber);
const nine = document
    .getElementById("num-nine")
    .addEventListener("click", handleClickNumber);
const zero = document
    .getElementById("num-zero")
    .addEventListener("click", handleClickNumber);

const division = document
    .getElementById("division")
    .addEventListener("click", handleClickOperator);
const multiply = document
    .getElementById("multiply")
    .addEventListener("click", handleClickOperator);
const subtract = document
    .getElementById("subtract")
    .addEventListener("click", handleClickOperator);
const plus = document
    .getElementById("plus")
    .addEventListener("click", handleClickOperator);

const clear = document
    .getElementById("clear")
    .addEventListener("click", handleClickClear);
const result = document
    .getElementById("result")
    .addEventListener("click", handleClickResult);

let number = "";
let numberAry = [];
let operAry = [];

let operCnt = 0; // 연산자 입력 체크용
let operOverlap = 0; // 연산자 중복입력 방지

function showScreen(numberAry, operAry) {
    let showText = "";

    for (let i = 0; i < numberAry.length; i++) {
        showText += numberAry[i];
        showText += operAry[i] === undefined ? "" : operAry[i];
    }
    screen.innerText = showText;
}
function handleClickNumber() {
    number += this.textContent;

    // 연산자 입력시 배열에 추가
    if (operAry.length === operCnt) {
        numberAry[operCnt] = number;
    }

    operOverlap = 0;
    showScreen(numberAry, operAry);
}

function handleClickOperator() {
    if (numberAry.length === 0) {
        alert("숫자를 먼저 입력해주세요.!");
        return;
    }

    if (operOverlap === 1) {
        alert("연산자 중복 입력 불가!");
        return;
    }
    number = ""; // 합쳐지는 문자열 clear
    operCnt++; // 연산자 입력시 카운트
    operOverlap++; // 연산자 중복 체크
    operAry.push(this.textContent);

    showScreen(numberAry, operAry);
}

function handleClickClear() {
    number = "";
    numberAry = [];
    operAry = [];
    operCnt = 0;
    operOverlap = 0;
    showScreen(numberAry, operAry);
}

function handleClickResult() {
    let result;

    for (let i = 0; i < operAry.length; i++) {
        switch (operAry[i]) {
            case "+": {
                if (result) {
                    result = add(result, numberAry[i + 1]);
                } else {
                    result = add(numberAry[i], numberAry[i + 1]);
                }
                break;
            }
            case "-": {
                if (result) {
                    result = sub(result, numberAry[i + 1]);
                } else {
                    result = sub(numberAry[i], numberAry[i + 1]);
                }
                break;
            }
            case "*": {
                if (result) {
                    result = mul(result, numberAry[i + 1]);
                } else {
                    result = mul(numberAry[i], numberAry[i + 1]);
                }
                break;
            }
            case "/": {
                if (result) {
                    result = div(result, numberAry[i + 1]);
                } else {
                    result = div(numberAry[i], numberAry[i + 1]);
                }
                break;
            }
            default: {
                break;
            }
        }
    }

    screen.innerText = `결과값: ${result}`;
}

function add(firstNum, nextNum) {
    return Number(firstNum) + Number(nextNum);
}
function sub(firstNum, nextNum) {
    return firstNum - nextNum;
}
function mul(firstNum, nextNum) {
    return firstNum * nextNum;
}
function div(firstNum, nextNum) {
    if (Number(nextNum) === 0) {
        return "Can not division 0";
    }
    return firstNum / nextNum;
}
