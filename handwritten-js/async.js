// 实现一个 async 函数: async 是 generator 的语法糖,就是把 generator 和 generator 自动执行器包装在一个函数里，这个函数返回一个 Promise 对象

function myAsync(genFn) {
    return new Promise((resolve, reject) => {
        let gen = genFn();
        function step(nextFn) {
            let next = undefined;
            try {
                next = nextFn();
            } catch (e) {
                reject(e);
                return;
            }
            if (next.done) {
                resolve(next.value)
                return;
            }
            Promise.resolve(next.value).then((v) => {
                step(() => gen.next(v));
            }, (r) => {
                step(() => gen.throw(r));
            })
        }
        step(() => gen.next(undefined));
    })
}