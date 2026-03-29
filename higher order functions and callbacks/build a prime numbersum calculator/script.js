const sumPrimes = (num) => {
    let total = 0;

    /* Loop dari 2 sampai num */
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }
    return total;
}

/* Fungsi untuk mengecek apakah suatu angka prima */
const isPrime = (n) => {
    /* Bilangan kurang dari 2 bukan prima */
    if (n < 2) return false

    /* Cek apakah n habis dibagi angka selain 1 dirinya sendiri */
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false

        }
    }
    return true;
}

console.log(sumPrimes(10)); // 17