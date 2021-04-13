function deepClon(obj) {
    // 过滤一些特殊情况
    if(obj === null) return null;
    if(typeof obj !== "object") return obj;
    if (typeof window !== 'undefined' && window.JSON) { // 浏览器环境下 并支持window.JSON 则使用 JSON
        return JSON.parse(JSON.stringify(obj));
    }
    if(obj instanceof RegExp) { // 正则
        return new RegExp(obj);
    }
    if(obj instanceof Date) { // 日期
        return new Date(obj);
    }
    // let newObj = {}
    // let newObj = new Object()
    // let newObj = new obj.constructor; // 不直接创建空对象的目的：克隆的结果和之前保持所属类  =》 即能克隆普通对象，又能克隆某个实例对象
    // for(let key in obj) {
    //     if(obj.hasOwnProperty(key)) {
    //         newObj[key] = deepClone(obj[key]);
    //     }
    // }
    let newObj = obj.constructor === Array ? [] : {};
    for(let key in obj) {
       newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
    return newObj;
}


function deepClone(obj) {
    function isObject(o) {
        return (typeof o === 'object' || typeof o === 'function') && o !== null
    }

    if (!isObject(obj)) {
        throw new Error('非对象')
    }

    let isArray = Array.isArray(obj)
    let newObj = isArray ? [...obj] : { ...obj }
    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    })

    return newObj
}
