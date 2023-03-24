function solution1(food) {
  var answer = "";
  var foodList = food.map((item, index) =>
    index > 0 && item[index] % 2 === 1 ? (item -= 1) : item
  );

  for (let i = 1; i <= foodList.length; i++) {
    for (let j = 1; j <= foodList[i] / 2; j++) {
      answer += i;
    }
  }

  answer += 0;

  for (let i = foodList.length; i >= 1; i--) {
    for (let j = 1; j <= foodList[i] / 2; j++) {
      answer += i;
    }
  }
  return answer;
}
