/**
 * 定义: new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例
 * 
 * new 关键字操作步骤:
 * 1. 创建一个空的 javascript 对象, 如 obj
 * 2. 将 obj 的 __proto__  属性指向构造函数的 prototype
 * 3. 将 1 中新创建的对象作为 this 的上下文
 * 4. 如果构造函数没有返回值, 则返回 this
 * 
 * Object.create() 用于创建一个新对象, 使用现有的对象来作为新对象的原型
 * 返回值: 一个新对象, 带有指定的原型对象及其属性
 */

const myNew = function (func, ...args) {
    if (typeof func !== 'function') {
        throw new Error('not a function')
    }
    const obj = Object.create(func.prototype)
    let result = func.apply(obj, args)

    if (typeof result === 'object' && result !== 'null' || typeof result === 'function') {
        return result
    } else {
        return obj
    }
}


// 测试用例
function fn(name, age) {
    this.name = name;
    this.age = age;
}

const fn1 = myNew(fn, 'hh', 10)
fn1  // fn {name: 'hh', age: 10}
