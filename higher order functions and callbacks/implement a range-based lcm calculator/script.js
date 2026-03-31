const smallestCommons = (arr) => {
    const [min, max] = arr.sort((a, b) => a - b)

    /* Fungsi GCD (FPB) */
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

    /* Fungsi LCM (KPK) */
    const lcm = (a, b) => (a * b) / gcd(a, b)

    let result = min
    for (let i = min + 1; i <= max; i++) {
        result = lcm(result, i)
    }
    return result
}

console.log(samllestCommons([1, 5])) // 60