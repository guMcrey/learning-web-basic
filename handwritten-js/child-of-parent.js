// 写一个事件代理函数, 需判断 child 是 parent 的子节点

function proxy(event, cb, parent, child) {
    parent[event] = function (e) {
        if (parent.contains(child) && e.target === child) {
            cb.call(this)
        }
    }
}