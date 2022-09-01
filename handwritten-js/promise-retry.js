// promise 失败自动重试, 成功返回结果, 并结束重试. 可以指定重试次数

let runCount = 0;
const promiseQueueHandler = (stack) => {
    if (stack.length && runCount === 0) {
        const currentPromise = stack.shift();
        currentPromise().then((value) => {
            runCount++;
            console.log('success', stack.length)
            return value;
        }).catch((reason) => {
            console.log('reject', stack.length)
            runCount = 0;
            promiseQueueHandler(stack);
        })
    }
}

const addPromise = (promiseFn, number) => {
    const stack = [];
    let count = number;
    while (count > 0) {
        stack.push(promiseFn)
        count--;
    }
    return stack;
}

const promiseSuccess = () => new Promise((resolve, reject) => {
    setTimeout((v) => resolve(1), 1000)
})
const promiseReject = () => new Promise((resolve, reject) => {
    setTimeout((v) => reject(2), 1000)
})

// const stack = addPromise(promiseTest, 10)
const stack = [promiseReject, promiseReject, promiseSuccess]
promiseQueueHandler(stack)  // 2 1 0