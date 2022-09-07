/**
 * 问题: 业务需求中经常有只需要请求一次, 以防止用户重复点击重复触发请求. 连续触发时只执行一次
 * 常见解决方案:
 * 1. 在 response 返回之前添加 loading, 阻止用户重复点击
 * 2. 使用防抖和节流间接规避
 */

/**
 * 新方法, 通用性更高
 * 思想: 维护一个 list 存放 promise 请求, 根据请求参数和路径判断请求是否重复, 重复返回当前 promise, 否则添加到 list 
*/

const httpRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`success, Date: ${Date.now()}`)
        }, 1000)
    })
}

let handleList = []
const httpRequestHandler = (url, requestBody = {}) => {
    const sameRequest = handleList.find((_) => _.url === url && JSON.stringify(_.requestBody) === JSON.stringify(requestBody))
    if (sameRequest) {
        console.log('same request')
        return sameRequest.handle
    }
    const handle = new Promise((resolve, reject) => {
        httpRequest()
            .then((value) => resolve(value))
            .catch((reason) => reject(reason))
            .finally(() => {
                handleList = handleList.filter((_) => _.url !== url || JSON.stringify(_.requestBody) !== JSON.stringify(requestBody))
            })
    })
    handleList.push({ url, requestBody, handle });
    return handle;
}

const body = {
    name: 'hakuna'
}
httpRequestHandler('/url1', body).then((res) => {
    console.log(`handleList：`, handleList)
})

httpRequestHandler('/url1', body).then((res) => {
    console.log(`handleList：`, handleList)
    setTimeout(() => {
        console.log(`done`, handleList)  // []
    }, 100)
})