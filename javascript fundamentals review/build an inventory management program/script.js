/* Array inventory kosong */
const inventory = [];

/* Fungsi mencari index produk (case insensitive) */
const findProductIndex = (productName) => {
    /* ubah lowercase agar case insensitive */
    const lowerName = productName.toLowerCase();

    /* Loop mencari produk dengan nama yang sama */
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === lowerName) {
            return i; // Kembalikan index jika ditemukan
        }
    }
    return -1; /* Kalau tidak ditemukan */
}

/* fungsi menambahkan produk  */
const addProduct = (product) => {
    /* product = {name : "FLOUR", qualtity: 5} */

    /* cek apakah produk sudah ada di inventory` */
    const index = findProductIndex(product.name);

    if (index !== -1) {
        /* Produk sudah ada -> tambah quantity  */
        inventory[index].quantity += product.quantity;
        console.log(`${product.name.toLowerCase()} quantity updated`);
    } else {
        /* Produk belum ada -> tambah ke inventory */
        /* Simpan nama dalam lowercase agar konsisten */
        inventory.push({
            name: product.name.toLowerCase(),
            quantity: product.quantity
        })
        console.log(`${product.name.toLowerCase()} added to inventory`)
    }
}

/* Fungsi menghapus / mengurangi produk */
const removeProduct = (productName, quantity) => {
    /* Cari Produk  */
    const index = findProductIndex(productName)
    const lowerName = productName.toLowerCase()

    if (index === -1) {
        /* Produk tidak ditemukan  */
        console.log(`${lowerName} not found`)
        return
    }

    // Produk ditemukan
    const currentQty = inventory[index].quantity;

    if (currentQty < quantity) {
        // Stok tidak cukup
        console.log(`Not enough ${lowerName} available, remaining pieces: ${currentQty}`);
        return;
    }

    // Kurangi stok
    inventory[index].quantity -= quantity;

    if (inventory[index].quantity === 0) {
        // Kalau stok habis, hapus produk dari inventory
        inventory.splice(index, 1);
        // Tidak perlu log karena produk sudah dihapus
    } else {
        // Log sisa stok
        console.log(`Remaining ${lowerName} pieces: ${inventory[index].quantity}`);
    }
}

console.log(inventory) /* [] */
addProduct({ name: "FLOUR", quantity: 5 })
addProduct({ name: "SUGAR", quantity: 10 })

console.log(inventory)
removeProduct("FLOUR", 2)
console.log(inventory)
removeProduct("SUGAR", 5)
