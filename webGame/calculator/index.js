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

let firstNum = "";
let nextNum = "";
let thirdNum = "";
let operator = "";
let nextOperator = "";

function showScreen(firstNum, operator, nextNum) {
    screen.innerText = `${firstNum} ${operator} ${nextNum} ${nextOperator} ${thirdNum}`;
}
function handleClickNumber() {
    if (!nextOperator) {
        if (!operator) {
            firstNum += this.textContent;
        } else {
            nextNum += this.textContent;
        }
    } else {
        thirdNum += this.textContent;
    }

    showScreen(firstNum, operator, nextNum, nextOperator, thirdNum);
}

function handleClickOperator() {
    if (!operator) {
        operator = this.textContent;
    } else {
        nextOperator = this.textContent;
    }

    showScreen(firstNum, operator, nextNum, nextOperator, thirdNum);
}

function handleClickClear() {
    firstNum = "";
    nextNum = "";
    operator = "";
    showScreen(firstNum, operator, nextNum, nextOperator, thirdNum);
}

function handleClickResult() {
    let result;
    switch (operator) {
        case "+": {
            result = add(firstNum, nextNum);
            break;
        }
        case "-": {
            result = sub(firstNum, nextNum);
            break;
        }
        case "*": {
            result = mul(firstNum, nextNum);
            break;
        }
        case "/": {
            result = div(firstNum, nextNum);
            break;
        }
        default: {
            break;
        }
    }
    switch (nextOperator) {
        case "+": {
            result = add(result, thirdNum);
            break;
        }
        case "-": {
            result = sub(result, thirdNum);
            break;
        }
        case "*": {
            result = mul(result, thirdNum);
            break;
        }
        case "/": {
            result = div(result, thirdNum);
            break;
        }
        default: {
            break;
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
