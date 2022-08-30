/**
 * Array.prototype.map() 方法创建一个新数组, 这个新数组由原数组的每个元素都调用一次提供的函数后的返回值组成
 * 语法: var new_array = arr.map(function callback(currentValue, index, array) {}, thisArg);
 * 参数简介:
 * - callback: 生成新数组元素的函数
 *   - currentValue: callback 函数中正在处理的当前元素
 *   - index: callback 函数中正在处理的当前元素的索引
 *   - array: map 方法调用的数组
 * - thisArg: 执行 callback 函数时值被用作 this
 * 返回值: 一个由原数组每个元素执行回调函数的结果组成的新数组
 */

// 使用 reduce 实现 map
Array.prototype.map = function (callback, thisArg = null) {
    if (typeof callback !== 'function') {
        throw new Error('callback is not a function');
    }
    return this.reduce((acc, cur, index, array) => {
        return acc.concat(callback.call(thisArg, cur, index, array));
    }, [])
}

// 测试用例
const arr = [1, 2]
const result = arr.map(function (currentValue, index, array) {
    return currentValue * 2;
})
console.log(result)  // [2, 4]