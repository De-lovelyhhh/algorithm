/**
 * 定义：将一组行为抽象为对像并提供执行、撤销等方法，解决它与调用者的之间的耦合关系
 * 简介：命令模式是对简单优雅的模式之一，其中“命令”指的是一个执行某些特定事情的指令。
 * 该模式适用于需要向某些对象发出请求，但不知道接受者是谁，也不知道要执行哪些操作。
 * 例如我们平时去饭店点菜是我们并不需要知道这道菜是谁做的怎么做的，我们只需要请服务员把需求写在订单上就可以了。
 */
var client = { // 顾客（命令发出者）
    name: '铁蛋儿'
}
var cook = { // 厨师（命令发执行者）
    makeFood: function (food) {
        console.log('开始做：', food)
    },
    serveFood: function (client) {
        console.log('上菜给：', client.name)
    }
}

function OrderCommand(receiver, food) { // 命令对象
    this.receiver = receiver
    this.food = food
}

OrderCommand.prototype.execute = function (cook) { // 提供执行方法
    cook.makeFood(this.food)
    cook.serveFood(this.receiver)
}

var command = new OrderCommand(client, '宫保鸡丁')
command.execute(cook) // 开始做：宫保鸡丁； 上菜给铁蛋儿
