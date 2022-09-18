// 迭代器模式: a. 提供一致的遍历各种数据结构的方式，而不用了解数据的内部结构; b. 提供遍历容器（集合）的能力而无需改变容器的接口

function iteratorFn(start, end) {
    return {
        [Symbol.iterator]: () => {
            return {
                next: () => {
                    if (start <= end) {
                        return { value: start++, done: false };
                    }
                    return { value: end, done: true };
                }
            }
        }
    }
}

// 测试用例
for (const i of iteratorFn(1, 3)) {
    console.log(i);  // 1 2 3
}
