const pairElement = (str) => {
    /* Buat object yang berisi pasangan setiap karakter */
    const pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }
    /* Pisahkan string menjadi array karakter */
    const chars = str.split("");

    /* Buat array hasil */
    const result = [];

    /* Loop untuk setiap karakter */
    for (let i = 0; i < chars.length; i++) {
        const cahar = chars[i];
        /* Buat pasangan : [karakter, pasangan] */
        result.push([cahar, pairs[cahar]]);
    }
    return result;
}

console.log(pairElement("GCG"));