//sol1
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

  return [
    isInteger(wrongNumber / n) ? n : wrongNumber % n,
    Math.ceil(wrongNumber / n),
  ];
}

function isInteger(number) {
  return number % 1 === 0;
}

//sol2
function solution(n, words) {
  let wrongPlayer = 0;
  let wrongRound = 0;
  let usedWords = new Set(); // Use a Set to keep track of used words

  for (let i = 0; i < words.length; i++) {
    if (
      usedWords.has(words[i]) ||
      words[i - 1][words[i - 1].length - 1] !== words[i][0]
    ) {
      wrongPlayer = (i % n) + 1; // player number = (current index % total players) + 1
      wrongRound = Math.floor(i / n) + 1; // round number = (current index / total players) + 1
      break;
    }
    usedWords.add(words[i]);
  }

  return [wrongPlayer, wrongRound];
}
