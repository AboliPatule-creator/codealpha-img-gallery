const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;


images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = 'flex';
    });
});


function showImage() {
    lightboxImg.src = images[currentIndex].src;
}


closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

function filterImages(category) {
    const images = document.querySelectorAll('.gallery-item');

    images.forEach(img => {
        if (category === 'all') {
            img.style.display = 'block';
        } 
        else if (img.classList.contains(category)) {
            img.style.display = 'block';
        } 
        else {
            img.style.display = 'none';
        }
    });
}
