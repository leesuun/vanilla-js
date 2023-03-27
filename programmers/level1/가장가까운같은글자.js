function solution(s) {
  var answer = [];

  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(0, i);
    let lastStr = s[i];

    if (temp.includes(s[temp.length])) {
      for (let j = temp.length - 1; j >= 0; j--) {
        if (lastStr === temp[j]) {
          answer[i] = temp.length - j;
          break;
        }
      }
    } else {
      answer[i] = -1;
    }
  }

  return answer;
}
