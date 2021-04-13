function bubble(array) {
    for (let i = array.length; i > 0; i--) {
        for(let j = 0; j < i-1; j++) {
            if(array[j] < array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
let array = [5, 7, 9, 2, 12, 1, 6, 10]
console.log(bubble(array))
