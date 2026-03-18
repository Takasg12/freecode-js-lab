const getIndexToIns = (arr, num) => {
    /* sort array terlebih dahulu (urutkan) */
    const sortedArr = arr.sort((a, b) => a - b)

    /* cari index pertama di mana num <= elemen array */
    const index = sortedArr.findIndex(element => element >= num)

    /* kalau tidak ketemu (semua elemen < num), return panjang array*/
    return index === -1 ? sortedArr.length : index
}

console.log(getIndexToIns([20, 56, 89, 100], 101))
