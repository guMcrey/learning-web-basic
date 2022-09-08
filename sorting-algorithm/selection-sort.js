/**
 * 选择排序:
 * 选择排序在平均情况下的运行时间为 O(n^2), 空间复杂度 O(1)
 * 1. 取数组中未遍历的第一个元素, 遍历该元素之后的元素并比较大小
 * 2. 如果比当前元素小, 就交换位置
 * 3. 每次遍历都能找到剩余元素中的最小值并与其交换位置
 */

function selectionSort(array) {
    if (array.length <= 1) return array;
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
                [array[minIndex], array[i]] = [array[i], array[minIndex]];
            }
        }
    }
    return array;
}

console.log(selectionSort([3, 2, 1, 4]))   // [1,2,3,4]