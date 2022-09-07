/**
 * https://github.com/mqyqingfeng/Blog/issues/12
 * 定义: bind() 方法创建一个新的函数, 在 bind() 被调用时, 这个新函数的 this 被指定为 bind() 的第一个参数, 而其余参数则作为新函数的参数供调用时使用
 * 语法: function.bind(thisArg, arg1, arg2...)
 * 特性:
 * 1. 改变 this 指向, 如果使用 new 运算符构造绑定函数, 则忽略该值, 如果 bind 函数的参数列表为空或者 thisArg 是 null 或 undefined, 执行作用域的 this 将被作为新函数的 thisArg
 * 2. 返回原函数的拷贝, 并拥有指定的 this 值和初始参数
 * 3. 允许传参
 */

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('type error')
    }
    var self = this;
    // 获取 myBind 函数从第二个参数到最后一个
    var args = Array.prototype.slice.call(arguments, 1);
    const fNOP = function () { }
    const fBound = function () {
        // arguments 为 myBind() 返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, bindArgs.concat(args))
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

// 测试用例
var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.myBind(foo, 'daisy');
bindFoo(); // 1 'daisy' 'undefined'

var obj = new bindFoo('18');
console.log(obj); // undefined daisy 18