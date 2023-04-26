let count = 0;

// 1. n의 팩토리얼
function recursiveMul(n) {
  if (count === 100) return;
  count++;
  if (n < 1) {
    return 1;
  }
  return n * recursiveMul(n - 1);
}
// console.log(recursiveMul(5));
// 2. n의 x제곱
function powN(n, x) {
  if (x < 1) {
    return 1;
  }
  x--;
  return n * powN(n, x);
}

console.log(powN(2, 5));
// 3. 피보나치
// 4. 최대 공약수
