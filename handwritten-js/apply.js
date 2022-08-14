/**
 * 定义: apply() 方法调用一个具有给定 this 值的函数, 以及以一个数组(或类数组对象的形式) 传递的参数
 * 语法: apply(thisArg, argsArray)
 * 特性:
 * 1. 改变 this 指向 (可选, 非严格模式下 null/undefined 被替换为全局对象)
 * 2. 调用函数
 * 3. 返回值: 调用有指定 this 值和参数的函数的结果
 * 4. 数组/类数组 参数
 */

Function.prototype.myApply = function (context, args) {
    if (!context) {
        context = typeof window !== 'undefined' ? window : global;
    }
    context = Object(context);
    context.fn = this;
    const result = args ? context.fn(...args) : context.fn();
    delete context.fn;
    return result;
}

// 测试用例
var value = 2

let obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.myApply(null); // 2 {value: 2, name: undefined, age: undefined}
console.log(bar.myApply(obj, ['kevin', 18])); // 1 { value: 1, name: 'kevin', age: 18 }