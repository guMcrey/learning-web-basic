const sleep = (func, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(func())
        }, delay)
    })
}

const consoleStr = (str) => {
    return () => {
        console.log(str)
        return str
    }
}

const doFns = async () => {
    const name = await sleep(consoleStr('hakuna'), 1000)
    const age = await sleep(consoleStr(10), 1000)
    console.log(name, age)
}

doFns()