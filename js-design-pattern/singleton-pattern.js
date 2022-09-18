// 单例模式: 在内存中只创建一次对象的设计模式; 并提供一个可以访问实例的全局访问点

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

// 使用 es module
const person1 = new Person('Bod');
export default person1;
// 调用
import person1 from './test.js';
console.log(person1.getName())

// --------------------------------

// 不使用 es module
const person2 = null;
function getPerson() {
    if (person2 === null) {
        person2 = new Person('Bod');
    }
    return person2
}

function main() {
    console.log(getPerson().getName());  // Bob
    console.log(getPerson().getName());  // Bob
}

main();
