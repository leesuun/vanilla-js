// [50, 50, 70, 80], 100
function solution(people, limit) {
  people.sort((a, b) => a - b); // sort people by weight
  let i = 0,
    j = people.length - 1,
    count = 0;
  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    count++;
  }
  return count;
}
