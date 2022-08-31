/**
 * Object.defineProperty() 方法会直接在一个对象上定义一个新属性, 或者修改一个对象的现有属性, 并返回此结果
 * get: 属性的 getter 函数, 如果没有 getter 会返回 undefined, 当访问该属性时, 会调用此函数
 * set: 属性的 setter 函数, 如果没有 setter 会返回 undefined, 当属性值被修改时, 会调用此函数
 */

const obj = {
    a: 1,
    b: 2
}

function toReactive(obj) {
    for (const i in obj) {
        obj[`_${i}`] = obj[i];
        Object.defineProperty(obj, i, {
            get: function () {
                console.log('get', i)
                return this[`_${i}`]
            },
            set: function (value) {
                console.log('set', i, value);
                this[`_${i}`] = value;
            }
        })
    }
    return obj;
}

toReactive(obj)

console.log(obj.a)  // 1
obj.b = 3
console.log(obj.b)
// 新增属性, 没有走 get 和 set
obj.c = 3
console.log(obj.c)