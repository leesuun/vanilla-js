const result = document.querySelector("#result");
const box = document.querySelector("#box");

const records = [];

let startTime;
let endTime;
let timeoutId;

box.addEventListener("click", () => {
    if (box.classList.contains("waiting")) {
        box.classList.remove("waiting");
        box.classList.add("ready");
        box.textContent = "초록색이 되면 클릭하세요.";

        timeoutId = setTimeout(() => {
            startTime = new Date();
            box.classList.remove("waiting", "ready");
            box.classList.add("now");
            box.textContent = "클릭하세요!";
        }, Math.floor(Math.random() * 1 + 2) * 1000);
    } else if (box.classList.contains("ready")) {
        clearTimeout(timeoutId);
        box.classList.remove("ready");
        box.classList.add("waiting");
        box.textContent = "너무 성급합니다.";
    } else {
        endTime = new Date();
        const responseTime = endTime - startTime;
        records.push(responseTime);
        const average =
            records.reduce((pre, curr) => pre + curr) / records.length;
        result.textContent = `현재: ${responseTime + "ms"} 평균: ${
            average + "ms"
        }`;

        const topFive = records.sort((a, b) => a - b).slice(0, 5);
        topFive.forEach((record, idx) => {
            const div = document.createElement("div");
            div.textContent = `${idx + 1}위: ${record + "ms"}`;
            result.appendChild(div);
        });

        box.classList.remove("now");
        box.classList.add("waiting");
        box.textContent = "클릭해서 시작하세요.";
    }
});
