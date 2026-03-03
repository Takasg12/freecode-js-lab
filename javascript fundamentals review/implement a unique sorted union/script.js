const uniteUnique = (...arrays) => {
    /* ...arrays = menangkap semua argumen sebagai array
    Contoh: uniteUnique(array1, array2, array3)
    -> arrays = [array1, array2, array3] */

    let result = [];
    /* loop setiap array yang di berikan  */
    for (let i = 0; i < arrays.length; i++) {
        /* loop setiap elemen dalam array tersebut */
        for (let j = 0; j < arrays[i].length; j++) {
            const currentValue = arrays[i][j];

            /* kalau nilai belum ada di result, tambahkan */
            if (!result.includes(currentValue)) {
                result.push(currentValue);
            }
        }
    }
    return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
