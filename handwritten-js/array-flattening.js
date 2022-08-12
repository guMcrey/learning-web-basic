// Array.prototype.flat(): 会按照一个可指定的深度递归遍历数组, 并将多有元素与递归到的子数组合并为一个新数组返回

// 1. Array.flat()
const arrayFlat1 = (array) => {
    return array.flat(Infinity);
}

// 2. reduce()
const arrayFlat2 = (array) => {
    return array.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? arrayFlat2(cur) : cur)
    }, [])
}


// 测试用例
let testArray1 = [
    1,
    [2, 3, 4],
    [5, [6, [7, [8]]]]
]

console.log(arrayFlat2(testArray1))