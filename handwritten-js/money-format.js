// 格式化金额为千分位

function formatMoney(number) {
    if (!['number', 'string'].includes(typeof number)) {
        throw new Error('Invalid money')
    }
    number += ''
    const [integer, decimal = ''] = number.split('.')
    reverseNumberArr = integer.split('').reverse()
    const temp = []
    for (let i = 0; i < reverseNumberArr.length; i++) {
        temp.push(reverseNumberArr[i])
        if (reverseNumberArr[i + 1] && (i + 1) % 3 === 0) {
            temp.push(',')
        }
    }
    return temp.reverse().join('') + '.' + (decimal || '')
}

console.log(formatMoney('1267.890'))