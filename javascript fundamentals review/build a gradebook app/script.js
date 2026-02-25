/* Fungsi Menghitung Rata - Rata */
const getAverage = (value) => {
    let total = 0;

    /* Jumlah semua nilai */
    for (let i = 0; i < value.length; i++) {
        total += value[i];
    }
    /* Bagi Dengan Jumlah Data */
    return total / value.length;
}

/* Fungsi Menentukan Grade */
const getGrade = (score) => {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

/* Fungsi Untuk Mengecek Apakah Nilai Lulus / Tidak  */
const hasPassingGrade = (score) => {
    const grade = getGrade(score);
    return grade !== "F"; /* Lulus jika tidak F */
}

/* Fungsi Untuk Pesan Lengkap */
const studentMsg = (totalScore, studentScore) => {

    /* Hitung Rata - rata kelas */
    const classAvarage = getAverage(totalScore)

    /* Dapatkan Nilai Murit */
    const grade = getGrade(studentScore)

    /* Cek Apakah Lulus Atau Tidak */
    const passed = hasPassingGrade(studentScore)

    /* Buat Pesan */
    if (passed) {
        return `Class average: ${classAvarage}. Your grade: ${grade}. You passed the course.`
    } else {
        return `Class average: ${classAvarage}. Your grade: ${grade}. You failed the course.`
    }
}

console.log(studentMsg([90, 80, 100, 90], 100)); /* Contoh Penggunaan */


