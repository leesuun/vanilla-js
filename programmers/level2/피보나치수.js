function solution(n) {
  let previous = 0;
  let next = 1;
  let current = 1;

  for (let i = 1; i <= n - 1; i++) {
    current += previous;
    previous = next;
    next = current;
  }

  return current % 1234567;
}
solution(100);
