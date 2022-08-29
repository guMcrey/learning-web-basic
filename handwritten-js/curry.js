/**
 * 函数柯里化: 把接受多个参数的函数转化为接收一个单一参数的函数(参数复用) 柯里化应函数式编程而生
 * 柯里化: 是一种转换, 将 f(a,b,c) 转换为 f(a)(b)(c) 的形式进行调用. javaScript 实现通常都保持该函数可以被正常调用, 并且如果函数参数不足, 则返回偏函数
 * 柯里化实现原理: 用闭包把函数参数保存起来, 当参数的数量足够执行函数时, 就执行函数
 * 柯里化条件: 要求函数具有固定数量的参数
 * https://github.com/mqyqingfeng/Blog/issues/42
 * */

const curry = function (fn, args = []) {
    const length = fn.length;
    return function () {
        let _args = args.slice(0);
        for (let i = 0; i < arguments.length; i++) {
            _args.push(arguments[i]);
        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        } else {
            return fn.apply(this, _args);
        }
    }
}

const fn = curry(function (a, b, c) {
    console.log([a, b, c]);
})

fn('a', 'b', 'c');
fn('a', 'b')('c');
