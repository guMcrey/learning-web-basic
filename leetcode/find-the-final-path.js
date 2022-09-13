/**
 * 求最终路径
  cd .
  cd ..
  cd /a/b/c/../../ -> /a
  cd /a/b/c/../././././../ -> /a
 * 思想: 利用数组模拟栈, 字母时 push, 不是字母时 pop
 */

function urlTargetPath(str) {
    const stack = [];
    const strArr = str.split('/')

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '..') {
            stack.pop();
        } else if (strArr[i] === '.') {
            continue;
        } else {
            stack.push(strArr[i]);
        }
    }
    if (stack.length === 0) {
        return '/'
    }
    let res = '/'
    res += stack.join('')
    return res
}

const s = urlTargetPath('/a/b/c/../././././../')    // '/a'
console.log(s);