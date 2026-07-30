const myReplace = (sentence, wordToReplace, replacementWord) => {
    /* Cek apakah huruf pertama kata yang diganti adalah huruf kapital */
    const isUpperCase = wordToReplace[0] === wordToReplace[0].toUpperCase();

    /* Jika huruf pertama kapital, maka kata pengganti juga harus kapital */
    if (isUpperCase) {
        replacementWord = replacementWord[0].toUpperCase() + replacementWord.slice(1);
    } else {
        /* Jika huruf pertama kecil, maka kata pengganti juga harus kecil */
        replacementWord = replacementWord[0].toLowerCase() + replacementWord.slice(1);
    }
    /* Ganti kata dalam kalimat dan kembalikan hasilnya */
    return sentence.replace(wordToReplace, replacementWord)
}

console.log(myReplace("Let us go to the store", "store", "mall"))