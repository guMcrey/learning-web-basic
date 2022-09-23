// 设计一个异步任务串行执行类 Task
class Task {
    constructor() {
        this.list = [];
    }

    add(fn, context, ...args) {
        this.list.push(fn.bind(context, this.next.bind(this), ...args));
        return this;
    }

    run() {
        this.next();
    }

    next() {
        const fn = this.list.shift();
        fn && fn();
    }
}


// 用例
function task1(next) {
    setTimeout(() => {
        console.log('red')
        next()
    }, 3000)
}

function task2(next, b) {
    setTimeout(() => {
        console.log(b)
        next()
    }, 1000)
}

function task3(next) {
    setTimeout(() => {
        console.log('yellow')
        next()
    }, 2000)
}

let task = new Task()
task.add(task1).add(task2, null, 3).add(task3)
task.run()