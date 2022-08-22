// JS 实现一个带并发限制的异步调度器 Scheduler, 保证同时运行的任务最多有两个

class Scheduler {
    constructor() {
        this.queue = [];
        this.maxCount = 2;
        this.runCount = 0;
    }
    add(promiseCreator) {
        this.queue.push(promiseCreator);
        this.runQueue();
    }
    runQueue() {
        if (this.queue.length && (this.runCount < this.maxCount)) {
            const promiseCreator = this.queue.shift();
            this.runCount += 1;

            promiseCreator().then(() => {
                this.runCount -= 1;
                this.runQueue();
            })
        }
    }
}

const timeout = time => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}

const scheduler = new Scheduler();

const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)));  // 2 3 1 4
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');