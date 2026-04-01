const steamrollArray = (arr) => {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        /* Jika elemen adalah array, panggil fungsi lagi (rekursif) */
        if (Array.isArray(arr[i])) {
            /* Gabungkan hasil rekursif ke result */
            result = result.concat(steamrollArray(arr[i]))
        } else {
            /* Jika bukan array, langsung tambahkan  */
            result.push(arr[i])
        }
    }
    return result
}

console.log(steamrollArray([1, [2], [3, [[4]]]])) // Output: [1, 2, 3, 4]