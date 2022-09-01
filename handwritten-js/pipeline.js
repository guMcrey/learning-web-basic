/**
 * Unix 操作系统有一个管道机制 (pipeline), 可以把前一个操作的值传给后一个操作. 管道运算符最大的好处就是可以把嵌套的函数, 写成从左到右的链式表达式
 * 条件: 管道运算符只能传递一个值, 表示它右边的函数必须是一个单参数函数, 如果是多参数函数就必须就行柯里化, 管道运算符对于 await 函数也适用
 * 语法: |>
 * 'hello' |> fn1 |> fn2 |> fn3
 *
 * vue2.x 中的 filter 也是管道的思想
 */

// 使用 reduce 实现管道
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

const pipe = (...functions) => (initialValue) => {
    return functions.reduce((acc, cur) => {
        return cur(acc)
    }, initialValue);
}

const fn1 = pipe(double, triple);
const fn2 = pipe(double, triple, quadruple)
console.log(fn1(5));  // 3 * (5 + 5) = 30
console.log(fn2(6));  // 4 * 3 * (6 + 6) = 144
