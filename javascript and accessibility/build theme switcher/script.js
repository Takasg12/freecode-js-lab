const themeButton = document.getElementById('theme-switcher-button')
const themeDropdown = document.getElementById('theme-dropdown')
const statusMessage = document.querySelector('[aria-live="polite"]')

const themes = [
    {
        name: 'light',
        message: 'Light theme activated! Bright and clean mode.'
    },
    {
        name: 'dark',
        message: 'Dark theme activated! Easy on the eyes.'
    }
]

themeButton.addEventListener('click', () => {
    const isOpen = themeDropdown.hasAttribute('hidden')

    if (isOpen) {
        themeDropdown.removeAttribute('hidden')
        themeButton.setAttribute('aria-expanded', 'true')
    } else {
        themeDropdown.setAttribute('hidden', '')
        themeButton.setAttribute('aria-expanded', 'false')
    }
})

document.querySelectorAll('[role="menuitem"]').forEach(item => {
    item.addEventListener('click', () => {
        const themeName = item.textContent.toLowerCase()
        const theme = themes.find(t => t.name === themeName)

        if (theme) {
            document.body.className = `theme-${theme.name}`
            statusMessage.textContent = theme.message
        }

        themeDropdown.setAttribute('hidden', '')
        themeButton.setAttribute('aria-expanded', 'false')
    })
})