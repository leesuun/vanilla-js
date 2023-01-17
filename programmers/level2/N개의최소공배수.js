function solution(arr) {
  let answer = false;
  const lastArrNumber = arr[arr.length - 1];

  for (let i = 1; i < 1000000; i++) {
    for (let j = 1; j < arr.length; j++) {
      if ((lastArrNumber * i) % arr[arr.length - 1 - j] !== 0) {
        answer = false;
        break;
      }
      answer = true;
    }
    if (answer) return lastArrNumber * i;
  }
}
