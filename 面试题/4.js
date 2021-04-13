// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
// const arr=[1, [3, [2, 3, [6, 5,3,3,3]]]];

function flatter(arr) {
    return [...new Set(arr.flat(3))].sort()
}
let arr=[1, [3, [2, 3, [6, 5,3,3,3]]]];
console.log(flatter(arr))
