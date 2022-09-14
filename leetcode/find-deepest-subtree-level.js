/**
 * 题目: 查找以下数据结构中层级最深的节点, 并返回它属于第几层、属于哪个分支
 * 思路: 上下文(新增的自定义变量, 如 level, pidPath),从父节点获取
 */

const input = [
    {
        "id": "1",
        "childrens": [{
            "id": "12",
            "childrens": []
        }, {
            "id": "13",
            "childrens": [{
                "id": "123",
                "childrens": []
            }]
        }]
    },
    {
        "id": "2",
        "childrens": []
    }
]

function findDeepestNode(input) {
    let deepestLevel = 0
    let deepestPidPath = ''
    function recursion(node) {
        for (let i = 0; i < node.length; i++) {
            node[i].childrens.forEach(val => {
                val.pidPath = node[i].pidPath ? `${node[i].pidPath}-${node[i].id}` : node[i].id
                val.level = node[i].level + 1
                if (val.level > deepestLevel) {
                    deepestLevel = val.level
                    deepestPidPath = val.pidPath
                }
            })
            if (node[i].id && node[i].childrens.length) {
                recursion(node[i].childrens)
            }
        }
    }
    input.forEach((val) => {
        val.level = 1
    })
    recursion(input)
    return {
        level: deepestLevel,
        pidPath: deepestPidPath,
    }
}

console.log(findDeepestNode(input));  // { level: 3, pid: '1-13' }