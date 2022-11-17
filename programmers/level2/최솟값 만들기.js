function solution(A, B) {
  let answer = 0;
  const initialValue = 0;
  const [first, second] = [A.sort((a, b) => a - b), B.sort((a, b) => b - a)];

  answer = first.reduce(
    (prev, curr, i) => prev + curr * second[i],
    initialValue
  );

  return answer;
}
