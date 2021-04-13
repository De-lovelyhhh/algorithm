function sum(...a) {
    let res = 0;
    a.forEach(item => {
        res += item;
    })
    // const tmp = function (...args) {
    //     res = args.reduce((a,b)=> a+=b, 0)
    //     return tmp;
    // }
    // tmp.toString = tmp.valueOf = function () {
    //     return res
    // };
    // return tmp
    return function F() {
        if (!arguments) {
            return res
        } else {
            sum(res, ...arguments)
        }
        return res
    }
}

console.log(sum(1, 2, 3)(4))
