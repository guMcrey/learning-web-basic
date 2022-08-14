/**
 * 定义: call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
 * 语法: function.call(thisArg, arg1, arg2...)
 * 特性:
 * 1. 改变 this 指向 (this 允许为空, 在非严格模式下, 被指定为 null 或 undefined 时替换为全局对象; 严格模式下为 undefined)
 * 2. 调用函数
 * 3. 返回值: this 指向的方法的返回值, 若没有, 返回 undefined
 * 4. 允许传参
 */


Function.prototype.myCall = function (context, ...args) {
    if (!context) {
        context = typeof window !== 'undefined' ? window : global;
    }
    context = Object(context);
    context.fn = this;
    const result = context.fn(...args);
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

bar.myCall(null); // 2 {value: 2, name: undefined, age: undefined}
console.log(bar.myCall(obj, 'kevin', 18)); // 1 { value: 1, name: 'kevin', age: 18 }