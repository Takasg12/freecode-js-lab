const regexPattern = document.getElementById('pattern')
const stringToTest = document.getElementById('test-string')
const testButton = document.getElementById('test-btn')
const testResult = document.getElementById('result')
const caseInsensitiveFlag = document.getElementById('i')
const globalFlag = document.getElementById('g')


const getFlags = () => {
    let flags = ''
    if (caseInsensitiveFlag.checked) flags += 'i'
    if (globalFlag.checked) flags += 'g'
    return flags
}

const removeHighlight = () => {
    const originalText = stringToTest.innerText
    stringToTest.innerHTML = originalText
}

const highlightAndResult = () => {
    const pattern = regexPattern.value
    const flags = getFlags()
    const regex = new RegExp(pattern, flags)
    const text = stringToTest.textContent

    let match
    let matches = []
    let highlighted = text

    if (flags.includes('g')) {
        const allMatches = text.match(regex)
        if (allMatches) {
            matches = allMatches
            highlighted = text.replace(regex, (match) => `<span class="highlight">${match}</span>`)
        } else {
            matches = []
        }
    } else {
        match = regex.exec(text)
        if (match) {
            matches = [match[0]]
            highlighted = text.replace(regex, `<span class="highlight">${match[0]}</span>`)
        } else {
            matches = []
        }
    }

    stringToTest.innerHTML = highlighted

    if (matches.length > 0) {
        testResult.innerText = matches.join(', ')
    } else {
        testResult.innerText = 'no match'
    }

}

testButton.addEventListener('click', () => {
    highlightAndResult()
})