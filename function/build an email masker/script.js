/* Function maskEmail */
const maskEmail = (email) => {
    /* Cari posisi simbole @ */
    const atIndex = email.indexOf('@');
    /* Ambil bagian sebelum @ (local part) */
    const localPart = email.substring(0, atIndex);
    /* Ambil bagian setelah @ (domain) */
    const domain = email.substring(atIndex);

    /* jika local part panjangnya <= 2, tidak perlu masking */
    if (localPart.length <= 2) {
        return localPart + domain;
    }

    /* Ambil karakter pertama dan terakhir */
    const firstChar = localPart[0];
    const lastChar = localPart[localPart.length - 1];

    /* Buat masked part */
    const maskedPart = firstChar + '*'.repeat(localPart.length - 2) + lastChar;

    /* Gabungkan dengan domain */
    return maskedPart + domain;
};

/* varibel email di luar function */
const email = "user@example.com";

/* Memanggil hasil */
console.log(maskEmail(email)); // Output:
