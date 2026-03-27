const destroyer = (arr, ...valuesTorRemove) => {
    /* valuesTorRemove adalah array berisi semua argumen setelah array */
    /* filter arr, hanya ambil elemen yang TIDAK ada di valuesTorRemove  */
    return arr.filter(item => !valuesTorRemove.includes(item))
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
    "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))

console.log(destroyer([5, 3, 6, 3, 8, 9], 8, 5))