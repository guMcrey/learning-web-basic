/**
 * Object.create() 方法用于创建一个新对象, 使现有的对象来作为新创建对象的原型
 * 语法: Object.create(proto, propertiesObject)
 * 特性:
 * 1. proto 新创建的对象的原型对象, proto 参数需为 null 或除基本类型包装对象以外的对象
 * 2. 返回值: 一个新对象, 带有指定的原型对象及其属性
 * 
 * 使用 null 为原型的对象的优缺点:
 * 缺点: 以 null 为原型的对象存在不可预期的行为, 因为它未从 Object.prototype 继承任何的对象方法, 特别是在调试时, 因为常见的对象属性的转换/检测工具可能会产生错误或丢失信息.
 *      解决方案: 可以为以 null 为原型的对象添加缺少的方法
 * 优点: 令对象不继承 Object.prototype 原型的方法, 可以防止原型污染攻击, 如果恶意脚本向 Object.prototype 添加了一个属性, 这个属性将能够被程序中的每个对象所访问, 而以 null 为原型的对象则不受影响
 * 
 * https://juejin.cn/post/6844904174983872519
 */


Object.myCreate = function (proto, propertyObject = undefined) {
    if (!['function', 'object'].includes(typeof proto)) {
        throw new TypeError('not a object');
    }
    const Constructor = function () { }
    Constructor.prototype = proto;
    const obj = new Constructor();
    if (propertyObject) {
        Object.defineProperties(obj, propertyObject);
    }
    if (proto === null) {
        obj.__proto__ = null;
    }
    return obj;
}

// 测试用例
const obj1 = Object.myCreate({ a: 'aa' })
console.log(obj1)  // {a: 'aa'}
const obj2 = Object.myCreate({ a: 'aa' }, {
    b: {
        value: 'bb',
        enumerable: true
    }
})
console.log(obj2) // {b: 'bb'}