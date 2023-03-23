function solution(a, b, n) {
  if (n < a) {
    return 0;
  } else {
    let sum = Math.floor(n / a) * b;
    return sum + solution(a, b, (n % a) + sum);
  }
}
