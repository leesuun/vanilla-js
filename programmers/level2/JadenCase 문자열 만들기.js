function solution(string) {
  const stringArr = string.split(" ");
  let answer = [];

  stringArr.forEach((word) => {
    word !== ""
      ? answer.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
      : answer.push("");
  });
  answer = answer.join(" ");

  return answer;
}
