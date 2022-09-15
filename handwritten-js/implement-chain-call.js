/**
 * 实现链式调用
 * u.console('breakfast').setTimeout(3000)
   .console('lunch').setTimeout(3000)
   .console('dinner')
 */

// 使用 Promise
class Task {
    constructor() {
        this.promise = Promise.resolve();
    }
    console(val) {
        this.promise = this.promise.then(() => {
            console.log(val);
        })
        return this;
    }
    setTimeout(wait) {
        this.promise = this.promise.then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, wait);
            })
        })
        return this;
    }
}

// 不使用 Promise 实现
class Task {
    constructor() {
        this.list = [];
        setTimeout(() => {
            this.next();
        })
    }
    console(value) {
        const fn = () => {
            console.log(value);
            this.next();
        }
        this.list.push(fn);
        return this;
    }
    setTimeout(wait) {
        const fn = () => {
            setTimeout(() => {
                this.next();
            }, wait);
        }
        this.list.push(fn);
        return this;
    }
    next() {
        const fn = this.list.shift();
        fn && fn();
    }
}

const u = new Task();

u.console("breakfast")
    .setTimeout(3000)
    .console("lunch")
    .setTimeout(3000)
    .console("dinner");