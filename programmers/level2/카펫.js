function solution(brown, yellow) {
  const measure = [];
  const totalBlockNumber = brown + yellow;

  for (let i = 1; i <= totalBlockNumber; i++) {
    if (totalBlockNumber % i === 0) {
      measure.push(i);
    }
  }
  const middle = Math.floor(measure.length / 2);

  return measure.length % 2 === 0
    ? [measure[middle], measure[middle - 1]]
    : [measure[middle], measure[middle]];
}
