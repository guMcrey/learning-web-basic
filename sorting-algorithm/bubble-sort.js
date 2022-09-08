/**
 * 冒泡排序:
 * 冒泡排序在平均情况下的运行时间为 O(n^2), 空间复杂度 O(1)
 * 1. 循环数组, 比较当前元素和下一个元素, 如果当前元素比下一个元素大, 向上冒泡. 这样一次循环后最后一个数就是本数组的最大数
 * 2. 下一次循环继续上面的操作, 不循环已经排序好的数
 */

function bobbleSort(array) {
    if (array.length <= 1) return array;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array
}

console.log(bobbleSort([3, 4, 2, 1]))  // [1,2,3,4]