const sumAll = (num) => {
    /* Tentukan angka terkecil dan terbesar */
    const min = Math.min(num[0], num[1]);
    const max = Math.max(num[0], num[1]);

    let total = 0;

    /* loop dari min ke max  */
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
}

console.log(sumAll([1, 4])); // 10