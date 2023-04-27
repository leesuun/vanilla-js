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
// console.log(fibonacci(5));
// 4. 최대 공약수

function gcd(num1, num2) {
  const maxNum = num1 >= num2 ? num1 : num2;
  const minNum = num1 >= num2 ? num2 : num1;
  const result = [];

  for (let i = 1; i <= maxNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result.push(i);
    }
    if (i === minNum) break;
  }
  return result[result.length - 1];
}

function gcd_1(m, n) {
  if (m < n) {
    let temp = m;
    m = n;
    m = temp;
  }
  if (m % n == 0) return n;
  else return gcd_1(n, m % n);
}

console.log(gcd_1(10, 22));

// 1,2,5,10
// 1,2,4,5,10,20
