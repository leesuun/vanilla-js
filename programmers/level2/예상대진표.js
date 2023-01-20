function solution(n, a, b) {
  let answer = 0;
  const order = new Array(n)
    .fill(0)
    .map((_, index) => (index + 1 === a || index + 1 === b ? 1 : 0));

  const temp = [];

  for (let i = 0; i < order.length; i += 2) {
    if ((order[i] || order[i + 1]) === 0) {
      temp.push(0);
    } else {
      temp.push(1);
    }
  }

  console.log(temp);

  return answer;
}
