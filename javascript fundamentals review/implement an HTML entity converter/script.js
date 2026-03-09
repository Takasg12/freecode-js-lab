const convertHTML = (str) => {
    /* Buat object yang berisi mapping antara karakter khusus dan entitas HTML */
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }

    /* Ganti replace dengan regex untuk mengganti semua karakter khusus */
    return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}
console.log(convertHTML("Dolce & Gabbana")); // Output: "Dolce &amp; Gabbana"
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Output: "Hamburgers &lt; Pizza &lt; Tacos"