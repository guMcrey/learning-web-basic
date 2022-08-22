// setTimeout
const throttle = function (func, delay) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}


// 时间戳
const throttle2 = function (func, delay) {
    let startTime = Date.now();
    return function (...args) {
        const endTime = Date.now();
        if (endTime - startTime > delay) {
            func.apply(this, args);
            startTime = Date.now();
        }
    }
}

// setTimeout - 测试用例
let t1 = Date.now();
const showName = throttle(function (name) {
    const t2 = Date.now();
    console.log(this, name, t2 - t1);
}, 1000)

setInterval(() => {
    showName.call({ a: 1, b: 2 }, 'test1')
}, 10);


// 时间戳 - 测试用例
let t3 = Date.now();
const showName2 = throttle2(function (name) {
    const t4 = Date.now();
    console.log(this, name, t4 - t3);
}, 1000)

setInterval(() => {
    showName2.call({ c: 3, d: 4 }, 'test2')
})