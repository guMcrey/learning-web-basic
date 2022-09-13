/**
 * 通过函数, 使 fn([['a', 'b'], ['n', 'm'], ['0', '1']]) 输出为 ['an0', 'an1', 'am0', 'am1', 'bm0', 'bm1', 'bn0', 'bn1']
 * 思想: 先合并前两个, 之后再合并后一个
 */

function convert(arrA, arrB) {
    const result = [];
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            result.push(`${arrA[i]}${arrB[j]}`);
        }
    }
    return result;
}

function main(arr) {
    let result = convert(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        result = convert(result, arr[i]);
    }
    return result;
}

console.log(main([['a', 'b'], ['n', 'm'], [0, 1]]));  // ['an0', 'an1', 'am0', 'am1', 'bn0', 'bn1', 'bm0', 'bm1']