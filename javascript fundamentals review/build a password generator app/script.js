/* Fungsi generatePassword */
const generatePassword = (length) => {
    /* Karakter yang valid untuk password */
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = '';

    /* Loop sebanyak 'length' kali*/
    for (let i = 0; i < length; i++) {
        /* Pilih index acak dari string 'characters' */
        const randomIndex = Math.floor(Math.random() * chars.length);
        /* Ambil karekter di index tersebut */
        result += chars[randomIndex];
    }
    return result;
}

/* Panggil fungsi dengan panjang 10 (bisa diganti angka lain) */
const password = generatePassword(10);

/* Log hasil dengan format yang diminta */
console.log("Generated password: " + password)