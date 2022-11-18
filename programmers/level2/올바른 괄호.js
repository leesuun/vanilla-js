function solution(s) {
  let answer = true;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    counter += s[i] === "(" ? 1 : -1;
    if (counter < 0) return false;
  }
  answer = counter === 0 ? true : false;
  return answer;
}
