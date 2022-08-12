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
Promise.myRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(value => resolve(value)).catch(reason => reject(reason))
        })
    })
}