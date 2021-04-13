let str = 'http://www.test.com/answer/44444?int=1&invite=true';

let a = {}
str.match(/(\?|&)[\w|=]+/g).forEach(item => {
    let res = item.substr(1).split('=')
    a[res[0]] = res[1]
})
// str.split('?')[1].split('&').forEach(item => {
//     let res = item.split('=')
//     a[res[0]] = res[1]
// });

console.log(a)
