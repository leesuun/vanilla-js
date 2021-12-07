const { body } = document;
const $table = document.createElement("table");
const $result = document.createElement("div"); // 결과창
const rows = [];
let turn = "O";

const checkWinner = (target) => {
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    // 세칸 다 채워졌나?
    let hasWinner = false;
    // 가로줄 검사
    if (
        rows[rowIndex][0].textContent === turn &&
        rows[rowIndex][1].textContent === turn &&
        rows[rowIndex][2].textContent === turn
    ) {
        hasWinner = true;
    }
    // 세로줄 검사
    if (
        rows[0][cellIndex].textContent === turn &&
        rows[1][cellIndex].textContent === turn &&
        rows[2][cellIndex].textContent === turn
    ) {
        hasWinner = true;
    }
    // 대각선 검사
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
    // 승자가 있으면
    if (hasWinner) {
        $result.textContent = `${turn}님이 승리!`;
        return;
    }
    // 승자가 없으면
    const draw = rows.flat().every((cell) => cell.textContent);
    if (draw) {
        $result.textContent = `무승부`;
        return;
    }
    turn = turn === "X" ? "O" : "X";
};
let clickable = true;
const callback = (event) => {
    if (!clickable) {
        return;
    }
    if (event.target.textContent !== "") {
        // 칸이 이미 채워져 있는가?
        console.log("빈 칸이 아닙니다.");
        return;
    }
    // 빈 칸이면
    console.log("빈 칸입니다");
    event.target.textContent = turn;
    checkWinnerAndDraw(event.target);
    if (turn === "X") {
        const emptyCells = rows.flat().filter((v) => !v.textContent);
        const randomCell =
            emptyCells[Math.floor(Math.random() * emptyCells.length)];
        clickable = false;
        setTimeout(() => {
            randomCell.textContent = "X";
            checkWinnerAndDraw(randomCell);
            clickable = true;
        }, 1000);
    }
};

for (let i = 1; i <= 3; i++) {
    const $tr = document.createElement("tr");
    const cells = [];
    for (let j = 1; j <= 3; j++) {
        const $td = document.createElement("td");
        cells.push($td);
        $tr.appendChild($td);
    }
    rows.push(cells);
    $table.appendChild($tr);
    $table.addEventListener("click", callback);
}
body.appendChild($table);
body.appendChild($result);
