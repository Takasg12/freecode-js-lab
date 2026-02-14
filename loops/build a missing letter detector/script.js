const fearNotLetter = (str) => {
    /* Loop dari huruf pertama sampai terakhir */
    for (let i = 0; i < str.length - 1; i++) {
        /*  */
        const currentCharCode = str.charCodeAt(i);
        const nextCharCode = str.charCodeAt(i + 1);

        /*Kalau selisihnya lebih dari 1, berarti ada huruf yang hilang  */
        if (nextCharCode - currentCharCode > 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
    return undefined;

}

console.log(fearNotLetter("abcde"))