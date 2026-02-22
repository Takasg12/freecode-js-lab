const frankenSplice = (arr1, arr2, index) => {
    /* 1. Membuat salinan arr2 (biar tidak berubah) */
    let newArr = arr2.slice();
    /* 2. Sisipkan arr1 ke newArr di posisi index*/
    newArr.splice(index, 0, ...arr1);
    /* 3.Kembalikan nilai newArr */
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]

/* Note */
// Step 1: result = [4, 5] (salinan arr2)
// Step 2: result.splice(1, 0, ...arr1)
//         - index = 1 (posisi sisip)
//         - 0 = hapus 0 elemen
//         - ...arr1 = 1,2,3 (yang disisipkan)
//         Hasil: [4, 1, 2, 3, 5]

// Step 3: return [4, 1, 2, 3, 5]

