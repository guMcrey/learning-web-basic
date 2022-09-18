// 发布订阅模式: 定义一个可以注册事件, 触发事件的中心, 用来做事件管理, 如 vue eventBus

const eventBus = {
    store: {
    },
    // 注册-订阅
    on: (eventName, callback) => {
        eventBus.store[eventName] = eventBus.store[eventName] || [];
        eventBus.store[eventName].push(callback);
    },
    // 触发-发布
    emit: (eventName, ...args) => {
        if (eventBus.store[eventName]) {
            eventBus.store[eventName].forEach(callback => {
                callback(...args);
            })
        }
    }
}

eventBus.on('hello', () => { console.log('hello') })
eventBus.on('hello', (args) => { console.log('hello2', args) })

eventBus.emit('hello', [1, 2, 3])
