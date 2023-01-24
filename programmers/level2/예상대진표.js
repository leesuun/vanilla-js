// solution 1
function solution(n, a, b) {
  let answer = 0;
  let order = new Array(n)
    .fill(0)
    .map((_, index) => (index + 1 === a || index + 1 === b ? 1 : 0));

  let temp = [];

  while (order.length !== 1) {
    for (let i = 0; i < order.length; i += 2) {
      if ((order[i] || order[i + 1]) === 0) {
        temp.push(0);
      } else if (order[i] === 1 && order[i + 1] === 1) {
        answer++;
        return answer;
      } else {
        temp.push(1);
      }
    }

    order = temp;
    temp = [];
    answer++;
  }

  return answer;
}

// solution 2
function solution(n,a,b)
{
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }

    return answer;
}

