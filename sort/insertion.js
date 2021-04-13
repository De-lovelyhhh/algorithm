function insertion(array) {
    if (!checkArray(array)) return
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--)
            swap(array, j, j + 1);
    }
    return array;
}
