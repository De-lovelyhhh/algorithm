/**
 * 定义：当直接访问一个对象不方便或者不满足需要时，为其提供一个替身对象来控制对这个对象的访问
 * 简介：代理模式是一种非常有意义的模式，在我们日常开发中有许多常用功能都可以通过代理模式实现的，
 * 例如 防抖动函数（debounce 常用于控制用户输入后回调函数触发的时机），
 * 节流函数（throttle 常用于控制resize、scroll等事件的触发频率），下面我们实现一个简单的节流函数
 */

var throttle = function (fn, interval) {
    var firstTime, timer
    return function () {
        var _this = this
        if(!firstTime) {
            fn.apply(this, arguments)
            firstTime = true
        }

        if (!timer) {
            timer = setTimeout(function() {
                fn.apply(_this, arguments)
                timer = null
            }, interval);
        }
    }
}

var onScroll = function () {
    console.log('onScroll', Date.now())
}
var throttleOnScroll = throttle(onScroll, 2000)

setInterval(throttleOnScroll, 300) // 每2秒执行一次onScroll函数
