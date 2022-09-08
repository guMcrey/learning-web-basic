/**
 * 插入排序:
 * 1. 将左侧序列看成一个有序序列, 选未排序序列的第一个元素
 * 2. 插入时, 从有序序列最右侧开始比较, 若比较的数较大, 后移一位
 */

function insertSort(array) {
    if (array.length <= 1) return array;
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] < array[[j]]) {
                [array[j], array[i]] = [array[i], array[j]]
            }
        }
    }
    return array
}

console.log(insertSort([2, 1, 3, 4]))   // [1,2,3,4]