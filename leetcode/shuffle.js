/**
 * 洗牌算法
 * 思想: 每次取一个数组长度 * 随机值, 作为索引, 在新数组中创建该值, 在旧数组中删除
 */

function shuffle(arr) {
    let result = [];
    while (arr.length > 0) {
        const randomVal = Math.floor(Math.random() * arr.length);
        result.push(arr[randomVal]);
        arr.splice(randomVal, 1);
    }
    return result;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]))