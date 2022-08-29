const input = [
    { id: 1, name: '1', pid: 0 },
    { id: 2, name: '1-1', pid: 1 },
    { id: 3, name: '1-2', pid: 1 },
    { id: 4, name: '1-2-1', pid: 3 },
    { id: 5, name: '1-2-1-1', pid: 4 },
]

// 1. 递归法
const listToTree = (input) => {
    const result = [];
    for (const i of input) {
        if (i.pid === 0) {
            const item = {
                id: i.id,
                name: i.name
            }
            item.child = getChild(item.id, input);
            result.push(item);
        }
    }
    return result;
}

const getChild = (id, input) => {
    const childs = [];
    for (const item of input) {
        if (item.pid === id) {
            childs.push({
                id: item.id,
                name: item.name,
            })
        }
    }
    // 递归过去子节点的子节点
    for (const child of childs) {
        child.children = getChild(child.id, input);
    }
    return childs;
}

console.log(listToTree(input));



// 2. 利用散列表
const listToTree2 = (input) => {
    const obj = generateObj(input);
    const result = [];
    for (const item of input) {
        if (item.pid === 0) {
            result.push(item);
        } else {
            obj[item.pid].children.push(item);
        }
    }
    return result;
}

const generateObj = (input) => {
    const obj = {};
    for (const item of input) {
        obj[item.id] = item;
        obj[item.id].children = [];
    }
    return obj;
}

console.log(listToTree2(input))