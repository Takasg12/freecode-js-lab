const textInput = document.getElementById('text-input')
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result')

const cleanString = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '')
}

checkBtn.addEventListener('click', () => {
    if (textInput.value === '') {
        alert('Please input a value')
        return;
    }

    const cleaned = cleanString(textInput.value)
    const reversed = cleaned.split('').reverse().join('')


    if (cleaned === reversed) {
        result.textContent = textInput.value + ' is a palindrome'
    } else {
        result.textContent = textInput.value + ' is not a palindrome'
    }
})

