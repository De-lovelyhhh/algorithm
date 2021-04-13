// 现有一个方法，需要通过调用 b 来实现获取 c 的 name 值，请完善该方法
var demo = {
    name:'index',
    c:{
        name: 'cc',
        getName() {

            return this.name
        }
    }
}
let b = demo.c.getName
console.log(b()) // cc
