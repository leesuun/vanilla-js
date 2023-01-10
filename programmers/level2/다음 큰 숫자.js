function solution(n) {
  var answer = 0;
  let quotient = null;
  let remainder = null;
  let N = n;
  let oneCount = 0;
  let nextCount = 0;

  while (quotient !== 0) {
    quotient = Math.floor(N / 2);
    remainder = N % 2;
    N = quotient;
    if (remainder === 1) oneCount++;
  }
  quotient = null;
  for (let i = n + 1; i < 1000000; i++) {
    let N = i;
    while (quotient !== 0) {
      quotient = Math.floor(N / 2);
      remainder = N % 2;
      N = quotient;

      if (remainder === 1) nextCount++;
      console.log(nextCount);
      if (nextCount + "" === oneCount + "") {
        answer = i;
        return;
      }
    }
  }

  return answer;
}
