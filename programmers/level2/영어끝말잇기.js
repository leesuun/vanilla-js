function solution(n, words) {
  var answer = [];
  // console.log(n,words);

  const stack = [];

  for (let i = 0; i < words.length; i++) {
    stack.push(words[i]);
    if (
      stack.length > 1 &&
      stack[0].slice(stack[0].length - 1) === stack[1].slice(0, 1)
    ) {
      stack.pop();
      stack.pop();
      stack.push(words[i]);
    } else {
      console.log(i);
    }
  }

  return answer;
}

function solution(n, words) {
  var answer = [];

  const stack = [words[0]];
  let temp = [];

  for (let i = 0; i < words.length; i++) {
    if (
      words[i].slice(words[i].length - 1) !== words[i + 1]?.slice(0, 1) &&
      i !== words.length - 1
    ) {
      temp.push(i + 2);
    }
  }
  for (let i = 1; i < words.length; i++) {
    if (stack.includes(words[i])) {
      temp.push(i + 1);
    }
  }
  temp.sort();

  console.log(temp);

  if (temp[0] % n === 0) {
    answer.push(n);
  } else {
    answer.push(temp[0] % n);
  }

  for (let i = 1; i < temp[0]; i++) {
    if (i * n > temp[0]) {
      if (temp[0] % n === 0) {
        answer.push(i - 1);
      } else {
        answer.push(i);
      }
      break;
    }
  }

  return temp.length === 0 ? [0, 0] : answer;
}
