/**
 * 定义：通过包装函数，统一接口定义
 * 简介：适配器模式主要用来解决两个已有接口之间不匹配的问题，它不考虑这些接口是怎样实 现的，也不考虑它们将来可能会如何演化。
 * 适配器模式不需要改变已有的接口，就能够 使它们协同作用。
 */

class Plug {
    getName() {
        return '港版插头'
    }
}

class Target {
    constructor() {
        this.plug = new Plug()
    }
    getName() {
        return this.plug.getName() + ' 适配器转二脚插头'
    }
}

let target = new Target()
target.getName() // 港版插头 适配器转二脚插头


