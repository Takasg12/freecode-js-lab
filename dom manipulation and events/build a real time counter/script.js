const textInput = document.getElementById('text-input')
const charCount = document.getElementById('char-count')

const updateCharCount = () => {
    let text = textInput.value
    let length = text.length

    if (length > 50) {
        text = text.substring(0, 50)
        textInput.value = text
        length = 50
    }

    charCount.textContent = `Character Count: ${length}/50`

    if (length === 50) {
        charCount.classList.add('red')
    } else {
        charCount.classList.remove('red')
    }

}
textInput.addEventListener('input', updateCharCount)
updateCharCount()