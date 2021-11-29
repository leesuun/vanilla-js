const numberForm = document.getElementById("numberForm");
const gameForm = document.getElementById("gameForm");
const personNumber = document.getElementById("personNumber");
const order = document.getElementById("order");

let number;
let newWord = [];
let personCnt = 1;
let gameCnt = 0;

gameForm.hidden = true;

function getNumberOfPeople(event) {
    event.preventDefault();
    const input = numberForm.querySelector("input");

    if (input.value < 2) {
        alert("2명 이상만 플레이 할 수 있습니다.");
        return;
    }

    number = input.value;
    personNumber.innerText = `${personCnt}번`;
    numberForm.hidden = true;
    gameForm.hidden = false;
}

function handleGame(event) {
    event.preventDefault();
    gameCnt++;

    const input = gameForm.querySelector("input");
    const WORD_LENGTH_LIMIT = 3;
    let word = input.value;

    if (input.value.length !== WORD_LENGTH_LIMIT && gameCnt === 1) {
        alert("첫 제시어는 3글자여야 합니다.");
        return;
    }

    personCnt += 1;
    if (personCnt === Number(number) + 1) {
        personCnt = 1;
    }

    personNumber.innerText = `${personCnt}번`;
    newWord.push(input.value);
    order.innerText = `제시어: ${word}`;

    if (newWord.length > 1) {
        const preWord = newWord[newWord.length - 2];
        const nextWord = newWord[newWord.length - 1];
        if (
            word.length !== WORD_LENGTH_LIMIT ||
            !word ||
            preWord[preWord.length - 1] !== nextWord[0]
        ) {
            alert(`${personCnt - 1}번 탈락!!`);
            return;
        }
        order.innerText = `제시어: ${word}`;
    }
}

numberForm.addEventListener("submit", getNumberOfPeople);
gameForm.addEventListener("submit", handleGame);
