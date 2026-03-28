const whatIsInAName = (collection, source) => {
    //Ambil semua properti dari source
    const sourceKeys = Object.keys(source)

    //Filter collection, ambil hanya objek yang memiliki semua properti source dengan nilai yang sama
    return collection.filter(obj => {
        //Cek setiap key di source
        return sourceKeys.every(key => {
            //Objek harus memiliki properti key dan nilainya sama dengan source
            return obj.hasOwnProperty(key) && obj[key] === source[key]
        })
    })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))