/**
 * 定义: trim() 返回一个从两头去掉空格的字符串, 并不影响原字符串本身
 * 语法: string.trim()
 * 返回值: 一个代表调用字符串两端去掉空白的新字符串
 */

// 正则
String.prototype.myTrim = function () {
    if (!this instanceof String) {
        throw new Error('SyntaxError');
    }
    const reg = /^\s*|\s*$/g;
    // this 指向: String{}
    return this.replace(reg, '');
}

/**
 * string.search() 执行正则表达式和 String 对象之间的一个搜索匹配
 * 返回值: 如果匹配成功, 返回正则表达式在字符串中首次匹配到的索引, 否则, 返回-1
 * 
 * \S: 匹配任何非空白字符
 * \s: 匹配任何空白字符
 * 
 * substring() 返回一个字符串在开始索引和结束索引之间的一个子集, 或从开始索引到结束末尾的一个子集
 * 返回值: 包含给定字符的指定部分的新字符串
 */

// 字符串: 查找第一个不是空格的字符和最后一个不是空格的字符, 截取中间内容
String.prototype.myTrim2 = function () {
    if (!this instanceof String) {
        throw new Error('SyntaxError')
    }
    let startIndex = Math.max(this.search(/\S/), 0)
    let endIndex = this.search(/\s*$/)
    return this.substring(startIndex, endIndex)
}


// 测试用例
' Hello World '.myTrim()  // 'Hello World'
' Hello World '.myTrim2() // 'Hello World'