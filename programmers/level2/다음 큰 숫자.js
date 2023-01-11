// sol1
function solution(n) {
  let answer = 0;
  const count1 = convertBinary(n);

  for (let i = n + 1; i <= 1000000; i++) {
    const count2 = convertBinary(i);
    if (count2 === count1) {
      answer = i;
      break;
    }
  }
  return answer;
}

function convertBinary(n) {
  let quotient = n;
  let remainder = 0;
  let count = 0;
  while (quotient !== 0) {
    remainder = quotient % 2;
    quotient = Math.floor(quotient / 2);
    if (remainder === 1) count++;
  }
  return count;
}

// sol2
function solution(n) {
  let answer = 0;
  const count1 = n.toString(2).replace(/0/g, "").length;

  for (let i = n + 1; i <= 1000000; i++) {
    const count2 = i.toString(2).replace(/0/g, "").length;
    if (count2 === count1) {
      answer = i;
      break;
    }
  }
  return answer;
}
