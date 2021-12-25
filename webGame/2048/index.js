const table = document.querySelector("#table");
const resetBtn = document.querySelector("#reset");
const backBtn = document.querySelector("#back");

let data = [];
let preData = [];

function resetGame() {
    const trs = document.querySelectorAll("#table tr");
    trs.forEach((tr) => tr.remove());

    data = [];
    preData = [];
    startGame();
}
function startGame() {
    const fragment = document.createDocumentFragment();

    [1, 2, 3, 4].forEach(() => {
        const rowData = [];
        data.push(rowData);
        const tr = document.createElement("tr");
        [1, 2, 3, 4].forEach(() => {
            rowData.push(0);
            const td = document.createElement("td");
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });
    table.appendChild(fragment);
    put2ToRandomCell();
    draw();
}
function put2ToRandomCell() {
    const tableData = [];

    data.forEach((rowData, rI) => {
        rowData.forEach((cellData, cI) => {
            if (!cellData) {
                tableData.push([rI, cI]);
            }
        });
    });
    const randomIdx = tableData[Math.floor(Math.random() * tableData.length)];
    data[randomIdx[0]][randomIdx[1]] = 2;
    preData.push(JSON.parse(JSON.stringify(data)));
}
function draw() {
    data.forEach((rowData, rI) => {
        rowData.forEach((cellData, cI) => {
            const target = table.children[rI].children[cI];
            if (cellData > 0) {
                target.textContent = cellData;
                target.className = "color-" + cellData;
            } else {
                target.textContent = "";
                target.className = "";
            }
        });
    });
}

startGame();

// data = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 1024, 1024, 0],
//     [0, 0, 0, 0],
// ];

// draw();

function preMoveCells() {
    if (preData.length <= 1) {
        return;
    }
    data = JSON.parse(JSON.stringify(preData[preData.length - 2]));
    preData.pop();
    draw();
}

function moveCells(direction) {
    if (!direction) {
        return;
    }

    const sortData = [[], [], [], []];
    switch (direction) {
        case "Up":
            data.forEach((rowData, rI) => {
                rowData.forEach((cellData, cI) => {
                    if (cellData) {
                        sortData[cI].push(cellData);
                    }
                });
            });
            sortData.forEach((rowData, rI) => {
                rowData.forEach((cellData, cI) => {
                    if (cellData === sortData[rI][cI + 1]) {
                        sortData[rI][cI] *= 2;
                        sortData[rI].splice(cI + 1, 1);
                    }
                });
            });

            [1, 2, 3, 4].forEach((rowData, rI) => {
                [1, 2, 3, 4].forEach((cellData, cI) => {
                    data[cI][rI] = sortData[rI][cI] || 0;
                });
            });

            break;
        case "Down":
            data.forEach((rowData, rI) => {
                rowData.forEach((cellData, cI) => {
                    if (cellData) {
                        sortData[cI].push(cellData);
                    }
                });
            });

            sortData.forEach((rowData, rI) => {
                rowData.forEach((cellData, cI) => {
                    const rowLastIdx = rowData.length - cI;
                    if (sortData[rI][rowLastIdx - 1] === sortData[rI][rowLastIdx]) {
                        sortData[rI][rowLastIdx] *= 2;
                        sortData[rI].splice(rowLastIdx - 1, 1);
                    }
                });
            });

            [1, 2, 3, 4].forEach((rowData, rI) => {
                [1, 2, 3, 4].forEach((cellData, cI) => {
                    while (sortData[rI].length <= 3) {
                        sortData[rI].unshift(0);
                    }
                    data[cI][rI] = sortData[rI][cI];
                });
            });

            break;
        case "Right":
            data.forEach((rowData, rI) => {
                rowData.forEach((cellData, cI) => {
                    if (cellData) {
                        sortData[rI].push(cellData);
                    }
                });
            });

            sortData.forEach((rowData, rI) => {
                rowData.forEach((cellData, cI) => {
                    const rowLastIdx = rowData.length - cI;
                    if (sortData[rI][rowLastIdx - 1] === sortData[rI][rowLastIdx]) {
                        sortData[rI][rowLastIdx] *= 2;
                        sortData[rI].splice(rowLastIdx - 1, 1);
                    }
                });
            });

            [1, 2, 3, 4].forEach((rowData, rI) => {
                [1, 2, 3, 4].forEach((cellData, cI) => {
                    while (sortData[rI].length <= 3) {
                        sortData[rI].unshift(0);
                        data[rI][cI] = sortData[rI][cI];
                    }
                });
                data[rI] = sortData[rI];
            });

            break;

        case "Left":
            // 빈 칸 없애기
            data.forEach((rowData, rI) => {
                rowData.forEach((cellData, cI) => {
                    if (cellData) {
                        sortData[rI].push(cellData);
                    }
                });
            });
            // 같은 숫자 합치기
            sortData.forEach((rowData, rI) => {
                rowData.forEach((cellData, cI) => {
                    if (cellData === sortData[rI][cI + 1]) {
                        sortData[rI][cI] *= 2;
                        sortData[rI].splice(cI + 1, 1);
                    }
                });
            });
            // 정렬
            [1, 2, 3, 4].forEach((_, rI) => {
                [1, 2, 3, 4].forEach((_, cI) => {
                    data[rI][cI] = sortData[rI][cI] || 0;
                });
            });

            break;
        default:
            break;
    }

    if (data.flat().includes(2048)) {
        setTimeout(() => {
            alert("축하합니다. 2048을 만들었습니다.");
        }, 0);
    } else if (!data.flat().includes(0)) {
        alert("패배");
    } else {
        put2ToRandomCell();
    }
    draw();
}

let mouseDownX;
let mouseDownY;

function handleKeyUp(event) {
    const direction = event.key.slice(5);
    moveCells(direction);
}

function handleMouseUp(event) {
    const { clientX: mouseUpX, clientY: mouseUpY } = event;
    let direction;
    let diffX = Math.abs(mouseDownX - mouseUpX);
    let diffY = Math.abs(mouseDownY - mouseUpY);

    if (diffX > diffY) {
        mouseDownX > mouseUpX ? (direction = "Left") : (direction = "Right");
    } else if (diffX < diffY) {
        mouseDownY > mouseUpY ? (direction = "Up") : (direction = "Down");
    }

    moveCells(direction);
}
function handleMouseDown(event) {
    const { clientX, clientY } = event;
    mouseDownX = clientX;
    mouseDownY = clientY;
}

window.addEventListener("keyup", handleKeyUp);
window.addEventListener("mouseup", handleMouseUp);
window.addEventListener("mousedown", handleMouseDown);
resetBtn.addEventListener("click", resetGame);
backBtn.addEventListener("click", preMoveCells);
