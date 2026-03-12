const dropElements = (arr, func) => {
    /* cari index pertama yang memenuhi kondisi */
    let firsIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            firsIndex = i;
            break; /* Berhenti setelah menenemukan yang pertama */
        }
    }

    /* Kalau tidak ada yang memenuhi, return array kosong */
    if (firsIndex === -1) {
        return [];
    }

    /* Kebalikan elemen dari firstIndex samapi akhir */
    return arr.slice(firsIndex);
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })); /* [3, 4] */