const translatePigLatin = (str) => {
    // Daftar huruf vacal
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    //  Case 1 : Jika Huruf pertama vokal
    if (vowels.includes(str[0])) {
        return str + 'way'
    }

    // Cari indeks huruf vokal pertama dalam kata
    let firstVowelIndex = -1;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            firstVowelIndex = i;
            break;
        }
    }

    // Case 2: Jika tidak ada vocal sama sekali
    if (firstVowelIndex === -1) {
        return str + 'ay'
    }

    // Case 3: Jika ada vocal di tengah / akhir
    let consonants = str.slice(0, firstVowelIndex)
    let rest = str.slice(firstVowelIndex)
    return rest + consonants + 'ay'
}

console.log(translatePigLatin("california"))
console.log(translatePigLatin("paragraphs"))
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("eight"))

