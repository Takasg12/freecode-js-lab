const golfScore = (par, strokes) => {
    /* Hole-in-one! (Selalu jika strokes = 1) */
    if (strokes === 1) {
        return "Hole-in-one!";
    }

    switch (strokes - par) {

        case -2:
        case -3:
        case -4:
            return "Eagle";
        case -1:
            return "Birdie";
        case 0:
            return "Par";
        case 1:
            return "Bogey";
        case 2:
            return "Double Bogey";
        default:
            return "Go Home!";
    }
}

console.log(golfScore(1, 1)); // "Hole-in-one!"
console.log(golfScore(4, 2)); // "Eagle"
console.log(golfScore(2, 4)); // "Double Bogey"