// 使某数值的因子数组的积等于某数
// 如: 8 => [2,2,2], 24 => [2,2,2,3]

function factor(n) {
    let cur = n;
    let num = 2;
    let result = [];
    while (true) {
        if (cur % num === 0) {
            cur = cur / num;
            result.push(num);
        } else if (cur > num) {
            num++;
        } else {
            break;
        }
    }
    return result;
}

console.log(factor(30))  // [2,3,5]