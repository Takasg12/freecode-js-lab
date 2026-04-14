const galleryItem = document.querySelectorAll('.gallery-item')
const lightbox = document.querySelector('.lightbox')
const lightboxImage = document.getElementById('lightbox-image')
const closeBtn = document.getElementById('close-btn')

galleryItem.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex'
        let fullSizeSrc = item.src.replace('-thumbnail', '')
        lightboxImage.src = fullSizeSrc
    })
})

closeBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    lightbox.style.display = 'none'
})

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'
})

lightboxImage.addEventListener('click', (event) => {
    event.stopPropagation()
})