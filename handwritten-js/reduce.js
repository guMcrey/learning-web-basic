/**
 * Array.prototype.reduce() 方法对数组中的每个元素按序执行一个由你提供的 reducer 函数, 每一次运行 reducer 会将先前元素的计算结果作为参数传入, 最后将其结果汇总为单个返回值
 * 语法: reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue)
 * 参数:
 * - callback: reducer 函数
 *   - previousValue: 上一次调用 callbackFn 时的返回值, 在第一次调用时, 若指定了 initialValue, 其值为 initialValue, 否则为 array[0]
 *   - currentValue: 数组中正在处理的元素, 在第一次调用时, 若指定了 initialValue, 其值为数组索引为 0 的元素 array[0], 否则为 array[1]
 *   - currentIndex: 数组中正在处理的元素的索引, 若指定了初始值 initialValue, 则其始索引号为 0, 否则从索引 1 开始
 *   - array: 用于遍历的数组
 * - initialValue: 作为第一次调用 callback 的 previousValue 的值
 * 返回值: 使用 reducer 回调函数遍历整个数组后的结果
 */


// 实现 reduce
Array.prototype.myReduce = function (reducer, initialValue) {
    const hasInitialValue = arguments.length > 1;
    let previousValue = hasInitialValue ? initialValue : this[0];
    for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
        previousValue = reducer.call(undefined, previousValue, this[i], i, this);
    }
    return previousValue;
}

const arr = [1, 2, 3, 4]
const result = arr.myReduce((previousValue, currentValue) => {
    return previousValue += currentValue;
}, 0);
console.log(result);