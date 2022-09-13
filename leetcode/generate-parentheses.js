/**
 * 括号生成: https://leetcode.cn/problems/generate-parentheses/
 * 描述: 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 如: 输入：n = 3;  输出：["((()))","(()())","(())()","()(())","()()()"]
 * 思路: 在括号符号中分别添加括号
 */

function generateParenthesis(n) {
    let set = new Set(['()']);
    for (let i = 2; i <= n; i++) {
        let nextSet = new Set();
        for (const k of set) {
            for (let j = 0; j < k.length; j++) {
                nextSet.add(k.slice(0, j) + '()' + k.slice(j))
            }
        }
        set = nextSet
    }
    return [...set]
}

console.log(generateParenthesis(3))  // [ '()()()', '(())()', '()(())', '(()())', '((()))' ]