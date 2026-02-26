const titleCase = (title) => {
    /* Ubah semua huruf menjadi kecil */
    const lowerTitle = title.toLowerCase();

    /* Pastikan string menjadi array kata */
    const words = lowerTitle.split(' ');

    /* Proses setiap kata */
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        /* kalau kata tidak kosong */
        if (word.length > 0) {
            /* Huruf pertama kapital + sisa huruf */
            words[i] = word[0].toUpperCase() + word.slice(1);
        }
    }
    return words.join(' ');
}
console.log(titleCase('hello world')); // Hello World