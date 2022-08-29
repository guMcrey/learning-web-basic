const input = [
    {
        "id": 1,
        "name": "1",
        "children": [
            {
                "id": 2,
                "name": "1-1",
                "children": []
            },
            {
                "id": 3,
                "name": "1-2",
                "children": [
                    {
                        "id": 4,
                        "name": "1-2-1",
                        "children": [
                            {
                                "id": 5,
                                "name": "1-2-1-1",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const treeToList = (input) => {
    const result = [];
    let pid = 0;
    const recursion = (list) => {
        for (const item of list) {
            result.push({ ...item, pid })
            if (item.children && item.children.length) {
                pid = item.id
                recursion(item.children)
            }
        }
    }
    recursion(input)
    return result.map((val) => ({ id: val.id, name: val.name, pid: val.pid }))
}

console.log(treeToList(input))
// [
//     { id: 1, name: '1', pid: 0 },
//     { id: 2, name: '1-1', pid: 1 },
//     { id: 3, name: '1-2', pid: 1 },
//     { id: 4, name: '1-2-1', pid: 3 },
//     { id: 5, name: '1-2-1-1', pid: 4 }
//  ]