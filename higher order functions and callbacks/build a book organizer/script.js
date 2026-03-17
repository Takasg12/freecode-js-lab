const sortByYear = (book1, book2) => {
    if (book1.releaseYear < book2.releaseYear) {
        return -1 /* book1 lebih kecil -> book1 diurukan sebelum book2 */
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1 /* book1 lebih besar -> book1 diurukan setelah book2 */
    } else {
        return 0 /* book1 dan book2 memiliki tahun terbit yang sama */
    }
}

/* Array books  */
const books = [
    {
        title: "Atomic Habits",
        authorName: "James Clear",
        releaseYear: 2018
    },
    {
        title: "The Psychology of Money",
        authorName: "Morgan Housel",
        releaseYear: 2020
    }, {
        title: "Deep Work",
        authorName: "Cal Newport",
        releaseYear: 2016
    },
    {
        title: "The 7 of Highly Effective People",
        authorName: "Stephen covey",
        releaseYear: 1989
    }
]

/* Tentukan tahun batasan (Misalnya: buku sebelum/tahun 2018) */
const yearLimit = 2018

/* Buat array filteredBooks */
const filteredBooks = books.filter(book => book.releaseYear <= yearLimit)

/* urutkan filteredBooks menggunakan sort dengan callback (sortByYear)*/
const sortedFilteredBooks = filteredBooks.sort(sortByYear)

console.log("Buku sebelum sorting:")
console.log(filteredBooks)

console.log("\n Buku setelah sorting ( dari tahunterkecil ke terbesar): ")
console.log(sortedFilteredBooks)

console.log("\nDaftar buku (terurut berdasarkan tahun):");
sortedFilteredBooks.forEach(book => {
    console.log(`${book.title} (${book.authorName}) - ${book.releaseYear}`);
});