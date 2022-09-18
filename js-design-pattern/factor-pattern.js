// 工厂函数是一个最后返回值是对象的函数，但它既不是类，也不是构造函数。在JavaScript中，任何函数都可以返回一个对象。但当函数没有使用new关键字时，那它便是一个工厂函数。
// 字面量语法针对单一对象，工厂函数更适合多对象创建

const createUser = ({
    userName = 'Anonymous',
    avatar = 'anon.png'
} = {}) => ({
    userName,
    avatar
});


console.log(
    // { userName: "echo", avatar: 'anon.png' }
    createUser({ userName: 'echo' }),
    // { userName: "Anonymous", avatar: 'anon.png' }
    createUser()
);