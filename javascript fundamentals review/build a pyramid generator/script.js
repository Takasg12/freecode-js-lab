const pyramid = (char, rows, isReversed) => {
    let result = "\n";

    if (isReversed) {
        for (let i = rows; i >= 1; i--) {
            result += " ".repeat(rows - i);
            result += char.repeat(2 * i - 1);
            result += "\n";
        }
    } else {
        for (let i = 1; i <= rows; i++) {
            result += " ".repeat(rows - i);
            result += char.repeat(2 * i - 1);
            result += "\n";
        }
    }
    return result;
}

console.log(pyramid("o", 4, false));
