/**
 * 深拷贝: 引用类型中, 深拷贝是彻底拷贝一个新的对象, 而不是拷贝对象的引用
 * 
 * WeakMap 对象是一组键/值对的集合, 其中的键是弱引用的, 其键必需是对象, 值可以是任意的
 * “弱引用”: 意味着在没有其他引用存在时垃圾回收能正确运行
 */

function deepClone(target, map = new WeakMap()) {
    if (typeof target !== 'object') {
        return target
    }
    let targetClone = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
        return target;
    }
    map.set(target, targetClone);
    for (const i in target) {
        if (target[i] !== null && typeof target[i] === 'object') {
            targetClone[i] = deepClone(target[i], map)
        } else if (target[i] === 'function') {
            targetClone[i] = target[i].bind(targetClone);
        } else {
            targetClone[i] = target[i]
        }
    }
    return targetClone;
}


var data = {
    a: "123",
    b: 123,
    c: true,
    d: [43, 2],
    e: undefined,
    f: null
};

const test = deepClone(data);
console.log(test);  // { a: '123', b: 123, c: true, d: [ 43, 2 ], e: undefined, f: null }
