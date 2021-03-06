
const PENDING = "pending"
const RESOLVE = "resolve"
const REJECT = "reject"

function MyPromise(fn) {
    const that = this
    that.status = PENDING // MyPromise 内部状态
    that.value = null // 传入 resolve 和 reject 的值
    that.resolveCallbacks = [] // 保存 then 中resolve的回调函数
    that.rejectCallbacks = [] // 保存 then 中reject的回调函数

    // resolve 函数 Promise内部调用 resolve 函数 例:new MyPromise((resolve,reject)=>{resolve(1)})
    function resolve(val) {
        if (that.status === PENDING) {
            that.status = RESOLVE
            that.value = val
            that.resolveCallbacks.forEach(cb => cb(that.value))
        }
    }
    // reject 函数 Promise内部调用的 reject 函数 例:new MyPromise((resolve,reject)=>{reject(1)})
    function reject(val) {
        if (that.status === PENDING) {
            that.status = REJECT
            that.value = val
            that.rejectCallbacks.forEach(cb => cb(that.value))
        }
    }
    // 调用传入 MyPromise 内的方法 例:new MyPromise((resolve,reject)=>{})   fn=(resolve,reject)=>{}
    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
// 在原型上添加then方法
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this
    // 判断传入的是否为函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : r => {
        throw r
    }

    //如果 Promise 内部存在异步代码，调用then方法时，此时 promise 内部还是 PENDING 状态，将 then 里面的函数添加进回调数组，当异步处理完成后调用 MyPromise 内部的 resolve 或者 reject 函数
    if (that.status === PENDING) {
        that.resolveCallbacks.push(onFulfilled)
        that.rejectCallbacks.push(onRejected)
    }

    // 当 Promise 内部的状态已经为 resolve,则调用 then 里面的函数并传递值
    if (that.status === RESOLVE) {
        onFulfilled(that.value)
    }

    // 当 Promise 内部状态为 reject,则调用then里的回调函数并传递值
    if (that.status === REJECT) {
        onRejected(that.value)
    }
}

// 自己实现的Promise
new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject(1)
    }, 0)
}).then(res => {
    console.log(res)
}, err => {
    console.log('err')
})
