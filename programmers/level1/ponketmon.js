function solution(nums) {
    var answer = 0;
    const pickLength = nums.length / 2;
    nums = [...new Set(nums)];
    answer = nums.length >= pickLength ? pickLength : nums.length;

    return answer;
}
