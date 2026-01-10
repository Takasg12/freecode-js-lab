const confirmEnding = (str, ending) => {
    return str.slice(-ending.length) === ending;
}

console.log(confirmEnding("Bastian", "n"));//true
console.log(confirmEnding("Open sesame", "sage"));// false