/**
 * sum(1, 2, 3).valueOf()     // 6 
 * sum(2, 3)(2).valueOf()     // 7 
 * sum(1)(2)(3)(4).valueOf()  // 10
 * sum(2)(4, 1)(2).valueOf()  // 9
 * 
 * Object.prototype.valueOf() 返回指定对象的原始值
 */

const sum = (...args) => {
    let add = (...args2) => {
        args = [...args, ...args2]
        return add
    }

    add.valueOf = () => args.reduce((acc, cur) => acc + cur, 0)

    return add
}

console.log(sum(1, 2, 3).valueOf())  // 6
console.log(sum(2, 3)(2).valueOf())  // 7