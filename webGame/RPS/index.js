if (computerChoice === "scissors") {
    if (myRspSelect === "rock") {
        result.innerText = "승리";
    } else if (myRspSelect === "scissors") {
        result.innerText = "비김";
    } else {
        result.innerText = "패배";
    }
} else if (computerChoice === "rock") {
    if (myRspSelect === "scissors") {
        result.innerText = "패배";
    } else if (myRspSelect === "rock") {
        result.innerText = "비김";
    } else {
        result.innerText = "승리";
    }
} else {
    if (myRspSelect === "scissors") {
        result.innerText = "승리";
    } else if (myRspSelect === "rock") {
        result.innerText = "패배";
    } else {
        result.innerText = "비김";
    }
}

//////////////
const myRspSelect = this.id;

const computerNumber = scoreTable[computerChoice];
const selectNumber = scoreTable[myRspSelect];

const diff = selectNumber - computerNumber;
console.log(diff);

// 가위 = 1 바위 = 0 보 -1

if (diff === 2 || diff === -1) {
    //승리
    result.innerText = "승리";
} else if (diff === 1 || diff === -2) {
    //패배
    result.innerText = "패배";
} else {
    //무승부 diff = 0
    result.innerText = "비김";
}
