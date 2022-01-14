nums = [1, 2, 3, 4];

let temp = 0;
let count = 0;

temp = nums[0] + nums[1] + nums[2];
for (let i = 1; i <= temp; i++) {
    if (temp % i === 0) {
        count++;
    }
}
if (count === 2) {
    answer += 1;
}
count = 0;

temp = nums[0] + nums[1] + nums[3];
for (let i = 1; i <= temp; i++) {
    if (temp % i === 0) {
        count++;
    }
}
if (count === 2) {
    answer += 1;
}
count = 0;

temp = nums[1] + nums[2] + nums[3];
for (let i = 1; i <= temp; i++) {
    if (temp % i === 0) {
        count++;
    }
}
if (count === 2) {
    answer += 1;
}
count = 0;
