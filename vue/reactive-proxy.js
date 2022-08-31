/**
 * Proxy 对象用于创建一个对象的代理, 从而实现基本操作的拦截和自定义 (如属性查找, 赋值, 枚举, 函数调用等
 * 语法: const p = new Proxy(target, handler)
 * 参数:
 * - target: 要使用 Proxy 包装的目标对象 (可以是任何类型的对象, 包括原生数组, 函数, 甚至另一个代理)
 * - handler: 对象是一个容纳一批特定属性的占位符对象, 它包含有 Proxy 的各个捕获器 (trap), 所有的捕获器是可选的, 如果没有定义某个捕获器, 那么就会保留对象的默认行为
 * 
 * Reflect 是一个内置对象, 它提供拦截 JavaScript 操作的方法, Reflect 的所有属性和方法都是静态的
 */

const obj = {
    name: 'hakuna',
    obj: {
        a: 1,
        b: 2,
    }
};

const p = new Proxy(obj, {
    get: (target, propKey, receiver) => {
        console.log('get data', propKey);
        return Reflect.get(target, propKey, receiver);
    },
    set: (target, propKey, newValue, receiver) => {
        console.log('set prop', propKey, newValue);
        return Reflect.set(target, propKey, newValue, receiver);
    }
})

console.log('p.name', p.name)   // hakuna
p.obj.c = 'c'
console.log('p.obj.c', p.obj.c)  // c

