/**
 * 定义：分离事件创建者和执行者，执行方只需订阅感兴趣的事件发生点。减少对象间的耦合关系，新的订阅者出现时不必修改原有代码逻辑
 *
 * 简介：发布订阅模式又叫观察者模式，它定义了对象间一种一对多的关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。
 * 发布订阅模式在我们日常开发中应用十分广泛，如浏览器的dom事件通知机制(document.addEventListener)，
 * 以及vue框架中数据改变时自动刷新dom的双向绑定机制都是基于该模式
 * @constructor
 */

var Event = function () {
    var clientList = {} // 订阅者数组

    this.listen = function (key, cb) { // 订阅方法
        clientList[key] = clientList[key] || []
        clientList[key].push(cb)
    }

    this.remove = function (key, cb) { // 取消订阅
        var fns = clientList[key]
        if(!cb) {
            clientList[key] = []
        }else if(fns && fns.length) {
            clientList[key] = fns.filter(fn => fn !== cb)
        }
    }

    this.trigger = function () { // 通知订阅者
        var key = Array.prototype.shift.call(arguments)
        var args = arguments
        var fns = clientList[key]
        var _this = this

        if(fns && fns.length) {
            fns.myEach(function(fn) {
                fn.apply(_this, args)
            })
        }
    }
}

var event = new Event()

event.listen('phone', function getPhone() {
    Array.prototype.unshift.call(arguments, '有个挨千刀的半夜打电话来了他是：')
    console.log.apply(this, arguments)
})

event.trigger('phone', '大狗子') // 有个挨千刀的半夜打电话来了他是：大狗子
event.trigger('phone', '二狗子') // 有个挨千刀的半夜打电话来了他是：二狗子
