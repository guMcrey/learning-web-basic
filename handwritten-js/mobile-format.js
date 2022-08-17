// 将手机号按照 3 3 4 格式化

// 1. 正则
const mobileFormat = (str) => {
    if (str.length !== 11) return
    return String(str).replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3')
}

// 2. 使用数组的 splice() 原地添加数组元素

/**
 * Array.prototype.splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组, 并以数组形式返回被修改的内容, 此方法会改变原数组
 * 语法: array.splice(start, deleteCount, item1, item2 ...)
 * 返回值: 由被删除的元素组成的一个数组, 如果只删除了一个元素, 则返回只包含一个元素的数组, 如果没有删除元素, 则返回空数组
 */

const mobileFormat1 = (str) => {
    if (str.length !== 11) return
    const arr = str.split('')
    arr.splice(3, 0, ' ')
    arr.splice(8, 0, ' ')
    return arr.join('')
}

// 测试用例
mobileFormat('19034561111')  // '190 3456 1111'
mobileFormat1('19034561111')  // '190 3456 1111'