// 为什么需要 setTimeout 去实现 setInterval?
// 答: 每个 setTimeout 产生的任务会直接 push 到任务队列中, 而 setInterval 在每次把任务 push 到任务队列前, 都要进行一次判断 (看上次的任务是否仍在队列中, 不在则添加, 在则不添加)
// 说明: setTimeout 和 setInterval 轮询都不能保证时间上的精确性, 这种需要频繁出发轮训的任务, 一般会创建一个新线程


// setTimeout -> setInterval
const myInterval = (fun, delay) => {
    let timer = null;
    const interval = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fun();
            interval();
        }, delay)
        console.log(timer)
    }
    interval()
    return timer;
}

myInterval(() => console.log(1), 1000)


// setInterval -> setTimeout
const mySetTimeout = (fun, delay) => {
    const timer = setInterval(() => {
        fun();
        clearInterval(timer);
    }, delay)
}

mySetTimeout(() => console.log(1), 1000)
