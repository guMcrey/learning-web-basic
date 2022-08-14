// 1. 拓展运算符 + Set
const uniqueArr1 = (arr) => {
    return [...new Set(arr)]
}

// 2. indexOf + 新数组
const uniqueArr2 = (arr) => {
    const result = []
    arr.forEach(val => {
        if (result.indexOf(val) === -1) {
            result.push(val)
        }
    })
    return result
}

// 3. indexOf + filter
const uniqueArr3 = (arr) => {
    return arr.filter((val, index) => arr.indexOf(val) === index)
}

// 4. Array.from + Set
const uniqueArr4 = (arr) => {
    return Array.from(new Set(arr))
}