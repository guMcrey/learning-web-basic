// instanceof 定义: instanceof 运算符用于检测构造函数的 prototype 是否出现在某个实例对象的原型链上
// Object.getPrototypeOf(obj): 返回指定对象的原型 

// instanceof 实现原理

const myInstanceof = (obj, func) => {
    // 排除基本类型
    if (!obj && ['object', 'function'].includes(typeof obj)) {
        return false
    }
    let proto = obj
    while (true) {
        if (proto === null) {
            return false
        } else if (proto === func.prototype) {
            return true
        } else {
            proto = Object.getPrototypeOf(proto)
        }
    }
}


// 测试用例

let Fn = function () { }
let fn1 = new Fn()

console.log(myInstanceof({}, Object))  // true
console.log(myInstanceof(fn1, Fn))  // true
console.log(myInstanceof({}, Fn))  // false
console.log(myInstanceof(null, Fn))  // false
console.log(myInstanceof(1, Fn))  // false 
console.log(myInstanceof(function a() { }, Function)) // true