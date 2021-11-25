const numberForm = document.getElementById("numberForm");
const gameForm = document.getElementById("gameForm");
const personNumber = document.getElementById("personNumber");
const order = document.getElementById("order");

let number;
let word;
let newWord = [];
let personCnt = 1;

gameForm.hidden = true;

function getNumberOfPeople(event) {
    event.preventDefault();
    const input = numberForm.querySelector("input");
    number = input.value;

    personNumber.innerText = `${personCnt}번`;
    numberForm.hidden = true;
    gameForm.hidden = false;
}

function handleGame(event) {
    personCnt += 1;
    if (personCnt === Number(number) + 1) {
        personCnt = 1;
    }

    personNumber.innerText = `${personCnt}번`;

    event.preventDefault();
    const input = gameForm.querySelector("input");
    word = input.value;
    newWord.push(input.value);
    order.innerText = `제시어: ${word}`;

    if (newWord.length >= 1) {
        const preWord = newWord[newWord.length - 2];
        const nextWord = newWord[newWord.length - 1];
        if (
            word.length !== 3 ||
            !word ||
            preWord[preWord.length - 1] !== nextWord[0]
        ) {
            alert(`${personCnt - 1}번 탈락!!`);
        } else {
            order.innerText = `제시어: ${word}`;
        }
    }
}

numberForm.addEventListener("submit", getNumberOfPeople);
gameForm.addEventListener("submit", handleGame);
