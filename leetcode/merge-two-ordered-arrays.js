// 2个有序数组, 合并为一个有序数组, 尽可能的时间复杂度低
// 思想: 利用有序数组的条件, 双指针

function merge(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    let result = new Array(arr1.length + arr2.length).fill(0);
    let cur = undefined;
    while (p1 < arr1.length || p2 < arr2.length) {
        if (p1 === arr1.length) {
            cur = arr2[p2];
            p2++;
        } else if (p2 === arr2.length) {
            cur = arr1[p1];
            p1++;
        } else if (arr1[p1] < arr2[p2]) {
            cur = arr1[p1];
            p1++;
        } else {
            cur = arr2[p2];
            p2++;
        }
        result[p1 + p2 - 1] = cur
    }
    return result
}

console.log(merge([1, 2, 3], [2, 4, 7]))  // [1, 2, 2, 3, 4, 7]