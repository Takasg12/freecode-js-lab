const spinalCase = (str) => {
    return str
        .replace(/_/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .toLowerCase()
        .replace(/\s+/g, '-')
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase('thisIsSpinalTap'))