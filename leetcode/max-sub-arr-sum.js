/**
 * 连续子数组的最大和: https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 */

const maxSubArray = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let pre = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        maxSum = Math.max(maxSum, pre);
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))   // 6