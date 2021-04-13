let arr = [3, 45, 16, 8, 65, 15, 36, 22, 19, 1, 96, 12, 56, 12, 45];
let len = arr.length;
let heapSort = arr => {
    // 构建大顶堆
    for (let i = Math.trunc(len / 2 - 1); i >= 0; i--) {
        heapify(arr, i, len);
    }
    // 构建完成之后，对剩余元素继续构建大顶堆
    for (let i = Math.floor(arr.length - 1); i > 0; i--) {
        // 将根元素（最小或最大元素）与最后一个元素交换
        swap(arr, 0, i);
        // 继续进行构建大顶堆
        heapify(arr, 0, i);
    }
    console.log(arr);
};
let swap = (arr, i, j) => {
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设结点 i 以下的子堆已经是一个大顶堆，heapify 函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
// 后面将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 heapify 操作，所以就满足了结点 i 以下的子堆已经是一大顶堆
let heapify = (arr, i, length) => {
    let temp = arr[i];
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
        if (j + 1 < length && arr[j] > arr[j + 1]) {
            j++;
        }
        if (temp > arr[j]) {
            swap(arr, i, j);
            i = j;
        } else {
            break;
        }
    }
};
heapSort(arr);

/*
function heap(array) {
    checkArray(array);
    // 将最大值交换到首位
    for (let i = 0; i < array.length; i++) {
        heapInsert(array, i);
    }
    let size = array.length;
    // 交换首位和末尾
    swap(array, 0, --size);
    while (size > 0) {
        heapify(array, 0, size);
        swap(array, 0, --size);
    }
    return array;
}

function heapInsert(array, index) {
    // 如果当前节点比父节点大，就交换
    while (array[index] > array[parseInt((index - 1) / 2)]) {
        swap(array, index, parseInt((index - 1) / 2));
        // 将索引变成父节点
        index = parseInt((index - 1) / 2);
    }
}
function heapify(array, index, size) {
    let left = index * 2 + 1;
    while (left < size) {
        // 判断左右节点大小
        let largest =
            left + 1 < size && array[left] < array[left + 1] ? left + 1 : left;
        // 判断子节点和父节点大小
        largest = array[index] < array[largest] ? largest : index;
        if (largest === index) break;
        swap(array, index, largest);
        index = largest;
        left = index * 2 + 1;
    }
}*/
