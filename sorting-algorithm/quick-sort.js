/**
 * 快排: https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 * 快速排序在平均情况下的运行时间为 O(nlogn), 空间复杂度 O(logn)
 * 1. 在数据集中选择一个基准值
 * 2. 把小于基准值的放到基准值左边, 大于基准值的放到基准值右边
 * 3. 不断重复 1, 2, 直到数据集中只剩下一个元素
 */

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    // 每次都选数组第一个元素
    const pivot = arr[0];
    let left = [];
    let right = [];
    // 从第二个遍历
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        }
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([85, 24, 63, 45, 17, 31, 96, 50])) // [17, 24, 31, 45, 50, 63, 85, 96]