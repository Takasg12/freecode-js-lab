const diffArray = (arr1, arr2) => {
    /* Filter elemen di arr1 yang TIDAK ada di arr2 */
    const onlyInArr1 = arr1.filter(item => !arr2.includes(item))

    /* Filter elemen di arr2 yang TIDAK ada di arr1 */
    const onlyInarr2 = arr2.filter(item => !arr1.includes(item))

    /* Gabungkan kedua hasil */
    return onlyInArr1.concat(onlyInarr2)
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))