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

function solution2(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}
