function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

function inheritPrototype(subType, superType) {
    // 创建对象
    var prototype = new Object(superType.prototype);
    // 增强对象
    prototype.constructor = subType;
    // 指定对象
    subType.prototype = prototype;
}

inheritPrototype(SubType, SuperType);
