// 实现函数 add(1)(2, 3)(4, 5, 6) = 21

function curry(fn, args = []) {
    const length = fn.length;
    return function () {
        const _args = args.slice(0);
        for (let i = 0; i < arguments.length; i++) {
            _args.push(arguments[i]);
        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        } else {
            return fn.apply(this, _args)
        }
    }
}

const add = curry(function (a, b, c, d, e, f) {
    return a + b + c + d + e + f;
})

console.log(add(1)(2, 3)(4, 5, 6))  // 21