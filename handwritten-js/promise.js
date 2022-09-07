// https://mp.weixin.qq.com/s/-YlCc-AsQ19sTHtsMyG-3g

// 1. 实现 Promise.resolve()
Promise.myResolve = (value) => {
    if (value && typeof value === 'object' && value instanceof Promise) {
        return value;
    }
    return new Promise((resolve, reject) => {
        resolve(value);
    })
}


// 2. 实现 Promise.reject()
Promise.myReject = (value) => {
    return new Promise((resolve, reject) => {
        reject(value);
    })
}


// 3. 实现 Promise.all()
/**
 * 将多个 Promise 实例包装成一个 Promise 实例, const p = Promise.all([p1, p2, p3])
 * 1. 只有所有 promises 变成 fulfilled, p 的状态才会变为 fulfilled, 返回一个 promise 数组
 * 2. 只要有一个 promise 变成 rejected, p 的状态就会变成 rejected, 返回第一个 rejected 的 promise 的值
 */
Promise.myAll = (promises) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let length = promises.length;
        let result = [];

        if (length === 0) {
            return resolve([]);
        }

        promises.forEach((value, index) => {
            Promise.resolve(value).then((res) => {
                count += 1;
                result[index] = res;

                if (count === length) {
                    resolve(result)
                }
            }).catch((err) => reject(err))
        })
    })
}

// 4. 实现 Promise.allSettled()
/**
 * Promise.allSettled() 接收一个 promise 数组, 只有当数组中的 promise 状态都发生改变,
 * 不管是 fulfilled 还是 rejected, 返回一个 promise 结果组成的数组
 */
Promise.myAllSettled = (promises) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let result = [];
        const promiseLength = promises.length;

        if (promiseLength === 0) {
            return resolve([])
        }

        promises.forEach((promise, index) => {
            promise.then((res) => {
                count += 1;
                result[index] = {
                    status: 'fulfilled',
                    value: res
                }

                if (count === promiseLength) {
                    resolve(result)
                }
            }).catch(err => {
                count += 1;
                result[index] = {
                    status: 'rejected',
                    reason: err
                }

                if (count === promiseLength) {
                    resolve(result)
                }
            })
        })
    })
}

// 5. 实现 Promise.race()
// 当 promise 数组中有一个率先改变状态, 最终状态就发生改变
Promise.myRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(value => resolve(value)).catch(reason => reject(reason))
        })
    })
}

// 6. 实现 Promise (符合 Promise/A+ 规范)
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function promise(executor) {
    let self = this;
    self.status = PENDING;
    self.onFulfilled = [];
    self.onRejected = [];

    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilled.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.reason === PENDING) {
            self.status = REJECTED;
            self.reason = reason;
            self.onRejected.forEach(fn => fn());
        }
    }

    try {
        executor(resolve, reject)
    } catch (err) {
        reject(err)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    let self = this;
    let promise2 = new Promise((resolve, reject) => {
        if (self.status === FULFILLED) {
            try {
                setTimeout(() => {
                    let x = self.onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                })
            } catch (e) {
                reject(e);
            }
        }
        if (self.status === REJECTED) {
            try {
                setTimeout(() => {
                    let x = self.onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                })
            } catch (e) {
                reject(e);
            }
        }
        if (self.status === PENDING) {
            try {
                self.onFulfilled.push(() => {
                    try {
                        setTimeout(() => {
                            let x = self.onFulfilled(self.value);
                            resolvePromise(promise2, x, resolve, reject);
                        })
                    } catch (e) {
                        reject(e);
                    }
                })
                self.onRejected.push(() => {
                    try {
                        setTimeout(() => {
                            let x = self.onRejected(self.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        })
                    } catch (e) {
                        reject(e);
                    }
                })
            } catch (e) {
                reject(e);
            }
        }
    })
    return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        reject(new Error('cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used;
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (used) return;
                    used = true;
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    if (used) return;
                    used = true;
                    reject(r);
                })
            } else {
                if (used) return;
                used = true;
                resolve(x)
            }
        } catch (e) {
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}