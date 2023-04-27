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
// console.log(powN(2, 5));
// 3. n번째 피보나치 수

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// fibonacci(4) + fibonacci(3);
// fibonacci(3) + fibonacci(2) + fibonacci(2) + fibonacci(1);
// fibonacci(2) +
//   fibonacci(1) +
//   fibonacci(1) +
//   fibonacci(0) +
//   fibonacci(1) +
//   fibonacci(0) +
//   fibonacci(1);
console.log(fibonacci(5));
// 4. 최대 공약수
