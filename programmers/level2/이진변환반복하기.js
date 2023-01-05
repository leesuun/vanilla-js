// sol1 자바스크립트 내장 함수 사용 최소화
function solution(s) {
  if (s === "1") return [0, 0];
  let binary = s;
  let [zeroDelCount, changeCount] = [0, 0];

  while (binary !== "1") {
    let temp = "";
    for (let i = 0; i < binary.length; i++) {
      binary[i] === "1" ? (temp += "1") : zeroDelCount++;
    }
    binary = "";

    let tempLength = temp.length;
    let quotient = null;

    while (quotient !== 0) {
      quotient = Math.floor(tempLength / 2);
      binary += tempLength % 2;
      tempLength = Math.floor(tempLength / 2);
    }
    changeCount++;
  }
  return [changeCount, zeroDelCount];
}

// sol2 자바스크립트 내장 함수 사용
function solution(s) {
  if (s === "1") return [0, 0];
  let binary = s;
  let [zeroDelCount, changeCount] = [0, 0];

  while (binary !== "1") {
    let one = 0;
    for (let i = 0; i < binary.length; i++) {
      binary[i] === "1" ? one++ : zeroDelCount++;
    }
    binary = one.toString(2); // 2진수로 변환
    changeCount++;
  }
  return [changeCount, zeroDelCount];
}
