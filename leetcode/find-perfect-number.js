/**
 * 题目: 求 1-1000 内的完数
 * 描述: 一个数如果恰好等于它的因子子和, 这个数就称为“完数”, 如: 6 = 1 + 2 + 3;
 * 思路: 判断某数是否是完数, 判断因子和是否等于当前数
 */

function isPerfectNumber(num) {
    let numArr = [];
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            numArr.push(i);
        }
    }
    const sum = numArr.reduce((acc, cur) => {
        return acc += cur;
    }, 0);
    return sum === num ? true : false;
}

function main() {
    let result = [];
    for (let i = 1; i < 1000; i++) {
        if (isPerfectNumber(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(main());  // [6, 28, 496]