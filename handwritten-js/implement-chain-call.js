/**
 * 实现链式调用
 * u.console('breakfast').setTimeout(3000)
   .console('lunch').setTimeout(3000)
   .console('dinner')
 */

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

const u = new Task();

u.console("breakfast")
    .setTimeout(3000)
    .console("lunch")
    .setTimeout(3000)
    .console("dinner");