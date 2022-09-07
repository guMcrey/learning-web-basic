// compose 组合函数: 前一个函数的返回值作为后一个函数的参数
// 例如: compose(fn3,fn2,fn1)(5) === fn3(fn2(fn1(5)))

// 测试用例
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1));


function compose(...fn) {
    if (!fn.length) return (value) => value;
    if (fn.length === 1) return fn[0];

    return fn.reduce((acc, cur) => {
        return (...args) => {
            return acc(cur(...args));
        }
    })
}
