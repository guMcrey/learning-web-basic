/**
 * 出现循环引用的情况: 对象之间相互引用, 对象的属性引用对象本身
 * 循环引用问题: 在旧的浏览器中会造成内存泄露, 随着垃圾回收算法的改进, 目前浏览器可以很好的解决循环引用的问题
 * 
 * https://segmentfault.com/a/1190000040875138
 */


// 判断是否存在 循环引用
function isCyclic(obj) {
    const stackSet = new Set();
    let hasCyclic = false;

    const checkCyclic = () => {
        if (obj && typeof obj !== 'object') {
            return
        }
        if (stackSet.has(obj)) {
            return hasCyclic = true;
        }
        stackSet.add(obj);
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                checkCyclic(obj[key])
            }
        }
        stackSet.delete(obj);
    }
    checkCyclic();
    return hasCyclic;
}


// 测试用例
const obj = { name: 'a' }
obj.child = obj
isCyclic(obj)  // true