const wrapper = document.getElementById("wrapper");
const START_DELAY = 1000;
const SHOW_CARD_DELAY = 1000;

const cardAry = [];
const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "white",
    "pink",
    "cyan",
    "violet",
    "gray",
    "black",
];

let startTime = null;
let totalCard;
let randomColorAry = [];
let clickCount = 0;
let winCount = 0;
let selectTarget = [];
let clickable = true;

//카드 개수
do {
    totalCard = parseInt(prompt("카드의 개수를 입력하세요. (20개 이하, 짝수)"));
    totalCard = totalCard > 20 ? 20 : totalCard;
} while (totalCard % 2 === 1);

//카드 개수 만큼 card element 생성
for (let i = 0; i < totalCard; i++) {
    const div = document.createElement("div");
    div.className = "card";
    cardAry.push(div);
    wrapper.appendChild(cardAry[i]);
}

//////// 랜덤 컬러 카드 생성/////////////////

for (let i = 0; i < totalCard / 2; i++) {
    randomColorAry.push(colors[i], colors[i]);
}
for (let i = randomColorAry.length - 1; i >= 0; i--) {
    const randomIdx = Math.floor(Math.random() * i + 1);

    const tempAry = randomColorAry[i];
    randomColorAry[i] = randomColorAry[randomIdx];
    randomColorAry[randomIdx] = tempAry;
}

///////////////////////////////////////////

function switchCard(target, removeClass, addClass, color) {
    target.classList.remove(removeClass);
    target.classList.add(addClass);
    target.style.background = color;
}
//게임 컨트롤
function handleCardGame(event) {
    clickCount++;

    if (!clickable || selectTarget.includes(this)) {
        console.log("sd");
        return;
    }

    const {
        dataset: { index },
    } = event.target;

    // 한장만 뒤집혔는가?
    if (clickCount === 1) {
        // 카드 뒤집어놓고 대기
        switchCard(
            event.target,
            "flip-vertical-right",
            "flip-vertical-right",
            randomColorAry[index]
        );
        selectTarget.push(event.target);
    }
    console.log(selectTarget);

    // 두장 뒤집었을경우
    if (clickCount === 2) {
        switchCard(
            event.target,
            "flip-vertical-right",
            "flip-vertical-right",
            randomColorAry[index]
        );
        selectTarget.push(event.target);
        console.log(selectTarget);

        if (
            selectTarget[0].style.background ===
            selectTarget[1].style.background
        ) {
            winCount++;
            // selectTarget = []; // 판정 배열 비우기
        } else {
            clickable = false;
            setTimeout(() => {
                clickable = true;
                selectTarget[0].style.background = "navy";
                selectTarget[1].style.background = "navy";
                selectTarget[0].classList.add("flip-vertical-left");
                selectTarget[1].classList.add("flip-vertical-left");
                // selectTarget = []; // 판정 배열 비우기
            }, 500);
        }

        clickCount = 0;
    }

    if (winCount === totalCard / 2) {
        const finishTime = new Date();
        const arrivalTime = finishTime - startTime;
        alert(`승리! 걸린시간: ${arrivalTime / 1000}초`);
    }
}

// 카드 on and off
setTimeout(() => {
    cardAry.forEach((card, idx) => {
        setTimeout(() => {
            card.classList.add("flip-vertical-right");
            card.style.background = randomColorAry[idx];
        }, idx * 150);

        setTimeout(() => {
            switchCard(
                card,
                "flip-vertical-right",
                "flip-vertical-left",
                "navy"
            );
            card.dataset.index = idx; // 데이터 인덱스 부여
            startTime = new Date(); // 시간 측정 시작
            card.addEventListener("click", handleCardGame);
        }, SHOW_CARD_DELAY + totalCard * 150);

        setTimeout(() => {
            card.classList.remove("flip-vertical-left");
        }, SHOW_CARD_DELAY + 400 + totalCard * 150);
    });
}, START_DELAY);

// cardAry.forEach((card, idx) => {});
