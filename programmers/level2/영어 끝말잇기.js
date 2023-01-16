function solution(n, words) {
  const answer = [0, 0];
  const temp = [words[0]];
  let wrongNumber = 0;

  for (let i = 1; i < words.length; i++) {
    if (
      temp.includes(words[i]) ||
      temp[i - 1]?.slice(temp[i - 1].length - 1) !== words[i]?.slice(0, 1)
    ) {
      wrongNumber = i + 1;
      break;
    } else {
      temp.push(words[i]);
    }
  }
  if (wrongNumber === 0) return answer;

  if (isInteger(wrongNumber / n)) return [n, Math.ceil(wrongNumber / n)];

  return [wrongNumber % n, Math.ceil(wrongNumber / n)];
}

function isInteger(number) {
  return number % 1 === 0;
}
