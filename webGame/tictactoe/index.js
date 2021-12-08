const { body, createElement } = document;
const table = document.createElement("table");
const result = document.createElement("div");

ROW_MAX = 3;
COL_MAX = 3;

let turn = "O";
const rows = []; //행

const checkWinner = (target) => {
    let rowIdx = target.parentNode.rowIndex; // rowIdx는 td의 부모노드 tr이 가지고 있음
    let colIdx = target.cellIndex;

    // rows.forEach((row, rIdx) =>
    //     row.forEach((col, cIdx) => {
    //         if (col === target) {
    //             rowIdx = rIdx;
    //             colIdx = cIdx;
    //         }
    //     })
    // );

    let hasWinner = false;

    if (
        rows[rowIdx][0].textContent === turn &&
        rows[rowIdx][1].textContent === turn &&
        rows[rowIdx][2].textContent === turn
    ) {
        hasWinner = true;
    }
    if (
        rows[0][colIdx].textContent === turn &&
        rows[1][colIdx].textContent === turn &&
        rows[2][colIdx].textContent === turn
    ) {
        hasWinner = true;
    }
    if (
        rows[0][0].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][2].textContent === turn
    ) {
        hasWinner = true;
    }
    if (
        rows[0][2].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][0].textContent === turn
    ) {
        hasWinner = true;
    }

    return hasWinner;
};

const handleSquareClick = (event) => {
    if (event.target.textContent) return;
    event.target.textContent = turn;
    const hasWinner = checkWinner(event.target);

    //승자가 있으면
    if (hasWinner) {
        result.textContent = `${turn}승리!!`;
        const table = document.querySelector("table");
        table.removeEventListener("click", handleSquareClick);
        return;
    }
    //무승부

    // rows.forEach((row) => {
    //     row.forEach((cell) => {
    //         if (!cell.textContent) {
    //             draw = false;
    //         }
    //     });
    // });

    /*  every는 callback이 거짓을 반환하는 요소를 찾을 때까지
                    배열에 있는 각 요소에 대해 한 번씩 callbackFn 함수를 실행합니다.
                    해당하는 요소를 발견한 경우 every는 즉시 false를 반환합니다.
                    그렇지 않으면, 즉 모든 값에서 참을 반환하면 true를 반환합니다.
                */
    let draw = rows.flat().every((cell) => cell.textContent);
    // let draw = rows.flat().some((cell) => cell.textContent);

    if (draw) {
        result.textContent = "무승부";
        return;
    }

    turn = turn === "X" ? "O" : "X"; //순서 바꾸기
};

for (let i = 0; i < ROW_MAX; i++) {
    const tr = document.createElement("tr");
    const col = []; //열
    for (let j = 0; j < COL_MAX; j++) {
        const td = document.createElement("td");
        col.push(td);
        // 이벤트 버블링 현상 이해
        // td.addEventListener("click", handleSquareClick);
        tr.append(td);
    }
    rows.push(col);
    table.append(tr);
}

// 이벤트 버블링 현상 이해
table.addEventListener("click", handleSquareClick);
body.append(table);
body.append(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

const { body, createElement } = document;
const table = document.createElement("table");
const result = document.createElement("div");

ROW_MAX = 3;
COL_MAX = 3;

let turn = "O";
const rows = []; //행

const checkWinner = (target) => {
    let rowIdx = target.parentNode.rowIndex; // rowIdx는 td의 부모노드 tr이 가지고 있음
    let colIdx = target.cellIndex;

    let hasWinner = false;

    if (
        rows[rowIdx][0].textContent === turn &&
        rows[rowIdx][1].textContent === turn &&
        rows[rowIdx][2].textContent === turn
    ) {
        hasWinner = true;
    }
    if (
        rows[0][colIdx].textContent === turn &&
        rows[1][colIdx].textContent === turn &&
        rows[2][colIdx].textContent === turn
    ) {
        hasWinner = true;
    }
    if (
        rows[0][0].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][2].textContent === turn
    ) {
        hasWinner = true;
    }
    if (
        rows[0][2].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][0].textContent === turn
    ) {
        hasWinner = true;
    }

    return hasWinner;
};

const checkWinnerAndDraw = (target) => {
    const hasWinner = checkWinner(target);
    //승자가 있으면
    if (hasWinner) {
        result.textContent = `${turn}승리!!`;
        const table = document.querySelector("table");
        table.removeEventListener("click", handleSquareClick);
        return;
    }
    //무승부

    let draw = rows.flat().every((cell) => cell.textContent);

    if (draw) {
        result.textContent = "무승부";
        return;
    }

    turn = turn === "X" ? "O" : "X"; //순서 바꾸기
};

let clickable = true;

const handleSquareClick = (event) => {
    if (!clickable) return; // 1초가 지나기 전에 두번 클릭시 checkWinnerAndDraw() 두번호출됨
    if (event.target.textContent) return;

    // 내 턴

    event.target.textContent = turn;
    checkWinnerAndDraw(event.target);

    // 컴퓨터 턴
    if (turn === "X") {
        clickable = false;
        setTimeout(() => {
            console.log("sd");
            const emptyCell = rows.flat().filter((value) => !value.textContent);

            const randomCell =
                emptyCell[Math.floor(Math.random() * emptyCell.length)];
            randomCell.textContent = "X";

            checkWinnerAndDraw(randomCell);
            clickable = true;
        }, 1000);
    }
};

for (let i = 0; i < ROW_MAX; i++) {
    const tr = document.createElement("tr");
    const col = []; //열
    for (let j = 0; j < COL_MAX; j++) {
        const td = document.createElement("td");
        col.push(td);
        // 이벤트 버블링 현상 이해
        // td.addEventListener("click", handleSquareClick);
        tr.append(td);
    }
    rows.push(col);
    table.append(tr);
}

// 이벤트 버블링 현상 이해
table.addEventListener("click", handleSquareClick);
body.append(table);
body.append(result);
