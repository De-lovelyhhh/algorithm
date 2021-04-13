/**
 * 定义：给对象动态地增加职责的方式称为装 饰者（decorator）模式
 * 简介：装饰者模式能够在不改 变对象自身的基础上，在程序运行期间给对象 动态地添加职责。
 * 跟继承相比，装饰者是一种 更轻便灵活的做法（超类和子类之间存在强耦合性，当超类改变时，子类也会随之 改变）
 */

var Plane = function () {
    this.plane = plane;
}

Plane.prototype.fire = function () {
    console.log('发射子弹');
}

var MissileDecorator = function (plane) {
    this.plane = plane;
}

MissileDecorator.prototype.fire = function () {
    this.plane.fire();
    console.log('两侧发射导弹');
}

var plane = new Plane();
plane = new MissileDecorator(plane);
plane.fire();
