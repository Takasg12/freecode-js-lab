const sumFibs = (num) => {
    let prev = 1;
    let current = 1;
    let sum = 2;  // 1 + 1

    while (current <= num) {
        // Kalau current ganjil, tambahkan (tapi current sudah dijumlah di awal)
        // Kita akan tambahkan angka berikutnya

        let next = prev + current;

        if (next > num) break;

        if (next % 2 === 1) {
            sum += next;
        }

        prev = current;
        current = next;
    }

    return sum;
}

console.log(sumFibs(1)); // 2
console.log(sumFibs(1000));